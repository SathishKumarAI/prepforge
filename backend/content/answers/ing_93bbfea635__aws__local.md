---
qid: ing_93bbfea635__aws__local
question: 'Explain: Replication — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 445
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:59:56-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a migration of an on‑premise MySQL monolith to Amazon Aurora for a SaaS platform that served ≈ 500 k concurrent users during peak season. The legacy database had 1 TB of data, and read latency spiked to 200 ms when scaling out. My goal was to reduce read latency by 70 % while keeping cost under $20K/month.

**Action**  
I architected a **multi‑AZ Aurora cluster** with **read replicas** in the nearest AWS region per user segment. I enabled **Aurora Global Database** for cross‑region failover, and added an **ElastiCache Redis** layer to cache frequently accessed rows (≈ 90 % of read traffic).  
*Design choices:*  
- **Replication type:** asynchronous replication to replicas for reads; Aurora’s built‑in 2–3 ms lag meets SLA.  
- **Scalability:** auto‑scaling of read replicas based on CloudWatch metrics; cache eviction policy tuned via Redis `maxmemory-policy`.  
- **Availability & cost:** Multi‑AZ protects against AZ failure; using Aurora Serverless v1 for bursty write workloads cut $4K/month.

**Result**  
Post‑deployment, read latency dropped to 45 ms (≈ 78 % improvement). Write throughput increased from 3.5k ops/s to 12k ops/s. The architecture saved ~$6K/month and gave a 99.999% RTO/RPO for the database.

**Learnings & Ownership**  
I conducted a post‑mortem on an initial “hot‑standby” failure; we discovered that the replica lag was > 50 ms under load, so I added Aurora’s **parallel query** feature to reduce read times further. This experience reinforced my bias for action and ownership of both performance and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
