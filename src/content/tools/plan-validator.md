---
title: Flight Plan Validator
description: Validate a KMEM IFR flight plan against MEM departure, equipment, direction, altitude, and CRAFT rules.
updated: '2026-08-18T00:00:00'
hidden: false
---

<div class="mb-6 rounded-lg border border-yellow-400/50 bg-yellow-950/20 p-5">
  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">Controller Reference Tool</p>
  <p class="mt-2 text-sm leading-6 text-yellow-200">
    This validator is configured for the KMEM clearance rules supplied by ZME/Vector ARTCC. Procedure-cycle and navaid data are configuration values and should be reviewed when procedures change. This tool is a training/reference aid and does not replace current charts, NOTAMs, or controller instructions.
  </p>
</div>

<div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
  <div class="border-b border-[var(--control-line)] px-5 py-4">
    <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">MEM CRAFT Validator</p>
    <p class="mt-1 text-sm text-slate-400">Validate the filed plan and generate a controller-ready clearance reference.</p>
  </div>

  <div class="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">CALLSIGN</span>
      <input id="fp-aid" type="text" placeholder="UPS2322" autocomplete="off" class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]" />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">AIRCRAFT / SUFFIX</span>
      <input id="fp-type" type="text" placeholder="B738/L" autocomplete="off" class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]" />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">DEP</span>
      <input id="fp-dep" type="text" value="KMEM" placeholder="KMEM" autocomplete="off" class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]" />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">DEST</span>
      <input id="fp-dest" type="text" placeholder="KBWI" autocomplete="off" class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]" />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">FILED ALTITUDE</span>
      <input id="fp-alt" type="text" placeholder="FL360" autocomplete="off" class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]" />
    </label>
    <div class="border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-3">
      <p class="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">DEFAULT DEPARTURE</p>
      <p class="mt-1 font-mono text-sm text-slate-200">125.8</p>
    </div>
  </div>

  <div class="border-t border-[var(--control-line)] p-5">
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">ROUTE</span>
      <textarea id="fp-route" rows="5" placeholder="PIEPE6 IBUFY DQN J42 ..." autocomplete="off" class="w-full resize-y border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-3 font-mono text-sm leading-6 text-white outline-none focus:border-[var(--control-blue-bright)]"></textarea>
      <p class="mt-2 text-xs text-slate-500">Enter the filed route exactly as received. The validator treats the first procedure-looking token as the departure and the following token as its transition.</p>
    </label>
    <div class="mt-4 flex flex-wrap gap-3">
      <button id="fp-validate" type="button" class="border border-[var(--control-blue)] bg-[var(--control-blue)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--control-blue-bright)]">Validate Flight Plan</button>
      <button id="fp-clear" type="button" class="border border-[var(--control-line-strong)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white">Clear</button>
    </div>
  </div>
</div>

<div id="fp-results" class="mt-6 hidden space-y-5">
  <div id="fp-amendment" class="hidden border border-yellow-400/40 bg-yellow-950/20 p-5">
    <p class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-yellow-400">Amendment Request</p>
    <p id="fp-amendment-text" class="mt-2 font-mono text-sm leading-7 text-yellow-100"></p>
  </div>

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="border-b border-[var(--control-line)] px-5 py-4">
      <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">Validation</p>
      <p class="mt-1 text-sm text-slate-400">MEM-specific checks performed against the entered flight plan.</p>
    </div>
    <div id="fp-validation" class="divide-y divide-[var(--control-line)]"></div>
  </div>

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="border-b border-[var(--control-line)] px-5 py-4">
      <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">CRAFT</p>
      <p class="mt-1 text-sm text-slate-400">Controller clearance reference generated from the corrected flight plan.</p>
    </div>
    <div class="p-5">
      <div id="fp-craft" class="overflow-x-auto border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-200"></div>
      <button id="fp-copy-craft" type="button" class="mt-4 border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white">Copy CRAFT</button>
    </div>
  </div>

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="border-b border-[var(--control-line)] px-5 py-4">
      <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">Clearance Readout</p>
    </div>
    <div class="p-5">
      <div id="fp-readout" class="border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-200"></div>
      <button id="fp-copy-readout" type="button" class="mt-4 border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white">Copy Readout</button>
    </div>
  </div>

  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="border-b border-[var(--control-line)] px-5 py-4">
      <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">Route Comparison</p>
    </div>
    <div class="grid gap-4 p-5 md:grid-cols-2">
      <div><p class="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Filed</p><div id="fp-filed-route" class="break-words font-mono text-sm leading-7 text-slate-300"></div></div>
      <div><p class="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">Clearance Route</p><div id="fp-corrected-route" class="break-words font-mono text-sm leading-7 text-slate-300"></div></div>
    </div>
  </div>
