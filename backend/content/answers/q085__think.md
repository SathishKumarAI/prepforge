---
qid: q085
question: "What are the key dimensions of data quality?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm whether they want the classic named dimensions or a war story about fixing bad data. State the assumption: I'll enumerate the standard dimensions and ground each with a check.
2. **Mental model.** Data quality is "fitness for purpose," decomposed into measurable dimensions you can each write a test for.
3. **Reason step by step.** Walk the canonical set: **accuracy** (matches reality), **completeness** (no missing required values), **consistency** (agrees across systems), **timeliness/freshness** (current enough for the decision), **validity** (conforms to format/range rules), and **uniqueness** (no unintended duplicates). For each, name a concrete check — e.g., completeness = null-rate on required columns; uniqueness = duplicate primary-key count.
4. **Traps to avoid.** Listing dimensions with no way to measure them; conflating accuracy with validity (a value can be valid format but wrong); ignoring timeliness (stale-but-clean data still misleads); and treating quality as a one-time cleanup rather than monitored over time.
5. **Sanity-check and deliver.** Pressure-test by imagining a bad record and asking which dimension flags it — a duplicate customer trips uniqueness, a future birthdate trips validity. Communicate as a short named list, each paired with its automated check, so it sounds operational, not academic.
