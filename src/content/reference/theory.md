---

title: Controller Theory
description: Theory reference covering airspace, entries, instrument departures, CRAFT, transponder requirements, direction of flight, and RNAV operations.
updated: 2026-09-23
-------------------

# Controller Theory

> **Rating Preparation:** This page covers core theory reviewed during controller training. Controllers should understand both the rule and **why** it applies.

---

## Airspace

### Controlled Airspace

Controlled airspace is divided into **Class A, B, C, D, and E**. IFR operations in controlled airspace require an IFR flight plan and an appropriate ATC clearance.

| Class | General Description                                      | VFR Entry                                      |
| :---: | :------------------------------------------------------- | :--------------------------------------------- |
| **A** | 18,000 MSL through FL600                                 | VFR not permitted unless authorized            |
| **B** | Generally surface–10,000 MSL around major airports       | **ATC clearance required**                     |
| **C** | Generally surface–4,000 AGL around qualifying airports   | **Two-way communication established**          |
| **D** | Generally surface area around an operating control tower | **Two-way communication established**          |
| **E** | Controlled airspace not classified A–D                   | Entry requirements depend on the specific area |

### Class A

* Generally begins at **18,000 feet MSL** and extends through **FL600**.
* Operations are IFR unless otherwise authorized.
* IFR clearance is required.

### Class B

* Generally extends from the surface to **10,000 feet MSL** around the nation's busiest airports.
* Configuration is individually tailored.
* **An ATC clearance is required before entering Class B airspace.**
* VFR aircraft operating in Class B receive separation services.
* VFR aircraft must remain **clear of clouds**.
* The absence of radar does **not** remove the Class B clearance requirement.

### Class C

* Generally consists of:

  * A surface area extending to approximately 4,000 feet above airport elevation.
  * An outer shelf normally beginning at 1,200 feet AGL and extending to the top of the Class C.
* **Two-way radio communication must be established before entering.**
* If ATC responds with **"standby,"** communications have been established and the aircraft may enter.
* If ATC instructs the aircraft to remain outside, the aircraft must remain outside until authorized to enter.

### Class D

* Generally surrounds an airport with an operating control tower.
* **Two-way radio communication must be established before entering.**
* An explicit ATC clearance is not normally required for VFR entry.
* IFR operations require an IFR clearance.

### Quick Entry Rule

> **Class B:** Clearance
> **Class C:** Communication
> **Class D:** Communication

Remember:

> **"Standby" in Class C = communications established.**

---

# Instrument Departure Procedures

Instrument departure procedures are preplanned IFR procedures designed to provide obstruction clearance and transition aircraft from the terminal area toward the en route structure.

There are two primary types of published departure procedures:

* **ODP — Obstacle Departure Procedure**
* **SID — Standard Instrument Departure**

### ODP

An **Obstacle Departure Procedure** provides obstacle clearance and may be flown without an ATC clearance unless ATC assigns an alternative departure procedure.

### SID

A **Standard Instrument Departure** is an ATC procedure published graphically.

SIDs:

* Provide obstruction clearance.
* Transition aircraft from the terminal area to the en route structure.
* Reduce pilot/controller workload.
* Improve traffic flow and efficiency.
* **Require an ATC clearance before being flown.**

---

# SID Types

## Pilot-Navigation SID

A **pilot-navigation SID** is primarily navigated by the aircraft.

The pilot is responsible for:

* Following the published route.
* Complying with published altitude restrictions.
* Navigating to the published fixes/waypoints.
* Advising ATC if unable to comply.

### Controller Consideration

ATC does not need to provide continuous vectors simply because the aircraft is flying a SID.

> **Pilot-nav = Pilot flies the published route.**

---

## Radar-Vector SID

A **radar-vector SID** uses ATC radar vectors as part of the departure procedure.

ATC may:

* Assign headings.
* Vector the aircraft toward a fix.
* Vector the aircraft toward an airway or route.
* Provide radar service until the aircraft is reestablished on course.

Radar-vector procedures are specifically designed around ATC vectoring rather than requiring the pilot to navigate the entire published route.

> **Radar-vector = ATC provides the navigation guidance through vectors.**

---

## Hybrid SID

A **hybrid SID** combines both concepts.

One portion of the procedure may be:

> **Pilot navigation**

while another portion may require:

> **Radar vectors**

For example:

```text
Departure runway
      ↓
Published RNAV fixes
      ↓
Pilot navigation
      ↓
VECTOR
      ↓
ATC radar vectors
      ↓
Rejoin published route
```

RNAV SIDs can contain embedded radar-vector segments when the procedure is designed and authorized for that operation.

### Controller Consideration

Know **where the vector segment begins and ends**.

Do not treat a hybrid SID as entirely pilot-nav or entirely radar-vector.

---

# RNAV

## Area Navigation

**RNAV — Area Navigation** allows aircraft to navigate using a variety of navigation systems rather than being restricted to flying directly between ground-based navigation aids.

RNAV procedures are identified as **RNAV** in their published procedure title.

Examples include:

```text
SHEAD TWO DEPARTURE (RNAV)
```

