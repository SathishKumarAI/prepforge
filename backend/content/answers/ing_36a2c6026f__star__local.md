---
qid: ing_36a2c6026f__star__local
question: 'Explain: 1.1.3.2.1. Using cross-validation — 1.1. Linear Models \u2014
  scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 366
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:17:25-05:00'
sources: []
---

**Situation**  
While working on a credit‑risk scoring project for a fintech client, our initial logistic regression model was overfitting: training accuracy hit 98 % but validation performance lagged at 72 %. The client needed a robust estimate of generalization before regulatory approval.

**Task**  
I had to demonstrate that the linear model truly captured signal rather than noise and provide a reliable error estimate for deployment.

**Action**  
Using scikit‑learn 1.9.0, I set up a stratified 5‑fold cross‑validation pipeline: `StratifiedKFold(n_splits=5, shuffle=True, random_state=42)`. For each fold, I fit a `LogisticRegression(penalty='l2', C=1.0, solver='liblinear')` on the training subset and scored it on the hold‑out part with ROC‑AUC. I also used `cross_val_score` to aggregate results and plotted the distribution of AUCs to visualize variance. To guard against data leakage, all preprocessing (imputation, scaling) was wrapped inside a `Pipeline`. I experimented with different regularization strengths (`C`) and chose the one that maximized mean cross‑validated AUC while keeping standard deviation low.

**Result**  
The final model achieved an average ROC‑AUC of 0.84 ± 0.03 across folds, versus the earlier 0.72 on a single split. This CV evidence convinced stakeholders to proceed with deployment, and I learned that transparent cross‑validation is critical for trust in linear models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
