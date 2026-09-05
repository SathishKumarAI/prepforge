---
qid: ing_1c0f824e14__star__local
question: 'Explain: Distributed Object Storage — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 358
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:25:33-05:00'
sources: []
---

**Situation** – At my last role, the product team wanted to scale Instagram’s photo and video delivery to support a projected 50 % user growth in the next year while keeping latency under 120 ms. The existing single‑node object store was hitting write throughput limits and had no fault tolerance.

**Task** – I was tasked with designing a distributed object storage layer that could handle millions of uploads per second, provide strong consistency for media metadata, and automatically replicate data across regions to reduce egress costs.

**Action** – I first scoped the access patterns: 90 % reads, 10 % writes. I chose an eventual‑consistent key/value store (Cassandra) for metadata with a sharded S3‑compatible object storage backend. For data placement, I implemented consistent hashing with virtual nodes to balance load and used Erasure Coding (EC) instead of full replication to cut storage overhead by ~30 %. To meet latency goals, I added an in‑memory cache layer using Redis per edge location and a CDN front‑end that fetched objects directly from the nearest node. I also built a health‑check service that auto‑rebalances shards when a node failed, ensuring zero downtime.

**Result** – The new system handled 4 M uploads/second with <110 ms average read latency across three continents. Storage costs dropped by 28 % and we eliminated the single point of failure. I learned that marrying consistent hashing with erasure coding can provide both scalability and cost efficiency, and that a layered cache/CDN strategy is essential for low‑latency media delivery at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
