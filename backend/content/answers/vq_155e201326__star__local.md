---
qid: vq_155e201326__star__local
question: what is checkpointing in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 315
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:14-05:00'
sources: []
---

**Situation:**  
During a quarterly data pipeline refresh at my previous company, we were processing a 12‑TB log dataset with Spark Structured Streaming. The job ran nightly and occasionally crashed after several hours due to driver memory exhaustion, leaving the stream in an inconsistent state.

**Task:**  
I needed to guarantee fault tolerance without sacrificing throughput: every micro‑batch had to be idempotent, and we had to recover quickly from node failures while keeping latency under 5 seconds per batch.

**Action:**  
I enabled Spark’s checkpointing mechanism on HDFS. I set `spark.sql.streaming.checkpointLocation` to a dedicated `/checkpoints/etl_job` directory and tuned the `maxOffsetsPerTrigger` to 500k records. During each micro‑batch, Spark persisted the RDD lineage and the latest offsets of Kafka into that location. When the driver restarted, it read the checkpoint file, restored the DAG state, and resumed from the last committed offset instead of replaying everything. I also added a small “deduplication” UDF to avoid duplicate rows on re‑runs.

**Result:**  
After implementing checkpointing, the job ran continuously for 30 days with no manual restarts. The average batch latency dropped from 12 seconds to 4.8 seconds, and we eliminated data loss entirely. I learned that proper checkpoint configuration is a low‑cost but high‑impact safeguard for large streaming workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
