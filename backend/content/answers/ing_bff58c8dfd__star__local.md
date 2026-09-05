---
qid: ing_bff58c8dfd__star__local
question: 'Explain: Meta Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 326
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:25-05:00'
sources: []
---

**Situation** – At a mid‑stage product launch for a recommendation engine, the engineering lead asked me to review our feature‑selection pipeline after the model’s AUC dropped from 0.82 to 0.74 last quarter.  
**Task** – I had to redesign the meta‑model that aggregates predictions from four base learners (XGBoost, LightGBM, Neural Net, and Bayesian Regressor) so it could adaptively weight each component based on data drift, without sacrificing inference latency (<5 ms).  
**Action** – First, I instrumented a real‑time feature‑importance monitor using SHAP values streamed to Kafka. Then I built an online meta‑learner with a lightweight feedforward network that receives the base scores and their corresponding confidence estimates; it outputs a dynamic weighting vector. To keep latency low, I quantized the weights to 8‑bit integers and deployed the model on NVIDIA TensorRT. I also added a fallback rule: if any base learner’s confidence falls below 0.4, its weight is zeroed out automatically.  
**Result** – The new meta‑design lifted AUC back to 0.81 within two weeks of deployment, increased click‑through rate by 12 %, and kept inference time at 4.3 ms. I learned that combining interpretability (SHAP) with online learning can quickly counteract data drift while respecting strict latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
