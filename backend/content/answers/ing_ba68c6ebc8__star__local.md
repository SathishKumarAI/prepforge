---
qid: ing_ba68c6ebc8__star__local
question: 'Explain: Data Processing — Concurrency vs Parallelism - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 399
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:56-05:00'
sources: []
---

**Situation**  
During a quarterly analytics sprint at my previous company we had to process ~4 TB of click‑stream logs every night. The existing batch job ran sequentially on a single Spark executor and finished in 8 hours—well past the 3 hour SLA for downstream dashboards.

**Task**  
I was tasked with cutting the runtime to under 2 hours while preserving data integrity and keeping resource costs flat.

**Action**  
First I profiled the job: most of the time was spent on CPU‑bound feature engineering (normalizing timestamps, hashing user IDs) and a few I/O‑heavy joins. I re‑architected the pipeline in two stages:

1. **Concurrency** – I split the data into 16 micro‑partitions and launched them as independent tasks within each executor using Python’s `concurrent.futures.ThreadPoolExecutor`. This let us overlap I/O (reading from S3) with CPU work, improving throughput by ~30 % without adding nodes.

2. **Parallelism** – For the CPU‑bound transforms I switched to Spark’s built‑in parallel shuffle and increased the number of cores per executor from 4 to 8, enabling true data‑parallel execution across the cluster. I also tuned `spark.sql.shuffle.partitions` to match the data size, reducing spill overhead.

Finally, I added a lightweight checkpoint after the feature extraction stage to avoid recomputing partial results on failures.

**Result**  
The nightly job now completes in 1 hour and 45 minutes—an 80 % speed‑up—while staying within budget. The exercise taught me that concurrency is great for overlapping I/O, whereas parallelism is the key lever when scaling CPU‑bound workloads across a cluster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
