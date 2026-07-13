---
qid: q087
question: "What is the difference between a star schema and a snowflake schema?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll frame both as dimensional-modeling patterns for warehouses and confirm the interviewer wants the normalization trade-off.

**Approach** — Define the shared fact/dimension structure, then contrast on how dimensions are normalized and what that costs.

**Depth** — Both center a **fact table** (measurable events like sales, with foreign keys) surrounded by **dimension tables** (product, date, customer). In a **star schema**, each dimension is a single denormalized table — the diagram looks like a star. In a **snowflake schema**, dimensions are normalized into sub-dimensions (product → category → department), branching outward like a snowflake. Star trades storage redundancy for simpler, faster queries with fewer joins — ideal for BI tools and analysts. Snowflake reduces redundancy and storage and eases dimension maintenance, but requires more joins, hurting query performance and readability.

**Edge cases** — Very high-cardinality or frequently-changing dimensions may justify snowflaking; conformed dimensions shared across facts; slowly changing dimensions add rows/columns either way. Over-normalizing kills analyst usability.

**Optimize & communicate** — In modern columnar warehouses, storage is cheap and joins are less painful, so star is the pragmatic default; I'd snowflake selectively where a dimension is huge or reused. Stating the default *and* the exception shows judgment, which is the signal interviewers reward over reciting definitions.
