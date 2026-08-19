---
title: IFR Flight Plan Validator
description: Validate a KMEM IFR flight plan against MEM departure, equipment, direction, altitude, and CRAFT rules.
updated: '2026-08-18T00:00:00'
hidden: false
---

<!-- ================================================================
     MEM FLIGHT PLAN / CRAFT VALIDATOR
     ================================================================
     Controller reference tool for KMEM IFR clearances.
     Features:
       - MEM departure validation
       - RNAV / RVSM equipment validation
       - SID cycle validation
       - Directional altitude validation
       - Dynamic airport name / latitude / longitude lookup
       - Pilot amendment instructions
       - Controller CRAFT generation
       - Collapsed validation details
       - Flight-plan paste/import/export
       - Editable departure frequency
     ================================================================ -->
<div class="mb-6 rounded-lg border border-yellow-400/50 bg-yellow-950/20 p-5">
  <p class="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
    Controller Reference Tool
  </p>
  <p class="mt-2 text-sm leading-6 text-yellow-200">
    This validator is configured for KMEM clearance procedures.
    Always verify current procedures, charts, NOTAMs, and applicable
    controller instructions before issuing a clearance.
  </p>
</div>
<!-- ================================================================
     INPUT PANEL
     ================================================================ -->
<div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
  <div class="border-b border-[var(--control-line)] px-5 py-4">
    <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
      MEM CRAFT Validator
    </p>
    <p class="mt-1 text-sm text-slate-400">
      Validate the filed flight plan and generate a controller-ready clearance.
    </p>
  </div>
  <!-- ============================================================
       QUICK FLIGHT PLAN PASTE
       ============================================================ -->
  <div class="border-b border-[var(--control-line)] p-5">
    <div class="mb-3 flex items-center justify-between gap-4">
      <div>
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--control-blue-bright)]">
          Quick Flight Plan
        </p>
        <p class="mt-1 text-xs text-slate-500">
          Paste or edit: CALL TYPE/EQ ARR FL RTE
        </p>
      </div>
      <button
        id="fp-copy-quick"
        type="button"
        class="border border-[var(--control-line-strong)] px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"
      >
        Copy
      </button>
    </div>
    <input
      id="fp-quick"
      type="text"
      placeholder="FDX904 B77L/L KPHX FL340 ZUMIT5 FOXOM FSM KF33C KA33Y ZUN EAGUL6"
      autocomplete="off"
      spellcheck="false"
      class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-3 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
    />
    <p class="mt-2 text-xs text-slate-500">
      Pasting here fills the fields below. Editing the fields updates this line automatically.
    </p>
  </div>
  <!-- ============================================================
       BASIC FLIGHT PLAN INFORMATION
       ============================================================ -->
  <div class="grid gap-5 p-5 sm:grid-cols-2 lg:grid-cols-3">
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Callsign
      </span>
      <input
        id="fp-callsign"
        type="text"
        placeholder="FDX904"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Aircraft / Equipment
      </span>
      <input
        id="fp-aircraft"
        type="text"
        placeholder="B77L/L"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Departure
      </span>
      <input
        id="fp-departure"
        type="text"
        value="KMEM"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Destination
      </span>
      <input
        id="fp-destination"
        type="text"
        placeholder="KPHX"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Filed Altitude
      </span>
      <input
        id="fp-altitude"
        type="text"
        placeholder="FL340"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
    </label>
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Departure Frequency
      </span>
      <input
        id="fp-departure-frequency"
        type="text"
        value="125.8"
        placeholder="125.8"
        autocomplete="off"
        class="w-full border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-2.5 font-mono text-sm uppercase text-white outline-none focus:border-[var(--control-blue-bright)]"
      />
      <p class="mt-1 text-xs text-slate-500">
        Leave blank for Departure offline.
      </p>
    </label>
  </div>
  <!-- ============================================================
       ROUTE
       ============================================================ -->
  <div class="border-t border-[var(--control-line)] p-5">
    <label class="block">
      <span class="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        Filed Route
      </span>
      <textarea
        id="fp-route"
        rows="5"
        placeholder="ZUMIT5 FOXOM FSM KF33C KA33Y ZUN EAGUL6"
        autocomplete="off"
        spellcheck="false"
        class="w-full resize-y border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] px-3 py-3 font-mono text-sm leading-6 text-white outline-none focus:border-[var(--control-blue-bright)]"
      ></textarea>
      <p class="mt-2 text-xs text-slate-500">
        Enter the filed route exactly as received.
      </p>
    </label>
    <div class="mt-4 flex flex-wrap gap-3">
      <button
        id="fp-validate"
        type="button"
        class="border border-[var(--control-blue)] bg-[var(--control-blue)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-[var(--control-blue-bright)]"
      >
        Validate Flight Plan
      </button>
      <button
        id="fp-clear"
        type="button"
        class="border border-[var(--control-line-strong)] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"
      >
        Clear
      </button>
    </div>
  </div>
</div>
<!-- ================================================================
     ERROR
     ================================================================ -->
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
<!-- ================================================================
     RESULTS
     ================================================================ -->
<div
  id="fp-results"
  class="mt-6 hidden space-y-5"
