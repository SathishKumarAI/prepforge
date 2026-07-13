---
qid: q081
question: "What is a data warehouse and how does it differ from a database?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

A transactional database (OLTP) is optimized for many small, concurrent reads and writes with row storage and heavy normalization, for example Aurora serving an app. A data warehouse (OLAP) is optimized for large analytical scans and aggregations over historical data, typically columnar, denormalized, and integrated from many sources, for example Amazon Redshift. Same SQL surface, opposite design goals.

I'd frame the choice through **Invent and Simplify** and **Customer Obsession** (the internal analyst is my customer): running analytics on the production OLTP database competes with live traffic and times out. A warehouse gives analysts fast, isolated compute over consolidated history.

Concretely on AWS I'd separate them: Aurora for the app, then CDC or nightly loads into Redshift; or a lakehouse with raw data in S3, queried by Athena and cataloged in Glue, with Redshift for the curated marts.

A real example: analysts were querying our production Postgres and causing p99 latency spikes for customers. I stood up a Redshift warehouse fed by nightly Glue jobs; dashboard queries went from 40+ seconds (and hurting prod) to sub-5 seconds with zero production impact.

A bar-raiser listens for whether I understand the workload trade-offs (row vs columnar, normalized vs denormalized, isolation) and owned protecting the customer experience.
