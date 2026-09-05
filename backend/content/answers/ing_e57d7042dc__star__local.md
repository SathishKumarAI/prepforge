---
qid: ing_e57d7042dc__star__local
question: 'Explain: Data Partitioning — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 331
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:06:44-05:00'
sources: []
---

**Situation** – At a fintech startup, our real‑time fraud detection pipeline was ingesting 5 M events per minute and had to return risk scores within 150 ms. The database read latency grew from 30 ms to 120 ms during peak hours, causing SLA breaches.

**Task** – Reduce the average query latency below 80 ms while keeping data freshness within 2 seconds, without adding a new tier of hardware.

**Action** – I introduced an in‑memory cache layer using Redis. First, I identified hot keys: user transaction histories and merchant risk profiles that appeared in >70% of queries. Then, I partitioned the cache by region to avoid single‑point failures and set up a write‑through strategy: every time the primary PostgreSQL updated a profile, the service simultaneously refreshed the corresponding Redis key with an expiry of 2 s. To handle cache misses gracefully, I implemented a fallback that fetched from Postgres and immediately repopulated Redis, ensuring no latency spike. Finally, I added metrics dashboards to monitor hit‑rate (target >95%) and eviction patterns.

**Result** – Cache hit‑rate jumped to 96%, cutting average query latency to 55 ms and eliminating SLA violations. The system now scales horizontally by simply adding more cache shards. I learned that careful key selection, expiry tuning, and monitoring are crucial; a naive cache can backfire if it serves stale data or causes race conditions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
