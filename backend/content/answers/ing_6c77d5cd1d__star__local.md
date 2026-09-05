---
qid: ing_6c77d5cd1d__star__local
question: 'Explain: Once again, self references the current object'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 289
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:46-05:00'
sources: []
---

**Situation:** At my last company we were tasked with improving churn prediction for a subscription service. Our baseline model scored an AUC of 0.78, but the marketing team wanted higher confidence to target retention offers.

**Task:** I needed to boost predictive power by incorporating richer context—specifically, each user’s own historical behavior as self‑referential features—without inflating the feature set or overfitting.

**Action:** I engineered a rolling window of each user’s past 30 days of activity (logins, usage time, support tickets) and fed those into a gradient‑boosted tree pipeline. To keep the model interpretable, I used SHAP values to verify that self‑referential features were driving predictions. I also applied cross‑validation stratified by user ID to avoid data leakage. Finally, I wrapped the feature extraction in a Spark UDF for scalability across our 1M‑user dataset.

**Result:** The updated model achieved an AUC of 0.86—an 8% lift—and reduced false positives by 25%. The exercise taught me how to balance domain insight with rigorous validation when adding self‑referential signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
