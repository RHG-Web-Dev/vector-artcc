---
title: CRAFT
description: Clearance mnemonic for fast controller reference.
updated: '2026-08-14T00:00:00'
featured: false
---

# CRAFT

CRAFT is a simple way to organize an IFR clearance before transmitting it.

| Letter | Meaning         | What to capture                                          |
| ------ | --------------- | -------------------------------------------------------- |
| **C**  | Clearance Limit | Airport, fix, waypoint                                   |
| **R**  | Route           | Departure, transition, direct fixes, or as-filed routing |
| **A**  | Altitude        | Initial altitude and final altitude                      |
| **F**  | Frequency       | Departure frequency                                      |
| **T**  | Transponder     | Assigned squawk                                          |

## Example

```text
C - Baltimore Airport
R - PIEPE6 departure, IBUFY transition, then as filed
A - Maintain 5000, expect flight-level 390 one-zero minutes after departure
F - Departure frequency [XXX.XX]
T - Squawk [XXXX]
```

### Controller Check

Before transmitting, confirm that the route, altitude, frequency, and transponder code match the clearance you intend to issue. CRAFT is a memory aid, not a replacement for the current facility procedure.