</div>

<div id="fp-error" class="mt-6 hidden border border-red-900/50 bg-red-950/20 p-5">
  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">Validation Error</p>
  <p id="fp-error-message" class="mt-2 text-sm leading-6 text-red-200"></p>
</div>

<script lang="ts">
  type FlightPlan = { aid: string; type: string; dep: string; dest: string; alt: string; route: string };
  type Equipment = { suffix: string; rvsm: boolean; rnav: boolean; gnss: boolean };
  type ParsedDeparture = { raw: string; procedure: string; cycle: number | null; transition: string; index: number };
  type Check = { status: "pass" | "warn" | "fail"; title: string; detail: string };

  /* =========================
     MEM RULE CONFIGURATION
     ========================= */
  const MEM = {
    departureFrequency: "125.8",
    restricted: {
      AUTMN: ["CHLDR5", "ANSWA"],
      BINKY: ["PIEPE6", "IBUFY"],
      GENEH: ["CRSON7", "HUMMS"],
      GMBUD: ["BBKING7", "KERMI"],
      GRRIZ: ["JTEEE5", "ODATE"],
      HOTRD: ["ZUMIT", "JTEEE"],
      NIKEI: ["ZUMIT", "FOXOM"],
      OLEMS: ["PIEPE6", "IBUFY"]
    } as Record<string, [string, string]>,
    rvsmOnly: {
      departure: "ELVIS4",
      transitions: {
        AZONE: "ETWOO", BBKND: "ETREE", CHLDR: "EONEE", CRSON: "NFOUR", DUCKZ: "WTWOO",
        GOETZ: "EONEE", JTEEE: "NTWOO", PIEPE: "STWOO", SELPH: "NTREE", ZUMIT: "WTREE"
      } as Record<string, string>
    },
    /* Update these values whenever a new procedure cycle is published. */
    currentCycles: {
      AUTMN: null, BINKY: null, GENEH: null, GMBUD: null, GRRIZ: null, HOTRD: null, NIKEI: null, OLEMS: null,
      CHLDR: 5, PIEPE: 6, CRSON: 7, BBKING: 7, JTEEE: 5, ZUMIT: null, ELVIS: 4
    } as Record<string, number | null>,
    /* Optional first-fix/VOR data. Add entries as local data is confirmed. */
    navaids: {} as Record<string, { type: "VOR" | "VORTAC" | "NAVAID" }>,
    /* West/east test is longitude based. These are approximate airport longitudes. */
    longitude: {
      KMEM: -89.9767,
      MEM: -89.9767,
      KBWI: -76.6684,
      KATL: -84.4281,
      KDFW: -97.0403,
      KORD: -87.9048,
      KJFK: -73.7781,
      KLAX: -118.4085,
      KSDF: -85.7360,
      KCVG: -84.6678,
      KPHL: -75.2411,
      KCLT: -80.9431,
      KDEN: -104.6737,
      KIAH: -95.3414,
      KSEA: -122.3088,
      KSFO: -122.3790,
      KLAS: -115.1522,
      LFPG: 2.5479
    } as Record<string, number>
  };

  const $ = <T extends HTMLElement>(id: string): T | null => document.getElementById(id) as T | null;
  const esc = (v: string): string => v.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const norm = (v: string): string => v.trim().toUpperCase();
  const tokens = (route: string): string[] => norm(route).replace(/\s+/g, " ").trim().split(" ").filter(Boolean);

  const getPlan = (): FlightPlan => ({
    aid: norm($("fp-aid")?.value ?? ""), type: norm($("fp-type")?.value ?? ""), dep: norm($("fp-dep")?.value ?? ""),
    dest: norm($("fp-dest")?.value ?? ""), alt: norm($("fp-alt")?.value ?? ""), route: norm($("fp-route")?.value ?? "")
  });

  const airportName = (icao: string): string => ({
    KBWI: "Baltimore/Washington Airport", KATL: "Atlanta Airport", KDFW: "Dallas/Fort Worth Airport", KORD: "Chicago O'Hare Airport",
    KJFK: "John F. Kennedy Airport", KLAX: "Los Angeles Airport", KSDF: "Louisville Airport", KCVG: "Cincinnati Airport",
    KPHL: "Philadelphia Airport", KCLT: "Charlotte Airport", KDEN: "Denver Airport", KIAH: "Houston Airport",
    KSEA: "Seattle-Tacoma Airport", KSFO: "San Francisco Airport", KLAS: "Las Vegas Airport", LFPG: "Charles de Gaulle Airport",
    KMEM: "Memphis International Airport", MEM: "Memphis International Airport"
  } as Record<string, string>)[icao] ?? `${icao} Airport`;

  const splitType = (value: string) => {
    const match = value.match(/^([A-Z0-9]+)(?:\/([A-Z]))?$/);
    return { model: match?.[1] ?? value.replace(/\/.*$/, ""), suffix: match?.[2] ? `/${match[2]}` : "" };
  };

  const getEquipment = (value: string): Equipment => {
    const { suffix } = splitType(value);
    const map: Record<string, Equipment> = {
      "/W": { suffix, rvsm: true, rnav: false, gnss: false },
      "/Z": { suffix, rvsm: true, rnav: true, gnss: false },
      "/L": { suffix, rvsm: true, rnav: true, gnss: true },
      "/G": { suffix, rvsm: false, rnav: true, gnss: true },
      "/Y": { suffix, rvsm: false, rnav: true, gnss: false }
    };
    return map[suffix] ?? { suffix, rvsm: false, rnav: false, gnss: false };
  };

  const isJet = (value: string): boolean => {
    const model = splitType(value).model;
    return /^(?:[A-Z]*7[0-9]{2}|[A-Z]*A3[0-9]{2}|[A-Z]*A2[0-9]{2}|[A-Z]*A1[0-9]{2}|[A-Z]*E1[0-9]{2}|[A-Z]*CRJ|[A-Z]*ERJ|[A-Z]*GLF|[A-Z]*G[0-9]{2,3}|[A-Z]*C5[0-9]{2}|[A-Z]*C[0-9]{2,3})/.test(model) || /^(B7|B6|B3|A3|A2|E1|CRJ|ERJ|GLF|CL6|C5)/.test(model);
  };

  const looksProcedure = (t: string): boolean => /^[A-Z0-9]{3,8}[0-9]$/.test(t);
  const parseDeparture = (route: string): ParsedDeparture | null => {
    const r = tokens(route);
    if (!r.length) return null;
    const i = r.findIndex(looksProcedure);
    if (i < 0) return null;
    const raw = r[i];
    const m = raw.match(/^([A-Z0-9]+?)([0-9])$/);
    if (!m) return null;
    return { raw, procedure: m[1], cycle: Number(m[2]), transition: r[i + 1] && !looksProcedure(r[i + 1]) ? r[i + 1] : "", index: i };
  };

  const altitudeNumber = (alt: string): number | null => {
    const a = norm(alt);
    if (/^FL\d{2,3}$/.test(a)) return Number(a.slice(2)) * 100;
    if (/^\d{3,5}$/.test(a)) return Number(a);
    return null;
  };
  const altitudeText = (alt: string): string => {
    const n = altitudeNumber(alt);
    if (n === null) return alt || "[FILED ALT]";
    return `FL${Math.round(n / 100)}`;
  };
  const spokenAlt = (alt: string): string => {
    const f = altitudeText(alt);
    return f.startsWith("FL") ? `flight level ${f.slice(2)}` : f;
  };

  const direction = (dep: string, dest: string): "west" | "east" | "unknown" => {
    const a = MEM.longitude[dep];
    const b = MEM.longitude[dest];
    if (a === undefined || b === undefined || a === b) return "unknown";
    return a < b ? "east" : "west";
  };

  const validAltitudes = (dir: "west" | "east"): number[] => {
    if (dir === "west") return [...Array.from({ length: 5 }, (_, i) => 32 + i * 2), 43, 47, 51, 55, 59];
    return [...Array.from({ length: 6 }, (_, i) => 31 + i * 2), 45, 49, 53, 57, 61];
  };
  const suggestAltitude = (filed: number | null, dir: "west" | "east"): number | null => {
    if (filed === null) return null;
    const valid = validAltitudes(dir);
    return valid.reduce((best, v) => Math.abs(v - filed) < Math.abs(best - filed) ? v : best, valid[0]);
  };

  const buildDeparture = (p: FlightPlan, eq: Equipment, parsed: ParsedDeparture | null) => {
    let procedure = parsed?.raw ?? "";
    let transition = parsed?.transition ?? "";
    let amended = false;
    let reason: "cycle" | "time" | "equipment" | "none" = "none";
    let message = "";

    if (parsed && MEM.currentCycles[parsed.procedure] !== undefined && MEM.currentCycles[parsed.procedure] !== null && parsed.cycle !== MEM.currentCycles[parsed.procedure]) {
      const current = `${parsed.procedure}${MEM.currentCycles[parsed.procedure]}`;
      amended = true; reason = "cycle";
      message = `${p.aid} Dept Invalid per Incorrect Cycle, Are you able to take the ${current} Dept?`;
      procedure = current;
    }

    if (parsed && MEM.restricted[parsed.procedure]) {
      const [replacement, replacementTransition] = MEM.restricted[parsed.procedure];
      amended = true; reason = "time";
      message = `${p.aid} Dept Invalid per time of day, Are you able to take the ${replacement} Dept?`;
      procedure = replacement; transition = replacementTransition;
    }

    if (!eq.rnav) {
      const current = procedure ? procedure.replace(/\d+$/, "") : "";
      const rvsmTransition = MEM.rvsmOnly.transitions[transition.replace(/\d+$/, "")];
      const newTransition = rvsmTransition ?? (MEM.rvsmOnly.transitions[current] ?? "");
      if (procedure !== MEM.rvsmOnly.departure || (newTransition && transition !== newTransition)) {
        amended = true; reason = "equipment";
        message = `${p.aid} Dept Invalid per Equipment Type, Are you able to take the ${MEM.rvsmOnly.departure} Dept?`;
        procedure = MEM.rvsmOnly.departure;
        transition = newTransition || transition;
      }
    }

    return { procedure, transition, amended, reason, message };
  };

  const routeAfterDeparture = (p: FlightPlan, dep: ReturnType<typeof buildDeparture>, parsed: ParsedDeparture | null): string[] => {
    const r = tokens(p.route);
    if (!r.length) return [];
    const start = parsed ? parsed.index + (parsed.transition ? 2 : 1) : 0;
    const remainder = r.slice(start);
    if (!dep.amended || !parsed) return remainder;
    const next = remainder[0];
    const isNavaid = !!MEM.navaids[next ?? ""];
    return isNavaid ? remainder : remainder;
  };

  const runValidation = (p: FlightPlan) => {
    const checks: Check[] = [];
    const eq = getEquipment(p.type);
    const jet = isJet(p.type);
    const parsed = parseDeparture(p.route);
    const depResult = buildDeparture(p, eq, parsed);
    const dir = direction(p.dep, p.dest);
    const filedAlt = altitudeNumber(p.alt);
    let suggested: number | null = null;

    checks.push(p.aid ? { status: "pass", title: "Callsign", detail: `${p.aid} accepted.` } : { status: "fail", title: "Callsign", detail: "Enter the aircraft callsign." });
    checks.push(p.type ? { status: "pass", title: "Aircraft", detail: `${p.type} identified as ${jet ? "jet" : "prop/turboprop"}; filed equipment ${eq.suffix || "unknown"}.` } : { status: "fail", title: "Aircraft", detail: "Enter the aircraft type and equipment suffix." });
    checks.push(p.dep === "KMEM" ? { status: "pass", title: "Departure", detail: "KMEM — Memphis International Airport." } : { status: "warn", title: "Departure", detail: `${p.dep || "[blank]"} entered. These rules are specifically configured for KMEM.` });
    checks.push(/^[A-Z]{4}$/.test(p.dest) ? { status: "pass", title: "Destination", detail: `${p.dest} — ${airportName(p.dest)}.` } : { status: "fail", title: "Destination", detail: "Use a four-letter ICAO destination." });

    if (eq.suffix) checks.push(eq.rnav ? { status: "pass", title: "Equipment capability", detail: `${eq.suffix} is treated as RNAV-capable for MEM procedure selection.` } : { status: "warn", title: "Equipment capability", detail: `${eq.suffix} is treated as RVSM-only/no RNAV; ELVIS4 logic applies.` });
    else checks.push({ status: "warn", title: "Equipment suffix", detail: "Suffix not recognized. Procedure eligibility may be incorrect." });

    if (parsed) {
      const cycle = MEM.currentCycles[parsed.procedure];
      if (cycle !== undefined && cycle !== null && cycle !== parsed.cycle) checks.push({ status: "warn", title: "Departure cycle", detail: `${parsed.raw} is not the configured current cycle. Suggested procedure: ${parsed.procedure}${cycle}.` });
      else checks.push({ status: "pass", title: "Departure procedure", detail: `${parsed.raw}${parsed.transition ? ` / ${parsed.transition}` : ""} parsed from the filed route.` });
    } else checks.push({ status: "fail", title: "Departure procedure", detail: "No recognizable SID was found in the route." });

    if (depResult.amended) checks.push({ status: "warn", title: "Departure amendment", detail: `${depResult.procedure}${depResult.transition ? ` / ${depResult.transition}` : ""} will be used in the generated clearance.` });
    else checks.push({ status: "pass", title: "Departure eligibility", detail: "No MEM departure amendment is required by the configured rules." });

    if (dir === "unknown") checks.push({ status: "warn", title: "Direction of flight", detail: "Airport longitude data is not configured for this pair; altitude direction cannot be verified." });
    else {
      const valid = validAltitudes(dir);
      const fl = filedAlt === null ? null : Math.round(filedAlt / 100);
      const okay = fl !== null && valid.includes(fl);
      suggested = suggestAltitude(fl, dir);
      checks.push(okay ? { status: "pass", title: "Direction / altitude", detail: `${dir === "west" ? "Westbound" : "Eastbound"}; ${altitudeText(p.alt)} is valid.` } : { status: "warn", title: "Direction / altitude", detail: `${dir === "west" ? "Westbound" : "Eastbound"} requires ${valid.map(v => `FL${v}`).join(", ")}. Suggested correction: ${suggested ? `FL${suggested}` : "enter a valid altitude"}.` });
    }

    return { checks, eq, jet, parsed, depResult, dir, suggested };
  };

  const renderChecks = (checks: Check[]) => {
    const el = $("fp-validation"); if (!el) return;
    el.innerHTML = checks.map(c => {
      const cls = c.status === "pass" ? "text-emerald-400" : c.status === "warn" ? "text-amber-400" : "text-red-400";
      const symbol = c.status === "pass" ? "✓" : c.status === "warn" ? "!" : "×";
      return `<div class="flex gap-4 px-5 py-4"><div class="w-5 shrink-0 text-center font-mono font-bold ${cls}">${symbol}</div><div><p class="text-sm font-semibold text-slate-200">${esc(c.title)}</p><p class="mt-1 text-sm leading-6 text-slate-400">${esc(c.detail)}</p></div></div>`;
    }).join("");
  };

  const craftText = (p: FlightPlan, result: ReturnType<typeof runValidation>): string => {
    const dest = airportName(p.dest);
    const routeParts = [];
    if (result.depResult.procedure) routeParts.push(`${result.depResult.procedure} departure`);
    if (result.depResult.transition) routeParts.push(`${result.depResult.transition} transition`);
    if (result.depResult.amended) {
      const remainder = routeAfterDeparture(p, result.depResult, result.parsed);
      const first = remainder[0];
      if (first && MEM.navaids[first]) routeParts.push(`direct ${first}`);
    }
    routeParts.push("then as filed");
    const initial = result.jet ? 5000 : 3000;
    const filed = altitudeText(p.alt);
    return [
      `C  Cleared to ${dest} Airport`,
      `R  ${routeParts.join(", ")}`,
      `A  Maintain ${initial}, expect ${filed || "[FILED ALT]"} one-zero mins after departure`,
      `F  ${MEM.departureFrequency}`,
      `T  Squawk xxxx`
    ].join("\n");
  };

  const renderCraft = (text: string) => {
    const el = $("fp-craft"); if (!el) return;
    el.innerHTML = text.split("\n").map(line => {
      const [letter, ...rest] = line.split("  ");
      return `<div><span class="font-bold text-[var(--control-blue-bright)]">${esc(letter)}</span><span class="ml-3">${esc(rest.join("  "))}</span></div>`;
    }).join("");
  };

  const readoutText = (p: FlightPlan, result: ReturnType<typeof runValidation>): string => {
    const craft = craftText(p, result);
    return `${result.depResult.message ? result.depResult.message + "\n\n" : ""}${craft}`;
  };

  const validate = () => {
    $("fp-error")?.classList.add("hidden");
    const p = getPlan();
    if (!p.aid || !p.type || !p.dest || !p.alt || !p.route) {
      const e = $("fp-error"); const m = $("fp-error-message");
      if (e && m) { m.textContent = "Enter callsign, aircraft/suffix, destination, altitude, and route before validating."; e.classList.remove("hidden"); }
      return;
    }
    const result = runValidation(p);
    renderChecks(result.checks);
    const craft = craftText(p, result);
    renderCraft(craft);
    $("fp-readout")!.textContent = readoutText(p, result);
    $("fp-filed-route")!.textContent = p.route;
    $("fp-corrected-route")!.textContent = craft.split("\n")[1].replace(/^R  /, "");

    const amendment = $("fp-amendment"); const amendmentText = $("fp-amendment-text");
    if (result.depResult.message || result.suggested) {
      if (amendment && amendmentText) {
        const messages: string[] = [];
        if (result.depResult.message) messages.push(result.depResult.message);
        if (result.suggested && result.dir !== "unknown" && altitudeNumber(p.alt) !== result.suggested * 100) {
          const filed = altitudeText(p.alt);
          const suggested = `FL${result.suggested}`;
          messages.push(`${p.aid} Your Altitude is incorrect per direction of flight, Would you like ${suggested}?`);
          messages[messages.length - 1] += ` Filed: ${filed}.`;
        }
        amendmentText.textContent = messages.join("\n");
        amendment.classList.remove("hidden");
      }
    } else amendment?.classList.add("hidden");
    $("fp-results")?.classList.remove("hidden");
  };

  const clearForm = () => {
    ["fp-aid", "fp-type", "fp-dest", "fp-alt", "fp-route"].forEach(id => { const e = $<HTMLInputElement | HTMLTextAreaElement>(id); if (e) e.value = ""; });
    const dep = $("fp-dep") as HTMLInputElement | null; if (dep) dep.value = "KMEM";
    $("fp-results")?.classList.add("hidden"); $("fp-error")?.classList.add("hidden");
  };

  const copy = async (id: string, buttonId: string) => {
    const text = $(id)?.textContent?.trim(); if (!text) return;
    try { await navigator.clipboard.writeText(text); const b = $(buttonId); if (!b) return; const old = b.textContent; b.textContent = "Copied"; setTimeout(() => b.textContent = old, 1200); }
    catch { const e = $("fp-error"); const m = $("fp-error-message"); if (e && m) { m.textContent = "Unable to copy to the clipboard."; e.classList.remove("hidden"); } }
  };

  $("fp-validate")?.addEventListener("click", validate);
  $("fp-clear")?.addEventListener("click", clearForm);
  $("fp-copy-craft")?.addEventListener("click", () => copy("fp-craft", "fp-copy-craft"));
  $("fp-copy-readout")?.addEventListener("click", () => copy("fp-readout", "fp-copy-readout"));
  $("fp-route")?.addEventListener("keydown", (e: KeyboardEvent) => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) { e.preventDefault(); validate(); } });
</script>