>
  <!-- ============================================================
       PILOT AMENDMENT
       ============================================================ -->
  <div
    id="fp-amendment"
    class="hidden border border-yellow-400/40 bg-yellow-950/20 p-5"
  >
    <div class="flex items-start gap-4">
      <div class="mt-0.5 text-yellow-400">
        !
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-yellow-400">
          Pilot Amendment Required
        </p>
        <p class="mt-2 text-sm text-yellow-100">
          Read the following to the pilot to request the amendment.
        </p>
        <div
          id="fp-amendment-text"
          class="mt-4 whitespace-pre-line border border-yellow-400/20 bg-black/20 p-4 font-mono text-sm leading-7 text-yellow-50"
        ></div>
        <button
          id="fp-copy-amendment"
          type="button"
          class="mt-4 border border-yellow-400/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-yellow-200 transition hover:border-yellow-300 hover:text-white"
        >
          Copy Amendment
        </button>
      </div>
    </div>
  </div>
  <!-- ============================================================
       VALIDATION SUMMARY
       ============================================================ -->
  <div
    class="border border-[var(--control-line)] bg-[var(--control-panel)]"
  >
    <button
      id="fp-validation-toggle"
      type="button"
      class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      aria-expanded="false"
      aria-controls="fp-validation-details"
    >
      <div>
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
          Validation
        </p>
        <p
          id="fp-validation-summary"
          class="mt-1 text-sm text-slate-400"
        >
          Validation details are collapsed.
        </p>
      </div>
      <span
        id="fp-validation-chevron"
        class="text-slate-500 transition-transform"
      >
        v
      </span>
    </button>
    <div
      id="fp-validation-details"
      class="hidden border-t border-[var(--control-line)]"
    >
      <div
        id="fp-validation"
        class="divide-y divide-[var(--control-line)]"
      ></div>
    </div>
  </div>
  <!-- ============================================================
       CRAFT
       ============================================================ -->
  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="flex items-center justify-between gap-4 border-b border-[var(--control-line)] px-5 py-4">
      <div>
        <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
          CRAFT
        </p>
        <p class="mt-1 text-sm text-slate-400">
          Controller clearance reference.
        </p>
      </div>
      <button
        id="fp-copy-craft"
        type="button"
        class="border border-[var(--control-line-strong)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300 transition hover:border-[var(--control-blue-bright)] hover:text-white"
      >
        Copy
      </button>
    </div>
    <div class="p-5">
      <div
        id="fp-craft"
        class="whitespace-pre-line overflow-x-auto border border-[var(--control-line-strong)] bg-[var(--control-navy-deep)] p-4 font-mono text-sm leading-7 text-slate-200"
      ></div>
    </div>
  </div>
  <!-- ============================================================
       ROUTE COMPARISON
       ============================================================ -->
  <div class="border border-[var(--control-line)] bg-[var(--control-panel)]">
    <div class="border-b border-[var(--control-line)] px-5 py-4">
      <p class="text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--control-blue-bright)]">
        Route Comparison
      </p>
    </div>
    <div class="grid gap-4 p-5 md:grid-cols-2">
      <div>
        <p class="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Filed Route
        </p>
        <div
          id="fp-filed-route"
          class="break-words font-mono text-sm leading-7 text-slate-300"
        ></div>
      </div>
      <div>
        <p class="mb-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
          Clearance Route
        </p>
        <div
          id="fp-corrected-route"
          class="break-words font-mono text-sm leading-7 text-slate-300"
        ></div>
      </div>
    </div>
  </div>
</div>

<script>
/* ================================================================
   MEM CRAFT / FLIGHT PLAN VALIDATOR
   Plain JavaScript - no TypeScript
   ================================================================ */


/* ================================================================
   CONFIGURATION
   ================================================================ */

const MEM_RULES = {

  departureFrequency: "125.8",

  jetInitialAltitude: 5000,

  propInitialAltitude: 3000,

  restrictedDepartures: {
    AUTMN: ["CHLDR5", "ANSWA"],
    BINKY: ["PIEPE6", "IBUFY"],
    GENEH: ["CRSON7", "HUMMS"],
    GMBUD: ["BBKING7", "KERMI"],
    GRRIZ: ["JTEEE5", "ODATE"],
    HOTRD: ["ZUMIT", "JTEEE"],
    NIKEI: ["ZUMIT", "FOXOM"],
    OLEMS: ["PIEPE6", "IBUFY"]
  },

  rvsmOnly: {

    departure: "ELVIS4",

    transitions: {
      AZONE: "ETWOO",
      BBKND: "ETREE",
      CHLDR: "EONEE",
      CRSON: "NFOUR",
      DUCKZ: "WTWOO",
      GOETZ: "EONEE",
      JTEEE: "NTWOO",
      PIEPE: "STWOO",
      SELPH: "NTREE",
      ZUMIT: "WTREE"
    }

  },

  currentCycles: {
		AZONE: 7,
    BBKING: 7,
		CHLDR: 5,
		CRSON: 7,
		DUCKZ: 5,
		ELVIS: 4,
		GOETZ: 7,
		JTEEE: 5,
		PIEPE: 6,
		SELPH: 7,
		ZUMIT: 5,
	}
};


/* ================================================================
   AIRPORT API
   ================================================================ */

const AIRPORT_API =
  "https://ryanburnette.github.io/airports-api/icao/";

const airportCache = new Map();


