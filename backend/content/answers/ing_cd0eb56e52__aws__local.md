---
qid: ing_cd0eb56e52__aws__local
question: 'Explain: Like initially you are watching this video'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:25-05:00'
sources: []
---

**Situation & Task**  
While onboarding a new data‑science team, I noticed our ML pipeline for recommendation models was stalled by manual feature extraction and ad‑hoc notebooks. The goal was to reduce model refresh time from **3 days → <6 hours** while keeping inference latency below 10 ms.

**Action**  
1. **Owned** the end‑to‑end workflow: defined data schema, built a **feature store** in **Amazon DynamoDB + AWS Glue Data Catalog** for real‑time feature serving.  
2. Implemented an automated **ETL** with **AWS Lambda** and **Step Functions**, scheduling nightly jobs that load raw logs into **S3** → **Glue crawler** → **Athena** queries, then push to the store.  
3. Deployed models on **Amazon SageMaker Pipelines**; each training job runs on a **ml.m5.xlarge** instance, reducing compute time by 70 %.  
4. For inference, used **SageMaker Real‑Time Endpoint** behind an **Application Load Balancer**, auto‑scaling to 10 instances (95th percentile latency <9 ms).  

**Result**  
- Model refresh cycle cut from **3 days → 5 hours** (≈ 84 % faster).  
- Cost dropped by **$12k/month** due to efficient spot instance usage and auto‑scaling.  
- Customer satisfaction score for recommendation relevance rose from **73 → 88**.

**Learning & Bar‑raiser cues**  
I *dived deep* into cold‑start latency, discovered a hidden bottleneck in data serialization, and refactored with **Parquet + columnar compression**—a classic AWS “invent & simplify” win. The project exemplifies **Customer Obsession**, **Ownership**, and **Bias for Action** while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
