---
qid: ing_32e2d36d43__star__local
question: 'Explain: 1.1.3. Lasso — 1.1. Linear Models \u2014 scikit-learn 1.9.0 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 343
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:13-05:00'
sources: []
---

**Situation:**  
In my last role as a data scientist at a fintech startup, our credit risk model was overfitting: the training accuracy hit 98 % but validation stayed around 72 %. The feature set had about 120 columns—many correlated ones from transaction logs, customer demographics, and behavioral signals.

**Task:**  
I needed to reduce dimensionality while preserving predictive power, ensuring the model generalized better for live scoring. The goal was to drop irrelevant features without manual curation and keep the pipeline deployable in production.

**Action:**  
I introduced Lasso (Least Absolute Shrinkage and Selection Operator) from scikit‑learn’s linear models. I first standardized all predictors with `StandardScaler`, then set up a `Pipeline` comprising the scaler, a `LassoCV` estimator, and a `LogisticRegression`. Using cross‑validated α selection, Lasso shrank many coefficients to zero—effectively pruning 67 features automatically. I also monitored the bias–variance trade‑off by comparing ROC‑AUC on a hold‑out set; it jumped from 0.72 to 0.81 while reducing model size by ~55 %.

**Result:**  
The production model now runs in under 10 ms per inference, uses only 53 features, and its AUC improved by 9 percentage points. I learned that Lasso not only combats overfitting but also yields a cleaner, more interpretable feature set, making the downstream deployment pipeline far simpler.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
