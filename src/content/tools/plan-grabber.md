---
title: VATSIM Flight Plan Grabber
description: Look up a live VATSIM callsign and copy its flight plan in a controller-friendly format.
updated: '2026-08-18T00:00:00'
hidden: false
---

<div class="mb-6 rounded-lg border border-yellow-400/50 bg-yellow-950/20 p-5">
  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Controller Reference Tool</p>
  <p class="mt-2 text-sm leading-6 text-yellow-200">Looks up publicly available, live VATSIM pilot data. Confirm the flight plan with the pilot when operational accuracy matters.</p>
</div>

<div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
  <div class="border-b border-[var(--control-line)] px-5 py-4">
    <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">VATSIM Flight Plan Grabber</p>
    <p class="mt-1 text-sm text-slate-400">Enter an online pilot's callsign to create a copy-ready flight-plan line.</p>
  </div>

  <div class="p-5">
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Callsign</span>
      <div class="flex flex-col gap-3 sm:flex-row">
        <input
          id="plan-grabber-callsign"
          type="text"
          placeholder="FDX904"
          autocomplete="off"
          spellcheck="false"
          class="min-w-0 flex-1 border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
        />
        <button
          id="plan-grabber-lookup"
          type="button"
          class="border border-[var(--control-blue)] bg-[var(--control-blue)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--control-blue-bright)]"
        >
          Look Up
        </button>
      </div>
    </label>

  </div>
</div>

<div id="plan-grabber-error" class="mt-6 hidden border border-red-900/50 bg-red-950/20 p-5" role="alert">
  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Lookup Unavailable</p>
  <p id="plan-grabber-error-text" class="mt-2 text-sm leading-6 text-red-200"></p>
</div>

<div id="plan-grabber-result" class="mt-6 hidden space-y-5">
  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--control-line)] px-5 py-4">
      <div>
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">Copy-ready Flight Plan</p>
        <p id="plan-grabber-updated" class="mt-1 text-sm text-slate-400"></p>
      </div>
      <div class="flex flex-wrap gap-3">
        <button
          id="plan-grabber-copy"
          type="button"
          class="inline-flex items-center justify-center border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"
        >
          Copy
        </button>
        <a
          id="plan-grabber-validator"
          href="/tools/ifr-plan-validator"
          class="inline-flex items-center justify-center border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white no-underline"
        >
          Open Validator
        </a>
      </div>
    </div>
    <div class="p-5">
      <output
        id="plan-grabber-line"
        class="block break-words border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-100"
      ></output>
      <p class="mt-3 text-xs leading-5 text-slate-500">
        Format: CALL TYPE/EQ ARR FL RTE
      </p>
    </div>

  </div>
</div>

