---
qid: vq_ca8f681575__star__local
question: What types of queries will run?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 357
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:37-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were building a real‑time analytics layer for fraud detection. Our data lake was ingesting 3 M events per day from multiple microservices, and the compliance team needed near‑real‑time dashboards and batch reports for regulatory filings.  

**Task** – I had to design a query strategy that could support both high‑velocity streaming queries (latency < 200 ms) and heavy analytical workloads (daily ETL jobs producing 50 GB of aggregated data). The goal was to keep the same underlying infrastructure while avoiding performance bottlenecks.

**Action** – I introduced a dual‑layer approach:  
1. **Streaming layer** using Kafka Streams + KSQL for low‑latency aggregations, materializing key fraud metrics into a ClickHouse table.  
2. **Batch layer** with Apache Spark on EMR, running nightly jobs that pre‑aggregate raw events into Parquet partitions in S3, indexed by hour and country. I added columnar compression (Snappy) and predicate pushdown via Glue Catalog to speed up Athena queries for compliance reports.  

**Result** – The real‑time fraud dashboard now returns results in 80 ms on average, while the nightly batch jobs cut report generation time from 4 h to under 30 min. We reduced query costs by 35% and gained a unified data model that satisfies both engineering and compliance needs. I learned that separating streaming and batch workloads, but keeping them tightly coupled through shared metadata, is key for scalable analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
