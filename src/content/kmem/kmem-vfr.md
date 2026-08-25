---
title: KMEM VFR
description: KMEM VFR procedures, information requirements, altitudes, and phraseology.
updated: '2026-08-24'
---

# KMEM VFR Ground

## General Information

### VFR Altitudes

- **VFR Flight:** At or below 2,500
- **Pattern:** 1,300 Props / 1,800 Jets

## VFR Request Flow

### Calls for VFR Flight

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
