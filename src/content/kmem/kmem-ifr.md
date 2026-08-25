---
title: KMEM IFR
description: KMEM IFR procedures, CRAFT generation, departure validation, equipment requirements, and altitude rules.
updated: '2026-08-24T00:00:00Z'
---

# KMEM IFR Ground

## General Information

### Initial Altitudes

- **Props:** Maintain 3,000 feet until 10 minutes after departure, then climb to filed altitude.
- **Jets:** Maintain 5,000 feet until 10 minutes after departure, then climb to filed altitude.

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
- Then continue **as filed**.

### A — Altitude

- **Props:** 3,000 feet until 10 minutes after departure.
- **Jets:** 5,000 feet until 10 minutes after departure.
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

| Filed Departure | Replacement Departure | Transition |
| --------------- | --------------------- | ---------- |
| AUTMN           | CHLDR5                | ANSWA      |
| BINKY           | PIEPE6                | IBUFY      |
| GENEH           | CRSON7                | HUMMS      |
| GMBUD           | BBKING7               | KERMI      |
| GRRIZ           | JTEEE5                | ODATE      |
| HOTRD           | ZUMIT                 | JTEEE      |
| NIKEI           | ZUMIT                 | FOXOM      |
| OLEMS           | PIEPE6                | IBUFY      |

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

Check the filed departure against the current cycle.

If the departure number does not match the current cycle:

- The filed departure is invalid.
- Suggest the current cycle.

### Example

> **[CALLSIGN]** Dept Invalid per Incorrect Cycle, Are you able to take the **NEW DEPARTURE**?

## Time-of-Day Restrictions

Check whether the filed departure is restricted based on the current time.

If the filed departure is unavailable because of time-of-day restrictions:

> **[CALLSIGN]** Dept Invalid per time of day, Are you able to take the **PIEPE6** Dept?

## Equipment Validation

If the aircraft equipment is not compatible with the filed departure:

> **[CALLSIGN]** Dept Invalid per Equipment Type, Are you able to take the **ELVIS4** Dept?

## Direction of Flight

Determine the direction of flight by comparing the departure and arrival airports.

### Westbound

If the departure airport is **west of the arrival airport**:

#### Through FL400

Use even flight levels:

- FL320
- FL340
- FL360
- FL380
- FL400

#### Above FL400

Use:

- FL430
- FL470
- FL510
- FL550
- etc.

### Eastbound

If the departure airport is **east of the arrival airport**:

#### Through FL410

Use odd flight levels:

- FL310
- FL330
- FL350
- FL370
- FL390
- FL410

#### Above FL410

Use:

- FL450
- FL490
- FL530
- FL570
- etc.

### Invalid Altitude

If the filed altitude does not match the direction of flight:

> **[CALLSIGN]** Your Altitude is incorrect per direction of flight, Would you like **FL390 or FL370**?

Suggest the appropriate altitudes based on the filed altitude and direction of flight.

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

If anything in the filed flight plan needs to be changed, display the appropriate message **above the CRAFT output**.

### Departure Unavailable

> **[CALLSIGN]** Filed departure is **[unavailable right now / turbojet only / etc]**, can you take the **[NEW DEPARTURE]** departure instead?

### Incorrect Departure Cycle

> **[CALLSIGN]** Dept Invalid per Incorrect Cycle, Are you able to take the **[NEW DEPARTURE]**?

Use when the number after the departure does not match the current cycle.

### Time-of-Day Restriction

> **[CALLSIGN]** Dept Invalid per time of day, Are you able to take the **[NEW DEPARTURE]** Dept?

Use when the filed departure is restricted based on the current time.

### Equipment Type

> **[CALLSIGN]** Dept Invalid per Equipment Type, Are you able to take the **ELVIS4** Dept?

Use when the aircraft's equipment is not compatible with the filed departure.

### Direction of Flight Altitude

> **[CALLSIGN]** Your Altitude is incorrect per direction of flight, Would you like **[ALTITUDE 1]** or **[ALTITUDE 2]**?

Suggest the appropriate altitudes based on the aircraft's direction of flight and filed altitude.

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