RNAV SIDs and STARs generally require the appropriate RNAV capability for assignment. FAA guidance identifies RNAV 1 and/or RNAV 2 capability as the applicable capability for assignment of RNAV SIDs/STARs and en route RNAV operations.

---

## RNAV Capability

Before assigning an RNAV procedure, the controller must ensure the aircraft has the capability required by the procedure.

Consider:

* Aircraft equipment suffix.
* Filed equipment.
* Published procedure requirements.
* Any **RADAR REQUIRED** notes.
* Whether the aircraft can comply with the procedure.

> **RNAV procedure ≠ automatically compatible with every aircraft.**

The aircraft must have the required navigation capability.

---

## Non-RNAV Aircraft

An aircraft without the required RNAV capability cannot simply be assigned an RNAV SID because it is convenient for traffic flow.

Consider:

1. Aircraft equipment.
2. Procedure requirements.
3. Alternative departure procedures.
4. Radar vectors, if authorized and applicable.
5. Coordination with the appropriate controller.

---

# CRAFT

**CRAFT** is a method of organizing an IFR clearance.

| Letter | Meaning                     |
| :----: | :-------------------------- |
|  **C** | Clearance / Clearance Limit |
|  **R** | Route                       |
|  **A** | Altitude                    |
|  **F** | Frequency                   |
|  **T** | Transponder                 |

### Clearance

Where the aircraft is cleared to.

Example:

> **"Cleared Memphis International Airport..."**

The clearance limit is the point to which the aircraft is cleared.

### Route

The route the aircraft is authorized to fly.

This may include:

* SID
* Airways
* Fixes
* Direct routing
* Vectors
* STAR
* Approach procedure

### Altitude

The altitude or flight level assigned by ATC.

The assigned altitude must be understood in the context of:

* Initial altitude.
* Published procedure restrictions.
* ATC-issued restrictions.
* Direction of flight.
* Subsequent altitude assignments.

### Frequency

The frequency the aircraft is expected to use next.

Example:

> **"Departure 125.8."**

A published departure frequency may sometimes be omitted when appropriate under applicable procedures.

### Transponder

The discrete transponder code assigned to the aircraft.

---

# Direction of Flight

IFR cruising altitudes are assigned according to the aircraft's **magnetic course**.

## At and Below FL410

| Magnetic Course | Altitude |
| :-------------: | :------- |
|  **000°–179°**  | Odd      |
|  **180°–359°**  | Even     |

Examples:

```text
Eastbound:
FL190
FL210
FL230
FL250
FL270
FL290
FL310
FL330
FL350
FL370
FL390
FL410

Westbound:
FL180
FL200
FL220
FL240
FL260
FL280
FL300
FL320
FL340
FL360
FL380
FL400
```

The FAA flight-direction rule uses **000–179° for odd** and **180–359° for even** through FL410.

### Above FL410

Above FL410, the altitude pattern changes.

| Magnetic Course | Flight Levels                 |
| :-------------: | :---------------------------- |
|  **000°–179°**  | FL450, FL490, FL530, FL570... |
|  **180°–359°**  | FL430, FL470, FL510, FL550... |

These are separated at **4,000-foot intervals**.

### Quick Rule

> **East = Odd**
> **West = Even**

Remember that the rule is based on **magnetic course**, not simply the aircraft's destination.

---

# Mode C & Transponder Operations

## Mode C

**Mode C** provides automatic altitude reporting to ATC surveillance systems.

Mode C reports pressure altitude to ATC in 100-foot increments.

---

## Transponder on the Movement Area

Aircraft should operate their transponder in the **altitude-reporting mode** while positioned on an airport movement area.

This includes:

* Runways
* Taxiways
* Other defined movement areas

ADS-B Out should also be enabled when equipped.

### Departure

Generally:

> **Pushback / taxi-out → altitude reporting ON**

When taking the active runway:

> **TA or TA/RA, if equipped with TCAS**

### Arrival

After leaving the active runway:

> Continue altitude-reporting transponder operation while on the movement area.

At the parking position/gate:

> Transponder and ADS-B may be placed in the appropriate standby/off configuration as applicable.

---

## Mode C Airspace Requirements

Mode C requirements also apply to specified airspace, including:

* Class A
* Class B
* Class C
* Certain airspace above Class B/C
* The Mode C Veil
* Other areas specified by regulation

The specific regulatory requirements and exceptions are contained in **14 CFR §91.215** and related provisions.

### Important Distinction

Do not confuse:

> **Mode C requirement**

with:

> **ADS-B Out requirement**

They are related but governed by different regulatory provisions.

---

# Movement Area

The **movement area** consists of:

* Runways
* Taxiways
* Other areas used for taxiing, takeoff, and landing

It excludes:

* Loading ramps
* Parking areas

At airports with a control tower, specific ATC approval is required to enter the movement area.

### Controller Awareness

When working Ground, always distinguish between:

> **Movement area**

and

> **Ramp / parking area**

Ground control responsibility generally begins when an aircraft enters the movement area or otherwise requires ground control instructions, while ramp areas may be controlled by the airport/operator depending on the local configuration.

