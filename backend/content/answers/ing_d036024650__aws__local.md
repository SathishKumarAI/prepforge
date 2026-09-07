---
qid: ing_d036024650__aws__local
question: 'Explain: Coding & System Design — Get a Job at Microsoft: Interview Process
  and Top Questions - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 506
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:11:49-05:00'
sources: []
---

**Context (S)**  
I was leading the ML‑ops team that built a recommendation engine for an e‑commerce platform (3 M monthly active users). The goal was to reduce model training time and improve inference latency while keeping costs under $200k/month.

**Task (T)**  
Design a scalable end‑to‑end pipeline on AWS that could handle nightly retraining, real‑time scoring, and A/B testing of models with minimal downtime.

**Action (A)**  

| Step | AWS Service | Rationale |
|------|-------------|-----------|
| Data ingestion | **Amazon Kinesis Data Streams** | 10 k records/sec, low latency. |
| Feature store | **AWS Glue + Amazon DynamoDB** | Serverless ETL and fast key‑value lookups for inference. |
| Training | **Amazon SageMaker** (Multi‑node distributed training) | Auto‑scaling to 8 GPU nodes; cost $0.75/GB‑hour. |
| Model registry & promotion | **SageMaker Model Registry + Lambda** | Automatic versioning and CI/CD pipeline. |
| Real‑time inference | **Amazon SageMaker Edge or API Gateway + Lambda** | Sub‑50 ms latency, auto‑scale to 1000 RPS. |
| A/B testing | **AWS CloudWatch + Amazon Pinpoint** | Metrics per cohort; rollback threshold 1% accuracy drop. |

Implemented an **S3 event‑driven trigger** that kicked off the pipeline on new data arrival, eliminating manual steps (Bias for Action). Added **CloudTrail audit logs** for compliance and ownership.

**Result (R)**  
- Reduced training time from 12 h to 2 h (80% faster).  
- Cut inference latency by 70 ms (from 120 ms to 50 ms).  
- Lowered monthly spend from $350k to $190k.  
- A/B test rollout achieved a 4.3% lift in conversion with no revenue loss.

**Reflection** – The biggest failure was an initial mis‑estimate of DynamoDB throughput, causing throttles during peak traffic. I introduced provisioned capacity checks and Auto Scaling, turning the mistake into a learning loop that now saves ~15 % on read/write costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
