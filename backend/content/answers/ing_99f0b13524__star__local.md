---
qid: ing_99f0b13524__star__local
question: 'Explain: Because eventually, we''ll have shown everything to'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:32-05:00'
sources: []
---

**Situation** – In early 2024 I was leading a fraud‑detection sprint for our payments platform. Our existing rule‑based engine flagged only 45 % of suspicious transactions, and the manual review team was overwhelmed with false positives.

**Task** – Build a supervised learning model that could increase true‑positive detection to at least 70 % while keeping false positives below 5 %. The deadline was three weeks before the Q3 audit.

**Action** – I gathered labeled data from the last year’s flagged transactions, engineered features (transaction velocity, geolocation entropy, device fingerprint consistency), and split the dataset into train/validation/test sets. Using Python’s scikit‑learn, I trained a gradient‑boosted tree (XGBoost) because it handles mixed feature types well and offers built‑in SHAP explainability. I performed hyperparameter tuning with Optuna, balancing precision and recall via an F1‑score target. After iterative cross‑validation, I deployed the model into our Kafka streaming pipeline using MLflow for versioning, and set up a nightly batch job to re‑train on new data.

**Result** – Post‑deployment, true‑positive detection rose from 45 % to 72 %, while false positives dropped to 4.2 %. The review queue shrank by 35 %, freeing the compliance team to focus on high‑risk cases. I learned that a transparent feature importance analysis (SHAP) not only boosted stakeholder trust but also helped us identify and remove noisy features, improving model stability over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
