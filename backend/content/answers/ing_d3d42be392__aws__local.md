---
qid: ing_d3d42be392__aws__local
question: 'Explain: High availability — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 488
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a real‑time product recommendation service for an e‑commerce platform that served ~5 M active users/day. The key challenge was to keep recommendations available with <1 % downtime while handling 200k concurrent requests, and to model complex user–product relationships using a graph database.

**Action (Design & Implementation)**  
*Architecture:*  
- **Amazon Neptune** (graph DB) deployed across two AZs with automated backups and read replicas for failover.  
- **AWS Lambda + API Gateway** as stateless front‑end, scaling to 10 k RPS.  
- **SageMaker Pipelines** retrain models nightly; model artifacts stored in S3 and served via SageMaker Endpoint (multi‑model).  
- **DynamoDB** for hot metadata caching (user context, product popularity) with TTL.  

*High Availability:*  
- Neptune’s Multi-AZ replication + “Failover to Replica” ensures <2 s failover time.  
- API Gateway throttling and Lambda provisioned concurrency guarantee 99.9% SLA.  
- Health‑checks on CloudWatch trigger auto‑scale of read replicas.

**Result**  
After rollout, uptime rose from 93% to **>99.97%**, while recommendation latency dropped from 350 ms to 120 ms. Conversion increased by **12 %** in the first quarter and revenue grew $3.2 M/month (≈8 % YoY).  

**Leadership Principles**  
- *Customer Obsession:* Delivered instant, accurate recommendations that directly boosted sales.  
- *Ownership:* Handled end‑to‑end design, migration, and ops, ensuring reliability without external support.  

**Bar‑raiser Insight**  
A strong answer shows ownership, deep dive into AWS services (Neptune, Lambda, SageMaker), quantified impact, and learning from an earlier failure where a single‑AZ deployment caused 4 h downtime—prompted the Multi‑AZ strategy above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
