---
qid: ing_615b725202__star__local
question: 'Explain: Choosing a Shard Key — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 329
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:42-05:00'
sources: []
---

**Situation** – In my last role I built a recommendation engine that served 15 M users daily. Our training data grew to 3 TB and the inference API hit 30k QPS, so we had to shard the user‑feature table in Cassandra to keep latency under 10 ms.

**Task** – I needed to pick a shard key that balanced read/write load, avoided hot spots, and still let us join with the product catalog efficiently during feature retrieval.

**Action** – I profiled query patterns: most lookups were “user_id + timestamp” for recent interactions. I ran a cost‑model simulation in Python, testing candidate keys (user_id, country, device_type) against our write burst patterns and read distribution. After evaluating 10 k simulated workloads, I chose a composite key `(user_id, bucket(timestamp))` where `bucket` was a 1‑hour hash. This kept hot‑writes on the same hour shard but spread reads across multiple nodes. I also added a lightweight secondary index on `country` for the occasional cross‑regional analytics query.

**Result** – Sharding reduced average read latency from 28 ms to 8 ms and eliminated the previous node‑overload spikes, boosting overall system throughput by ~35%. The exercise taught me that realistic workload simulation is essential before committing a shard key, and that composite keys can reconcile conflicting read/write patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
