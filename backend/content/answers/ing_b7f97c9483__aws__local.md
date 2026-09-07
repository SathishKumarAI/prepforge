---
qid: ing_b7f97c9483__aws__local
question: 'Explain: Scale efficiently — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 473
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:05-05:00'
sources: []
---

**Explain: Scale efficiently – What is Database Sharding?**

*Situation*: In my last role I was tasked to support a SaaS platform that grew from **10k active users to 2M** in under two years. Our monolithic PostgreSQL database hit 80 % CPU and 70 % disk I/O, causing 300 ms query latency during peak hours.

*Task*: Design a scalable data layer that keeps read/write latency < 100 ms while keeping cost predictable.

*Action*:  
1. **Sharding strategy** – I chose *horizontal sharding* on the `tenant_id` key because each customer’s data is isolated and access patterns are tenant‑centric.  
2. **AWS services** – deployed **Amazon RDS for PostgreSQL** with *Aurora Serverless v2* per shard, automated scaling between 1–64 ACUs, and used **Elastic Load Balancer (ELB)** to route queries to the correct shard based on a deterministic hash of `tenant_id`.  
3. **Infrastructure as Code** – defined shards in Terraform; each shard lives in its own subnet for isolation and can be replicated across AZs for high availability.  
4. **Monitoring & Auto‑Healing** – CloudWatch metrics trigger Lambda to add or remove shards when read/write load per ACU > 70 %.  

*Result*: After implementation, average query latency dropped from 300 ms to **< 80 ms**; the system handled a 10× traffic spike with no downtime. Operational costs decreased by **18 %** because Aurora Serverless scaled down during off‑peak hours.

**Leadership Principles Highlighted**

- *Customer Obsession*: Delivered instant, reliable responses for every tenant.  
- *Ownership & Dive Deep*: Built end‑to‑end sharding logic and monitored it continuously.  

As a bar‑raiser, I look for clear ownership, depth in design (hashing, scaling, failure recovery), quantified impact (latency, cost), and lessons learned—here, the trade‑off of shard management complexity versus performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
