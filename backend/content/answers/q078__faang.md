---
qid: q078
question: "What is ETL and how does it differ from ELT?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm we're comparing two data-integration pipeline patterns and that the interviewer wants the ordering difference plus when to choose each.

**Approach** — Expand both acronyms, contrast where transformation happens, then map to modern architectures.

**Depth** — **ETL** = Extract, Transform, Load: pull data from sources, transform it (clean, join, aggregate) in a staging/compute layer, then load the finished result into the warehouse. **ELT** = Extract, Load, Transform: load raw data into the warehouse *first*, then transform in place using the warehouse's compute (SQL/dbt). The key difference is the order and where transformation runs. ETL suits on-premise systems, sensitive data needing masking before landing, and rigid schemas. ELT fits cloud warehouses (Snowflake, BigQuery) with cheap, scalable compute, storing raw data so you can re-transform for new needs without re-extracting.

**Edge cases** — ELT loads raw PII into the warehouse, raising governance concerns. ELT costs warehouse compute for every transform. ETL pipelines are rigid — new questions mean rebuilding jobs. Both need idempotency and schema-drift handling.

**Optimize & communicate** — Default to ELT with cloud warehouses for flexibility and scale; keep ETL when compliance requires transforming before landing. Narrate: "ELT trades storage for agility — keep raw data and transform on demand." That trade-off framing signals architectural judgment.
