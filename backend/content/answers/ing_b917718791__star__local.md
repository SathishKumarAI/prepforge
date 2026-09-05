---
qid: ing_b917718791__star__local
question: 'Explain: Cache in Distributed Systems — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 361
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:20-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a real‑time analytics platform at my last company, we hit a bottleneck: query latency spiked from ~120 ms to over 1.5 s during peak traffic (15k requests/sec) because every request hit our sharded Postgres cluster.

**Task:**  
I needed to reduce average response time below 200 ms while keeping data freshness within one minute, all without breaking the existing API contract or adding a costly new database tier.

**Action:**  
I introduced a distributed Redis cache with a two‑level strategy:  
1. **Hot key caching** – identified the top 5% of frequently queried dimensions (using query logs) and stored their pre‑aggregated results in Redis, refreshing every 30 s via a scheduled worker.  
2. **Cache-aside for ad‑hoc queries** – wrapped our data access layer so that if a cache miss occurred, the query hit Postgres, the result was serialized to JSON, and then asynchronously written back to Redis with a TTL of 60 s. I also added key namespacing per tenant to avoid cross‑tenant bleed and used Lua scripts for atomic increment/decrement counters.

**Result:**  
Latency dropped from 1.5 s to 140 ms on average (≈80% improvement). Traffic spikes were absorbed, freeing the database to serve more write operations. I learned that careful key design and TTL tuning are as critical as choosing the right in‑memory store; a small misstep can lead to stale data or cache stampedes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