async function getAirportInfo(icao) {

  const code =
    normalize(icao);

  if (airportCache.has(code)) {
    return airportCache.get(code);
  }

  const url =
    AIRPORT_API +
    encodeURIComponent(code.toLowerCase()) +
    ".json";

  const response =
    await fetch(url, {
      method: "GET",
      cache: "force-cache"
    });

  if (!response.ok) {

    throw new Error(
      "Airport " +
      code +
      " could not be found."
    );

  }

  const data =
    await response.json();

  if (
    !data ||
    typeof data.latitude !== "number" ||
    typeof data.longitude !== "number"
  ) {

    throw new Error(
      "Airport " +
      code +
      " returned incomplete location data."
    );

  }

  const airport = {

    icao:
      normalize(
        data.icao || code
      ),

    name:
      data.airport_name ||
      data.name ||
      code,

    city:
      data.city ||
      "",

    latitude:
      Number(data.latitude),

    longitude:
      Number(data.longitude)

  };

  airportCache.set(
    code,
    airport
  );

  return airport;

}


/* ================================================================
   BASIC HELPERS
   ================================================================ */

function $(id) {
  return document.getElementById(id);
}


function normalize(value) {

  return String(value || "")
    .trim()
    .toUpperCase();

}


function getTokens(route) {

  return normalize(route)
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .filter(Boolean);

}


/* ================================================================
   AIRCRAFT
   ================================================================ */

function parseAircraft(value) {

  const normalized =
    normalize(value);

  const slashIndex =
    normalized.indexOf("/");

  if (slashIndex === -1) {

    return {
      model: normalized,
      suffix: ""
    };

  }

  return {

    model:
      normalized.substring(
        0,
        slashIndex
      ),

    suffix:
      normalized.substring(
        slashIndex
      )

  };

}


/*
   Aircraft classification.

   This deliberately defaults UNKNOWN rather than
   automatically treating an unfamiliar aircraft as
   a prop. That prevents accidentally issuing 3000
   to an aircraft that should receive 5000.
*/

function getAircraftType(aircraft) {

  const model =
    parseAircraft(aircraft).model;


  const jetPatterns = [

    /^A3[0-9]{2}/,
    /^A35/,
    /^A38/,

    /^B7[0-9]{2}/,
    /^B77/,
    /^B78/,
    /^B79/,

    /^B73/,
    /^B74/,
    /^B75/,
    /^B76/,

    /^MD/,
    /^DC9/,
    /^DC10/,
    /^DC11/,

    /^CRJ/,
    /^E1[0-9]{2}/,
    /^E2[0-9]{2}/,
    /^ERJ/,

    /^GLF/,
    /^G[0-9]{3}/,

    /^CL[0-9]/,
    /^C5[0-9]{2}/,
    /^C6[0-9]{2}/,
    /^C7[0-9]{2}/,

    /^FA[0-9]/,
    /^F2TH/,
    /^F900/

  ];


  if (
    jetPatterns.some(
      function(pattern) {
        return pattern.test(model);
      }
    )
  ) {

    return "jet";

  }


  const propPatterns = [

    /^C1[0-9]{2}/,
    /^C2[0-9]{2}/,
    /^C3[0-9]{2}/,

    /^BE[0-9]/,
    /^PC[0-9]/,
    /^PA[0-9]/,
    /^DA[0-9]/,

    /^AT[0-9]/,
    /^DHC/,
    /^DH8/,
    /^SF34/,
    /^JS3[0-9]/

  ];


  if (
    propPatterns.some(
      function(pattern) {
        return pattern.test(model);
      }
    )
  ) {

    return "prop";

  }


  return "unknown";

}



function isJetAircraft(aircraft) {
  return getAircraftType(aircraft) === "jet";
}



/* ================================================================
   EQUIPMENT
   ================================================================ */

function getEquipment(aircraft) {

  const suffix =
    parseAircraft(aircraft).suffix;


  const definitions = {

    "/W": {
      suffix: "/W",
      rvsm: true,
      rnav: false,
      gnss: false
    },

    "/Y": {
      suffix: "/Y",
      rvsm: true,
      rnav: true,
      gnss: false
    },

    "/Z": {
      suffix: "/Z",
      rvsm: true,
      rnav: true,
      gnss: false
    },

    "/L": {
      suffix: "/L",
      rvsm: true,
      rnav: true,
      gnss: true
    },

    "/G": {
      suffix: "/G",
      rvsm: true,
      rnav: true,
      gnss: true
    }

  };


  return (
    definitions[suffix] || {

      suffix: suffix,
      rvsm: false,
      rnav: false,
      gnss: false

    }
  );

}


/* ================================================================
   SID PARSING
   ================================================================ */

function looksLikeSID(token) {

  return /^[A-Z0-9]{3,8}[0-9]$/.test(
    token
  );

}


function parseSID(route) {

  const tokens =
    getTokens(route);

  const index =
    tokens.findIndex(
      looksLikeSID
    );


  if (index === -1) {
    return null;
  }


  const raw =
    tokens[index];


  const match =
    raw.match(
      /^([A-Z0-9]+?)([0-9])$/
    );


  if (!match) {
    return null;
  }


  let transition =
    "";


  if (
    tokens[index + 1] &&
    !looksLikeSID(
      tokens[index + 1]
    )
  ) {

    transition =
      tokens[index + 1];

  }


  return {

    raw: raw,

    procedure:
      match[1],

    cycle:
      Number(match[2]),

    transition:
      transition,

    index:
      index

  };

}


