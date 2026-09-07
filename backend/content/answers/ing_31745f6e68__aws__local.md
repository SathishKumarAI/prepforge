---
qid: ing_31745f6e68__aws__local
question: 'Explain: 2.3 Coding Challenge: Implement an In-Memory Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 445
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:53-05:00'
sources: []
---

**Situation & Task**  
I was asked to build an *in‑memory key/value store* that could serve a real‑time recommendation engine for millions of users with <5 ms latency and 99.9% availability. The goal was to replace a legacy MySQL cache that hit the network every request, causing 30 % throughput loss.

**Action (Design)**  
I designed a horizontally scalable Redis cluster on **Amazon ElastiCache**, using partitioned shards (hash‑slot) for data distribution and replication groups for high availability. Each shard runs on an EC2 Auto Scaling group behind a Network Load Balancer to absorb traffic spikes.  

*Key decisions:*  
- **Persistence**: RDB snapshots every 5 min; AOF logs enabled for durability – trade‑off is negligible latency impact (<0.1 ms).  
- **Eviction policy**: `allkeys-lru` ensures hot keys stay in memory while stale ones drop out.  
- **Metrics**: CloudWatch alarms on `CacheHits`, `CacheMisses`, and `Latency`.  

I wrapped the cache with a **Lambda@Edge** layer that validates TTLs, logs miss rates, and triggers an SNS alert if hit‑ratio falls below 90 %.  

**Result**  
Within two weeks of deployment:  
- Latency dropped from 12 ms to **4.2 ms** (≈65% improvement).  
- Throughput increased by **1.8×**, supporting 5M concurrent users.  
- Cost reduced by **$3k/month** compared to the MySQL‑based solution.

**Reflection**  
I owned every layer, from schema design to ops monitoring (Ownership). I dove deep into Redis internals to fine‑tune eviction and persistence (Dive Deep). The result is a production‑ready service that meets strict SLAs while staying cost‑effective – a true bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
