---
qid: ing_d0b12b0670__star__local
question: 'Explain: Caching Anti-Patterns — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 345
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:44-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time recommendation engine that served personalized ads to millions of users per day. The model inference latency was 350 ms on average, but our SLA demanded sub‑200 ms responses for the top 5% of traffic during peak hours.

**Task:**  
I had to reduce latency without compromising accuracy, and I chose to introduce a caching layer for precomputed feature vectors and model outputs. However, early experiments revealed that naïve cache key design caused “cache stampedes” and stale data issues, hurting performance rather than helping.

**Action:**  
1. Implemented a **sharded LRU cache** keyed by user ID + model version, using Redis Cluster to avoid single‑point bottlenecks.  
2. Added a **write‑through policy** that refreshed entries asynchronously when the underlying feature store updated, preventing stale reads.  
3. Introduced **cache warming scripts** during low traffic windows and set per‑key TTLs based on churn rates (high‑volatility users got 5 min TTLs).  
4. Monitored hit ratios with Prometheus; when a 10% drop was detected, the system automatically throttled new cache writes to prevent stampedes.

**Result:**  
Cache hit ratio rose from 18% to 78%, cutting average inference latency to 140 ms during peak periods and reducing CPU usage by ~30%. I learned that thoughtful keying, eviction policies, and TTL tuning are as critical as the cache itself in ML‑driven systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
