---
qid: ing_1d515fbfa9__aws__local
question: 'Explain: Adding TTL — Caching strategies for Memcached - Amazon ElastiCache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 479
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:37-05:00'
sources: []
---

**Situation & Task**  
In my last role I was tasked with reducing the latency of a recommendation engine that hit our DynamoDB table 3 × 10⁶ reads per day. The service returned *cold‑start* slowness and incurred high read costs. My goal: cut API response time from 350 ms to <120 ms while keeping cost growth linear.

**Action & Design**  
I chose **Amazon ElastiCache for Memcached** because it offers low‑latency key/value storage with automatic sharding and built‑in eviction policies—exactly what we needed for short‑lived recommendation vectors.  

1. **TTL Strategy** – Set a 12 h TTL on each cache entry; the underlying ML model updates only once daily, so stale data would not hurt relevance.  
2. **Cache Invalidation** – Whenever a user’s profile changed (e.g., new purchase), I published an SNS notification that triggered a Lambda to delete the affected key, ensuring fresh recommendations.  
3. **Write‑through Pattern** – On cache miss, fetch from DynamoDB, write back to Memcached with the TTL, then return to client.  
4. **Scalability & Availability** – Deployed two-node *cluster mode disabled* configuration with Auto Discovery and enabled *Multi-AZ*. Added a read replica in a standby region for disaster recovery.  
5. **Cost Trade‑offs** – Compared to Redis, Memcached is cheaper per node (~$0.04/hr vs $0.10/hr) and simpler to manage; the use case did not require persistence or Lua scripting.

**Result**  
- Latency dropped from 350 ms → 95 ms (68 % reduction).  
- Read traffic cost fell by 42 % because only 30 % of requests hit DynamoDB.  
- System availability remained >99.9 % due to Multi‑AZ failover.

**Reflection & Learning**  
I owned the entire end‑to‑end pipeline, from requirement analysis to post‑deployment monitoring. The key learning: TTL must align with data freshness; too long a TTL can degrade relevance, too short wastes cache capacity. Future iterations will experiment with adaptive TTL based on user churn metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
