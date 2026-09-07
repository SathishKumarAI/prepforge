---
qid: ing_186fb8b3c4__aws__local
question: 'Explain: Monotonic change — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 446
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:20:52-05:00'
sources: []
---

**Answer – “Database Sharding” (Amazon‑style)**  

> **Situation:** In my last role I led the migration of a monolithic PostgreSQL system that served 5 M daily active users. The write latency spiked to 350 ms during peak hours, and we hit the 10 GB per-table limit on our RDS instance.  
> **Task:** Design a scalable sharding strategy that would reduce latency to <100 ms, keep costs below $12k/month, and preserve ACID guarantees for customer orders.  
> **Action:** I chose **horizontal sharding** by user ID, implemented via Amazon Aurora Serverless with the `Aurora Global Database` feature so each shard lives in its own DB cluster. Shards were auto‑scaled using **AWS Lambda** that monitored CloudWatch metrics (RPS, CPU). I added a lightweight Redis cache (Amazon ElastiCache) for hot keys to reduce cross‑shard joins. For failover, we used Aurora’s built‑in multi‑AZ replication; each shard had its own replica cluster, giving us 99.99 % availability.  
> **Result:** Post‑migration, read latency dropped from 350 ms to 70 ms, write throughput increased by 4×, and monthly database spend fell from $18k to $11.5k—an 36 % cost saving while meeting SLAs.  

**Leadership Principles:** *Ownership* (I drove the end‑to‑end redesign), *Dive Deep* (I profiled queries, tuned shard key distribution, and iterated on Lambda triggers).  
**Bar‑raiser cues I met:** clear ownership narrative, quantitative impact, deep technical reasoning, and a brief reflection: “If we had sharded by product instead of user ID, our join patterns would have caused more cross‑shard traffic; this taught me to align shard keys with the most common query path.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
