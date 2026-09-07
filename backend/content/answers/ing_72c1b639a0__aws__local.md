---
qid: ing_72c1b639a0__aws__local
question: How does database sharding work? — What is Database Sharding? - Shard DB
  Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 428
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:12-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*  
> **Situation:** I led a migration of a legacy monolith to a micro‑service architecture for an e‑commerce platform that served 2 M active users/month. The single PostgreSQL instance was hitting >95 % CPU during peak sales, causing latency spikes and occasional timeouts.  
> **Task:** Design a sharding strategy that would scale horizontally while keeping the user experience seamless.  
> **Action:**  
> * Adopted **range‑based sharding** on `user_id` (hash + range to avoid hotspots).  
> * Deployed each shard on an **Amazon RDS Aurora PostgreSQL** cluster in its own AZ, using **Aurora Serverless v2** for bursty traffic.  
> * Implemented a lightweight **shard‑router** microservice (Node.js) behind **API Gateway** that routes queries based on the deterministic hash.  
> * Enabled **Cross‑Region Read Replicas** for latency‑sensitive regions, leveraging **DynamoDB Global Tables** as a fallback cache for read‑heavy ops.  
> * Added **CloudWatch alarms** and an automated failover script to re‑route traffic if a shard becomes unhealthy.  
> **Result:** Post‑migration, read latency dropped from 350 ms to <70 ms (80 % improvement), CPU utilization fell below 60 %, and we avoided the $12K/month cost of overprovisioned RDS instances. The team now runs a single pipeline for all shards, reducing operational overhead by 40 %.  

> **Bar‑raiser notes:** Clear ownership of both architecture and ops; deep dive into trade‑offs (hash vs range, Aurora vs DynamoDB); quantified impact; continuous learning loop via monitoring & automated recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
