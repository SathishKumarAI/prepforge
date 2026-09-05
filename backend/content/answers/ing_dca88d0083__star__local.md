---
qid: ing_dca88d0083__star__local
question: 'Explain: Implementing k-fold cross-validation with stratified sampling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 360
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:22-05:00'
sources: []
---

**Situation** – In a credit‑risk project I was tasked to build a binary classifier for loan defaults. The dataset had only 3% positive cases, so the training set was heavily imbalanced. We were also under a one‑month deadline to deliver a model that could be deployed in production.

**Task** – My goal was to evaluate the model reliably using k‑fold cross‑validation while preserving the minority class proportion in every fold, and to avoid any leakage from hyperparameter tuning into the final performance estimate.

**Action** – I used `StratifiedKFold` from scikit‑learn with `n_splits=5`. Inside each split I performed a pipeline: impute missing values (SimpleImputer), scale features (StandardScaler), and fit a Gradient Boosting Classifier. The stratification ensured that each fold had the same 3% default rate, preventing any bias toward the majority class. I also wrapped the entire process in `cross_val_score` to compute ROC‑AUC per fold and averaged them for a robust estimate.

**Result** – The cross‑validated AUC was 0.87 (±0.02), a 4% improvement over the baseline model that used plain KFold. We met the deadline, deployed the model, and later observed a 12% reduction in false positives. I learned how critical proper stratification is for imbalanced data and how to integrate it cleanly into a reproducible pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
