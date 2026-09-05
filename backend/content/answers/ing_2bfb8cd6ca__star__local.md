---
qid: ing_2bfb8cd6ca__star__local
question: 'Explain: Account for Uneven Key Popularity — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 355
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:56:04-05:00'
sources: []
---

**Situation** – While working on a real‑time recommendation service at my last company, we noticed that a handful of item IDs were driving 70 % of our cache hits in Redis. The cache eviction policy was wiping out these hot keys just as the cold ones began to populate, causing spikes in database reads and a 15 % increase in response latency during peak hours.

**Task** – I needed to redesign the key placement so that traffic would be balanced across shards without sacrificing lookup speed or complicating the client logic.

**Action** – I implemented consistent hashing with virtual nodes on top of our existing Redis cluster. Each shard was given 100 virtual replicas, and we used a SHA‑256 hash of the key to map it onto the ring. To mitigate hot spots, I introduced a “bias factor” that temporarily moved the most frequently accessed keys to additional replica shards during traffic surges. I also added a small in‑memory LRU layer for ultra‑hot items to reduce cross‑shard lookups.

**Result** – After deployment, cache hit ratios across shards stabilized at 1:1:1:1 within 10 % variance, and peak latency dropped from 350 ms to 210 ms (a 40 % reduction). I learned that a well‑tuned consistent hashing layer can turn uneven key popularity into predictable performance gains without adding complexity for developers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
