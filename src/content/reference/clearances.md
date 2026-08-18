---
title: Clearances
description: Controller reference for picking up, issuing, amending, and reading IFR clearances.
order: 2
updated: '2026-08-14T00:00:00'
---

# IFR Clearances

A practical reference for clearance delivery and controller training. Use the examples as phraseology patterns, then apply the current facility SOPs and controller orders.

## Picking Up a Clearance

A pilot requesting an IFR clearance can identify the flight and destination first:

```text
[CALLSIGN] Looking for IFR Clearance to [Airport].
```

When a clearance is not immediately available, a positional queue can be used:

```text
[CALLSIGN] Memphis Ground, Clearance on Request Number [POSITION].
```

### Example

```text
SWA1263, looking for IFR clearance to Baltimore.

MEM → BWI
OLEMS6
FL380
B73M/L
```

## Before CRAFT

When the clearance is available, advise the pilot to copy it:

```text
[CALLSIGN] Clearance Available [with Amendment], advise ready to copy.
```

## CRAFT

Use CRAFT to organize the clearance:

| Letter | Meaning         | Example                                                  |
| ------ | --------------- | -------------------------------------------------------- |
| **C**  | Clearance limit | Baltimore Airport                                        |
| **R**  | Route           | PIEPE6 departure, IBUFY transition, then as filed        |
| **A**  | Altitude        | Maintain 5,000; expect FL390 ten minutes after departure |
| **F**  | Frequency       | Departure frequency                                      |
| **T**  | Transponder     | Assigned squawk                                          |

### Example Clearance

```text
[CALLSIGN] Cleared to Baltimore Airport PIEPE6 departure,
IBUFY transition, then as filed. Maintain 5,000, expect FL390
one-zero minutes after departure. Departure frequency [XXX.XX].
Squawk [XXXX].
```

If departure is offline or unavailable, the frequency portion should reflect the current facility procedure.

### VFR Class B Admission

A VFR Class B clearance can be organized using the same idea:

#### Flight Following

Ask the pilot if they would like flight following, then issue the clearance:

- Flight Following = +FF
- No Flight Following = -FF

```text
[CALLSIGN] Cleared into Memphis Class Bravo Airspace.
Maintain VFR at or below 2,500.
Departure frequency [XXX.XX].
Squawk [XXXX].
```

### Pattern

```text
[CALLSIGN] Cleared into Memphis Class Bravo Airspace.
Maintain VFR at or below 1,300.
Squawk [XXXX].
```

Include the applicable frequency, controller/facility handling, and transponder information required by the situation.

## Readback

Confirm the parts of the clearance that matter to the controller, especially changes and assigned information. If a pilot reads something back incorrectly, correct the specific item rather than accepting an incorrect clearance.

```text
[CALLSIGN] Confirm [ITEM].
```

A complete readback should be checked against the clearance actually issued before approving the next step, such as pushback.
