---
qid: ing_6e340149c9__star__local
question: 'Explain: 1.11.1.1.5. Monotonic Constraints — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 366
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:07:44-05:00'
sources: []
---

**Situation** – While working on a credit‑risk scoring model for a fintech startup, the regulatory team flagged that higher income should never increase default probability in our predictions. The raw gradient‑boosted trees we had been training violated this monotonicity rule and were rejected.

**Task** – I needed to redesign the modeling pipeline so that it respected monotonic constraints on income while still leveraging ensemble power (gradient boosting, random forests, bagging) available in scikit‑learn 1.9.0, and to demonstrate a robust multi‑model approach using voting or stacking.

**Action** – First, I switched from XGBoost to `HistGradientBoostingClassifier` in scikit‑learn because it supports monotonic constraints directly; I set the `monotonic_cst` parameter so income had a +1 constraint. For additional robustness, I built an ensemble of 5 `RandomForestClassifier`s (bagging) and 3 `BaggingRegressor`s wrapped around decision trees, then combined their probabilistic outputs using a soft‑voting classifier (`VotingClassifier`). Finally, I stacked the voting ensemble with a logistic regression meta‑learner to capture residual patterns.

**Result** – The final model satisfied all monotonicity checks, achieved an AUC of 0.87 (up from 0.83) and reduced false‑positive rates by 12 %. I learned that scikit‑learn’s newer tree‑based estimators make enforcing domain constraints straightforward while still allowing sophisticated ensemble strategies to boost performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
