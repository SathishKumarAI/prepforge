---
qid: ing_3dbb8bd9a6__star__local
question: 'Explain: OLAP database - Amazon MySQL RDS — Tech-Stacks-Live-Apps/Grab/OrderProcessing/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 382
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:31-05:00'
sources: []
---

**Situation** – At my last gig I was tasked with revamping the order‑processing dashboard for a ride‑hailing app that handled ~10 k orders per minute. The existing MySQL RDS instance on AWS was fine for transactional reads, but any aggregation (daily revenue, driver performance) hit latency bottlenecks and forced us to pause live traffic.

**Task** – I had to design a solution that could deliver real‑time OLAP queries—pivot tables, roll‑ups, drill‑downs—while keeping the operational database untouched. The goal was <5 s response for 95th percentile dashboards and zero impact on the RDS write throughput.

**Action** – I set up an Amazon Aurora MySQL cluster as the transactional source (leveraging its replica read capacity). From there, I built a nightly ETL pipeline in AWS Glue that extracted the last day’s order logs, transformed them into star‑schema tables, and loaded them into an Amazon Redshift cluster. The ETL used Spark for parallel aggregation: total revenue per city, average ride duration, driver earnings. I exposed these cubes via QuickSight dashboards and added a caching layer with Amazon ElastiCache Redis to serve the most frequently queried aggregates instantly.

**Result** – Dashboard latency dropped from 30 s to under 3 s on average; the OLAP queries now run in <2 s even under peak load. The RDS instance continued handling writes at 4,000 TPS without any throttling. I learned that decoupling OLTP and OLAP workloads via a data warehouse can dramatically improve analytical performance while preserving transactional integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
