---
qid: ing_52327145a1__star__local
question: 'Explain: There are 3 modules in this course — Supervised Machine Learning:
  Regression and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 326
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:37-05:00'
sources: []
---

**Situation:** In my sophomore year I enrolled in a three‑module machine learning course on Coursera, focused on supervised learning. We were given a dataset of house prices with features like square footage, number of bedrooms, and location.

**Task:** My goal was to build a predictive model that could accurately estimate sale prices (regression) and also classify houses into “luxury” vs. “affordable” categories (classification), while understanding the trade‑offs between bias and variance for each task.

**Action:** I started by cleaning the data, handling missing values with median imputation, and normalizing continuous features using StandardScaler in scikit‑learn. For regression I trained a Lasso model to enforce sparsity and reduce overfitting, tuning α via cross‑validation. For classification I used a RandomForestClassifier, adjusting n_estimators and max_depth to balance depth and speed. I evaluated both models with RMSE for regression and F1‑score for classification, using 5‑fold CV to ensure stability.

**Result:** The Lasso model achieved an RMSE of 12.4k on the test set, a 15% improvement over baseline mean prediction. The RandomForest classifier reached an F1‑score of 0.82, correctly labeling 88% of luxury homes. I learned how regularization and ensemble depth control directly impact bias‑variance trade‑offs, and I gained hands‑on experience with feature engineering, hyperparameter tuning, and model evaluation metrics—all crucial for real‑world supervised ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
