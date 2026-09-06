---
qid: vq_a18d323d4f__faang__local
question: Real-time dashboards or batch reports?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 496
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:56-05:00'
sources: []
---

**Clarify**  
We need to decide whether a data‑engineering solution should deliver real‑time dashboards (continuous, low‑latency feeds) or batch reports (periodic aggregates). I’d confirm:  
* What latency is acceptable for end users?  
* How frequently do the underlying metrics change?  
* Is the volume high enough that streaming becomes costly?  
* Do we need historical drill‑down or only current snapshots?

**Approach**  
1. **Profile data velocity & volume.**  
2. **Map user needs to latency buckets (≤1 s, 1–5 min, >5 min).**  
3. **Select architecture: stream‑first for <5 min, batch‑first otherwise.**  
4. **Design for scalability and fault tolerance (Kafka + Spark Structured Streaming vs. nightly ETL with Hive/Redshift).**

**Depth**  
*Real‑time:* Use a log‑based ingestion pipeline (Kafka → Kinesis Data Streams) feeding into a stateful stream processor (Apache Flink or Spark Structured Streaming). Persist results in a low‑latency store (DynamoDB, ClickHouse). Complexity: O(1) per record; cost scales linearly with throughput.  
*Batch:* Extract nightly from source, transform via Airflow DAGs → Parquet on S3/HDFS, load into OLAP cube (Snowflake/BigQuery). Complexity: O(N log N) for joins; cost is fixed per job.

**Edge Cases**  
*Spike in traffic*: stream pipeline must auto‑scale or fall back to batch.  
*Schema evolution*: streaming needs dynamic schema handling; batch can lag behind but easier to version.  
*Missing data*: real‑time requires watermarking; batch can recompute from raw logs.

**Optimize & Communicate**  
Start with a hybrid “lambda” approach: stream for critical KPIs (click‑through, error rates) and batch for historical analytics (monthly revenue). This balances cost, freshness, and maintainability. Explain trade‑offs to stakeholders—real‑time gives immediate insight but higher ops overhead; batch is cheaper but less actionable. End with a roadmap: prototype stream pipeline in 2 weeks, evaluate latency vs. business impact, then decide whether to fully commit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
