---
qid: ing_3ded362c61__star__local
question: 'Explain: Write-Through — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:15-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the product‑catalog service for a global e‑commerce platform that served millions of read requests per second while still keeping inventory data accurate across three data centers.

**Task** – The goal was to reduce latency on catalog lookups by 30 % without sacrificing consistency between the cache and the relational database, and to keep write throughput high enough to handle flash sales where orders could spike to 5k writes/sec.

**Action** – I chose a write‑through strategy. Every time an inventory update hit the API, it first updated the PostgreSQL table via an upsert, then immediately wrote the new value to a Redis cache using `SET` with `NX/XX` flags and a TTL of 10 s for hot items. To avoid cache stampedes during high traffic, I implemented a “cache aside” fallback that refreshed the key only if the write‑through failed (network hiccup). For bulk updates I wrapped them in a transaction and used Redis pipelines to batch cache writes, reducing round‑trips from 5 k to < 100 per second. Monitoring showed read latency drop from 120 ms to 70 ms while consistency errors fell below 0.001%.

**Result** – We achieved the target 30 % latency reduction and maintained strict read/write consistency. The system also scaled to 10× traffic during peak sales with no data loss, proving that a well‑tuned write‑through cache can deliver both speed and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
