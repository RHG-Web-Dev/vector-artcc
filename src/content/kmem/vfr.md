---
title: VFR Clearances
description: KMEM VFR procedures, information requirements, altitudes, and phraseology.
updated: '2026-08-24'
order: 3
---

# KMEM VFR Ground

## General Information

### VFR Altitudes

- **VFR Flight:** At or below 2,500
- **Pattern:** 1,300 Props / 1,800 Jets

## VFR Request Flow

```text
Aircraft Type?
│
└─ No → "Say aircraft type."

Pattern Work?
│
├─ YES
│  └─ Aircraft type only
│
└─ NO → Flight Following?
     │
     ├─ YES (+FF)
     │  ├─ Aircraft type
     │  ├─ Destination
     │  └─ Requested VFR altitude
     │
     └─ NO (-FF)
        ├─ Aircraft type
        ├─ Direction of flight
        └─ Requested VFR altitude
```

## Example VFR Phraseology

- "Memphis Ground, N123AB requesting VFR clearance."
- "N123AB, Memphis Ground, go ahead."
- "Cessna 172, N123AB"
- "N123AB, Flight following and/or requested altitude."
- "Flight following, VFR to KLIT, 2,500 feet, N123AB."

## CRAFT

- **C —** Bravo clearance
- **R —** VFR: Omit
- **A —** VFR/2,500 initial climb
- **F —** Departure frequency; omit for pattern
- **T —** Transponder

## Example Phraseology

### VFR Departure

> _[CALL]_ Cleared out of the Memphis Class Bravo Airspace.
>
> Maintain VFR at/below 2,500.
>
> Departure frequency 125.8.
>
> Squawk _XXXX_.

### VFR Pattern

> _[CALL]_ Cleared into the Memphis Class Bravo Airspace.
>
> Maintain VFR at/below (1,300 Props; 1,800 Jets).
>
> Squawk _XXXX_.

## Example Flight Plans

Whats not listed here is the Aircraft Type, which is always required for VFR flight plans.

- Base Flight Plan would be:
  - ALT VFR/025 | DEST: Empty | RTE VFR (N/E/S/W) | RMK VFT ±FF
- Cessna 172, departing to the North.
  - ALT VFR/025 | DEST: Empty | RTE: VFR North | RMK: VFR -FF
- Cessna 172, wanting flight following to Denver.
  - ALT VFR/025 | DEST: KDEN | RTE: VFR | RMK: VFR +FF