/* ================================================================
   ALTITUDE
   ================================================================ */

function parseAltitude(value) {

  const altitude =
    normalize(value);


  if (
    /^FL\d{2,3}$/.test(
      altitude
    )
  ) {

    return (
      Number(
        altitude.substring(2)
      ) * 100
    );

  }


  if (
    /^\d{3,5}$/.test(
      altitude
    )
  ) {

    return Number(altitude);

  }


  return null;

}


function altitudeToFlightLevel(
  altitude
) {

  if (
    altitude === null ||
    altitude === undefined
  ) {

    return null;

  }


  return Math.round(
    altitude / 100
  );

}


function formatFlightLevel(
  altitude
) {

  const flightLevel =
    altitudeToFlightLevel(
      altitude
    );


  if (
    flightLevel === null
  ) {

    return "[FILED ALT]";

  }


  return "FL" + flightLevel;

}


/* ================================================================
   DIRECTION
   ================================================================ */

function getDirection(
  departureAirport,
  destinationAirport
) {

  if (
    !departureAirport ||
    !destinationAirport
  ) {

    return "unknown";

  }


  const departureLongitude =
    Number(
      departureAirport.longitude
    );

  const destinationLongitude =
    Number(
      destinationAirport.longitude
    );


  if (
    !Number.isFinite(
      departureLongitude
    ) ||
    !Number.isFinite(
      destinationLongitude
    )
  ) {

    return "unknown";

  }


  if (
    departureLongitude <
    destinationLongitude
  ) {

    return "east";

  }


  if (
    departureLongitude >
    destinationLongitude
  ) {

    return "west";

  }


  return "unknown";

}


/* ================================================================
   VALID ALTITUDES
   ================================================================ */

function getValidAltitudes(direction) {
  let altitudes = [];

  if (direction === "west") {
    // 180 through 400
    for (let fl = 180; fl <= 400; fl += 20) altitudes.push(fl);
    // 430 and above
    for (let fl = 430; fl <= 600; fl += 20) altitudes.push(fl);
  } else if (direction === "east") {
    // 190 through 390
    for (let fl = 190; fl <= 390; fl += 20) altitudes.push(fl);
  
    // 410, 430? No — 410 is east, then pattern flips
    altitudes.push(410);
    for (let fl = 450; fl <= 610; fl += 20) altitudes.push(fl);
  }

  return altitudes;
}


function suggestAltitudes(
  filedFL,
  direction
) {

  const valid =
    getValidAltitudes(
      direction
    );


  if (
    filedFL === null ||
    valid.length === 0
  ) {

    return [];

  }


  return valid
    .map(
      function(level) {

        return {

          level: level,

          difference:
            Math.abs(
              level -
              filedFL
            )

        };

      }
    )
    .sort(
      function(a, b) {

        return (
          a.difference -
          b.difference
        );

      }
    )
    .slice(0, 2)
    .map(
      function(item) {

        return item.level;

      }
    );

}


/* ================================================================
   DEPARTURE VALIDATION
   ================================================================ */

function determineDeparture(
  plan,
  equipment,
  parsed
) {

  let procedure =
    parsed
      ? parsed.raw
      : "";

  let transition =
    parsed
      ? parsed.transition
      : "";

  let amended =
    false;

  const amendments = [];


  /* Current SID cycle */

  if (parsed) {

    const currentCycle =
      MEM_RULES.currentCycles[
        parsed.procedure
      ];


    if (
      currentCycle !== undefined &&
      currentCycle !== null &&
      parsed.cycle !== currentCycle
    ) {

      procedure =
        parsed.procedure +
        currentCycle;

      amended =
        true;


      amendments.push({

        type: "cycle",

        message:
          plan.callsign +
          " Dept Invalid per Incorrect Cycle, " +
          "Are you able to take the " +
          procedure +
          " Dept?"

      });

    }

  }


  /* RNAV restricted departure */

  if (
    parsed &&
    equipment.rnav
  ) {

    const replacement =
      MEM_RULES
        .restrictedDepartures[
          parsed.procedure
        ];


    if (replacement) {

      procedure =
        replacement[0];

      transition =
        replacement[1];

      amended =
        true;


      amendments.push({

        type: "time",

        message:
          plan.callsign +
          " Dept Invalid per time of day, " +
          "Are you able to take the " +
          procedure +
          " Dept?"

      });

    }

  }


  /*
     RVSM-only aircraft.

     These use ELVIS4 and the mapped
     transition.
  */

  if (
    !equipment.rnav
  ) {

    const transitionKey =
      transition.replace(
        /\d+$/,
        ""
      );


    const replacementTransition =
      MEM_RULES
        .rvsmOnly
        .transitions[
          transitionKey
        ];


    procedure =
      MEM_RULES
        .rvsmOnly
        .departure;


    if (
      replacementTransition
    ) {

      transition =
        replacementTransition;

    }


    amended =
      true;


    amendments.push({

      type: "equipment",

      message:
        plan.callsign +
        " Dept Invalid per Equipment Type, " +
        "Are you able to take the " +
        procedure +
        " Dept?"

    });

  }


  return {

    procedure:
      procedure,

    transition:
      transition,

    amended:
      amended,

    amendments:
      amendments

  };

}


