---
qid: ing_8f04e9a409__aws__local
question: 'Explain: Expiration Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 498
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:40-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a data‑science team at my previous employer, we built an ML inference API that served millions of requests per day. The in‑memory cache holding pre‑computed feature vectors was growing uncontrollably because stale entries never expired, causing out‑of‑memory crashes and inflated costs.

**Action (A)**  
I designed a **distributed, expiration‑policy cache** using **Amazon ElastiCache for Redis** with the following elements:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Cache nodes | Amazon ElastiCache (Redis) | Low‑latency key/value store, built‑in TTL support |
| Key naming & sharding | Consistent hashing + Redis Cluster | Horizontal scaling across shards |
| Expiration policy | Per‑key `EXPIRE` + LRU eviction | Guarantees automatic cleanup and memory reclamation |
| Monitoring & auto‑scaling | CloudWatch metrics (eviction count, free memory) + Auto Scaling group | Maintains 99.9% availability under traffic spikes |
| Cost control | Reserved Instances + On‑Demand for burst | Balances capacity vs. price |

I added a **Lambda layer** that, on each inference request, checks the cache key’s TTL and refreshes it if near expiration (TTL < 5 min). This “refresh‑on‑access” pattern prevented stale data while keeping memory usage bounded.

**Result (R)**  
- Reduced cache size by **35%** over three months.  
- Cut ElastiCache spend from $12k/month to $7k/month (~40% savings).  
- Achieved a 99.95% hit rate, dropping inference latency from 120 ms to 45 ms (a **62% improvement**).

**Learning & Bar‑raiser cues**  
I owned the end‑to‑end solution, dove deep into Redis eviction semantics, quantified the impact on cost and performance, and iterated after a failure that caused a 10 min outage—prompting us to add CloudWatch alarms for eviction spikes. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—key traits Amazon looks for in high‑impact engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
