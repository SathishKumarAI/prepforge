---
qid: ing_4da8cc4640__aws__local
question: 'Explain: Amazon ElastiCache — What is Distributed Caching? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 452
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:21:06-05:00'
sources: []
---

**Distributed Caching with Amazon ElastiCache – A Quick‑Dive**

> *Leadership Principles:* **Ownership** (I took full responsibility for the cache layer) and **Customer Obsession** (we wanted sub‑10 ms latency for every shopper).

### Situation  
Our e‑commerce site hit 1.2 M requests/sec during Black Friday, but the product catalog DB was throttling at 200 k RPS. Latency spiked to 250 ms and conversion dropped by 3%.

### Task  
Design a scalable cache that reduces database load, keeps data fresh, and guarantees high availability.

### Action  
I chose **ElastiCache for Redis** because it supports clustering (sharding) and replication.  
1. **Clustered Shards:** 12 shards, each with 2 replicas → *12 × 2 = 24 nodes*; data auto‑partitioned via consistent hashing.  
2. **Read/Write Separation:** Application writes go to the primary shard; reads hit any replica.  
3. **Cache Invalidation:** Use Redis key‑TTL (30 s) and publish‑subscribe for real‑time updates.  
4. **Auto‑Scaling:** Enable *ElastiCache Auto Scaling* with CloudWatch metrics (CPU > 70% → add node).  

### Result  
- DB RPS dropped from 200k to 15k, freeing capacity for other workloads.  
- Cache hit rate climbed to **92 %**; read latency fell from 250 ms to **18 ms**.  
- Revenue lift of **+5 %** during the sale period.  

### Take‑away (Bar‑Raiser Lens)  
I demonstrated *ownership* by owning the entire cache stack, *dive deep* into shard sizing and eviction policies, quantified impact with real metrics, and learned from a failed attempt to use a single-node Redis that caused a bottleneck. This approach aligns with Amazon’s focus on delivering measurable results while obsessing over customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
