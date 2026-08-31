---
title: IFR
description: KMEM IFR procedures, CRAFT generation, departure validation, equipment requirements, and altitude rules.
updated: '2026-08-24T00:00:00Z'
---

# KMEM IFR Ground

## General Information

### Initial Altitudes

- **Props:** Maintain 3,000 fee
- **Jets:** Maintain 5,000 feet

### Departure Frequency

- **125.8** — almost always

## CRAFT

### C — Clearance Limit

- Cleared to **[ARRIVAL AIRPORT NAME] Airport**

### R — Route

Determine the appropriate departure procedure based on:

- Aircraft equipment
- Departure airport
- Arrival airport
- Direction of flight
- Filed departure
- Current departure cycle
- Time-of-day restrictions

If the filed departure must be amended:

- Use the appropriate replacement departure and transition.
- If the amendment changes the route, include **direct [NEXT VOR]**.
- The next VOR should be the first VOR after the amended transition.
- Then continue **as filed** or if the next vor is a airport or the route is nothing else \*\*.
- If there are no additional airways or fixes after that point, or if the next point is the destination airport itself, omit "as filed" and clear the aircraft direct to the destination airport.

### A — Altitude

- **Props:** 3,000
- **Jets:** 5,000
- Expect the filed altitude **one-zero minutes after departure**.

### F — Departure Frequency

**125.8**

### T — Transponder

**Squawk XXXX**

## IFR Clearance Flow

### 1. Determine Aircraft Type

Determine whether the aircraft is a:

- **Prop**
- **Jet**

Then determine the aircraft's equipment suffix.

### 2. Determine Equipment Capability

Look at the equipment suffix to determine whether the aircraft is RNAV/RNP capable.

#### RNAV / GNSS Capable

- Use **RNAV departure procedures and transitions**.
- Check whether the filed departure is restricted.
- If restricted, modify the departure according to the applicable rules.

#### RVSM Only / Non-RNAV

- Use **ELVIS4** regardless of the filed departure procedure.
- Modify the filed transition according to the applicable rules.

## RNAV Departure Restrictions

Check the filed departure against the following restricted departures:

- AUTMN
- BINKY
- GENEH
- GMBUD
- GRRIZ
- HOTRD
- NIKEI
- OLEMS

### Required Amendments

| Filed Departure | Replacement Departure / Transition |
| --------------- | ---------------------------------- |
| AUTMN           | CHLDR5 / ANSWA                     |
| BINKY           | PIEPE6 / IBUFY                     |
| GENEH           | CRSON7 / HUMMS                     |
| GMBUD           | BBKING7 / KERMI                    |
| GRRIZ           | JTEEE5 / ODATE                     |
| HOTRD           | ZUMIT / JTEEE                      |
| NIKEI           | ZUMIT / FOXOM                      |
| OLEMS           | PIEPE6 / IBUFY                     |

## RNP / Non-RNAV Departure Procedures

For aircraft that are only RVSM capable:

- Departure should be **ELVIS4** regardless of the filed departure.
- Modify the transition according to the following rules.

| Filed Departure | ELVIS4 Transition |
| --------------- | ----------------- |
| AZONE           | ETWOO             |
| BBKND           | ETREE             |
| CHLDR           | EONEE             |
| CRSON           | NFOUR             |
| DUCKZ           | WTWOO             |
| GOETZ           | EONEE             |
| JTEEE           | NTWOO             |
| PIEPE           | STWOO             |
| SELPH           | NTREE             |
| ZUMIT           | WTREE             |

## Departure Cycle Validation

> **[CALLSIGN]** Dept Invalid per Incorrect Cycle, Are you able to take the **NEW DEPARTURE**?

## Time-of-Day Restrictions

> **[CALLSIGN]** Dept Invalid per time of day, Are you able to take the **PIEPE6** Dept?

## Equipment Validation

> **[CALLSIGN]** Dept Invalid per Equipment Type, Are you able to take the **ELVIS4** Dept?

## Direction of Flight

Determine the direction of flight by comparing the departure and arrival airports.

| West  | East  |
| ----- | ----- |
| FL180 | FL190 |
| FL200 | FL210 |
| FL220 | FL230 |
| FL240 | FL250 |
| FL260 | FL270 |
| FL280 | FL290 |
| FL300 | FL310 |
| FL320 | FL330 |
| FL340 | FL350 |
| FL360 | FL370 |
| FL380 | FL390 |
| FL400 | FL410 |
| FL430 | FL440 |
| FL450 | FL460 |
| FL470 | FL480 |
| FL490 | FL500 |

### Invalid Altitude

> **[CALLSIGN]** Your Altitude is incorrect per direction of flight, Would you like **FL-1000** or **FL+1000**?

## CRAFT Generation

After validating the flight plan, generate the CRAFT clearance reference.

### Standard CRAFT

> Cleared to **[ARRIVAL AIRPORT NAME] Airport**,  
> **[DEPARTURE] departure, [TRANSITION] transition**, then as filed,  
> Maintain **5,000** [jets] / **3,000** [props], expect **[FILED ALTITUDE]** one-zero minutes after departure,  
> Departure frequency **125.8**,  
> Squawk **XXXX**.

### Amended CRAFT

If the departure or transition was changed and the amendment changes the route:

> Cleared to **[ARRIVAL AIRPORT NAME] Airport**,  
> **[NEW DEPARTURE] departure, [NEW TRANSITION] transition, direct [NEXT VOR]**, then as filed,  
> Maintain **5,000** [jets] / **3,000** [props], expect **[FILED ALTITUDE]** one-zero minutes after departure,  
> Departure frequency **125.8**,  
> Squawk **XXXX**.

## Amendment Messages

### Departure Unavailable

> **[CALLSIGN]** Filed departure is **[unavailable right now / turbojet only / etc]**, can you take the **[NEW DEPARTURE]** departure instead?

### Incorrect Departure Cycle

> **[CALLSIGN]** Dept Invalid per Incorrect Cycle, Are you able to take the **[NEW DEPARTURE]**?

### Time-of-Day Restriction

> **[CALLSIGN]** Dept Invalid per time of day, Are you able to take the **[NEW DEPARTURE]** Dept?

### Equipment Type

> **[CALLSIGN]** Dept Invalid per Equipment Type, Are you able to take the **ELVIS4** Dept?

### Direction of Flight Altitude

> **[CALLSIGN]** Your Altitude is incorrect per direction of flight, Would you like **[ALTITUDE -1000]** or **[ALTITUDE +1000]**?

## Final Validation

Before issuing the clearance, verify:

- Aircraft type
- Equipment suffix
- Prop or jet
- RNAV/RNP capability
- Departure airport
- Arrival airport
- Direction of flight
- Filed departure
- Departure cycle
- Time-of-day restrictions
- Departure/transition compatibility
- Filed altitude
- Directional altitude validity
- Initial altitude
- Departure frequency
- Transponder code

The validated flight plan should produce a CRAFT clearance that can be used by the controller to issue the IFR clearance.
