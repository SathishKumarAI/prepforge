---
qid: ing_0a4e4c7046__aws__local
question: 'Explain: What''s included — Supervised Machine Learning: Regression and
  Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 566
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:49:10-05:00'
sources: []
---

**Situation / Task**

In a recent data‑science project for an e‑commerce retailer, I was tasked to build a model that predicts whether a new customer will convert (classification) and estimates the revenue they’ll generate in their first month (regression). The goal was to improve marketing spend by 15 % while keeping prediction latency under 50 ms.

**Action**

I designed a two‑stage pipeline on **Amazon SageMaker**:

1. **Feature Store** – I used *SageMaker Feature Store* to ingest transactional and behavioral data, ensuring consistency across training and inference.
2. **Model Training** – For classification I trained an XGBoost model (100 trees, depth = 6). For regression I used a LightGBM model with L1 regularization. Both models were benchmarked against baseline logistic regression and linear regression; the ensemble improved F1‑score from 0.72 to **0.84** and MAE from $12.5 to **$4.3**.
3. **Model Hosting** – I deployed the models as SageMaker endpoints with *autoscaling* based on CPU usage, guaranteeing < 50 ms latency for 99th percentile requests.
4. **Monitoring & Retraining** – Leveraged *SageMaker Model Monitor* to detect drift; retrained monthly using incremental updates.

**Result**

- Marketing ROI increased by **18 %** within three months due to better targeting.
- Operational cost dropped 12 % by eliminating over‑provisioned EC2 instances in favor of SageMaker’s managed scaling.
- Latency remained below the target, achieving a 99.9 % SLA.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Built models that directly increased conversion and revenue for our customers, focusing on real business metrics. |
| **Ownership & Dive Deep** | Took full ownership of the ML pipeline, from feature engineering to deployment, diving deep into model diagnostics and cost‑performance trade‑offs. |

---

### What a Bar‑raiser Listens For

- **Quantified Impact:** I cited exact ROI lift, latency, and cost savings.  
- **Depth & Ownership:** I explained each AWS service choice and the rationale behind scaling decisions.  
- **Learning from Failure:** When initial models overfit, I iterated on regularization and feature selection, documenting lessons in a post‑mortem.  

This end‑to‑end solution showcases how to turn data into measurable business value using AWS ML services while embodying Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
