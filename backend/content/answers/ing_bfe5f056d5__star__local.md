---
qid: ing_bfe5f056d5__star__local
question: 'Explain: Class — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 302
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:54:18-05:00'
sources: []
---

**Situation** – In my senior capstone, our team was tasked with predicting student success for a new online “Home” course in CS324. The enrollment data were sparse and noisy; only 300 students had complete records, and the target variable (pass/fail) was highly imbalanced.

**Task** – I needed to build an interpretable model that could identify at-risk students early enough for targeted interventions, while keeping prediction latency under 50 ms so it could run in real time on the LMS dashboard.

**Action** – First, I performed feature engineering: engineered “study‑time” and “forum‑participation” ratios from raw logs. Then I trained a gradient‑boosted tree (XGBoost) with class‑weighting to handle imbalance, tuning hyperparameters via Bayesian optimization. To ensure interpretability, I extracted SHAP values for each prediction and built an interactive dashboard that highlighted the top contributing factors per student. I also implemented model pruning to meet latency constraints.

**Result** – The final model achieved 87 % accuracy and a 0.79 AUC on hold‑out data, reducing false negatives by 35 %. Early alerts led to a 12 % increase in course completion rates across the cohort. I learned that balancing performance with interpretability can directly improve student outcomes and stakeholder trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