<script>
(function () {
  function initFlightPlanGrabber() {
    const callsignInput = document.getElementById("plan-grabber-callsign");
    const lookupButton = document.getElementById("plan-grabber-lookup");
    const errorBox = document.getElementById("plan-grabber-error");
    const errorText = document.getElementById("plan-grabber-error-text");
    const resultBox = document.getElementById("plan-grabber-result");
    const updatedText = document.getElementById("plan-grabber-updated");
    const flightPlanOutput = document.getElementById("plan-grabber-line");
    const copyButton = document.getElementById("plan-grabber-copy");
    const validatorLink = document.getElementById("plan-grabber-validator");

    /*
     * If the page renderer has not finished inserting the tool,
     * do not attempt to attach events or modify elements.
     */
    if (
      !callsignInput ||
      !lookupButton ||
      !errorBox ||
      !errorText ||
      !resultBox ||
      !updatedText ||
      !flightPlanOutput ||
      !copyButton ||
      !validatorLink
    ) {
      console.warn("VATSIM Flight Plan Grabber: required elements not found.");
      return;
    }

    const VATSIM_DATA_URL =
      "https://data.vatsim.net/v3/vatsim-data.json";

    function normalise(value) {
      return String(value || "").trim().toUpperCase();
    }

    function showError(message) {
      errorText.textContent = message;
      errorBox.classList.remove("hidden");
      resultBox.classList.add("hidden");
    }

    function hideError() {
      errorBox.classList.add("hidden");
    }

    function formatAltitude(value) {
      const altitude = normalise(value);

      if (/^FL\d{2,3}$/.test(altitude)) {
        return altitude;
      }

      if (/^\d+$/.test(altitude)) {
        const feet = Number(altitude);

        return feet >= 18000 && feet % 100 === 0
          ? "FL" + String(feet / 100)
          : String(feet);
      }

      return altitude || "[NO ALTITUDE]";
    }

    function getAircraft(plan) {
      return normalise(
        plan.aircraft_faa ||
        plan.aircraft_short ||
        plan.aircraft ||
        ""
      ) || "[NO TYPE]";
    }

    function flightPlanLine(pilot) {
      const plan = pilot.flight_plan || {};
      const route = normalise(plan.route) || "[NO ROUTE]";

      return [
        normalise(pilot.callsign),
        getAircraft(plan),
        normalise(plan.arrival) || "[NO ARRIVAL]",
        formatAltitude(plan.altitude),
        route
      ].join(" ");
    }

    function validatorUrl(pilot) {
      return (
        "/tools/ifr-plan-validator?fp=" +
        encodeURIComponent(flightPlanLine(pilot))
      );
    }

    function renderPilot(pilot, updatedAt) {
      const line = flightPlanLine(pilot);

      flightPlanOutput.textContent = line;

      updatedText.textContent =
        "Live VATSIM data" +
        (
          updatedAt
            ? " · updated " +
              new Date(updatedAt).toLocaleString()
            : ""
        );

      validatorLink.href = validatorUrl(pilot);

      resultBox.classList.remove("hidden");
    }

    async function lookup() {
      hideError();

      const callsign = normalise(callsignInput.value);

      if (!callsign) {
        showError(
          "Enter a callsign to search the VATSIM network."
        );

        callsignInput.focus();
        return;
      }

      const originalText = lookupButton.textContent;

      lookupButton.disabled = true;
      lookupButton.textContent = "Looking Up...";

      try {
        const response = await fetch(VATSIM_DATA_URL, {
          headers: {
            Accept: "application/json"
          }
        });

        if (!response.ok) {
          throw new Error(
            "VATSIM returned " + response.status + "."
          );
        }

        const data = await response.json();

        const pilot = (data.pilots || []).find(function (item) {
          return normalise(item.callsign) === callsign;
        });

        if (!pilot) {
          throw new Error(
            callsign +
            " is not currently online on VATSIM, or has no published pilot record."
          );
        }

        if (!pilot.flight_plan) {
          throw new Error(
            callsign +
            " is online but has not filed a flight plan."
          );
        }

        renderPilot(
          pilot,
          data.general &&
          data.general.update_timestamp
        );

      } catch (error) {
        showError(
          error instanceof Error
            ? error.message
            : "Unable to retrieve VATSIM data."
        );

      } finally {
        lookupButton.disabled = false;
        lookupButton.textContent = originalText;
      }
    }

    async function copyLine() {
      const text = flightPlanOutput.textContent.trim();

      if (!text) {
        return;
      }

      try {
        await navigator.clipboard.writeText(text);

        const originalText = copyButton.textContent;

        copyButton.textContent = "Copied";

        setTimeout(function () {
          copyButton.textContent = originalText;
        }, 1200);

      } catch (error) {
        showError(
          "Unable to copy the flight plan to the clipboard."
        );
      }
    }

    lookupButton.addEventListener("click", lookup);

    copyButton.addEventListener("click", copyLine);

    callsignInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        lookup();
      }
    });
  }

  /*
   * Support both normal page loading and renderers that inject
   * the Markdown content dynamically.
   */
  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initFlightPlanGrabber
    );
  } else {
    initFlightPlanGrabber();
  }
})();
</script>
