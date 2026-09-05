---
qid: ing_b2bd207163__star__local
question: 'Explain: Week 3: Data Definition and Baseline — Machine Learning in Production
  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 344
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:16-05:00'
sources: []
---

**Situation** – In a recent data‑science sprint at my previous company we were tasked with launching an ML recommendation engine for the e‑commerce platform. The first week was all about gathering stakeholder expectations; by Week 3 we needed to define our dataset and set a baseline model before any heavy engineering could begin.

**Task** – My responsibility was to clean, label, and split the raw clickstream data into a training set that truly reflected user behavior, then build a simple logistic‑regression baseline that would give us a performance benchmark (AUC > 0.65) for future comparison.

**Action** – I wrote an ETL pipeline in Spark to ingest 200 GB of daily logs, applied feature engineering (time‑of‑day buckets, one‑hot encoded categories), and used stratified sampling to preserve the 3% conversion rate. After exploratory data analysis, I trained a L2‑regularized logistic regression with cross‑validation on an AWS EMR cluster, tuning `C` via grid search. I logged every step in Airflow, stored the model artefact in S3, and exposed a simple REST endpoint for quick A/B testing.

**Result** – The baseline achieved an AUC of 0.68, exceeding our target and giving the team a clear “next‑step” metric. The pipeline processed each batch in under 10 minutes, allowing weekly updates. I learned that rigorous data definition and a lightweight benchmark model are essential to avoid scope creep and give stakeholders tangible progress early on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
