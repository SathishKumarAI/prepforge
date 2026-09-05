---
qid: ing_ee59c4100c__star__local
question: 'Explain: Data storage — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:25:15-05:00'
sources: []
---

**Situation:**  
During my senior year capstone I led a team building a real‑time analytics platform for a local retailer that had to ingest ~500 GB of sales data per day and serve drill‑down queries in under two seconds.

**Task:**  
Design the underlying data storage layer: choose the right mix of file format, partitioning strategy, indexing, and caching so the system could scale horizontally while keeping latency low.

**Action:**  
I started by evaluating columnar formats (Parquet vs ORC) for cost‑effective compression and predicate pushdown. I decided on Parquet because it offered 30 % smaller size than ORC in our tests and better support in Spark. For partitioning, we used a composite key of `date` + `store_id`, which reduced scan time by 70 %. To accelerate point lookups, I added a Bloom filter per partition and a small in‑memory LRU cache for the most recent day’s data. We deployed the storage on AWS S3 with lifecycle policies to move older partitions to Glacier, and used Athena for ad‑hoc queries while Spark jobs ran on EMR clusters.

**Result:**  
Query latency dropped from 5 s to 1.8 s, throughput increased by 4×, and storage costs fell 25 % after implementing the partitioning scheme. I learned that a pragmatic mix of format choice, smart partitioning, and targeted caching can turn a raw data lake into an efficient analytic engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
