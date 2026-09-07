---
qid: vq_60c14123f6__aws__local
question: How to read file from hdfs or other sources in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 467
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:59-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was leading a data‑engineering sprint for the Retail Analytics team. Our new recommendation engine required ingesting terabytes of click‑stream logs from HDFS, S3, and an on‑prem Kafka topic. The existing ETL pipeline stalled at 2 GB per job, causing a 48 h lag behind real‑time metrics.

**Action (Dive Deep + Bias for Action)**  
1. **Unified Source Abstraction** – I wrote a Spark `DataSource` that accepted a URI (`hdfs://…`, `s3a://…`, `kafka://…`) and internally routed to the appropriate reader:  
   * HDFS → `spark.read.format("parquet").load(uri)`  
   * S3 → same, with `fs.s3a.access.key`/`secret.key` credentials from Secrets Manager.  
   * Kafka → `spark.readStream.format("kafka")`.  
2. **Schema‑Inference & Caching** – Leveraged Spark’s schema inference once per partition and cached the first 10 GB in S3 Glacier to avoid repeated scans.  
3. **Scalable Partitioning** – Repartitioned by hour and user ID, then used `coalesce(200)` for downstream joins, cutting shuffle time from 12 min to 2 min.  
4. **Cost Control** – Enabled dynamic allocation (`spark.dynamicAllocation.enabled=true`) and set a max executor limit of 64 to keep on‑demand costs under $0.30/hour per job.

**Result (Deliver Results)**  
- Reduced ingestion time from **48 h to 6 h** for the same data volume.  
- Cut Spark cluster cost by **35 %** while maintaining a 99.9 % SLA on downstream dashboards.  
- The new abstraction is now used across all teams, lowering onboarding effort by **40 %**.

*Bar‑raiser cues:* ownership of end‑to‑end flow, deep dive into partitioning/shuffle mechanics, quantitative impact on latency and cost, and a lesson that caching the first 10 GB saved us from unnecessary recomputation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
