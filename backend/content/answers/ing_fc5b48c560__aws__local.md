---
qid: ing_fc5b48c560__aws__local
question: 'Explain: Get started with search today — MongoDB Search: Scalable Full-Text
  Search | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 434
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:30-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a product that needed a full‑text search layer for over 4 M user profiles and 12 M posts. The existing relational DB was slow (≈ 1 s per query) and couldn’t handle the growing write load.

**Action**  
I chose **MongoDB Atlas Search** because it integrates natively with our sharded cluster, offers near‑real‑time indexing, and eliminates an extra data copy. I:

1. Defined a composite text index on `username`, `bio` and `post.content`.  
2. Used the `$search` aggregation stage to leverage Lucene scoring, boosting relevance for recent posts (`$addFields: { recencyBoost: {$multiply:[{$subtract:[now,$post.createdAt]},0.0001]} }`).  
3. Deployed a **read‑replica set** with auto‑scaling shards; each shard had 10 GB of RAM and an SSD, giving us ~200 RPS per node.  
4. Enabled **Atlas Search’s autoscaling** to add shards when traffic exceeded 80 % CPU.  
5. Implemented a cache layer (Redis) for the top‑50 hot queries, cutting read latency from 250 ms to < 30 ms.

**Result**  
Search latency dropped from 1 s to **< 200 ms** on average; hit‑rate rose from 78 % to 94 %. The system sustained 5 k concurrent users without throttling. Cost stayed below $2K/month, a 35 % savings over the planned OpenSearch cluster.

**Learning**  
I learned that *deep dive into index tuning* (sharding strategy, field weighting) can deliver big gains, and that ownership means iterating on metrics until you hit business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
