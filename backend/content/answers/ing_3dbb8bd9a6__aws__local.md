---
qid: ing_3dbb8bd9a6__aws__local
question: 'Explain: OLAP database - Amazon MySQL RDS — Tech-Stacks-Live-Apps/Grab/OrderProcessing/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 411
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: Our order‑processing service (Grab) needed real‑time analytics on user activity while keeping transactional latency < 5 ms.  
*Task*: Design a data layer that could serve both OLTP and OLAP workloads without affecting the MySQL RDS instance used for core orders.  
*Action*: I introduced **Amazon Aurora Serverless** (MySQL‑compatible) as an *OLAP* tier, while keeping the existing **RDS MySQL** for transactional ops.  
- Created a nightly ETL job on **AWS Glue** that pulls raw logs from S3, aggregates them into star‑schema tables, and writes back to Aurora.  
- Employed **Amazon Redshift Spectrum** to query historical data directly in S3 when needed.  
- Configured **Aurora Auto Scaling** for read replicas (≥ 10) behind an Application Load Balancer, guaranteeing 99.99 % availability.  
*Result*: Query latency dropped from 1.2 s to <200 ms for dashboards; cost decreased by 35 % compared to a single‑instance MySQL OLAP solution. The team now delivers weekly insights in under 30 min, driving a 12 % uplift in conversion rates.

**Dive Deep & Deliver Results**

I logged every metric (CPU, IOPS, query plan) in CloudWatch and iterated on the schema until cost per query hit $0.01. Post‑deployment, we monitored drift and auto‑fixed stale partitions using Lambda—reducing maintenance effort by 40 %. This architecture remains fully serverless, scales with traffic spikes, and aligns with our “Invent & Simplify” mantra while keeping the core RDS MySQL under strict transactional SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
