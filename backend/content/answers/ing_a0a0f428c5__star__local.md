---
qid: ing_a0a0f428c5__star__local
question: 'Explain: Now similar to the exercise that we — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 309
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:53:54-05:00'
sources: []
---

**Situation** – In my internship at a fintech startup, our fraud‑detection model had an accuracy of only 78 % and was flagging too many legitimate transactions, hurting customer experience.

**Task** – I was asked to boost precision without sacrificing recall, and to explain the approach in plain terms to the product team who weren’t familiar with ML jargon.

**Action** – First, I re‑engineered the feature set: added interaction terms between transaction amount and merchant category, and used a SMOTE oversampling pipeline in scikit‑learn. Then I switched from logistic regression to an XGBoost classifier, tuning depth=6, learning rate=0.1, and subsample=0.8 via Optuna. After training, I visualized feature importance with SHAP values and created a short slide deck that mapped each feature to real‑world intuition (e.g., “high‑value overseas purchase” triggers higher risk). I presented the results in a 10‑minute demo, highlighting how the new model improved precision from 78 % to 92 % while keeping recall above 85 %.

**Result** – The updated pipeline reduced false positives by 35 %, cutting customer complaints by half and saving the company roughly $120k per month. I learned that marrying technical rigor with clear storytelling is key when translating ML concepts to non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
