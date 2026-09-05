---
qid: ing_4dbc21dcd1__star__local
question: 'Explain: How to pick a good shard key for even data distribution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 372
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:04:11-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with scaling our recommendation engine from a single‑node PostgreSQL database to a sharded cluster after the user base grew to 12 million active accounts and query latency hit 400 ms for 95th percentile lookups.

**Task:**  
I had to choose a shard key that would keep data evenly distributed, minimize cross‑shard traffic, and preserve fast read/write performance for the most common queries (user profile joins and product catalog scans).

**Action:**  
1. I profiled query logs with pg_stat_statements, identifying that 70 % of reads were keyed on `user_id` while writes were mostly bulk imports of item data.  
2. I evaluated candidate keys: `user_id`, `country_code`, and a composite `(user_id % 256)`.  
3. Using the built‑in `pg_shard_placement` tool, I simulated each key against a sample dataset of 1 million rows, measuring bucket cardinality skew and cross‑shard join cost.  
4. The modulo key produced a near‑uniform distribution (max load factor < 1.02) and kept the most frequent lookups local to a single shard, while still allowing efficient range scans on `item_id` for catalog queries.

**Result:**  
After deploying the `(user_id % 256)` shard key, we saw a 3× reduction in average query latency (down to ~120 ms) and a 25 % decrease in cross‑shard traffic. The exercise taught me that realistic data profiling and simulation are essential before committing to a sharding strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
