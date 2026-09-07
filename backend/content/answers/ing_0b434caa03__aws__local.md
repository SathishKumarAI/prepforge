---
qid: ing_0b434caa03__aws__local
question: 'Explain: Project onsite — Cursor Software Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 486
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:32-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

> *Situation:* At my previous role I was asked to lead the “Predictive Lead Scoring” pilot for a SaaS client. The goal was to reduce churn by 15 % within six months.

> *Task:* Build an end‑to‑end ML pipeline that ingests 10 M rows of user activity daily, trains weekly models, and serves predictions in real time with <100 ms latency.

> *Action:*  
> • **Requirements & Design** – I scoped the data (clickstream + subscription metadata), defined feature engineering rules, and chose a **scikit‑learn Gradient Boosting** model for its interpretability. For scaling, I containerized the training job in **AWS SageMaker**, leveraging Spot instances to cut costs 40 %.  
> • **Deployment** – I exposed the inference endpoint via **SageMaker Real Time Inference** behind an **ALB** with WAF and automatic TLS termination, ensuring 99.95 % availability.  
> • **Monitoring & Feedback Loop** – Implemented **Amazon CloudWatch Metrics** (prediction latency, drift score) and a scheduled Lambda to retrain if drift >5 %. All logs went to **Kinesis Data Firehose → S3** for audit and future feature analysis.

> *Result:* The pilot achieved a 17 % churn reduction in four months, exceeding the target. Model accuracy (AUC‑ROC) stabilized at 0.88 after two retrain cycles. Cost per prediction dropped from $0.12 to $0.07 due to Spot usage.

**Bar‑raiser Checklist**

- **Ownership:** Took full responsibility for data pipeline, model lifecycle, and SLA guarantees.  
- **Dive Deep:** Quantified latency, drift thresholds, and cost savings; iterated on feature sets based on SHAP analysis.  
- **Quantified Impact:** 17 % churn lift, $30k annual savings from Spot instances.  
- **Learning From Failure:** Initial model over‑fitted to recent churn spikes; resolved by adding temporal regularization and expanding training window.

This demonstrates how I translate customer needs into a scalable AWS ML solution while continuously measuring impact and iterating for better performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
