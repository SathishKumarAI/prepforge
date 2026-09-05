---
qid: vq_dfdfe52910__star__local
question: can you mention the crieteria for good data model?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 386
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:45-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the sales analytics pipeline for a SaaS company that had grown from 5 k to 50 k customers in two years. The existing star‑schema on Snowflake was slow, hard to maintain, and produced inconsistent metrics across teams.

**Task** – Build a new data model that would support real‑time dashboards, allow ad‑hoc analysis by product managers, and be scalable for future features without breaking downstream reports.

**Action** – I started by defining the core criteria: (1) **Simplicity** – use denormalized fact tables with clear surrogate keys to avoid join complexity; (2) **Consistency** – enforce a single source of truth for customer IDs and timestamps, using CDC pipelines in dbt to materialize incremental views; (3) **Performance** – partition facts by date and cluster on the most queried dimensions; (4) **Governance** – implement column‑level lineage and automated data quality tests with Great Expectations; (5) **Extensibility** – design a modular schema where new metrics can be added as separate fact tables without altering existing ones. I refactored the model into a hybrid star/galaxy structure, documented all transformations in dbt, and set up Snowflake streams for near‑real‑time ingestion.

**Result** – Query latency dropped from 12 s to under 500 ms for key dashboards, data freshness improved to 5‑minute windows, and the team now can add new metrics with a single dbt run. I learned that a good model is not just about normalization but balancing performance, maintainability, and governance so all stakeholders can trust the numbers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
