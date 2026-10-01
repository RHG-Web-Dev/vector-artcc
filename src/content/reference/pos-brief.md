---
title: Position Relief Briefing
description: A briefing for position relief in aviation.
updated: '2026-09-30T00:00:00'
---

# Relief Briefing

A relief briefing transfers the current position to the relieving controller. The briefing should cover the current airport configuration, traffic, frequencies, and any information the relieving controller needs to continue working the position.

---

## Template

```
Alright, I'll give you the relief briefing.

ATIS **[X]** is current.

We are currently in a **[North/South]** flow with **[IMC/VMC]** conditions.

Active Runways are departing **[XX]** and arriving **[XX]** .

For online frequencies,
     Tower is on **[frequency]**
     Departure is on **[frequency]**

For traffic,
     **[CALLSIGN]** is currently **[current status].**
     [Continue through applicable aircraft talking to you]

Aircraft not talking to us:
     **[CALLSIGN]** is **[current status].**
		 [Continue through applicable aircraft not talking to you]

[Continue through applicable aircraft]

TDLS is **[up to date / not up to date]**.

**Any questions?**
```

---

## Relief Example for KMEM

- **ATIS:**
- `[X]` is Current

- **Altimeter:**
- **[Airport]** altimeter is `[XX.XX]`

- **Flow & Weather:**
- Currently in a **[North/South]** flow with **[VMC/IMC]** conditions.

- **Active Runways are:**
  - Departing — `[XX]`
  - Arriving — `[XX]`

- **Frequencies:**
  - Tower is on `119.7`
  - Departure is on `125.8`

- **Active Traffic:**
  - `[CALLSIGN]` — `[Current status]`

- **Havent talked to anyone else on the ground**

- **TDLS:** `[Up to date / Not up to date]`
  - Not up to date if there are unprocessed flight plans

- **Any Questions?**

---

## Traffic Status Examples

Use the aircraft's **current position/status**, rather than simply listing the callsign.

- `[CALL]` — Taxiing to Runway XX
- `[CALL]` — Holding short of Runway XX
- `[CALL]` — Waiting for clearance
- `[CALL]` — Waiting for release
- `[CALL]` — In position
- `[CALL]` — Departing
- `[CALL]` — Returning to the gate
- `[CALL]` — Requesting [request]
- `[CALL]` — Requires [coordination/action]

---

## Quick Mental Order

**ATIS → Altimeter → Flow → Weather → Runways → Frequencies → Traffic → TDLS → Questions**

> **If it affects the next controller's ability to work the position, brief it.**
