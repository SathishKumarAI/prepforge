---
qid: ing_01ecc9867a__aws__local
question: 'Explain: So firstly, you''re seeing that there''s a'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 449
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:28:35-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I was tasked with building a real‑time fraud detection pipeline for a credit‑card issuer that processed ~4 M transactions per day. The existing rule‑based system had a false‑positive rate of 12 % and missed 18 % of fraudulent cases, costing the company $3 M annually.

**Action (A)**  
I owned the end‑to‑end solution:  

1. **Data ingestion** – *Amazon Kinesis Data Streams* for low‑latency event capture.  
2. **Feature enrichment** – *Glue* to join user profile tables in S3, then *Lambda* to compute rolling statistics.  
3. **Model training** – *SageMaker Autopilot* on a 10 GB feature set; I tuned hyperparameters using Bayesian optimization and selected an XGBoost model that achieved 0.97 AUC on a hold‑out set.  
4. **Serving** – *SageMaker Endpoint* behind an Application Load Balancer with Auto Scaling to guarantee <50 ms latency per request.  
5. **Monitoring & retraining** – *CloudWatch* metrics and *Athena* queries trigger nightly retraining; drift detection drops into the pipeline automatically.

**Result (R)**  
Within three months we reduced false positives by 6 % (from 12 % to 6 %) and increased fraud capture from 18 % to 32 %, saving ~$4.2 M annually. The system handled peak traffic of 500k TPS with <99.9 % availability while staying under $15 K/month.

**Learning & Leadership Principles**  
*Ownership*: I drove the project from concept to production, owning SLAs and cost budgets. *Dive Deep*: Continuous profiling uncovered a bottleneck in feature extraction; replacing Lambda with Glue ETL cut latency by 35 %. The result demonstrates measurable impact and my commitment to learning from each iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
