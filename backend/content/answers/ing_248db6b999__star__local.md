---
qid: ing_248db6b999__star__local
question: 'Explain: Fraud Detection System — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:42:26-05:00'
sources: []
---

**Situation** – In my last role at a mid‑size fintech, we were seeing a 12 % rise in card‑present fraud during the holiday season. The existing rule‑based engine flagged only 35 % of the fraudulent transactions and had a 22 % false‑positive rate, hurting customer experience.

**Task** – I was tasked to build an ML‑driven fraud detection pipeline that could reduce the false positives by at least 30 % while maintaining or improving the true‑positive rate, all within a 48‑hour sprint for the next peak period.

**Action** – I first engineered features from raw logs: time of day, device fingerprint entropy, transaction velocity, and geographic anomaly scores. Using Python’s pandas I cleaned the data, then applied SMOTE to balance the minority fraud class. For modeling, I trained a LightGBM classifier (tuned via Optuna) because it handles categorical variables natively and is fast enough for real‑time scoring. I integrated SHAP explanations into the dashboard so analysts could understand each flag. Finally, I deployed the model as a REST endpoint on AWS Lambda with an API Gateway trigger, scaling automatically.

**Result** – In production over the next month we saw a 38 % drop in false positives and a 5 % increase in true‑positive detection, saving the company roughly $1.2M in chargeback fees. I learned that combining robust feature engineering with explainable ML models is key to gaining trust from both ops and compliance teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
