---
qid: ing_b802550cc3__star__local
question: 'Explain: Distributed Cache — Grokking System Design Interview: Patterns
  & Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 320
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:30-05:00'
sources: []
---

**Situation**  
At my previous company we built a recommendation engine that served millions of users per day. The feature‑vector lookup was hitting our relational DB at 4 k RPS, causing latency spikes and a 15 % increase in page load times during peak hours.

**Task**  
I needed to design a distributed cache layer that could reduce database pressure, keep cache hit ratios above 95%, and support TTL-based invalidation without sacrificing consistency for real‑time recommendations.

**Action**  
I chose Redis Cluster as the backbone, sharding keys by user ID and using consistent hashing to balance load across three nodes. To handle high write traffic from model updates I implemented a write‑through strategy: every time the batch job refreshed embeddings, it updated both DB and cache in parallel via an async message queue (Kafka). For read‑misses I added a fallback to the DB with a short “stale‑while‑revalidate” period. I also set up Prometheus alerts on hit/miss ratios and latency, and used Redis’ Lua scripting for atomic increment operations that updated counters without round trips.

**Result**  
Cache hit ratio jumped from 68 % to 97 %, cutting DB load by 70 %. Page latency dropped from 350 ms to 120 ms during traffic spikes. I learned how sharding, consistent hashing, and write‑through patterns work together to build a resilient distributed cache that scales with user demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
