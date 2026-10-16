---
title: vTDLS Clearance Verifier
description: A quick reference for the vTDLS clearance verification tool and its KMEM clearance helper script.
updated: '2026-10-11T00:00:00'
hidden: false
---

# vTDLS Clearance Verifier

The vTDLS Clearance Verifier helps controllers review a clearance in the vTDLS workflow and catch details that may need attention before the clearance is issued. It is intended as a quick consistency check for KMEM clearance work, so you can spend less time checking the same details manually.

The companion userscript adds KMEM clearance support to the workflow:

[View or install the KMEM clearance userscript](https://github.com/RHGDEV/Artcc-Scripts/raw/refs/heads/main/src/tdls-clearance.user.js)

## How to use it

1. Open the KMEM clearance workflow in vTDLS.
2. Review the clearance details with the verifier available.
3. Resolve any items it flags, then confirm the clearance against current procedures before sending it.

The verifier is an aid, not an authority. It cannot account for every operational circumstance; use current charts, procedures, NOTAMs, and controller judgment when issuing a clearance.

## Script Features

These features streamline common clearance and coordination tasks in the project.

<div class="mt-8 space-y-8">
    <div class="grid gap-5 sm:grid-cols-2">
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">SID Validation</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Repair /W Entries for Time-Restricted SIDs</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/sid-time-restricted.webp" alt="vTDLS helper for automatically fixing /W entries with time-restricted SIDs" loading="lazy" /></div>
      </figure>
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">Equipment Lookup</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Identify Jet and Prop Aircraft</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/aircraft-type.webp" alt="Aircraft type search indicating whether an aircraft is a jet or propeller aircraft" loading="lazy" /></div>
      </figure>
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">RVSM Operations</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Descend Non-RVSM Aircraft Below RVSM Altitudes</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/rvsm-descent.webp" alt="vTDLS /G command for requesting a descent below RVSM altitudes" loading="lazy" /></div>
      </figure>
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">Airport Reference</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Look Up an Airport Name</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/airport-name.webp" alt="Airport name lookup in vTDLS" loading="lazy" /></div>
      </figure>
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">Frequency Reference</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Find Online Departure Frequencies</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/departure-frequencies.webp" alt="Online departure frequencies selected for the airport being controlled by Center or Departure" loading="lazy" /></div>
        <p class="m-0 border-t border-(--control-line) px-5 py-3 text-xs leading-5 text-slate-400">Frequency lookup follows the airport you are controlling; it does not check departure directionality.</p>
      </figure>
      <figure class="m-0 overflow-hidden rounded-md border border-(--control-line) bg-(--control-panel) shadow-lg shadow-black/10 transition-colors hover:border-(--control-line-strong)">
        <figcaption class="border-b border-(--control-line) px-5 py-4">
          <p class="m-0 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--control-blue-bright)">Callsign Lookup</p>
          <p class="mb-0 mt-1 text-base font-semibold text-slate-100">Look Up an Airline Designator</p>
        </figcaption>
        <div class="bg-(--control-navy-deep) p-4 sm:p-5"><img class="mx-auto block h-auto max-w-full" src="/img/tools/vtdls/airline-designator.webp" alt="Airline designator lookup showing the airline's spoken name" loading="lazy" /></div>
      </figure>
    </div>
</div>
