---
qid: ing_b4ff42fae2__star__local
question: 'Explain: How PySpark divides the work — PySpark for Beginners: Building
  Intermediate-Level Skills'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 328
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:35-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling a recommendation pipeline that processed 120 GB of click‑stream logs daily. The existing single‑node Spark job was choking on memory and taking over an hour per run, which broke our data freshness SLA.

**Task** – My goal was to rewrite the job in PySpark so it could parallelize across the cluster, reduce runtime to under 15 minutes, and keep CPU usage below 70 % to avoid resource contention with other workloads.

**Action** – I first broke the workflow into three stages: data ingestion, feature engineering, and model inference. Using RDDs for low‑level transformations (e.g., `mapPartitions` to stream raw logs), then converting to DataFrames for SQL‑like aggregations (`groupBy`, `join`). I leveraged Catalyst optimizer by keeping operations in DataFrame API and avoiding UDFs where possible. For the heavy join, I broadcasted a small user profile table to minimize shuffle. Finally, I configured partitioning (`repartition(200)`) based on the cluster’s 8‑core executors, and tuned `spark.sql.shuffle.partitions` to match.

**Result** – The refactored job completed in 12 minutes, a 78 % speedup, and used only 60 % of CPU. I learned that careful partitioning, broadcast joins, and sticking to DataFrame APIs are key to PySpark’s distributed efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
