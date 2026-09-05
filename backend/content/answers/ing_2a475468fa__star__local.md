---
qid: ing_2a475468fa__star__local
question: 'Explain: Shard — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 342
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:42-05:00'
sources: []
---

**Situation:**  
At my previous company we built a real‑time analytics platform that ingested clickstream data from millions of users daily. By the end of Q2, our single MongoDB instance was hitting 8 GB RAM usage and query latency spiked to ~250 ms for the top 10% of time series queries.

**Task:**  
I needed to scale horizontally so we could keep write throughput above 20k ops/sec while reducing read latency below 50 ms, all within our $500/month cloud budget.

**Action:**  
I designed a sharding strategy around a hashed shard key on the `session_id` field. First, I added three shards (each an Atlas cluster with two replicas) and enabled automatic balancing. Then I re‑wrote the heavy aggregation pipeline to use `$lookup` only on a pre‑aggregated “daily_summary” collection that was also sharded by `date`. I monitored `shardCollection` stats and tuned the chunk size from 64 MB to 32 MB to avoid hotspots. Finally, I implemented a read preference of `secondaryPreferred` for reporting queries to spread load.

**Result:**  
After deployment, write latency dropped to ~15 ms, query latency fell to 30 ms on average, and we handled 35k ops/sec without hitting memory limits. The cost stayed under budget, and the team gained confidence in scaling our data layer—showing that thoughtful sharding and read/write tuning can deliver measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
