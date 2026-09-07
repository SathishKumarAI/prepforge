---
qid: ing_777ed91a8a__aws__local
question: 'Explain: So here''s David. Wang: Thank you, Stephanie'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 383
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:55:21-05:00'
sources: []
---

**Situation & Task (S)**  
At my last role I was asked by the data‑science lead, *David Wang*, to accelerate the churn‑prediction model for a subscription service that had a 15 % annual churn rate and $2 M in ARR.

**Action (A)**  
I assumed full ownership:  

1. **Data ingestion** – built an EventBridge‑driven pipeline that streamed raw logs into S3, then catalogued them with Glue.  
2. **Feature store** – used SageMaker Feature Store to centralise 120 engineered features and cache them in DynamoDB for < 5 ms latency.  
3. **Model training** – leveraged SageMaker Autopilot (GPU‑optimized) to train 20+ pipelines, automatically tuning hyperparameters; the best model achieved an AUC of **0.87** vs the legacy 0.78.  
4. **Deployment & monitoring** – deployed with SageMaker Endpoint behind ALB for high availability, and set up CloudWatch metrics + Lambda alerts to auto‑rollback on > 10 % drift.

**Result (R)**  
Within two months, we reduced churn by **8 %** ($160k ARR saved) and cut model‑training time from 12 hrs to 2 hrs. Costs fell 30 % thanks to spot instances.  

> *Leadership Principles:* **Ownership**, **Dive Deep** (SageMaker tuning), **Bias for Action** (rapid A/B rollouts).  
> *Bar‑raiser check:* Quantified lift, end‑to‑end automation, and continuous learning from drift alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
