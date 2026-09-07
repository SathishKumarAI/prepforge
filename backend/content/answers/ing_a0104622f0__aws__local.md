---
qid: ing_a0104622f0__aws__local
question: 'Explain: Scalability Considerations — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 438
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:45-05:00'
sources: []
---

**Situation (S)** – At my last role I led the rollout of a real‑time recommendation engine for an e‑commerce platform that had to support **30 M daily active users** while keeping inference latency below 200 ms.

**Task (T)** – Design an agent building pipeline that scales from a few thousand requests per day during prototyping to tens of millions in production, without breaking the SLAs or blowing the budget.

**Action (A)** –  
1. **Infrastructure** – Built a *stateless* inference service on **SageMaker Endpoint** behind an **Application Load Balancer**. Each endpoint runs 4 ml.m5.xlarge instances; autoscaling policies are driven by CloudWatch metrics (CPU >70% → +1 instance).  
2. **Data pipeline** – Used **Kinesis Data Streams** for feature ingestion, a **Lambda** function to enrich with DynamoDB lookup, and stored raw data in **S3**. Model training jobs run on **SageMaker Training** using spot instances (cost 60 % lower) and automatically trigger via **Step Functions** when new data arrives.  
3. **Observability** – Emitted custom metrics to CloudWatch and set up dashboards for latency, error rate, and cost per inference. Alerts auto‑scale or shut down under low traffic.  

**Result (R)** – The solution handled a 200× traffic spike in production with <250 ms average latency, achieving a **99.8% SLA compliance** while reducing operational spend by **$120K/month** versus the legacy on‑prem cluster.  

*Leadership Principles*: **Ownership** – I took end‑to‑end responsibility for reliability and cost; **Dive Deep** – continuously tuned autoscaling thresholds based on real metrics; **Deliver Results** – met business goals with measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
