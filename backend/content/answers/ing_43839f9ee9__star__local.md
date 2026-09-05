---
qid: ing_43839f9ee9__star__local
question: 'Explain: Batch Processing — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 341
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:54-05:00'
sources: []
---

**Situation** – At my previous company we were running nightly recommendation jobs for our e‑commerce platform. The existing Spark cluster was over‑committed; the 24 hour window kept shrinking and we started missing the midnight cut‑off, causing stale product feeds on the site.

**Task** – I had to redesign the batch processing architecture so that we could reliably finish all nightly training and inference jobs within a two‑hour window while keeping costs under $5K per month.

**Action** – First, I profiled the pipeline with Spark UI and identified that data shuffling was the bottleneck. I switched to a hybrid approach: use AWS Glue for ETL (leveraging its serverless capacity) and then move to an Airflow DAG that orchestrates Docker‑based TensorFlow jobs on spot EC2 instances. I added incremental checkpoints in S3 using Delta Lake, so only new data triggers retraining. For scheduling, I implemented a back‑pressure mechanism: if the previous run overran, the next batch is throttled by reducing parallelism until the cluster stabilizes.

**Result** – The new design cut nightly runtime from 4 hours to 1.5 hours, keeping us well under the midnight deadline. Costs dropped to $3.8K/month due to spot instances and reduced idle time. I learned that profiling early, separating ETL from training, and using serverless resources for low‑priority tasks can dramatically improve batch throughput without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
