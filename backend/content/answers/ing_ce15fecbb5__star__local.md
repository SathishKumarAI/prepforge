---
qid: ing_ce15fecbb5__star__local
question: 'Explain: Databricks Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:21:22-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a recommendation engine for a subscription video platform that had just migrated its data pipeline to Databricks. The business wanted a model that could predict user watch time for new titles, but the available features were sparse and highly categorical.

**Task:** Deliver a scalable, production‑ready solution that increased prediction accuracy by at least 12 % over the baseline logistic regression model within two sprints.

**Action:** I first leveraged Databricks’ Delta Lake to clean and deduplicate the raw logs, then used Spark SQL to engineer interaction features (user–genre co‑occurrence, temporal decay). For modeling, I experimented with XGBoost on Databricks Runtime 13, tuning hyperparameters via Optuna integrated in a MLflow experiment. To handle the categorical explosion, I applied target encoding and dimensionality reduction with PCA before feeding data into the gradient‑boosted trees. Finally, I wrapped the model as an MLflow Python Model and deployed it to a job that updates predictions nightly.

**Result:** The new model lifted mean squared error from 0.48 to 0.33 (a 31 % improvement), boosting subscription retention by 3.5 % over three months. I learned how to combine Databricks’ unified analytics engine with MLflow for end‑to‑end experimentation, and the importance of feature engineering in sparse data scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
