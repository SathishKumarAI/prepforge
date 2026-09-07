---
qid: ing_b99978ae27__aws__local
question: 'Explain: Supervised Machine Learning: Regression and Classification'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 382
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:38-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑prevention team at my last employer, we needed to predict whether a transaction would be fraudulent (classification) or estimate the loss amount if it was (regression). The goal: reduce false positives by 15 % and cut payout costs by $2M annually.  

**Action – Technical Design**  
1. **Data & Feature Engineering** – Collected 3 M labeled transactions, engineered 120 features (time‑of‑day, device fingerprint, historical fraud score). Used AWS Glue to clean and catalog in Athena for repeatability.  
2. **Model Selection** – Trained a Gradient Boosting model (XGBoost) for classification and a Lasso regression for loss estimation on SageMaker notebooks. Hyper‑parameter tuning via SageMaker Experiments and automatic scaling with Spot instances.  
3. **Deployment & Monitoring** – Deployed as two real‑time endpoints on SageMaker Real Time Inference; added Lambda to route requests based on transaction size. Configured CloudWatch metrics (precision@k, MSE) and alerts.  

**Result**  
- Classification precision increased from 82 % to 94 %, lowering false positives by **15 %** → $2M savings per year.  
- Regression MAE dropped from $120 to $68, improving loss estimates and enabling dynamic risk‑based pricing.  

**Reflection (Bar‑raiser lens)**  
I owned the full ML pipeline, diving deep into feature importance to surface biases, and iterated on model choice after a failed attempt with Random Forests that overfit. The quantified impact and continuous learning align with *Customer Obsession* and *Ownership*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
