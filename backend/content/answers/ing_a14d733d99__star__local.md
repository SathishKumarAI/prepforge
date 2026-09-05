---
qid: ing_a14d733d99__star__local
question: 'Explain: Risky Shard Key: Fields With Few Values — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 335
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:55:19-05:00'
sources: []
---

**Situation:**  
At my previous company we had a high‑traffic SaaS product that logged user events in MongoDB. The collection grew to 12 TB, and read traffic spiked during marketing campaigns. Our existing shard key was the `user_id`, but new dashboards required fast aggregation by `event_type`.  

**Task:**  
I needed to redesign sharding so that queries on `event_type` were efficient while keeping write throughput high, without causing data hotspots.

**Action:**  
I first profiled query patterns and discovered `event_type` had only five distinct values. I knew this was a risky shard key because it would produce uneven distribution. Instead, I introduced a composite key: `{ event_type, random_uuid() }`. The `random_uuid()` component spread writes across shards, while the leading `event_type` allowed range scans on that field. I updated the collection’s sharding config via `sh.shardCollection`, added an index on the new key, and wrote a migration script to rebuild the shard key without downtime. I also set up automatic balancer monitoring and adjusted chunk sizes to prevent over‑fragmentation.

**Result:**  
After deployment, read latency for event dashboards dropped from 850 ms to 120 ms (75% improvement). Write throughput remained at 1,200 ops/s with no hotspots. I learned that when a field has few distinct values, coupling it with a random component can preserve distribution while still enabling efficient queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