/* ================================================================
   ROUTE HELPERS
   ================================================================ */

function getRouteAfterSID(
  plan,
  parsed
) {

  const route =
    getTokens(
      plan.route
    );


  if (!parsed) {
    return route;
  }


  let start =
    parsed.index + 1;


  if (
    parsed.transition
  ) {

    start++;

  }


  return route.slice(
    start
  );

}


function getAmendmentDirectFix(
  plan,
  parsed,
  amended
) {

  if (
    !amended ||
    !parsed
  ) {

    return "";

  }


  const remaining =
    getRouteAfterSID(
      plan,
      parsed
    );


  return (
    remaining[0] ||
    ""
  );

}


/* ================================================================
   FREQUENCY
   ================================================================ */

function formatDepartureFrequency(
  value
) {

  const frequency =
    String(
      value || ""
    ).trim();


  if (!frequency) {

    return "Departure offline";

  }


  return (
    "Departure frequency " +
    frequency.replace(
      ".",
      " point "
    )
  );

}


/* ================================================================
   CRAFT
   ================================================================ */

function generateCRAFT(
  plan,
  departure,
  airport,
  aircraftType,
  parsed
) {

  const routeParts = [];
  if (departure.procedure) routeParts.push(departure.procedure + " departure");
  if (departure.transition) routeParts.push(departure.transition + " transition");
  
	const directFix = getAmendmentDirectFix(plan,parsed,departure.amended);
  if (directFix) {
    routeParts.push("direct " + directFix);
  }


  routeParts.push("then as filed");

  let initialAltitude;
  if (aircraftType === "jet") {
    initialAltitude = MEM_RULES.jetInitialAltitude;
  } else if (aircraftType === "prop") {
    initialAltitude = MEM_RULES.propInitialAltitude;
  } else {
    initialAltitude = "[VERIFY JET/PROP]";
  }


  const filedAltitude = formatFlightLevel(parseAltitude(plan.altitude));
  const airportName = airport.name || airport.icao;

  return [
		"Cleared to " + airportName,
		routeParts.join(", ") + ",",
    "Maintain " + initialAltitude + ", expect " + filedAltitude + " one-zero minutes after departure,",
    formatDepartureFrequency(plan.departureFrequency) + ",",
    "Squawk xxxx"

  ].join("\n");

}


/* ================================================================
   QUICK FLIGHT PLAN
   ================================================================ */

