---
qid: ing_b7cf836ac7__aws__local
question: 'Explain: Databricks — Faang Coding Interview Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 488
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:39-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a data‑science team tasked with building an end‑to‑end recommendation engine for a streaming platform that served 12 M monthly users. The requirement was to ingest real‑time clickstream, train models nightly, and serve predictions with <200 ms latency at scale.

**Action (Technical Design)**  
I chose **Databricks on AWS Glue & EMR** for data ingestion because it natively supports Spark’s MLlib and Delta Lake for ACID transactions.  
1. **Ingestion** – Kinesis Data Streams → Glue ETL → Delta Lake tables in S3 (partitioned by hour).  
2. **Training** – Databricks notebooks running on an auto‑scaling cluster; we used LightGBM via Spark ML pipelines, tuning hyperparameters with Hyperopt.  
3. **Serving** – Trained models exported to SageMaker endpoints; the inference layer is a Lambda function behind API Gateway that reads from DynamoDB for user profiles and writes predictions back to S3 for downstream analytics.

We added a **Model Registry** (SageMaker Model Store) to enforce versioning and A/B testing. For cost, we reserved 50 % of EMR spot instances and used SageMaker’s multi‑model endpoints, cutting $1.2 M/yr vs on‑prem.

**Result**  
- Prediction latency dropped from 650 ms to **180 ms**, improving user engagement by **3.7 %** (≈ 400 k additional streams).  
- Model accuracy (AUC) rose from 0.81 to **0.87** after iterative feature engineering.  
- Operational cost reduced by **30 %** and we achieved 99.95 % availability.

**Reflection & Learning**  
I owned the entire pipeline, diving deep into Spark performance bottlenecks; a mis‑partitioned Delta table once caused a 15‑minute outage, so I instituted automated partition checks. The experience reinforced that *ownership* + *bias for action* drive measurable impact.  

> **Bar‑raiser note:** Look for ownership (end‑to‑end), depth (Spark/Delta trade‑offs), quantified ROI, and lessons from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
