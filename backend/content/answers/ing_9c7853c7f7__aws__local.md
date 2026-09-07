---
qid: ing_9c7853c7f7__aws__local
question: 'Explain: Enterprise Sales Engineer — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:18:39-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A Fortune‑500 retailer needed a recommendation engine that could scale from 10 M daily users while keeping latency <200 ms.  
*Task*: Design an end‑to‑end ML pipeline on AWS that would deliver real‑time product suggestions in production, with minimal downtime.  
*Action*:  
1. **Data ingestion** – used *Amazon Kinesis Data Streams* to capture clickstreams at 50 k events/sec and *Glue* for ETL into *S3*.  
2. **Feature store** – built a *Feature Store* on *Amazon SageMaker Feature Store*, caching in Redis (Elasticache) for <10 µs lookup.  
3. **Model training** – leveraged *SageMaker Autopilot* to train a LightGBM model across 4 GPU‑enabled instances, reducing dev time from 2 weeks to 3 days.  
4. **Serving** – deployed with *SageMaker Endpoints* behind an Application Load Balancer, auto‑scaling on CPU usage; added *AWS Lambda@Edge* for edge inference to cut latency by 30 %.  
5. **Monitoring & feedback loop** – used *CloudWatch Metrics*, *S3 EventBridge* triggers for retraining every 12 hrs, and *Amazon Personalize* for A/B testing.  

*Result*: Achieved <180 ms inference latency at peak load, a 25 % lift in conversion rate, and cut infrastructure cost by 18 % compared to the legacy on‑prem stack.  
**Learning from failure**: Initial trials with on‑prem Spark caused data drift; migrating to Glue + Feature Store eliminated drift risk and improved model freshness.

> **Bar‑raiser cue**: I own every layer—from ingestion to inference—demonstrated deep dive into AWS services, quantified business impact, and iteratively learned from early missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
