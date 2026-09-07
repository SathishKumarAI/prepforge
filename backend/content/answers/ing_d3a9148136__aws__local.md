---
qid: ing_d3a9148136__aws__local
question: What is Redis? — The Ultimate Redis 101
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 350
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:09-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* & *Ownership*.  
> **Situation:** I led a team that had to reduce API latency for a global e‑commerce platform from 200 ms to under 50 ms during peak traffic.  
> **Task:** We needed an in‑memory cache that could store product recommendations and session data with strong consistency across regions.  
> **Action:**  
> 1. I evaluated options (Memcached, DynamoDB Accelerator) and chose **Redis** because it offers rich data types, persistence, and clustering.  
> 2. Designed a sharded Redis Cluster (3 master/3 replica nodes per AZ), using Amazon ElastiCache for Redis to handle auto‑scaling and patching.  
> 3. Implemented Lua scripts for atomic “recommendation‑fetch+increment” ops, reducing round‑trips.  
> 4. Added CloudWatch metrics and an alert on `latency_ms > 30` to trigger failover or node replacement automatically.  
> **Result:** Latency dropped from 200 ms to 42 ms (−79%) during the 24‑hour Black Friday sale, with a 40% reduction in backend request volume and $12k/month cost savings versus DynamoDB Accelerator.  
> **Learnings:** Redis’ persistence options (RDB/AOF) trade off write durability for speed; we chose RDB + periodic snapshotting to meet SLA while keeping costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
