---
qid: ing_cdb4b1e48f__aws__local
question: 'Explain: Redis — What is Distributed Caching? - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 559
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:04-05:00'
sources: []
---

**Answer – Distributed Caching with Redis (Amazon‑style)**  

> *“I designed a distributed cache for our recommendation engine to reduce latency from 120 ms to <10 ms and cut backend CPU usage by 35 %.”*  

### Situation  
Our real‑time recommendation service served millions of users per day. Each request hit the relational DB for user profile data, causing high contention and >200 ms response times during traffic spikes.

### Task  
Build a highly available, horizontally scalable cache that could store up to 10 M key/value pairs with TTLs, while guaranteeing eventual consistency with the source database.

### Action  

| Step | Technical Design | AWS Services |
|------|------------------|--------------|
| **1. Architecture** | Deploy Redis Cluster (Cluster mode enabled) across three AZs; use `nodegroup` of 6 shards (2 replicas each). | Amazon ElastiCache for Redis |
| **2. Data Model** | Key: `user:{id}` → JSON blob (profile + preferences); TTL = 24 h. Use Redis `JSON` module for native JSON support. | AWS SDK + `redis-py` |
| **3. Load‑balancing & Failover** | Clients use ElastiCache endpoint; Redis auto‑reconfigures on node failure. | ElastiCache Multi-AZ |
| **4. Consistency** | Write‑through cache: updates go to DB then `PUBLISH` event; workers subscribe and update cache (Pub/Sub). | Amazon SNS + Lambda |
| **5. Monitoring & Autoscaling** | CloudWatch metrics (`CurrConnections`, `Evictions`) trigger Auto‑Scaling policy for shards. | CloudWatch, Application Auto Scaling |

### Result  
* 95 % of requests served from cache → average latency dropped from 120 ms to **8 ms** (≈ 93 % reduction).  
* CPU on DB servers fell by **35 %**, freeing capacity for batch analytics.  
* Cost: $12k/month vs $18k/quarter pre‑cache; 40 % savings.

### Reflection (Bar‑raiser notes)  

- **Ownership:** Took full responsibility from design to ops, including rollback plan.  
- **Dive Deep:** Investigated eviction patterns, tuned `maxmemory-policy` after profiling.  
- **Quantified Impact:** Precise latency & cost metrics demonstrate value.  
- **Learning:** Initial over‑provisioning caused unnecessary spend; adjusted shard count based on real traffic.  

**Leadership Principles:** *Customer Obsession* (faster recommendations), *Ownership*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
