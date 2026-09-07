---
qid: ing_f40876a9d6__aws__local
question: 'Explain: Whitelaw: Sure please. Wang: Yeah, sure. Hannon'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 465
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:28:04-05:00'
sources: []
---

**Situation (S)** – While leading a cross‑functional team at my last role, we were asked by the product group to build an automated churn prediction model for a subscription service that served 1 M active users. The deadline was tight: launch in 6 weeks to support a new marketing push.

**Task (T)** – My responsibility was to design a production‑ready ML pipeline that could ingest real‑time user events, train weekly models, and serve predictions with < 200 ms latency at scale.

**Action (A)**  
1. **Ownership & Dive Deep** – I scoped the data sources (Kinesis streams, Redshift logs) and built an end‑to‑end ETL on AWS Glue that cleansed 500 GB of clickstream data nightly.  
2. **Bias for Action & Invent & Simplify** – Leveraging SageMaker Pipelines, I orchestrated a training job using XGBoost (GPU instances). For inference, I deployed the model as an endpoint behind an Application Load Balancer with Lambda@Edge to cache predictions, cutting latency from 1 s to < 200 ms.  
3. **Cost & Scalability** – By using Spot Instances for training and autoscaling endpoints based on CloudWatch metrics, we reduced compute spend by 35 % compared to on‑demand usage. The architecture supports up to 10 k concurrent requests with 99.99 % availability (dual AZ deployment).  
4. **Deliver Results** – The final model achieved an AUC of 0.87 and reduced churn by 12 % in the first month post‑deployment, translating to $2.3M incremental revenue.

**Result (R)** – The project was delivered on schedule, met all SLA targets, and earned a “Best Collaboration” award from senior leadership. I documented lessons learned around data drift monitoring, which we now enforce quarterly with CloudWatch alarms—preventing future performance degradation.  

*Leadership Principles highlighted:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Bias for Action**, **Invent & Simplify**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
