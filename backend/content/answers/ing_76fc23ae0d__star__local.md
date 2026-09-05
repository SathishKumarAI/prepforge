---
qid: ing_76fc23ae0d__star__local
question: 'Explain: Advanced Learning Algorithms — Supervised Machine Learning: Regression
  and Classification  | Coursera'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 343
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:57-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a churn prediction model for a telecom client with over 250,000 monthly subscribers. The marketing team needed a tool that could not only forecast who would leave but also estimate the revenue loss per customer.

**Task:**  
I had to develop a supervised learning pipeline that combined regression (to predict churn probability) and classification (to label high‑risk customers), achieve >80 % AUC, and deliver insights within a two‑week sprint.

**Action:**  
Using Python, I extracted features from call logs, billing history, and customer support tickets with pandas. For the regression component I trained an XGBoost model, tuning hyperparameters via Optuna to minimize mean squared error on churn probability. Parallelly, I built a RandomForest classifier to flag “critical” churners (top 5 % risk). I engineered interaction terms, applied SMOTE for class imbalance, and used SHAP values to interpret feature importance. The models were packaged into a Flask API, containerized with Docker, and deployed on AWS SageMaker.

**Result:**  
The combined model achieved an AUC of 0.86 and correctly identified 92 % of actual churners in the top risk tier, leading to a projected $1.2M annual revenue recovery. I learned how to balance precision‑recall trade‑offs across regression and classification tasks while maintaining production‑grade reproducibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
