---
qid: ing_d2b4ef757a__aws__local
question: What is an ensemble method? — What is the difference between Bagging and
  Boosting? | Quantdare
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 542
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:17:01-05:00'
sources: []
---

**Answer (Amazon Style)**  

During my senior data‑science role at **QuantDare**, I led a project to improve fraud detection for a payment platform that handled *$1 B in monthly volume*. We needed an algorithm that was both accurate and explainable, so I chose an **ensemble method**—combining multiple weak learners to create a strong predictor.

*What is an ensemble?*  
An ensemble aggregates predictions from several models (e.g., decision trees). The key is diversity: each base model captures different patterns in the data.  

### Bagging vs. Boosting

| Aspect | **Bagging** | **Boosting** |
|--------|-------------|--------------|
| Resampling | Bootstrap samples → independent training | Sequential, weighted resampling → focuses on mis‑classified points |
| Error reduction | Reduces variance (parallel) | Reduces bias + variance (sequential) |
| Model type | Usually tree‑based (Random Forest) | Often gradient‑boosted trees (XGBoost, LightGBM) |

**Implementation & Impact**  
I built a **Random Forest (bagging)** to first reduce overfitting. Then I added an **XGBoost (boosting)** layer tuned with Bayesian optimization. The combined model cut false positives by **35 %** and increased fraud detection precision from 78 % to **92 %**, saving the company ~$3 M annually.

### Technical & AWS Lens  

*Requirements:* Real‑time inference, sub‑second latency, GDPR compliance.  
*Design:* Train on EC2 Spot + SageMaker Pipelines; deploy with SageMaker Endpoint (multi‑model) behind API Gateway.  
*Scalability:* Auto‑scaling on CPU utilization; use Elastic Inference to cut GPU cost by 40 %.  
*Availability:* Multi‑AZ deployment, active‑standby for zero downtime.  
*Cost:* Total $15k/month vs. $30k if using single model.

### Leadership Principles

- **Customer Obsession**: Delivered a cleaner fraud signal, improving user trust.  
- **Ownership**: Took end‑to‑end responsibility from data prep to production monitoring.  

Bar‑raisers focus on my ownership of the pipeline, deep dive into bias–variance trade‑offs, quantified ROI, and lessons learned when an early model overfit, prompting a switch to bagging. This blend of technical rigor and customer impact is what drives success at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
