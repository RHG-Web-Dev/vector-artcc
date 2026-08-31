---
title: VFR Flight Strip Builder
description: Build a KMEM VFR strip and phraseology for pattern work, flight following, and initial VFR clearances.
updated: '2026-08-30T00:00:00'
hidden: true
---

<div class="mb-6 rounded-lg border border-yellow-400/50 bg-yellow-950/20 p-5">
  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
    Controller Reference Tool
  </p>
  <p class="mt-2 text-sm leading-6 text-yellow-200">
    This tool helps build a KMEM VFR strip using the standard pattern and flight-following decision tree.
    Use it to confirm the strip format and phraseology before issuing a clearance.
  </p>
</div>

# KMEM VFR Ground

## General Information

### VFR Altitudes

- VFR Flight: At/Below 2500
- Pattern: 1300 Props / 1800 Jets

## Calls for VFR Flight

- Aircraft Type?
  - No → “Say aircraft type.”
- Pattern Work?
  - Yes → aircraft type only
  - No → Flight Following?
    - Yes (+FF)
      - Aircraft type
      - Destination
      - Requested VFR altitude
    - No (-FF)
      - Aircraft type
      - Direction of flight
      - Requested VFR altitude

## CRAFT

- C — Bravo clearance
- R — VFR: OMIT
- A — VFR/2500 initial climb
- F — Departure frequency; OMIT for pattern
- T — Transponder

## Example Phrase for VFR Flights

_[CALL]_ Cleared out of the Memphis Class Bravo Airspace. Maintain VFR at/below 2,500. Departure frequency 125.8. Squawk _xxxx_.

## Example Phrase for VFR Patterns

_[CALL]_ Cleared into the Memphis Class Bravo Airspace. Maintain VFR at/below (1,300 Props; 1,800 Jets). Squawk _xxxx_.

## Example Strip for a VFR Flight

- AID — Callsign
- TYPE — C320
- DEP — KMEM
- DEST — (Pattern KMEM; FF Airport Req)
- ALT — VFR/REQ Alt
- RTE — PATTERN; VFR (N/E/S/W)
- RMK — (+FF, -FF)

<div class="not-prose my-8 overflow-hidden rounded-md border border-slate-700 bg-slate-900 text-slate-100 shadow-[0_0_0_1px_rgba(59,130,246,0.08)]">
  <div class="flex items-center justify-between border-b border-slate-700 bg-slate-800/80 px-3 py-2 text-sm font-medium text-slate-200">
    <div class="flex items-center gap-2">
      <span class="inline-block h-2.5 w-2.5 rounded-full bg-sky-400"></span>
      <span>KMEM VFR Strip Builder</span>
    </div>
    <span class="text-[10px] uppercase tracking-[0.2em] text-slate-400">Ground</span>
  </div>

  <div class="bg-[#0d2436] p-5">
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Callsign</span>
        <input id="vfr-strip-callsign" type="text" value="N123AA" placeholder="N123AA" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-sky-400" />
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Aircraft Type</span>
        <input id="vfr-strip-aircraft" type="text" value="C320" placeholder="C320" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-sky-400" />
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Pattern Work?</span>
        <select id="vfr-strip-pattern" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400">
          <option value="yes">Yes</option>
          <option value="no" selected>No</option>
        </select>
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Flight Following?</span>
        <select id="vfr-strip-ff" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400">
          <option value="yes">Yes (+FF)</option>
          <option value="no" selected>No (-FF)</option>
        </select>
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Destination</span>
        <input id="vfr-strip-destination" type="text" value="KJAX" placeholder="KJAX" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-sky-400" />
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Direction of Flight</span>
        <select id="vfr-strip-direction" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400">
          <option value="N">North</option>
          <option value="NE">Northeast</option>
          <option value="E">East</option>
          <option value="SE">Southeast</option>
          <option value="S">South</option>
          <option value="SW">Southwest</option>
          <option value="W">West</option>
          <option value="NW">Northwest</option>
          <option value="" selected>Not Applicable</option>
        </select>
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Requested Altitude</span>
        <input id="vfr-strip-altitude" type="text" value="VFR/2500" placeholder="VFR/2500" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-sky-400" />
      </label>
      <label class="block">
        <span class="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Departure Frequency</span>
        <input id="vfr-strip-frequency" type="text" value="125.8" placeholder="125.8" class="w-full border border-slate-600 bg-slate-950 px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-sky-400" />
      </label>
    </div>
    <div class="mt-5 border-t border-slate-700 pt-5">
      <p class="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Strip Output</p>
      <div class="grid gap-2 md:grid-cols-7">
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">AID</div>
          <div id="vfr-aid" class="mt-2 font-mono text-sm text-white">N123AA</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">TYPE</div>
          <div id="vfr-type" class="mt-2 font-mono text-sm text-white">C320</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">DEP</div>
          <div id="vfr-dep" class="mt-2 font-mono text-sm text-white">KMEM</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">DEST</div>
          <div id="vfr-dest" class="mt-2 font-mono text-sm text-white">KJAX</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">ALT</div>
          <div id="vfr-alt" class="mt-2 font-mono text-sm text-white">VFR/2500</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">RTE</div>
          <div id="vfr-rte" class="mt-2 font-mono text-sm text-white">VFR N</div>
        </div>
        <div class="rounded-sm border border-slate-600 bg-slate-950/70 px-2 py-2">
          <div class="text-[10px] uppercase tracking-[0.18em] text-slate-400">RMK</div>
          <div id="vfr-rmk" class="mt-2 font-mono text-sm text-white">-FF</div>
        </div>
      </div>
    </div>
    <div class="mt-6 rounded-sm border border-slate-700 bg-slate-950/70 p-4">
      <p class="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Suggested Phraseology</p>
      <p id="vfr-phrase" class="text-sm leading-7 text-slate-200">
        N123AA, cleared out of the Memphis Class Bravo Airspace. Maintain VFR at/below 2,500. Departure frequency 125.8. Squawk 1234.
      </p>
    </div>

  </div>
