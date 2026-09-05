---
qid: ing_07c386e25d__star__local
question: 'Explain: Data Warehousing — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:16-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an analytics platform that fed our fraud‑detection model. Our production database was PostgreSQL with millions of daily transactions, but the data warehouse (Snowflake) lagged by 48 hrs, causing stale features and poor model accuracy.

**Task** – I had to design and deploy a real‑time Change Data Capture pipeline so the warehouse stayed within one hour of source, without disrupting OLTP performance or inflating costs.

**Action** – First, I set up logical decoding on PostgreSQL to stream WAL records into Kafka. A lightweight Debezium connector filtered only INSERT/UPDATE rows for the transactions table. In Kafka Streams, I performed a windowed aggregation to deduplicate and enrich data with customer metadata from an external REST API. The resulting events were batched and written to Snowflake via its COPY command using S3 staging, leveraging Snowpipe for auto‑ingestion. I also added metrics in Prometheus to monitor lag and error rates, and set up alerts for any >30 min drift.

**Result** – Latency dropped from 48 hrs to under 45 minutes, improving our fraud model’s recall by 12 pp. The CDC system handled peak bursts of 200k records per minute with <5 % CPU overhead on the source DB. I learned how to balance streaming throughput against cost and the importance of observability in data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
