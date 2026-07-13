---
qid: q085
question: "What are the key dimensions of data quality?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the standard quality dimensions plus how I'd operationalize them, not just a list.

**Approach** — Enumerate the core dimensions, define each with a failure example, then explain how to monitor them.

**Depth** — The key dimensions are: **Accuracy** (values reflect reality — a wrong price is inaccurate); **Completeness** (no missing required fields or rows); **Consistency** (no contradictions across systems — same customer, two addresses); **Timeliness/Freshness** (data is current enough for the decision); **Validity** (values conform to format and range rules — a negative age is invalid); and **Uniqueness** (no unintended duplicates). Some frameworks add integrity (referential relationships hold). These trade off: chasing real-time freshness can hurt accuracy if you skip validation.

**Edge cases** — Silent nulls, duplicate rows from double-loaded ETL, timezone drift breaking timeliness, referential orphans, and schema changes upstream that pass validation but corrupt meaning. Sampling can mask rare-but-critical errors.

**Optimize & communicate** — I'd implement automated checks (dbt tests, Great Expectations) on freshness, null rates, uniqueness, and range assertions, alerting when they breach thresholds, plus data-contract SLAs with upstream teams. Tying each dimension to a concrete test and a downstream decision shows the systematic, ownership-minded thinking interviewers reward.
