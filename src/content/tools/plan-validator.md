---
title: Flight Plan Validator
description: Validate an IFR flight plan's aircraft, airports, direction, altitude, and generate a CRAFT clearance reference.
updated: '2026-08-13T00:00:00'
hidden: true
---

<div class="mb-6 rounded-lg border border-yellow-400/50 bg-yellow-950/20 p-5">
	<p class="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
		Work in Progress
	</p>
	<p class="mt-2 text-sm leading-6 text-yellow-200">
		This tool is still under development. The validation checks are not comprehensive and the CRAFT output is a reference only. Use caution when relying on this tool for training or operational purposes.
	</p>
</div>

<div class="border border-[var(--control-line)] bg-[var(--control-panel)]">

  <div class="border-b border-[var(--control-line)] px-5 py-4">
    <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
      Flight Plan
    </p>
    <p class="mt-1 text-sm text-slate-400">
      Enter the flight plan information below.
    </p>
  </div>

  <div class="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    AID
  </span>
  <input
    id="fp-aid"
    type="text"
    placeholder="UPS2322"
    autocomplete="off"
    class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
  />
</label>

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    TYPE
  </span>
  <input
    id="fp-type"
    type="text"
    placeholder="B744"
    autocomplete="off"
    class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
  />
</label>

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    DEP
  </span>
  <input
    id="fp-dep"
    type="text"
    placeholder="KMEM"
    autocomplete="off"
    class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
  />
</label>

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    DEST
  </span>
  <input
    id="fp-dest"
    type="text"
    placeholder="KBWI"
    autocomplete="off"
    class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
  />
</label>

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    ALT
  </span>
  <input
    id="fp-alt"
    type="text"
    placeholder="FL360"
    autocomplete="off"
    class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
  />
</label>

  </div>

  <div class="border-t border-[var(--control-line)] p-5">

<label class="block">
  <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
    ROUTE
  </span>

<textarea
id="fp-route"
rows="5"
placeholder="GENEH7 NUYID IIU FLM EWC MTCAF HNK BOS TUSKY N429A ELSIR"
autocomplete="off"
class="w-full resize-y border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-3 font-mono text-sm leading-6 text-white outline-none focus:border-[var(--control-blue-bright)]"

> </textarea>
> </label>

<div class="mt-4 flex flex-wrap gap-3">

<button
id="fp-validate"
type="button"
class="border border-[var(--control-blue)] bg-[var(--control-blue)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--control-blue-bright)]"> Validate Flight Plan</button>

<button
id="fp-clear"
type="button"
class="border border-[var(--control-line-strong)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"> Clear</button>

</div>

  </div>

</div>

<div id="fp-results" class="mt-6 hidden space-y-5">

  <!-- VALIDATION -->

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">

<div class="border-b border-[var(--control-line)] px-5 py-4">
  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
    Validation
  </p>
  <p class="mt-1 text-sm text-slate-400">
    Flight plan checks performed by the verifier.
  </p>
</div>

<div id="fp-validation" class="divide-y divide-[var(--control-line)]"></div>

  </div>

  <!-- CLEARANCE READOUT -->

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">

<div class="border-b border-[var(--control-line)] px-5 py-4">
  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
    Clearance Readout
  </p>
  <p class="mt-1 text-sm text-slate-400">
    Controller-style clearance generated from the CRAFT information.
  </p>
</div>

<div class="p-5">

  <div
    id="fp-readout"
    class="border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-200"
  ></div>

<button
id="fp-copy-readout"
type="button"
class="mt-4 border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"

>

    Copy Readout

  </button>

</div>

  </div>

  <!-- CRAFT -->

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">

<div class="border-b border-[var(--control-line)] px-5 py-4">
  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
    CRAFT
  </p>
  <p class="mt-1 text-sm text-slate-400">
    Clearance information generated from the entered flight plan.
  </p>
</div>

<div class="p-5">

  <div
    id="fp-craft"
    class="overflow-x-auto border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-200"
  ></div>

  <p class="mt-4 text-xs leading-5 text-slate-500">
    Frequency and transponder information are not entered in this tool.
    F and T must be completed with the assigned values before issuing a clearance.
  </p>

</div>

  </div>

  <!-- ROUTE -->

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">

