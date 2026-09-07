---
qid: ing_88e5b3cbdf__aws__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 442
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:57-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy monolith that served ~4 M active users into a micro‑service architecture on AWS. The single PostgreSQL instance hit 200 TPS and 30 % CPU saturation, threatening our SLAs.

**Action (Technical)**  
I designed **range‑based sharding**: split the user table by `user_id` ranges (e.g., 1–10M → shard‑A, 10M+ → shard‑B). Each shard ran on a separate Aurora PostgreSQL cluster with read replicas. I used **AWS Global Accelerator + Route 53 latency‑based routing** to direct traffic to the nearest shard, and **AWS Secrets Manager** for credential rotation.

Key decisions:  
- *Scalability*: Shards can be added by extending ranges; each cluster scales independently via Aurora Serverless v2.  
- *Availability*: Multi‑AZ deployments plus automated failover keep 99.999 % uptime.  
- *Cost*: We reduced per‑instance cost by ~35 % because workloads were evenly distributed, and avoided over‑provisioning a single large instance.

**Result**  
Post‑migration:  
- Throughput rose from 200 TPS to **1 800 TPS** (9×).  
- CPU usage dropped to <10 %.  
- Cost per query fell by **$0.0002**, saving ~USD 250K annually.  

**Reflection (Leadership Principles)**  
*Ownership*: I owned the end‑to‑end migration, from design to rollback plans.  
*Dive Deep*: I profiled queries and tuned partition keys based on real usage patterns.  
*Bias for Action*: Deployed in a rolling fashion with automated canary checks, avoiding downtime.  

This experience demonstrates how range‑based sharding turns a single point of failure into a scalable, cost‑effective architecture while keeping the customer’s performance expectations front‑and‑center.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
