---
qid: vq_a8e00eb90f__star__local
question: What are managed and external tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 325
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:38-05:00'
sources: []
---

**Situation** – In my last role I was tasked with migrating a legacy data lake from S3 into our Snowflake warehouse for an analytics dashboard that was lagging behind by 48 hrs.

**Task** – I needed to ingest the raw logs, keep them immutable in S3 for compliance, and expose them as queryable tables without duplicating storage or breaking downstream BI pipelines.

**Action** – I created **external tables** pointing to the S3 buckets. Snowflake read the Parquet files directly, so we avoided data movement and maintained the original objects. For the aggregated metrics that required frequent refreshes, I set up **managed tables** in Snowflake’s internal storage; they were populated via incremental ETL jobs written in Python (using dbt). The managed tables were clustered on the timestamp column to accelerate roll‑ups, while the external ones stayed unclustered to preserve cost efficiency. I also implemented a data lifecycle policy that automatically moved older partitions from managed to external storage.

**Result** – Query latency dropped from 48 hrs to under 2 hrs for real‑time dashboards. Storage costs fell by 30 % because we avoided double‑storage of raw logs, and compliance audits passed with no changes to the original S3 objects. I learned that balancing managed vs external tables can give you both performance and cost control when designing a modern data lakehouse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
