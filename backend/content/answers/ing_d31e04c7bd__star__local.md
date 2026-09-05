---
qid: ing_d31e04c7bd__star__local
question: 'Explain: Cache Memory - Redis — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:31:48-05:00'
sources: []
---

**Situation**  
I was working on a new micro‑service at a SaaS startup that offered a public TinyURL API. The traffic spiked during a marketing push: over 1 million requests per hour, with 60% being cache hits for previously shortened URLs. Our initial design hit the database (PostgreSQL) for every lookup, causing latency to jump from 30 ms to 300 ms and raising cost by 25%.

**Task**  
I needed to reduce average response time below 50 ms while keeping consistency between Redis cache and PostgreSQL, without adding a second write path that could cause stale data.

**Action**  
1. Deployed an in‑memory Redis cluster (3 replicas) behind the API gateway.  
2. Implemented a read‑through cache: on miss, fetch from Postgres, populate Redis with a TTL of 24 h and return the URL.  
3. Added a write‑back mechanism using Lua scripts to atomically set key/value pairs and update PostgreSQL in a single transaction.  
4. Monitored hit rates with Redis INFO; tuned eviction policy to LRU after profiling hot keys.  
5. Used Docker Compose for local dev, then promoted the container to Kubernetes with Helm charts.

**Result**  
Cache hit rate rose from 15% to 95%, cutting average latency to 35 ms and reducing database load by 70%. The service handled the marketing traffic without scaling the DB tier. I learned how Redis’ atomic operations can simplify consistency logic, and that a modest TTL combined with LRU eviction balances freshness against performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
