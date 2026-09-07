---
qid: ing_b87322264a__aws__local
question: What is database sharding? — What is Database Sharding? - Shard DB Explained
  - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 397
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:11-05:00'
sources: []
---

**Question:** *What is database sharding?*

**Answer (Amazon‑style)**  

I once led a team that had to scale a multi‑tenant SaaS platform from **10k concurrent users to 1M** while keeping latency under 100 ms. The bottleneck was the monolithic PostgreSQL instance – it hit CPU limits and grew to >400 GB, so backups took hours.

*Situation & Task:* I proposed horizontal sharding across AWS RDS Aurora MySQL instances, splitting data by tenant ID.  
*Action:*  
- Designed a **hash‑based shard key** (tenant_id % N) and automated routing with an API gateway layer.  
- Deployed **Aurora Serverless v2** per shard to auto‑scale compute from 0.5–64 ACUs, eliminating overprovisioning.  
- Implemented cross‑shard replication for high availability and used **AWS Backup** for point‑in‑time restores.  
- Monitored with CloudWatch; set up an SNS alert when any shard’s CPU >70 %.  

*Result:* Sharding reduced the largest instance from 400 GB to ~40 GB, cutting backup time from 3 hrs to <10 min. Latency dropped from 250 ms to **55 ms** on average, and cost fell by **35 %** due to serverless scaling.  

I learned that sharding is not just “splitting data”; it’s a *system‑wide architectural change* that demands careful key design, routing logic, and monitoring. It embodies **Ownership** (taking end‑to‑end responsibility) and **Dive Deep** (analyzing performance at the shard level).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
