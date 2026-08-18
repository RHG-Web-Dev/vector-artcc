---
title: Equipment Suffixes
description: IFR equipment suffixes used to identify aircraft navigation, communication, and transponder capabilities.
updated: '2026-08-12T00:00:00'
featured: false
---

# Equipment Suffixes

The equipment suffix on an IFR flight plan identifies the aircraft's available navigation, communication, and transponder capabilities.

Controllers can use the suffix to determine what equipment the aircraft is equipped with and whether a requested route or procedure is appropriate.

## Why Equipment Suffixes Matter

An equipment suffix can affect:

- Available navigation procedures
- RNAV routing
- RVSM operations
- Transponder capabilities
- Communication capabilities
- Route eligibility

When working an IFR flight plan, controllers should be familiar with the equipment suffix reported by the pilot.

---

# VATSIM `/X` Suffixes

If a pilot files the `/X` equipment suffix, confirm it with them. The `/X` suffix indicates an aircraft with no transponder; however, every pilot connected to VATSIM using vPilot has a transponder by default, so they should not normally be filed as `/X`.

---

# All Suffixes

| RVSM        | Navigation Capability | Transponder Capability     | Suffix |
| :---------- | :-------------------- | :------------------------- | :----: |
| **RVSM**    | No GNSS, No RNAV      | Transponder with Mode C    | **/W** |
|             | RNAV, No GNSS         | Transponder with Mode C    | **/Z** |
|             | GNSS                  | Transponder with Mode C    | **/L** |
| **No RVSM** | **No DME**            | No Transponder             | **/X** |
|             |                       | Transponder with no Mode C | **/T** |
|             |                       | Transponder with Mode C    | **/U** |
|             | **DME**               | No Transponder             | **/D** |
|             |                       | Transponder with no Mode C | **/B** |
|             |                       | Transponder with Mode C    | **/A** |
|             | **TACAN**             | No Transponder             | **/M** |
|             |                       | Transponder with no Mode C | **/N** |
|             |                       | Transponder with Mode C    | **/P** |
|             | **RNAV, no GNSS**     | No Transponder             | **/Y** |
|             |                       | Transponder with no Mode C | **/C** |
|             |                       | Transponder with Mode C    | **/I** |
|             | **GNSS**              | No Transponder             | **/V** |
|             |                       | Transponder with no Mode C | **/S** |
|             |                       | Transponder with Mode C    | **/G** |

# Common Equipment Suffixes

The following suffixes are commonly encountered in IFR operations.

| Suffix | Equipment           |
| ------ | ------------------- |
| `/A`   | RNAV?               |
| `/G`   | RNAV with GPS       |
| `/L`   | RVSM, advanced RNAV |
| `/S`   | Standard equipment  |
| `/U`   | No transponder?     |

> **Note:** Equipment suffix definitions can change and depend on the applicable flight-plan format. Verify current FAA documentation before using a suffix operationally.

---

# ICAO Equipment Codes

ICAO flight plans use equipment and capability codes rather than the legacy FAA domestic suffix system.

These codes can identify capabilities such as:

- VHF communications
- HF communications
- VOR
- DME
- ADF
- GNSS
- RNAV
- RVSM
- ADS-B

For ICAO flight plans, the equipment and surveillance fields provide considerably more detail than a single domestic equipment suffix.

---

# RNAV Capability

RNAV capability is particularly important when determining whether an aircraft can fly certain procedures or routes.

An aircraft may have:

- Conventional navigation capability
- GPS
- RNAV
- RNP capability
- Advanced RNAV capability

Do not assume that an aircraft is RNAV-capable solely because it appears to have GPS.

The filed equipment and capability information should be checked.

---

# RVSM

RVSM capability is important for aircraft operating between:

**FL290 and FL410 inclusive.**

Aircraft operating within RVSM airspace must meet the applicable equipment and operational requirements.

When reviewing a flight plan, controllers should be aware of whether the aircraft is authorized and equipped for RVSM operations.

See also:

- [RVSM](/learn/rvsm)
- [Direction of Flight](/learn/direction-of-flight)

---

# Controller Considerations

When checking an aircraft's equipment information:

1. Identify the equipment suffix or ICAO equipment codes.
2. Determine the aircraft's navigation capabilities.
3. Check whether the aircraft can use the requested procedure or route.
4. Check applicable RVSM requirements.
5. Verify any restrictions before issuing the clearance.

### Example

An aircraft requests an RNAV procedure.

Before issuing the clearance, verify that the aircraft has the appropriate navigation capability for that procedure.

---

# Quick Reference

```text
Equipment Suffix
      ↓
Aircraft Capabilities
      ↓
Navigation / Communication
      ↓
Route & Procedure Eligibility
      ↓
Clearance
```
