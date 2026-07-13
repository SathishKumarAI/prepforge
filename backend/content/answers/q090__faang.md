---
qid: q090
question: "What is the difference between OLTP and OLAP systems?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the workload-driven contrast and how the two fit together in a data stack.

**Approach** — Define each by workload, then contrast on query pattern, schema, storage layout, and how data flows between them.

**Depth** — **OLTP** (Online Transaction Processing) runs the application: many small, concurrent reads/writes with strict ACID guarantees — placing an order, updating a balance. Schemas are normalized and row-oriented for fast single-record access. **OLAP** (Online Analytical Processing) serves analytics: fewer but massive queries scanning and aggregating history — "revenue by region by quarter." OLAP stores are columnar and denormalized (star schemas), optimized for scans over billions of rows. Typically, data is generated in OLTP and moved via ETL/ELT into an OLAP warehouse so heavy analytics don't degrade the production database.

**Edge cases** — Running big analytical queries directly on OLTP can lock rows and starve the app; near-real-time analytics needs streaming/CDC; HTAP systems try to serve both but involve trade-offs; over-normalized OLAP hurts query speed.

**Optimize & communicate** — I'd emphasize the separation-of-concerns principle: isolate analytical load from transactional load. Explaining *why* they're separate — protecting production and matching storage layout to access pattern — signals systems judgment that interviewers score above memorized definitions.
