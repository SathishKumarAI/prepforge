---
qid: ing_35c91d8e87__aws__local
question: What are they used for? — Database Isolation Levels
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 404
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A fintech startup was struggling to detect fraudulent transactions in real‑time while keeping latency under 50 ms.  
> **Task:** I led a team to build an ML‑driven fraud detector that would replace their rule‑based engine, which had a 12 % false‑positive rate and caused customer churn.  
> **Action:**  
> * Gathered labeled data from 3 M historic transactions.  
> * Trained a gradient‑boosting model (XGBoost) on AWS SageMaker, tuning hyperparameters with Bayesian optimization.  
> * Deployed the model as a stateless Lambda function behind an API Gateway, using Amazon DynamoDB for feature storage and Amazon SQS to buffer spikes.  
> * Implemented a feedback loop: every 1 h, Lambda re‑injected predictions back into SageMaker for incremental learning (online update).  
> **Result:**  
> * False positives dropped from 12 % to 3 %, saving $2.4 M annually in chargebacks.  
> * Latency averaged 35 ms, well below the SLA.  
> * Cost per inference fell by 30 % compared with the legacy rule engine due to efficient spot‑instance usage for training.

**Key Learnings & Bar‑Raiser Signals**

* Took full ownership of data pipeline, model lifecycle, and cost control.  
* Dived deep into feature importance to surface hidden fraud patterns—showing analytical depth.  
* Quantified impact (revenue saved, latency).  
* Learned from an initial overfitting failure by shifting to a regularized ensemble, demonstrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
