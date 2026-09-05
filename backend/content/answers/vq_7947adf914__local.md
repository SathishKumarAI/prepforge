---
qid: vq_7947adf914__local
question: What's the acceptable latency?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 218
output_tokens: 407
total_tokens: 625
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer (crisp):**  
In production I set the “acceptable latency” to the tightest value that still lets us meet business SLAs while keeping costs reasonable—typically *< 5 min* for near‑real‑time analytics and *≤ 24 h* for batch data lakes. Anything slower than that usually forces a redesign of the ingestion or processing stack.

**Nuance (experience):**  
I’ve run Kafka + Spark Structured Streaming pipelines where a 2‑minute latency hit was acceptable because downstream dashboards refreshed every minute. When the same pipeline drifted to 10 minutes, we saw stale KPI alerts and missed revenue opportunities; that pushed us to switch from batch‑mode Spark to Flink with checkpointing on RocksDB, reducing latency by ~70 % at a modest increase in state store cost.

Batch pipelines feeding Snowflake or BigQuery often tolerate up to 24 hours. In one case we had a nightly ETL job that ran 48 h; the downstream BI team complained about “out‑of‑date” reports, so we split the workload into two stages: an hourly micro‑batch for critical tables and a full refresh every 12 h. The trade‑off was extra Spark jobs but the cost hit was under 5 % of our monthly spend.

When latency requirements tighten (e.g., real‑time fraud detection), I’ve added Kafka Streams or Kinesis Data Analytics to push processing to milliseconds, but that demands more powerful workers and tighter monitoring—latency becomes a cost driver. Thus, the acceptable threshold is always “the lowest latency that lets the business function without over‑engineering.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
