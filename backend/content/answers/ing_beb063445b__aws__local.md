---
qid: ing_beb063445b__aws__local
question: 'Explain: So we actually decided that we would — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 427
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:34:31-05:00'
sources: []
---

**Situation (S)** – I was leading a cross‑functional team at an e‑commerce startup to build an end‑to‑end recommendation engine that would replace our monolithic Java service. The goal: increase conversion by 15 % and reduce latency to <50 ms per request.

**Task (T)** – Design a scalable, cloud‑native ML pipeline that could ingest real‑time clickstream data, train models nightly, and serve predictions with high availability.

**Action (A)**  
1. **Architecture** – Adopted an event‑driven pattern on **Amazon Kinesis Data Streams** for ingestion, **AWS Glue** for ETL, and **SageMaker Pipelines** for automated training/validation. Models were stored in **S3** and deployed via **SageMaker Endpoint** behind a **ALB** with target groups per region (multi‑AZ).  
2. Implemented *Model Registry* using SageMaker Model Monitor to auto‑detect drift, triggering retraining when accuracy fell below 90 %.  
3. Leveraged **AWS Lambda** for lightweight inference in edge locations (via CloudFront) to cut latency further.  
4. Cost control: switched from on‑demand to **SageMaker Spot Training**, saving ~35 % per training cycle while maintaining SLA.  

**Result (R)** – Within 3 months, conversion rose 18 %, bounce rate dropped 12 %, and average inference latency hit 38 ms. The system handled a peak of 5M requests/day with <0.1 % error.  
*Learning*: Early in the project we over‑provisioned training instances; after monitoring cost/throughput, we refined instance types—an example of **Dive Deep** and **Bias for Action**.

> *Leadership Principles:* **Customer Obsession**, **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
