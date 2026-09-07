---
qid: ing_7e1a9811b1__aws__local
question: 'Explain: You''ve done the prep. Now, ace the interview.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 429
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:27-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was asked to lead a cross‑functional team to build a real‑time fraud detection model for the payments division. The goal: reduce false positives by **30%** while keeping latency under **100 ms**.

**Action (Dive Deep + Bias for Action)**  
1. *Data hygiene*: Built an automated ETL pipeline in **AWS Glue** that ingests 5 TB of clickstream logs, applies schema validation, and writes cleaned data to **Amazon S3** partitioned by hour.  
2. *Feature store*: Deployed **SageMaker Feature Store** (cold start <10 s) for 200 features; used **Kinesis Data Streams** to push real‑time updates.  
3. *Model training*: Trained an ensemble of XGBoost and LightGBM models on SageMaker, using hyperparameter tuning jobs that converged in 2 hrs.  
4. *Inference*: Deployed the best model as a SageMaker endpoint behind an **API Gateway** with **Lambda@Edge** for request routing; added a **caching layer** (ElastiCache Redis) to hit the same predictions within 5 ms.

**Result (Deliver Results)**  
- False positives dropped from **45% → 31%** (≈30% reduction).  
- Latency averaged **70 ms**, meeting SLA.  
- Cost savings: $12k/month by using spot instances and auto‑scaling.  

**Bar‑raiser takeaways**  
- Ownership: I owned the entire ML lifecycle, from data prep to deployment.  
- Dive deep: I quantified every trade‑off (latency vs cost) and iterated until metrics met thresholds.  
- Learning: After an initial 15% over‑prediction error, we introduced a calibration layer that halved the error in the next iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
