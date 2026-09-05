---
qid: ing_3892c2782f__star__local
question: 'Explain: Consider Alternatives — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 319
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:21:44-05:00'
sources: []
---

**Situation** – I was leading the redesign of our recommendation engine’s feature‑store at a fast‑growth e‑commerce platform. Our previous round‑robin sharding caused data skew; some shards were twice as heavy and latency spiked to 350 ms during peak traffic.

**Task** – Build a scalable, low‑latency storage layer that could evenly distribute user embeddings across nodes while allowing seamless node addition/removal without re‑balancing the entire dataset.

**Action** – I introduced consistent hashing with virtual replicas. Each embedding key was hashed via SHA‑256, then mapped onto a 64‑bit ring. We created 200 virtual nodes per physical server to smooth load distribution. To handle hot keys, we implemented a “hotspot” cache that temporarily replicated the most frequent embeddings on a dedicated caching layer (Redis). I also added a lightweight monitoring daemon that recalculated replica placement every 30 minutes and triggered graceful data migration when node count changed.

**Result** – The new sharding scheme cut per‑request latency from 350 ms to 95 ms during traffic spikes, and reduced CPU utilization on hot shards by 40%. Adding a fourth storage node required only 5 % of the original data movement time. I learned that combining consistent hashing with targeted caching can dramatically improve both performance and operational elasticity in ML‑driven services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
