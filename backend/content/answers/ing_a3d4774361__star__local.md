---
qid: ing_a3d4774361__star__local
question: How does shard size affect performance? — How many shards should I have
  in my Elasticsearch cluster? | Elastic Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 336
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:05-05:00'
sources: []
---

**Situation**  
At a fintech startup, we migrated our production analytics index from 5 GB to 120 GB over six months. The existing cluster had 12 primary shards and was hitting slow search times—median latency climbed from 80 ms to 350 ms during peak trading hours.

**Task**  
I needed to rebalance shard sizing so that query throughput improved without exhausting node memory or CPU, while keeping index rebuild time acceptable for nightly refreshes.

**Action**  
1. Ran the `elasticsearch-shard-size` tool on a replica cluster and found an optimal primary size of ~40 GB each.  
2. Reduced shard count from 12 to 3 per index by reindexing with `?wait_for_completion=false`, monitoring `_cat/shards` for memory usage.  
3. Enabled dynamic mapping only for the most frequently queried fields, turning off unnecessary analyzers on the remaining shards.  
4. Updated our ingestion pipeline to use bulk API with a target of 5 MB per request, ensuring shard warm‑up was efficient.

**Result**  
Median search latency dropped to 90 ms (≈ 75% faster), and index refresh time fell from 12 min to 3 min. CPU usage on each node decreased by ~30%, freeing resources for new dashboards. I learned that keeping shards between 20–40 GB balances memory overhead with query speed, and that aggressive bulk ingestion combined with selective mapping can drastically improve cluster health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
