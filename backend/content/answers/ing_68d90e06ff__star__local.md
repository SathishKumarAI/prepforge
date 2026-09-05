---
qid: ing_68d90e06ff__star__local
question: 'Explain: 3.4 Concurrent and Parallel — Concurrency vs Parallelism - by
  Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 369
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:03-05:00'
sources: []
---

**Situation**  
While leading a fraud‑detection model for an online payment gateway, our nightly batch job was taking 18 hrs on the legacy single‑threaded pipeline, causing stale alerts and customer complaints.

**Task**  
I needed to cut runtime to under 4 hrs without compromising accuracy or data integrity, while keeping cost within budget.

**Action**  
I first mapped the pipeline: data ingestion → feature engineering → model inference → result aggregation. I identified independent stages (e.g., per‑country feature extraction) and decided on a two‑layer approach:

1. **Concurrency** – using Python’s `asyncio` to overlap I/O‑bound tasks (API calls, database reads). This let the event loop fetch data for multiple accounts simultaneously, reducing idle wait time.
2. **Parallelism** – deploying a Spark cluster with 8 worker nodes and leveraging DataFrame operations that run in parallel across partitions. For CPU‑intensive model inference, I switched from scikit‑learn to TensorFlow’s `tf.data` pipelines, which internally use multiple threads via the `tf.distribute.MirroredStrategy`.

I also introduced a lightweight task queue (Celery) to balance load and automatically retry failed jobs.

**Result**  
Runtime dropped from 18 hrs to 3.5 hrs—a 80% reduction—while the AUC stayed at 0.97. The cost increased by only 12% due to the modest cluster size. I learned that true speedups come from pairing concurrency for I/O with parallelism for compute, and that profiling is essential to identify the right granularity of tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
