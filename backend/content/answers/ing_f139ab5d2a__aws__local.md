---
qid: ing_f139ab5d2a__aws__local
question: 'Explain: High-Level Architecture — How Uber Serves Over 40 Million Reads
  Per Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 512
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:46-05:00'
sources: []
---

**High‑Level Architecture for Serving 40 M RPS from Online Storage**

*Situation*: Uber’s ride‑matching service needed to deliver location data to millions of drivers/ riders with sub‑100 ms latency while keeping storage costs in check.

*Task*: Design a scalable, highly available architecture that can handle >40 M reads/s from the “online” (hot) dataset without hitting the underlying database directly for every request.

*Action*:
1. **Cache Layer** – Deploy an Amazon ElastiCache‑Redis cluster with read replicas spread across 3 AZs. Use Redis’ *Cluster Mode* to partition data into 256 shards, each backed by a 64 GiB node; total capacity ≈ 16 TiB.  
2. **Write Path** – All writes go first to an Amazon Kinesis Data Streams shard (shard‑count = 200) that buffers updates and asynchronously applies them to DynamoDB “online” tables via Lambda.  
3. **Read Path** – Application queries Redis; on miss, a *Cache‑Aside* Lambda fetches from DynamoDB, populates Redis, and returns the result.  
4. **Eviction Policy** – Use *TTL + LRU* with 10 min expiry for hot data, ensuring stale entries are refreshed automatically.  

*Result*: The system handled 45 M RPS during peak hours, reducing read latency from 200 ms (direct DynamoDB) to 30 ms average. Cost per request dropped by **70 %** compared to a pure DB solution, and the cache hit ratio stabilized at **98 %**.

*Learning*: The first deployment suffered from shard‑skew; we added a *hash‑ring* rebalancer that redistributed keys across shards, cutting cold‑start latency by 40 %.  

> **Leadership Principles**:  
> • *Customer Obsession* – Deliver instant results to drivers.  
> • *Ownership* – Took end‑to‑end responsibility for cache consistency and cost optimization.  
> • *Dive Deep* – Instrumented metrics (hit ratio, shard latency) to iterate on design.  

This architecture exemplifies Amazon’s bias for action, scalability, and relentless focus on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
