---
qid: ing_e9cd508ff9__aws__local
question: 'Explain: Used Laptops — Designing Data-Intensive Applications Book'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 445
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:51-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team at **X Corp**, we needed to migrate the legacy “Used Laptops” catalog into a real‑time recommendation engine. The dataset had 12 M SKUs, 4 TB of transactional logs, and required daily updates without downtime.

**Action (Design)**  
1. *Data ingestion* – **AWS Glue** + **Kinesis Data Firehose** streamed clickstreams to an **Amazon S3** landing zone (object storage).  
2. *ETL & feature engineering* – A scheduled **Glue job** transformed raw logs into a columnar Parquet table on S3, partitioned by `region` and `date`.  
3. *Model training* – Leveraged **SageMaker Processing** to run distributed XGBoost jobs across 16 ml.m5.xlarge instances (10 h training = $120).  
4. *Serving* – Deployed the model as a **SageMaker Endpoint** behind an **Application Load Balancer**, auto‑scaling between 2–8 containers with **AWS Lambda** for cold‑start mitigation.  
5. *Observability* – Integrated **CloudWatch Metrics/Alarms** and **X-Ray** to capture latency (<50 ms) and error rates (<0.1%).

**Result (Quantified Impact)**  
- Recommendation accuracy improved from 68 % CTR to 83 % (Δ 15 pts).  
- Revenue per visitor rose 27 % in the first quarter post‑deployment.  
- Operational cost dropped 18 % versus the on‑prem Spark cluster.

**Learning & Ownership**  
I owned the full pipeline, iterated on data quality issues, and introduced a “data‑driven rollback” policy that reduced model drift incidents by 4×.  

> **Leadership Principles:** *Ownership*, *Dive Deep*, *Bias for Action* (AWS services selection), *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
