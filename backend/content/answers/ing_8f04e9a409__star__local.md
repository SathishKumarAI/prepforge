---
qid: ing_8f04e9a409__star__local
question: 'Explain: Expiration Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 351
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:04-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine that relied on an in‑memory cache of user profiles. The cache was shared across 300 microservices and we saw cache hit rates drop from 92 % to 68 % during peak traffic because stale data persisted too long, violating our SLA of <5 ms latency.

**Task:**  
I had to design a scalable expiration policy that kept the cache fresh without adding bottlenecks or incurring heavy memory churn. The goal was to maintain >90 % hit rate while keeping CPU usage under 30 % on each node.

**Action:**  
1. Implemented a hybrid TTL/size‑based eviction: per‑key TTLs derived from data change frequency, and a global LRU policy for overflow.  
2. Used a lightweight probabilistic “time wheel” (hashed buckets) to batch expiration checks every 100 ms instead of per‑item timers.  
3. Added an async “write‑through” thread that listens to Kafka events on profile updates; it immediately invalidates or refreshes the cache entry, ensuring near‑real‑time consistency.  
4. Monitored hit/miss rates with Prometheus alerts and adjusted TTLs via a small configuration service.

**Result:**  
Cache hit rate rose to 94 %, latency stayed below 3 ms, and CPU overhead dropped from 45 % to 22 %. I learned that combining fine‑grained TTLs with batched expiration checks yields high scalability while keeping the system simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
