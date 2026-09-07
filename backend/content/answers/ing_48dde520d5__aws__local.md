---
qid: ing_48dde520d5__aws__local
question: 'Explain: Horizontal Scaling (Scale Out) — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 434
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:16-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the redesign of a photo‑sharing service similar to Instagram that needed to handle a sudden spike from 5 M to 50 M daily active users without downtime. The goal was to **scale out** the image ingestion pipeline while keeping latency under 200 ms.

**Action**  
I architected a stateless, horizontally scalable microservice tier using **AWS ECS (Fargate)** with an **ALB** front‑end and auto‑scaling groups driven by CloudWatch metrics. Images were stored in **S3**; thumbnails were generated on‑demand via **Lambda@Edge** to keep the compute layer independent of request volume. For real‑time analytics I added a **Kinesis Data Stream** feeding into **Redshift** for batch reporting.

To guarantee availability, each component was deployed across **three AZs** and traffic was routed via Route 53 latency‑based routing. Cost control came from using **Spot Instances** for the ECS workers during off‑peak hours, yielding a 30 % reduction in compute spend while maintaining the same SLA.

**Result**  
After launch, we handled 50 M DAUs with <180 ms average latency and achieved a 99.9 % uptime over six months. Compute costs dropped by **$120k/month**, and our incident rate fell from 4/day to 0.2/day—clear evidence that horizontal scaling, coupled with AWS managed services, delivers both performance and cost efficiency.

**Leadership Principles**  
- *Customer Obsession*: Prioritized user experience through low latency and high availability.  
- *Ownership*: Took full responsibility for architecture decisions, monitoring, and cost optimization.  

*Bar‑raiser notes*: Looked for deep dive into failure modes (e.g., S3 eventual consistency), quantified impact, and lessons learned from a 2019 outage that informed our multi‑AZ strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
