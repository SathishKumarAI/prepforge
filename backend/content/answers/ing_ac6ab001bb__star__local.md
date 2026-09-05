---
qid: ing_ac6ab001bb__star__local
question: 'Explain: Routing algorithm — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 370
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:23-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a real‑time recommendation service that had to route user requests to the right model shard. Our existing monolithic inference engine was choking on latency spikes during peak traffic; we had an SLA of <50 ms for 95% of requests.

**Task:**  
I needed to redesign the routing layer so it could scale horizontally while keeping data locality high enough to avoid costly cross‑shard joins, and reduce overall query time by at least 30%.

**Action:**  
I evaluated two partitioning strategies. For **vertical partitioning**, we split features across shards (e.g., demographic vs behavioral) and routed requests based on the feature set needed for each model variant. This reduced per‑request data size but introduced complex routing logic and increased cache miss rates.  
For **horizontal partitioning**, we replicated the entire feature set per shard and used a consistent hashing ring keyed by user ID to spread traffic evenly. We added a lightweight lookup table in Redis that mapped user IDs to shards, allowing constant‑time routing. I implemented this with Go’s `hash/fnv` library, tuned bucket sizes, and added health checks so failed shards were bypassed automatically.

**Result:**  
The horizontal scheme cut average latency from 75 ms to 48 ms and dropped the 95th percentile by 35%. Traffic was evenly balanced across three nodes, improving throughput by 1.8×. I learned that while vertical partitioning can reduce data transfer per request, it often hurts performance when routing logic outweighs the savings; horizontal replication with smart hashing delivers better scalability for latency‑critical ML services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