</div>

<script>
  (function () {
    const callsign = document.getElementById('vfr-strip-callsign');
    const aircraft = document.getElementById('vfr-strip-aircraft');
    const pattern = document.getElementById('vfr-strip-pattern');
    const flightFollowing = document.getElementById('vfr-strip-ff');
    const destination = document.getElementById('vfr-strip-destination');
    const direction = document.getElementById('vfr-strip-direction');
    const altitude = document.getElementById('vfr-strip-altitude');
    const frequency = document.getElementById('vfr-strip-frequency');

    const aidEl = document.getElementById('vfr-aid');
    const typeEl = document.getElementById('vfr-type');
    const depEl = document.getElementById('vfr-dep');
    const destEl = document.getElementById('vfr-dest');
    const altEl = document.getElementById('vfr-alt');
    const rteEl = document.getElementById('vfr-rte');
    const rmkEl = document.getElementById('vfr-rmk');
    const phraseEl = document.getElementById('vfr-phrase');

    const update = () => {
      const callsignValue = (callsign?.value || '').trim().toUpperCase() || 'N123AA';
      const aircraftValue = (aircraft?.value || '').trim().toUpperCase() || 'C320';
      const patternValue = pattern?.value || 'no';
      const ffValue = flightFollowing?.value || 'no';
      const destinationValue = (destination?.value || '').trim().toUpperCase() || 'KMEM';
      const directionValue = (direction?.value || '').trim().toUpperCase();
      const altitudeValue = (altitude?.value || '').trim().toUpperCase() || 'VFR/2500';
      const frequencyValue = (frequency?.value || '').trim() || '125.8';

      const isPattern = patternValue === 'yes';
      const hasFlightFollowing = ffValue === 'yes';

      aidEl.textContent = callsignValue;
      typeEl.textContent = aircraftValue;
      depEl.textContent = 'KMEM';

      if (isPattern) {
        destEl.textContent = 'KMEM';
        altEl.textContent = 'VFR/1300';
        rteEl.textContent = 'PATTERN';
        rmkEl.textContent = hasFlightFollowing ? '+FF' : '-FF';
      } else {
        destEl.textContent = hasFlightFollowing ? destinationValue : (directionValue || 'VFR');
        altEl.textContent = altitudeValue;
        rteEl.textContent = hasFlightFollowing ? `VFR ${directionValue || 'N'}` : `VFR ${directionValue || 'N'}`;
        rmkEl.textContent = hasFlightFollowing ? '+FF' : '-FF';
      }

      let phrase = '';

      if (isPattern) {
        phrase = `${callsignValue}, cleared into the Memphis Class Bravo Airspace. Maintain VFR at/below (1,300 Props; 1,800 Jets). Squawk 1234.`;
      } else {
        phrase = `${callsignValue}, cleared out of the Memphis Class Bravo Airspace. Maintain VFR at/below 2,500. Departure frequency ${frequencyValue}. Squawk 1234.`;
      }

      if (hasFlightFollowing && !isPattern) {
        phrase = `${callsignValue}, cleared out of the Memphis Class Bravo Airspace. Maintain VFR at/below 2,500. Departure frequency ${frequencyValue}. Squawk 1234.`;
      }

      phraseEl.textContent = phrase;
    };

    [callsign, aircraft, pattern, flightFollowing, destination, direction, altitude, frequency].forEach((el) => {
      el?.addEventListener('input', update);
      el?.addEventListener('change', update);
    });

    update();
  })();
</script>