function parseQuickPlan(
  value
) {
  const tokens = getTokens(value);

  if (tokens.length < 5) throw new Error("Quick flight plan must contain CALLSIGN, AIRCRAFT/EQUIPMENT, DESTINATION, ALTITUDE, and ROUTE.");

  const callsign = tokens[0];
  const aircraft = tokens[1].replace(/^H\//, "");
	const destination = tokens[2];
  const altitude = tokens[3];
  const route = tokens.slice(4).join(" ");

	if (!/^[A-Z0-9]+$/.test(callsign)) throw new Error("Invalid callsign.");
  if (!/^[A-Z0-9]+\/[A-Z]$/.test(aircraft)) throw new Error("Aircraft/equipment must look like B77L/L.");
  if (!/^[A-Z]{4}$/.test(destination)) throw new Error("Destination must be a four-letter ICAO code.");
  if (!/^FL\d{2,3}$/.test(altitude) && !/^\d{3,5}$/.test(altitude)) throw new Error("Altitude must look like FL340 or 34000.");

  return {
    callsign: callsign,
    aircraft: aircraft,
    destination: destination,
		altitude: altitude,
		route: route
  };

}
/* ================================================================
   URL FLIGHT PLAN IMPORT
   Supports:
     ?fp=FDX904 B77L/L KPHX FL340 ZUMIT5 FOXOM FSM KF33C KA33Y ZUN EAGUL6

   The flight plan is loaded into the form and automatically validated.
   ================================================================ */

function importFlightPlanFromURL() {
  const params = new URLSearchParams(window.location.search);
  const fp = params.get("fp");

  if (!fp) return false;
  const value = fp.trim();

  if (!value) return false;

  try {
    const plan = parseQuickPlan(value);
		$("fp-quick").value = value.toUpperCase();
		$("fp-callsign").value = plan.callsign;
		$("fp-aircraft").value = plan.aircraft;
		$("fp-destination").value = plan.destination;
		$("fp-altitude").value = plan.altitude;
		$("fp-route").value = plan.route;
		$("fp-departure").value = "KMEM";
		$("fp-departure-frequency").value = MEM_RULES.departureFrequency;
		validate();
    return true;

  } catch (error) {
    $("fp-error-message").textContent = "Unable to import flight plan from URL: " + error.message;
    $("fp-error").classList.remove("hidden");

    return false;

  }

}

function buildQuickPlan() {

  const callsign = normalize($("fp-callsign").value);
  const aircraft = normalize( $("fp-aircraft").value);
  const destination = normalize($("fp-destination").value);
  const altitude = normalize($("fp-altitude").value);
  const route = normalize($("fp-route").value);

  if (
    !callsign ||
    !aircraft ||
    !destination ||
    !altitude ||
    !route
  ) {

    return "";

  }


  return [
    callsign,
    aircraft,
    destination,
    altitude,
    route
  ].join(" ");

}


function syncQuickPlan() {
  const quick = $("fp-quick");
  if (!quick) return;
  quick.value = buildQuickPlan();

}


/* ================================================================
   MAIN VALIDATION
   ================================================================ */

async function validateFlightPlan(
  plan
) {

  const results = [];


  /* Airport lookup */

  let departureAirport;
  let destinationAirport;

  [
    departureAirport,
    destinationAirport
  ] = await Promise.all([
    getAirportInfo(plan.departure),
    getAirportInfo(plan.destination)
  ]);


  results.push({

    status: "pass",

    title: "Airport data",

    detail:
      departureAirport.icao +
      " → " +
      destinationAirport.icao +
      " | " +
      departureAirport.name +
      " → " +
      destinationAirport.name

  });


  /* Aircraft */

  const aircraftType =
    getAircraftType(
      plan.aircraft
    );


  const aircraftModel =
    parseAircraft(
      plan.aircraft
    ).model;


  if (
    aircraftType === "unknown"
  ) {

    results.push({

      status: "fail",

      title: "Aircraft",

      detail:
        aircraftModel +
        " could not be classified as jet or prop."

    });

  } else {

    results.push({

      status: "pass",

      title: "Aircraft",

      detail:
        aircraftModel +
        " identified as " +
        aircraftType +
        " — initial altitude " +
        (
          aircraftType === "jet"
            ? "5000"
            : "3000"
        )

    });

  }


  /* Equipment */

  const equipment =
    getEquipment(
      plan.aircraft
    );


  if (
    equipment.rnav
  ) {

    results.push({

      status: "pass",

      title: "Equipment",

      detail:
        equipment.suffix +
        " is treated as RNAV-capable."

    });

  } else {

    results.push({

      status: "warn",

      title: "Equipment",

      detail:
        (
          equipment.suffix ||
          "No recognized suffix"
        ) +
        " is treated as RVSM-only/non-RNAV."

    });

  }


  /* SID */

  const parsedSID =
    parseSID(
      plan.route
    );


  if (
    parsedSID
  ) {

    const currentCycle =
      MEM_RULES
        .currentCycles[
          parsedSID.procedure
        ];


    if (
      currentCycle !== undefined &&
      currentCycle !== null &&
      parsedSID.cycle !== currentCycle
    ) {

      results.push({

        status: "warn",

        title: "SID cycle",

        detail:
          parsedSID.raw +
          " is not the configured current cycle. Current: " +
          parsedSID.procedure +
          currentCycle

      });

    } else {

      results.push({

        status: "pass",

        title: "SID",

        detail:
          parsedSID.raw +
          (
            parsedSID.transition
              ? " / " +
                parsedSID.transition
              : ""
          )

      });

    }

  } else {

    results.push({

      status: "fail",

      title: "SID",

      detail:
        "No recognizable departure procedure was found."

    });

  }


  /* Departure */

  const departure =
    determineDeparture(
      plan,
      equipment,
      parsedSID
    );


  if (
    departure.amended
  ) {

    results.push({

      status: "warn",

      title: "Departure",

      detail:
        departure.procedure +
        (
          departure.transition
            ? " / " +
              departure.transition
            : ""
        ) +
        " required."

    });

  } else {

    results.push({

      status: "pass",

      title: "Departure",

      detail:
        "Filed departure is acceptable."

    });

  }


  /* Direction */

  const direction =
    getDirection(
      departureAirport,
      destinationAirport
    );


  const filedAltitude =
    parseAltitude(
      plan.altitude
    );


  const filedFL =
    altitudeToFlightLevel(
      filedAltitude
    );


  const validAltitudes =
    getValidAltitudes(
      direction
    );


  const suggestedAltitudes =
    suggestAltitudes(
      filedFL,
      direction
    );


  if (
    direction === "unknown"
  ) {

    results.push({

      status: "warn",

      title: "Direction",

      detail:
        "Unable to determine direction from airport coordinates."

    });

  } else if (
    filedFL !== null &&
    validAltitudes.includes(
      filedFL
    )
  ) {

    results.push({

      status: "pass",

      title: "Altitude",

      detail:
        (
          direction === "east"
            ? "Eastbound"
            : "Westbound"
        ) +
        " — " +
        formatFlightLevel(
          filedAltitude
        ) +
        " is valid."

    });

  } else {

    results.push({

      status: "warn",

      title: "Altitude",

      detail:
        (
          direction === "east"
            ? "Eastbound"
            : "Westbound"
        ) +
        " altitude is invalid. Suggested: " +
        (
          suggestedAltitudes
            .map(
              function(level) {
                return "FL" + level;
              }
            )
            .join(" or ")
        )

    });

  }


  /* CRAFT */

  const craft =
    generateCRAFT(
      plan,
      departure,
      destinationAirport,
      aircraftType,
      parsedSID
    );


  return {

    results:
      results,

    equipment:
      equipment,

    aircraftType:
      aircraftType,

    direction:
      direction,

    filedFL:
      filedFL,

    suggestedAltitudes:
      suggestedAltitudes,

    departure:
      departure,

    parsedSID:
      parsedSID,

    airport:
      destinationAirport,

    craft:
      craft

  };

}


/* ================================================================
   AMENDMENT MESSAGE
   ================================================================ */

function buildAmendmentMessage(
  plan,
  validation
) {

  const messages = [];


  validation
    .departure
    .amendments
    .forEach(
      function(item) {

        messages.push(
          item.message
        );

      }
    );


  if (
    validation.direction !== "unknown" &&
    validation.suggestedAltitudes.length &&
    !getValidAltitudes(
      validation.direction
    ).includes(
      validation.filedFL
    )
  ) {

    const suggestions =validation.suggestedAltitudes;

    if (
      suggestions.length >= 2
    ) {
			suggestions.sort((a, b) => a - b);
      messages.push(plan.callsign + " Your Altitude is incorrect per direction of flight, " + "Would you like FL" + suggestions[0] + " or FL" + suggestions[1] + "?");

    } else if (
      suggestions.length === 1
    ) {

      messages.push(

        plan.callsign +
        " Your Altitude is incorrect per direction of flight, " +
        "Would you like FL" +
        suggestions[0] +
        "?"

      );

    }

  }


  return messages.join(
    "\n\n"
  );

}


/* ================================================================
   RENDER VALIDATION
   ================================================================ */

function renderValidation(
  results
) {

  const container =
    $("fp-validation");


  container.innerHTML =
    results
      .map(
        function(result) {

          const color =
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

              <div class="w-5 shrink-0 text-center font-mono font-bold ${color}">
                ${symbol}
              </div>

              <div>

                <p class="text-sm font-semibold text-slate-200">
                  ${result.title}
                </p>

                <p class="mt-1 text-sm leading-6 text-slate-400">
                  ${result.detail}
                </p>

              </div>

            </div>

          `;

        }
      )
      .join("");

}


function renderValidationSummary(
  results
) {

  const summary =
    $("fp-validation-summary");


  const warnings =
    results.filter(
      function(result) {
        return result.status === "warn";
      }
    ).length;


  const failures =
    results.filter(
      function(result) {
        return result.status === "fail";
      }
    ).length;


  if (
    failures === 0 &&
    warnings === 0
  ) {

    summary.textContent =
      "✓ Flight plan passed all configured checks.";

    summary.className =
      "mt-1 text-sm text-emerald-400";

    return;

  }


  const parts = [];


  if (
    warnings
  ) {

    parts.push(
      warnings +
      (
        warnings === 1
          ? " warning"
          : " warnings"
      )
    );

  }


  if (
    failures
  ) {

    parts.push(
      failures +
      (
        failures === 1
          ? " failure"
          : " failures"
      )
    );

  }


  summary.textContent = parts.join(" • ") + " — expand for details.";

  summary.className =
    "mt-1 text-sm text-amber-400";

}


/* ================================================================
   RENDER AMENDMENT
   ================================================================ */

function renderAmendment(
  plan,
  validation
) {

  const container =
    $("fp-amendment");

  const message =
    $("fp-amendment-text");


  const amendment =
    buildAmendmentMessage(
      plan,
      validation
    );


  if (!amendment) {

    container.classList.add("hidden");

    message.textContent = "";

    return;

  }


  message.textContent =
    amendment;


  container.classList.remove(
    "hidden"
  );

}


/* ================================================================
   RENDER CRAFT
   ================================================================ */

function renderCRAFT(
  craft
) {

  $("fp-craft").textContent =
    craft;

}


/* ================================================================
   ROUTE COMPARISON
   ================================================================ */

function renderRoute(
  plan,
  validation
) {

  $("fp-filed-route").textContent =
    plan.route;


  const parts = [];


  if (
    validation.departure.procedure
  ) {

    parts.push(
      validation.departure.procedure
    );

  }


  if (
    validation.departure.transition
  ) {

    parts.push(
      validation.departure.transition
    );

  }


  const directFix =
    getAmendmentDirectFix(
      plan,
      validation.parsedSID,
      validation.departure.amended
    );


  if (
    directFix
  ) {

    parts.push(
      "direct " +
      directFix
    );

  }


  parts.push(
    "then as filed"
  );


  $("fp-corrected-route").textContent =
    parts.join(
      " "
    );

}


/* ================================================================
   MAIN BUTTON
   ================================================================ */

async function validate() {

  const error =
    $("fp-error");

  const errorMessage =
    $("fp-error-message");


  error.classList.add(
    "hidden"
  );


  const plan = {

    callsign:
      normalize(
        $("fp-callsign").value
      ),

    aircraft:
      normalize(
        $("fp-aircraft").value
      ),

    departure:
      normalize(
        $("fp-departure").value ||
        "KMEM"
      ),

    destination:
      normalize(
        $("fp-destination").value
      ),

    altitude:
      normalize(
        $("fp-altitude").value
      ),

    route:
      normalize(
        $("fp-route").value
      ),

    departureFrequency:
      $("fp-departure-frequency")
        .value
        .trim()

  };


  if (
    !plan.callsign ||
    !plan.aircraft ||
    !plan.destination ||
    !plan.altitude ||
    !plan.route
  ) {

    errorMessage.textContent =
      "Please enter callsign, aircraft/equipment, destination, altitude, and route.";

    error.classList.remove(
      "hidden"
    );

    return;

  }


  const button = $("fp-validate");
  const originalText = button.textContent;
  button.disabled = true;
  button.textContent = "Looking Up Airports...";
  try {
    const validation =
      await validateFlightPlan(
        plan
      );


    renderValidation(
      validation.results
    );


    renderValidationSummary(
      validation.results
    );


    renderAmendment(
      plan,
      validation
    );


    renderCRAFT(
      validation.craft
    );


    renderRoute(
      plan,
      validation
    );


    $("fp-results")
      .classList.remove(
        "hidden"
      );


    $("fp-validation-details")
      .classList.add(
        "hidden"
      );


    $("fp-validation-toggle")
      .setAttribute(
        "aria-expanded",
        "false"
      );


    $("fp-validation-chevron")
      .classList.remove(
        "rotate-180"
      );

  } catch (error) {

    errorMessage.textContent =
      error.message ||
      "Unable to validate the flight plan.";

    $("fp-error")
      .classList.remove(
        "hidden"
      );

  } finally {

    button.disabled =
      false;

    button.textContent =
      originalText;

  }

}


/* ================================================================
   QUICK PLAN IMPORT
   ================================================================ */

function importQuickPlan() {

  const value =
    $("fp-quick")
      .value
      .trim();


  if (!value) return;
  try {

    const plan = parseQuickPlan(value);


    $("fp-callsign").value =
      plan.callsign;

    $("fp-aircraft").value =
      plan.aircraft;

    $("fp-destination").value =
      plan.destination;

    $("fp-altitude").value =
      plan.altitude;

    $("fp-route").value =
      plan.route;


  } catch (error) {

    $("fp-error-message")
      .textContent =
      error.message;


    $("fp-error")
      .classList.remove(
        "hidden"
      );

  }

}


/* ================================================================
   CLEAR
   ================================================================ */

function clearForm() {

  [
    "fp-callsign",
    "fp-aircraft",
    "fp-destination",
    "fp-altitude",
    "fp-route"
  ].forEach(
    function(id) {

      $(id).value =
        "";

    }
  );


  $("fp-departure").value =
    "KMEM";


  $("fp-departure-frequency").value =
    MEM_RULES.departureFrequency;


  $("fp-quick").value =
    "";


  $("fp-results")
    .classList.add(
      "hidden"
    );


  $("fp-error")
    .classList.add(
      "hidden"
    );

}


/* ================================================================
   COPY
   ================================================================ */

async function copyElement(
  elementId,
  buttonId
) {

  const element =
    $(elementId);

  const button =
    $(buttonId);


  if (!element) {
    return;
  }


  const text =
    element.value !== undefined
      ? element.value.trim()
      : element.textContent.trim();


  if (!text) return;



  try {
    await navigator.clipboard.writeText(text);
    if (button) {

      const original =
        button.textContent;


      button.textContent =
        "Copied";


      setTimeout(
        function() {

          button.textContent =
            original;

        },
        1200
      );

    }

  } catch (error) {

    $("fp-error-message")
      .textContent =
      "Unable to copy to clipboard.";


    $("fp-error")
      .classList.remove(
        "hidden"
      );

  }

}


/* ================================================================
   COLLAPSED VALIDATION
   ================================================================ */

function toggleValidation() {

  const details =
    $("fp-validation-details");

  const toggle =
    $("fp-validation-toggle");

  const chevron =
    $("fp-validation-chevron");


  const expanded =
    toggle.getAttribute(
      "aria-expanded"
    ) === "true";


  toggle.setAttribute(
    "aria-expanded",
    String(!expanded)
  );


  details.classList.toggle(
    "hidden",
    expanded
  );


  chevron.classList.toggle(
    "rotate-180",
    !expanded
  );

}


/* ================================================================
   INITIALIZATION
   ================================================================ */

function initializeValidator() {

  $("fp-validate")
    .addEventListener(
      "click",
      validate
    );


  $("fp-clear")
    .addEventListener(
      "click",
      clearForm
    );


  $("fp-validation-toggle")
    .addEventListener(
      "click",
      toggleValidation
    );


  $("fp-copy-craft")
    .addEventListener(
      "click",
      function() {

        copyElement(
          "fp-craft",
          "fp-copy-craft"
        );

      }
    );


  $("fp-copy-amendment")
    .addEventListener(
      "click",
      function() {

        copyElement(
          "fp-amendment-text",
          "fp-copy-amendment"
        );

      }
    );


  $("fp-copy-quick")
    .addEventListener(
      "click",
      function() {

        copyElement(
          "fp-quick",
          "fp-copy-quick"
        );

      }
    );


  $("fp-quick")
    .addEventListener(
      "paste",
      function() {

        setTimeout(
          importQuickPlan,
          0
        );

      }
    );


  $("fp-quick")
    .addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Enter"
        ) {

          event.preventDefault();

          importQuickPlan();

        }

      }
    );


  [
    "fp-callsign",
    "fp-aircraft",
    "fp-destination",
    "fp-altitude",
    "fp-route"
  ].forEach(
    function(id) {

      $(id)
        .addEventListener(
          "input",
          syncQuickPlan
        );

    }
  );


  $("fp-route")
    .addEventListener(
      "keydown",
      function(event) {

        if (
          event.key === "Enter" &&
          (
            event.ctrlKey ||
            event.metaKey
          )
        ) {

          event.preventDefault();

          validate();

        }

      }
    );
	importFlightPlanFromURL();
}


if (
  document.readyState === "loading"
) {

  document.addEventListener(
    "DOMContentLoaded",
    initializeValidator
  );

} else {
  initializeValidator();
}
</script>
