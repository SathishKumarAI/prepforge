---
qid: ing_436aa13c3d__star__local
question: 'Explain: Caching Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 310
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:43:39-05:00'
sources: []
---

**Situation:**  
While leading the redesign of our recommendation engine at a mid‑size e‑commerce platform, we noticed that the latency for generating personalized product lists was creeping up to 350 ms per request during peak traffic (12k concurrent users). Our database queries were hitting the same user profile table repeatedly, causing throttling.

**Task:**  
I needed to build a scalable caching layer that would reduce read latency by at least 70% while keeping cache consistency for rapidly changing inventory data.

**Action:**  
I chose Redis as an in‑memory store and implemented a two‑tier cache: a local LRU cache on each application instance for the most frequently accessed user profiles, and a distributed Redis cluster with sharding to handle global traffic. I used a write‑through pattern so updates to the user profile database automatically propagated via Kafka events that triggered cache invalidation in Redis. To balance consistency and speed, I set a TTL of 10 seconds on less critical keys and employed optimistic locking for inventory changes.

**Result:**  
The average recommendation latency dropped from 350 ms to 95 ms—an 73% improvement—and the system handled 25k concurrent users with <2 % cache miss rate. I learned that coupling local caches with a sharded distributed store, plus event‑driven invalidation, is key for scaling read‑heavy ML services while preserving data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
