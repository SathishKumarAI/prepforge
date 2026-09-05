---
qid: ing_86faa13500__star__local
question: 'Explain: Explore more from Machine Learning — Supervised Machine Learning:
  Regression and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 373
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:30-05:00'
sources: []
---

**Situation** – While working on a fintech startup’s credit‑risk dashboard, I noticed our default prediction accuracy lagged behind industry benchmarks. The product team needed a sharper model to reduce false positives and improve loan approval rates.

**Task** – My goal was to build a supervised learning solution that could predict the probability of default (regression) while also classifying applicants into “low,” “medium,” or “high” risk buckets, all within two sprints.

**Action** – I enrolled in Coursera’s “Supervised Machine Learning: Regression and Classification” course to refresh core concepts. Using Python, I pulled our transactional dataset from Snowflake, performed feature engineering (one‑hot encoding of categorical fields, target‑encoding for high cardinality features), and split it into 80/20 train/test sets. For regression, I trained a Gradient Boosting Regressor (XGBoost) to output default probability scores; for classification, I fine‑tuned a Random Forest with class weighting to handle imbalance. I used cross‑validation and Bayesian hyperparameter tuning via Optuna, tracking performance in MLflow. Finally, I deployed the models as REST endpoints on AWS SageMaker, integrating them into the existing API layer.

**Result** – The new pipeline raised ROC‑AUC from 0.73 to 0.86 for classification and reduced mean absolute error from 12% to 6% for probability estimates. Loan approvals increased by 8% while maintaining a 3% default rate, meeting regulatory thresholds. I learned how disciplined feature engineering, model selection, and rigorous validation translate directly into business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
