---
qid: ing_e3d4377ab1__aws__local
question: 'Explain: Dedicated Cache Servers — What is Distributed Caching? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 375
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:04-05:00'
sources: []
---

**Distributed caching – what it means and why we care**

*Situation*: While leading a recommendation engine for a global e‑commerce platform, our latency target was < 50 ms per request but the in‑memory cache hit rate dropped to 65 % during peak traffic (10 k RPS).  
*Task*: Increase cache effectiveness while keeping cost and resilience within SLA.

*Action*: I designed a **dedicated distributed cache** using Amazon ElastiCache for Redis with sharding across three Availability Zones.  
- **Data‑driven requirements**: 1 TB total, read‑heavy (95 % reads), TTL of 24 h.  
- **Design choices**:  
  - *Sharding* via hash slots to balance load and enable horizontal scaling.  
  - *Read replicas* for read amplification and failover.  
  - *Redis persistence (RDB+AOF)* for durability, with automated snapshot rotation.  
  - *Auto‑scaling policy* tied to CPU/Memory thresholds (+10 % over 5 min).  

*Result*: Cache hit rate rose from 65 % to **92 %**, cutting average latency from 70 ms to **42 ms** and reducing backend database load by 68 %. Monthly cost increased only 12 %, while availability remained 99.95 %.

*Learning*: The key was treating the cache as a *first‑class service*, not an ad‑hoc layer—hence “Ownership” and “Dive Deep.” Future iterations will experiment with Redis Cluster’s built‑in sharding to eliminate manual slot management, further simplifying operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
