---
qid: ing_90479cdfa1__star__local
question: 'Explain: Sharding Strategies — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 355
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:21:14-05:00'
sources: []
---

**Situation** – While leading a team that built a recommendation engine for an e‑commerce platform, we hit a bottleneck: our feature store was a single PostgreSQL database holding over 30 M user–item interaction rows, and queries to compute real‑time scores were timing out during peak traffic.

**Task** – I had to design a sharding strategy that would keep read latency under 50 ms, support 10k concurrent recommendation requests per second, and allow easy horizontal scaling for the growing catalog.

**Action** – I mapped each user to a shard using consistent hashing on their ID, then replicated each shard across two nodes (primary/secondary) to provide failover. For write operations we used an asynchronous commit queue that batched updates into 1‑second micro‑batches and pushed them via Kafka to the target shard. On reads I added a local in‑memory cache per shard using Redis to serve the most recent 5 k interactions. We also introduced a “hot‑shard” monitor: if a shard’s read latency exceeded 70 ms, we auto‑split it by user ID range and rebalanced data via a background worker.

**Result** – After rollout, query latency dropped from 240 ms to 35 ms under peak load, throughput increased by 4×, and the system handled a 200% traffic surge without downtime. I learned that sharding isn’t just about partitioning; it’s also about balancing consistency, failover, and real‑time caching in one coherent pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
