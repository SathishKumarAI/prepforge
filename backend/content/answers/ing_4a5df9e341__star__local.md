---
qid: ing_4a5df9e341__star__local
question: 'Explain: Apache Spark — Batch vs Stream Processing - What''s the Difference?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 339
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:57:08-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a real‑time fraud detection system for credit card transactions. The existing analytics pipeline ran nightly in Spark, producing daily risk scores that took too long to surface to the operations team.

**Task:**  
I had to redesign the pipeline so that new transaction data could be scored within seconds while still retaining the ability to run large historical analyses overnight without impacting performance.

**Action:**  
First, I mapped out the batch workflow: a Spark job reading Parquet logs from HDFS, aggregating per‑card metrics, and writing results back to Hive. To shift to streaming, I introduced Structured Streaming with Kafka as the source. I defined a continuous query that updated a Delta Lake table every 5 seconds, applying the same ML model (a gradient‑boosted tree) but now using micro‑batches. For the nightly batch run, I kept the original Spark job but added a checkpoint to avoid reprocessing data already handled by the stream. I also tuned the executor memory and parallelism settings: more executors for streaming to keep latency low, fewer for batch to maximize throughput.

**Result:**  
The new streaming pipeline cut transaction‑to‑score time from 30 minutes to under 10 seconds, giving fraud analysts real‑time alerts. The nightly batch still ran in ~15 minutes and produced the same comprehensive risk reports. I learned that Spark’s execution engine can handle both workloads with the right configuration; the key difference is how data is ingested (static files vs event stream) and the trade‑off between latency and throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
