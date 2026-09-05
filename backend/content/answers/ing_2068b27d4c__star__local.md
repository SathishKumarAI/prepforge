---
qid: ing_2068b27d4c__star__local
question: 'Explain: Features — Apachecasandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 329
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:34:16-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine for an e‑commerce platform. The model needed millions of user and item attributes (click history, purchase frequency, demographic tags) to be available with sub‑second latency during inference.

**Task:**  
I had to design a feature store that could ingest, update, and serve these features at scale while keeping the pipeline simple for data scientists.

**Action:**  
I chose Apache Cassandra because of its linear scalability and tunable consistency. I modeled each user as a row key and stored features in wide columns (e.g., `feature_clicks_last_7d`, `item_popularity_score`). Using Cassandra’s secondary indexes on the most queried fields, I kept read latency below 5 ms. I wrote an ingestion job with Spark Structured Streaming that flushed to Cassandra every 30 seconds, and set up a TTL of 90 days for stale features. For schema evolution, I used lightweight transactions (LWT) to add new columns without downtime.

**Result:**  
The feature store handled 2 million write ops per second and served 1.5 million read ops with <10 ms latency during peak traffic. The recommendation accuracy improved by 12% (AUC from 0.73 to 0.82). I learned that careful key design, TTL management, and LWT can make Cassandra a robust ML feature store.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