<div class="border-b border-[var(--control-line)] px-5 py-4">
  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
    Route
  </p>
</div>

<div class="p-5">

  <div
    id="fp-route-display"
    class="break-words font-mono text-sm leading-7 text-slate-300"
  ></div>

</div>

  </div>

</div>

<div
  id="fp-error"
  class="mt-6 hidden border border-red-900/50 bg-red-950/20 p-5"
>

  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">
    Validation Error
  </p>

  <p
    id="fp-error-message"
    class="mt-2 text-sm leading-6 text-red-200"
  ></p>

</div>

<script  lang="ts">
  type FlightPlan = {
    aid: string;
    type: string;
    dep: string;
    dest: string;
    alt: string;
    route: string;
  };

  type ValidationResult = {
    status: "pass" | "warn" | "fail";
    title: string;
    detail: string;
  };


  const $ = <T extends HTMLElement>(id: string): T | null =>
    document.getElementById(id) as T | null;


  const escapeHtml = (value: string): string =>
    value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");


  const getFlightPlan = (): FlightPlan => ({
    aid: $("fp-aid")?.value.trim().toUpperCase() ?? "",
    type: $("fp-type")?.value.trim().toUpperCase() ?? "",
    dep: $("fp-dep")?.value.trim().toUpperCase() ?? "",
    dest: $("fp-dest")?.value.trim().toUpperCase() ?? "",
    alt: $("fp-alt")?.value.trim().toUpperCase() ?? "",
    route: $("fp-route")?.value.trim().toUpperCase() ?? "",
  });


  const airportNames: Record<string, string> = {
    KBWI: "Baltimore Airport",
    BWI: "Baltimore Airport",

    KMEM: "Memphis International Airport",
    MEM: "Memphis International Airport",

    KATL: "Atlanta Airport",
    ATL: "Atlanta Airport",

    KDFW: "Dallas/Fort Worth Airport",
    DFW: "Dallas/Fort Worth Airport",

    KORD: "Chicago O'Hare Airport",
    ORD: "Chicago O'Hare Airport",

    KJFK: "John F. Kennedy Airport",
    JFK: "John F. Kennedy Airport",

    KLAX: "Los Angeles Airport",
    LAX: "Los Angeles Airport",

    KSDF: "Louisville Airport",
    SDF: "Louisville Airport",

    KCVG: "Cincinnati Airport",
    CVG: "Cincinnati Airport",

    KPHL: "Philadelphia Airport",
    PHL: "Philadelphia Airport",

    KCLT: "Charlotte Airport",
    CLT: "Charlotte Airport",

    KDEN: "Denver Airport",
    DEN: "Denver Airport",

    KIAH: "Houston Airport",
    IAH: "Houston Airport",

    KSEA: "Seattle Airport",
    SEA: "Seattle Airport",

    KSFO: "San Francisco Airport",
    SFO: "San Francisco Airport",

    KLAS: "Las Vegas Airport",
    LAS: "Las Vegas Airport",

    LFPG: "Charles de Gaulle Airport",
  };


  const getAirportName = (icao: string): string => {
    const normalized = icao.toUpperCase();

    return airportNames[normalized] ?? `${normalized} Airport`;
  };


  const tokenizeRoute = (route: string): string[] =>
    route
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean);


  /*
   * This only identifies tokens that look like procedures.
   * It intentionally does NOT claim that the procedure is valid.
   */
  const looksLikeProcedure = (token: string): boolean =>
    /^[A-Z0-9]{3,8}[1-9]$/.test(token);


  /*
   * Identify common airway formats such as:
   *
   * V1
   * V12
   * J42
   * J75
   * Q100
   * T999
   * N429A
   */
  const looksLikeAirway = (token: string): boolean =>
    /^[VJQTYN]\d{1,4}[A-Z]?$/.test(token);


  const looksLikeFix = (token: string): boolean =>
    /^[A-Z0-9]{2,7}$/.test(token);


  const formatAltitude = (altitude: string): string => {

    const value = altitude.trim().toUpperCase();

    if (!value) {
      return "";
    }

    if (/^FL\d{2,3}$/.test(value)) {
      return value;
    }

    if (/^\d{3,5}$/.test(value)) {
      return Number(value).toLocaleString("en-US");
    }

    return value;
  };


  const spokenAltitude = (altitude: string): string => {

    const value = formatAltitude(altitude);

    if (!value) {
      return "the filed altitude";
    }

    if (/^FL\d{2,3}$/.test(value)) {
      return `flight level ${value.substring(2)}`;
    }

    return value;
  };


  const parseRoute = (route: string) => {

    const tokens = tokenizeRoute(route);

    const firstToken = tokens[0] ?? "";

    /*
     * We can recognize the first token as something that LOOKS
     * like a SID, but we do not invent a transition.
     */
    const possibleSid =
      firstToken && looksLikeProcedure(firstToken)
        ? firstToken
        : "";


    const airway = tokens.find((token) =>
      looksLikeAirway(token)
    ) ?? "";


    return {
      tokens,
      possibleSid,
      airway,
    };
  };


  const buildRoutePhrase = (flightPlan: FlightPlan): string => {

    const parsed = parseRoute(flightPlan.route);

    /*
     * Without actual procedure data we should not guess the
     * transition. The safe clearance reference is therefore
     * "then as filed."
     */
    if (parsed.possibleSid) {
      return `${parsed.possibleSid} departure, then as filed`;
    }

    return "then as filed";
  };


  const buildCraft = (flightPlan: FlightPlan) => {

    const destination = getAirportName(flightPlan.dest);

    const routePhrase = buildRoutePhrase(flightPlan);

    const altitude = spokenAltitude(flightPlan.alt);

    const altitudeDisplay = formatAltitude(flightPlan.alt);

    return {

      c: destination,

      r: `Via ${routePhrase}`,

      a:
        altitudeDisplay
          ? `Maintain ${altitudeDisplay}, expect ${altitudeDisplay} one-zero minutes after departure`
          : "Maintain [altitude], expect [altitude] one-zero minutes after departure",

      f: "Departure frequency [xxx.xx] OR Departure offline",

      t: "Squawk [xxxx]",

      clearance:
        `Cleared to ${destination} via ${routePhrase}. ` +
        `Maintain ${altitude}, expect ${altitude} one-zero minutes after departure.`,
    };
  };


  const buildReadout = (flightPlan: FlightPlan): string => {

    const craft = buildCraft(flightPlan);

    return (
      `${flightPlan.aid}, ` +
      `${craft.clearance} ` +
      `Departure frequency [xxx.xx], departure offline. ` +
      `Squawk [xxxx].`
    );
  };


  const validateFlightPlan = (
    flightPlan: FlightPlan
  ): ValidationResult[] => {

    const results: ValidationResult[] = [];


    /*
     * AID
     */

    if (!flightPlan.aid) {

      results.push({
        status: "fail",
        title: "Aircraft identification",
        detail: "Enter a callsign or aircraft identification.",
      });

    } else if (!/^[A-Z0-9]{2,8}$/.test(flightPlan.aid)) {

      results.push({
        status: "warn",
        title: "Aircraft identification",
        detail: "The callsign contains an unusual format.",
      });

    } else {

      results.push({
        status: "pass",
        title: "Aircraft identification",
        detail: `${flightPlan.aid} accepted.`,
      });

    }


    /*
     * AIRCRAFT TYPE
     */

    if (!flightPlan.type) {

      results.push({
        status: "fail",
        title: "Aircraft type",
        detail: "Enter an aircraft type.",
      });

    } else {

      results.push({
        status: "pass",
        title: "Aircraft type",
        detail: `${flightPlan.type} entered.`,
      });

    }


    /*
     * DEPARTURE
     */

    if (!flightPlan.dep) {

      results.push({
        status: "fail",
        title: "Departure airport",
        detail: "Enter a departure airport.",
      });

    } else if (!/^[A-Z]{4}$/.test(flightPlan.dep)) {

      results.push({
        status: "fail",
        title: "Departure airport",
        detail: "Use a four-letter ICAO airport identifier.",
      });

    } else {

      results.push({
        status: "pass",
        title: "Departure airport",
        detail: `${flightPlan.dep} accepted.`,
      });

    }


    /*
     * DESTINATION
     */

    if (!flightPlan.dest) {

      results.push({
        status: "fail",
        title: "Destination airport",
        detail: "Enter a destination airport.",
      });

    } else if (!/^[A-Z]{4}$/.test(flightPlan.dest)) {

      results.push({
        status: "fail",
        title: "Destination airport",
        detail: "Use a four-letter ICAO airport identifier.",
      });

    } else {

      results.push({
        status: "pass",
        title: "Destination airport",
        detail: `${flightPlan.dest} accepted.`,
      });

    }


    /*
     * SAME AIRPORT
     */

    if (
      flightPlan.dep &&
      flightPlan.dest &&
      flightPlan.dep === flightPlan.dest
    ) {

      results.push({
        status: "fail",
        title: "Airport pair",
        detail: "Departure and destination cannot be the same airport.",
      });

    }


    /*
     * ALTITUDE
     */

    if (!flightPlan.alt) {

      results.push({
        status: "fail",
        title: "Cruise altitude",
        detail: "Enter a filed altitude.",
      });

    } else if (
      !/^FL\d{2,3}$/.test(flightPlan.alt) &&
      !/^\d{3,5}$/.test(flightPlan.alt)
    ) {

      results.push({
        status: "warn",
        title: "Cruise altitude",
        detail:
          "Altitude format could not be confidently identified.",
      });

    } else {

      results.push({
        status: "pass",
        title: "Cruise altitude",
        detail:
          `${formatAltitude(flightPlan.alt)} accepted.`,
      });

    }


    /*
     * ROUTE
     */

    if (!flightPlan.route) {

      results.push({
        status: "fail",
        title: "Route",
        detail: "Enter an IFR route.",
      });

    } else {

      const tokens = tokenizeRoute(flightPlan.route);

      results.push({
        status: "pass",
        title: "Route",
        detail:
          `${tokens.length} route element${tokens.length === 1 ? "" : "s"} detected.`,
      });


      const parsed = parseRoute(flightPlan.route);


      if (parsed.possibleSid) {

        results.push({
          status: "warn",
          title: "Departure procedure",
          detail:
            `${parsed.possibleSid} looks like a departure procedure. ` +
            `Procedure and transition validity requires navigation data.`,
        });

      } else {

        results.push({
          status: "warn",
          title: "Departure procedure",
          detail:
            "No recognizable departure procedure was detected. " +
            "The route will be treated as filed.",
        });

      }


      if (parsed.airway) {

        results.push({
          status: "pass",
          title: "Airway",
          detail:
            `${parsed.airway} detected in the route.`,
        });

      }

    }


    return results;
  };


  const renderValidation = (
    results: ValidationResult[]
  ) => {

    const container = $("fp-validation");

    if (!container) return;


    container.innerHTML = results
      .map((result) => {

        const statusClass =
          result.status === "pass"
            ? "text-emerald-400"
            : result.status === "warn"
              ? "text-amber-400"
              : "text-red-400";


        const symbol =
          result.status === "pass"
            ? "✓"
            : result.status === "warn"
              ? "!"
              : "×";


        return `
          <div class="flex gap-4 px-5 py-4">

            <div class="w-5 shrink-0 text-center font-mono font-bold ${statusClass}">
              ${symbol}
            </div>

            <div class="min-w-0">

              <p class="text-sm font-semibold text-slate-200">
                ${escapeHtml(result.title)}
              </p>

              <p class="mt-1 text-sm leading-6 text-slate-400">
                ${escapeHtml(result.detail)}
              </p>

            </div>

          </div>
        `;
      })
      .join("");
  };


  const renderCraft = (
    flightPlan: FlightPlan
  ) => {

    const container = $("fp-craft");

    if (!container) return;


    const craft = buildCraft(flightPlan);


    container.innerHTML = `
      <div class="space-y-3">

        <div>
          <span class="font-bold text-[var(--control-blue-bright)]">
            C
          </span>

          <span class="ml-3">
            ${escapeHtml(craft.c)}
          </span>
        </div>


        <div>
          <span class="font-bold text-[var(--control-blue-bright)]">
            R
          </span>

          <span class="ml-3">
            ${escapeHtml(craft.r)}
          </span>
        </div>


        <div>
          <span class="font-bold text-[var(--control-blue-bright)]">
            A
          </span>

          <span class="ml-3">
            ${escapeHtml(craft.a)}
          </span>
        </div>


        <div>
          <span class="font-bold text-[var(--control-blue-bright)]">
            F
          </span>

          <span class="ml-3">
            ${escapeHtml(craft.f)}
          </span>
        </div>


        <div>
          <span class="font-bold text-[var(--control-blue-bright)]">
            T
          </span>

          <span class="ml-3">
            ${escapeHtml(craft.t)}
          </span>
        </div>

      </div>
    `;
  };


  const renderReadout = (
    flightPlan: FlightPlan
  ) => {

    const container = $("fp-readout");

    if (!container) return;

    container.textContent =
      buildReadout(flightPlan);
  };


  const renderRoute = (
    flightPlan: FlightPlan
  ) => {

    const container = $("fp-route-display");

    if (!container) return;


    const tokens =
      tokenizeRoute(flightPlan.route);


    if (!tokens.length) {

      container.textContent =
        "No route entered.";

      return;
    }


    const parsed =
      parseRoute(flightPlan.route);


    container.innerHTML = tokens
      .map((token, index) => {

        let label = "ROUTE";


        if (
          index === 0 &&
          parsed.possibleSid
        ) {

          label = "PROCEDURE";

        } else if (
          looksLikeAirway(token)
        ) {

          label = "AIRWAY";

        } else if (
          looksLikeFix(token)
        ) {

          label = "FIX/NAVAID";

        }


        return `
          <span class="mr-2 inline-flex items-center border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-2 py-1">

            <span class="mr-2 text-[0.58rem] font-semibold uppercase tracking-[0.12em] text-slate-500">
              ${label}
            </span>

            <span class="text-slate-200">
              ${escapeHtml(token)}
            </span>

          </span>
        `;
      })
      .join("");
  };


  const showError = (
    message: string
  ) => {

    const error =
      $("fp-error");

    const errorMessage =
      $("fp-error-message");


    if (!error || !errorMessage) {
      return;
    }


    errorMessage.textContent =
      message;

    error.classList.remove("hidden");
  };


  const hideError = () => {

    $("fp-error")?.classList.add("hidden");

  };
	const validate = () => {

    hideError();


    const flightPlan =
      getFlightPlan();


    const results =
      validateFlightPlan(flightPlan);
    renderValidation(results);

    renderCraft(flightPlan);

    renderReadout(flightPlan);

    renderRoute(flightPlan);


    $("fp-results")?.classList.remove("hidden");


    const failures =
      results.filter(
        (result) =>
          result.status === "fail"
      );


    if (failures.length) {

      showError(
        `${failures.length} validation issue${failures.length === 1 ? "" : "s"} detected. Review the validation results above.`
      );

    }

  };


  const clearForm = () => {

    const ids = [
      "fp-aid",
      "fp-type",
      "fp-dep",
      "fp-dest",
      "fp-alt",
      "fp-route",
    ];


    ids.forEach((id) => {

      const element =
        $<
          HTMLInputElement |
          HTMLTextAreaElement
        >(id);


      if (element) {
        element.value = "";
      }

    });


    $("fp-results")
      ?.classList.add("hidden");


    hideError();

  };


  $("fp-validate")
    ?.addEventListener(
      "click",
      validate
    );


  $("fp-clear")
    ?.addEventListener(
      "click",
      clearForm
    );


  $("fp-copy-readout")
    ?.addEventListener(
      "click",
      async () => {

        const readout =
          $("fp-readout")
            ?.textContent
            ?.trim();


        if (!readout) {
          return;
        }
        try {

          await navigator.clipboard
            .writeText(readout);


          const button =
            $("fp-copy-readout");


          if (!button) {
            return;
          }


          const originalText =
            button.textContent;


          button.textContent =
            "Copied";


          window.setTimeout(
            () => {

              button.textContent =
                originalText;

            },
            1500
          );


        } catch {

          showError(
            "Unable to copy the clearance readout."
          );

        }

      }
    );


  $("fp-route")
    ?.addEventListener(
      "keydown",
      (event: KeyboardEvent) => {

        if (
          event.key === "Enter" &&
          (event.ctrlKey ||
            event.metaKey)
        ) {

          event.preventDefault();

          validate();

        }

      }
    );
</script>
