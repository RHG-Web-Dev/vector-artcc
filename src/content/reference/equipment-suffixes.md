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

# All Suffixes

| RVSM        | Navigation Capability | Transponder Capability     | RNAV / Suffix |
| :---------- | :-------------------- | :------------------------- | :-----------: |
| **RVSM**    | No GNSS, No RNAV      | Transponder with Mode C    |   🔴 **/W**   |
|             | RNAV, No GNSS         | Transponder with Mode C    |   🟢 **/Z**   |
|             | GNSS                  | Transponder with Mode C    |   🟢 **/L**   |
| **No RVSM** | **No DME**            | No Transponder             |   🔴 **/X**   |
|             |                       | Transponder with no Mode C |   🔴 **/T**   |
|             |                       | Transponder with Mode C    |   🔴 **/U**   |
|             | **DME**               | No Transponder             |   🔴 **/D**   |
|             |                       | Transponder with no Mode C |   🔴 **/B**   |
|             |                       | Transponder with Mode C    |   🔴 **/A**   |
|             | **TACAN**             | No Transponder             |   🔴 **/M**   |
|             |                       | Transponder with no Mode C |   🔴 **/N**   |
|             |                       | Transponder with Mode C    |   🔴 **/P**   |
|             | **RNAV, no GNSS**     | No Transponder             |   🟢 **/Y**   |
|             |                       | Transponder with no Mode C |   🟢 **/C**   |
|             |                       | Transponder with Mode C    |   🟢 **/I**   |
|             | **GNSS**              | No Transponder             |   🟢 **/V**   |
|             |                       | Transponder with no Mode C |   🟢 **/S**   |
|             |                       | Transponder with Mode C    |   🟢 **/G**   |

# Common Equipment Suffixes

The following suffixes are commonly encountered in IFR operations.

| Suffix | Equipment |
| ------ | --------- |
| /A     | No RNAV   |
| /L     | RNAV      |
| /W     | No RNAV   |
| /G     | RNAV      |

> **Note:** Equipment suffix definitions can change and depend on the applicable flight-plan format. Verify current FAA documentation before using a suffix operationally.

---

# VATSIM /X Suffixes

If a pilot files the `/X` equipment suffix, confirm it with them. The `/X` suffix indicates an aircraft with no transponder; however, every pilot connected to VATSIM using vPilot has a transponder by default, so they should not normally be filed as `/X`.

---
