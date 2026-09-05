---
qid: ing_e092841649__star__local
question: 'Explain: Write-Around — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 325
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:57:46-05:00'
sources: []
---

**Situation:** In a recommendation engine at my previous company, the user‑profile database was hitting 95 % CPU during peak hours because every read and write had to go straight to Cassandra.

**Task:** I needed to reduce latency for reads while still keeping the write path fast enough to support real‑time updates, without compromising data consistency across services.

**Action:** I implemented a *write‑around* caching layer using Redis. All writes were routed first to Redis (a single hash per user), then asynchronously flushed to Cassandra via a background worker pool. Reads checked Redis first; on cache miss, the value was fetched from Cassandra and immediately populated back into Redis for future hits. To avoid stale data, I set short TTLs (30 seconds) and used Redis’s `SETNX` flag to guard against concurrent updates. I also added a monitoring dashboard that tracked hit ratios and write latency, tuning batch sizes in the background worker until writes were under 10 ms on average.

**Result:** Cache hit rate rose from 35 % to 92 %, cutting read latency from 350 ms to 45 ms during peak load. Write throughput improved by 40 %, and overall system CPU usage dropped to 55 %. I learned that a well‑tuned write‑around cache balances speed and consistency, but requires careful TTLs and background sync logic to avoid data loss or staleness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
