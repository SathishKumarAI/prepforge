---
qid: ing_3bbc2814da__star__local
question: 'Explain: The Problem with Modulo Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 325
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:28:06-05:00'
sources: []
---

**Situation**  
When I was building a distributed cache for a real‑time analytics platform, our team used simple modulo hashing to map keys to shards. With 10 nodes we had an average hit rate of 92 %, but every time we added or removed a node the cache thrived on a massive data reshuffle—about 60 % of keys were remapped and the system went down for 30 minutes during rebalancing.

**Task**  
I needed to design a sharding scheme that would minimize key movement, keep hot spots balanced, and allow seamless scaling without downtime.

**Action**  
I introduced consistent hashing with virtual nodes. Each physical server owned 200 virtual tokens on the hash ring; keys were hashed to the nearest token clockwise. When a node left or joined, only its neighboring ranges shifted, affecting <5 % of keys. I also implemented a weighted ring so larger instances received proportionally more tokens, and added a small “eviction queue” that drained stale entries in background threads to avoid write stalls. The system was built with Go’s `hash/fnv` for speed and a custom RPC layer for token coordination.

**Result**  
The hit rate rose to 98 %, node churn caused <2 % key movement, and scaling operations completed in under 10 seconds with no service interruption. I learned that a theoretically elegant approach like consistent hashing can solve real‑world bottlenecks when combined with careful tuning of token counts and weight distribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
