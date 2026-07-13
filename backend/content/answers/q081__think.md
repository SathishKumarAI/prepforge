---
qid: q081
question: "What is a data warehouse and how does it differ from a database?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm what they mean by "database" — almost always they mean a transactional (OLTP) database. State the assumption: I'll contrast an operational store with an analytical warehouse.
2. **Mental model.** Think in terms of *purpose and workload*. A database serves the application (reads/writes single rows fast); a warehouse serves analysts (scans millions of rows to aggregate). Same SQL surface, opposite optimization targets.
3. **Reason step by step.** Walk the axes: workload (transactional vs analytical), schema (normalized vs star/denormalized), data scope (current operational state vs historical, integrated from many sources), storage (row-oriented vs columnar), and freshness (real-time vs batch-loaded via ETL). Name examples: Postgres/MySQL vs Snowflake/BigQuery/Redshift.
4. **Traps to avoid.** Don't say "a warehouse is just a big database" — that misses the workload distinction. Don't conflate it with a data *lake* (raw, schema-on-read). Don't claim warehouses are always slower; they're faster for aggregations.
5. **Sanity-check and deliver.** Test your definition against a use case: "count revenue per region over 3 years" clearly belongs in a warehouse. Communicate with a one-line contrast plus the workload reason, then give the concrete tool examples so it lands.
