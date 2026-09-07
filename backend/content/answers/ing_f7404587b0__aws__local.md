---
qid: ing_f7404587b0__aws__local
question: 'Explain: Classification — What is Machine Learning? \u00a0|\u00a0 Google
  for Developers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 407
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:46-05:00'
sources: []
---

**Classification – “What Is Machine Learning?”**

> **Leadership Principles:** *Customer Obsession* (we build models that solve real user problems) and *Dive Deep* (understand the math behind every decision).

**S**ituation  
At my previous role, a SaaS product was experiencing high churn because the support team couldn’t predict which customers would leave. I led a quick “model sprint” to create a churn‑prediction classifier.

**T**ask  
Build an end‑to‑end ML pipeline that ingests 1 M user events per day, trains on labeled churn data, and delivers predictions with <10 % false positives to the marketing automation system.

**A**ction  
- **Data engineering:** Used **Amazon Kinesis Data Streams** → **Glue** for ETL → **Redshift Spectrum** for feature storage.  
- **Modeling:** Trained a gradient‑boosted tree (XGBoost) in **SageMaker**, hyper‑tuned via SageMaker Experiments.  
- **Deployment:** Deployed the model as an endpoint in **SageMaker Real‑Time Inference**; autoscaled to 200 concurrent requests with <250 ms latency.  
- **Monitoring:** Set up CloudWatch metrics and an Alarms loop that retrains automatically when AUC drops below 0.78.

**R**esult  
Within 6 weeks the churn rate fell from 12% to 8% (a 33% relative improvement), saving ~$1.2 M annually. The system ran at <5 USD/month, with 99.9% availability.

*What a bar‑raiser looks for:* ownership of the end‑to‑end flow, deep dive into data quality and model choice, quantified business impact, and continuous learning loop (auto‑retrain).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
