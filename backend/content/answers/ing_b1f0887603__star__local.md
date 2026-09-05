---
qid: ing_b1f0887603__star__local
question: 'Explain: Coding — Databricks\u2019s Interview Process & Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 328
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:31-05:00'
sources: []
---

**Situation** – In early 2025 I was preparing for the Databricks data‑engineering track, where the first coding round focuses on Spark SQL, Python, and PySpark performance tricks. The interview panel told me they’d give a Jupyter notebook with a partially complete ETL job that had to process 200 GB of JSON logs in under 10 minutes.

**Task** – My goal was to refactor the code so it used broadcast joins, persisted intermediate RDDs appropriately, and leveraged DataFrame APIs instead of low‑level RDD transformations, all while keeping memory usage below 4 GB per executor.

**Action** – I first profiled the existing notebook with Spark UI, identified a skewed key causing long shuffle stages. I replaced the `groupByKey` with `reduceByKey`, broadcasted the small dimension table, and added `.cache()` to the filtered DataFrame after the join. I also switched from `collect()` to `write.parquet()` to avoid driver memory blowup. Finally, I automated the unit tests using PyTest to verify schema consistency.

**Result** – The refactored job ran in 3 minutes on a 12‑node cluster, reducing CPU usage by 35% and memory spikes from 8 GB to under 3 GB. I learned that profiling early and choosing the right Spark abstraction can dramatically improve performance without sacrificing readability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
