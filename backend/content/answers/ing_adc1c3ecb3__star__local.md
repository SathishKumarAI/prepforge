---
qid: ing_adc1c3ecb3__star__local
question: 'Explain: Cache frequently accessed URLs — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 333
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:34-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a new URL‑shortening service (TinyURL‑Pro), we noticed that the “click‑through” API was hitting our database at ~30 k requests per second during peak hours, causing latency spikes and 500 errors.

**Task:**  
Reduce database load by caching the most frequently accessed short URLs so that the click handler could respond within 10 ms for 95% of traffic while keeping data consistent with a single source of truth.

**Action:**  
I architected a Redis‑based cache layer keyed by the short code. Each time a URL was created, we stored the mapping in both Postgres and Redis (write‑through). For reads, the handler first attempted `GET` from Redis; on miss it fetched from Postgres, updated Redis with a 24‑hour TTL, and returned the long URL. To avoid cache stampedes during a sudden spike, I implemented a distributed lock using Redlock so only one worker would populate Redis for a missing key. We also added an LRU eviction policy to keep memory usage under 2 GB on our 8 node cluster.

**Result:**  
Cache hit rate rose from ~5% to 92%, cutting database queries by 85% and reducing average latency from 48 ms to 7 ms. The service handled a 4× traffic surge without additional servers, and we saved ~$12k/month on infrastructure. I learned that coupling cache with proper invalidation strategies is critical for high‑throughput services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
