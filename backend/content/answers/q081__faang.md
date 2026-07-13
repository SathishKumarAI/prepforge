---
qid: q081
question: "What is a data warehouse and how does it differ from a database?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume "database" here means a transactional (OLTP) system like Postgres serving an application, and confirm the interviewer wants the analytical contrast, not a vendor comparison.

**Approach** — Define each by its workload, then contrast on schema, optimization, and freshness so the distinction is grounded in purpose rather than trivia.

**Depth** — A transactional database is optimized for many small, concurrent reads/writes with strong consistency and normalized schemas to avoid update anomalies. A data warehouse is an analytical store (Snowflake, BigQuery, Redshift) optimized for large scans and aggregations over historical data. It's typically columnar, denormalized into star schemas, and loaded via ETL/ELT from many source systems. OLTP answers "what is this user's current balance"; the warehouse answers "revenue by region over 24 months." Warehouses trade write latency and real-time freshness for read throughput on huge datasets.

**Edge cases** — Real-time analytics needs (streaming), tiny datasets where a warehouse is overkill, and mixing workloads (HTAP) blur the line. A data lake stores raw unstructured files, distinct from both.

**Optimize & communicate** — I'd narrate the decision rule: use the warehouse when queries scan history and aggregate; keep OLTP for serving. Signaling that I pick tools by workload, not hype, is what interviewers reward.
