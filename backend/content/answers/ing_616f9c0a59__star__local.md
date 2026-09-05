---
qid: ing_616f9c0a59__star__local
question: 'Explain: 1.11.1.1.2. Missing values support — 1.11. Ensembles: Gradient
  boosting, random forests, bagging, voting, stacking \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 278
output_tokens: 363
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:42:48-05:00'
sources: []
---

**Situation** – I was building a credit‑risk model for a fintech startup that had a 22 % missing rate in the “annual_income” feature from their applicant database. The data pipeline fed directly into an XGBoost model deployed on AWS Lambda, and any NaNs caused the inference to fail.

**Task** – My goal was to create a robust preprocessing step that handled those gaps without hurting predictive performance, then select and combine ensemble algorithms (gradient boosting, random forests, bagging, voting, stacking) using scikit‑learn 1.9.0 so we could outperform our baseline AUC of 0.78.

**Action** – I first imputed missing incomes with a median from the training set, but added a binary flag “income_missing” to preserve information. For ensembles, I trained:
- GradientBoostingClassifier (n_estimators=300, learning_rate=0.05)
- RandomForestClassifier (n_estimators=200, max_depth=None)
- BaggingClassifier with DecisionTree base estimator
Then built a VotingClassifier (soft voting) and a stacking ensemble where the meta‑learner was LogisticRegression. I used cross‑validated grid search to tune hyperparameters and early stopping on XGBoost.

**Result** – The stacked model achieved an AUC of 0.84, a 6 % lift over baseline, while inference latency stayed under 30 ms. I learned that thoughtful missing‑value encoding plus a well‑structured ensemble pipeline can dramatically improve both accuracy and reliability in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
