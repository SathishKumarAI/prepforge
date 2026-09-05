---
qid: ing_99f0841d22__star__local
question: 'Explain: So you might get a job as — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 352
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:40:32-05:00'
sources: []
---

**Situation:**  
At my previous firm, the customer churn rate had risen to 18% over six months, hurting quarterly revenue. The product team needed a predictive model to flag high‑risk users before they left.

**Task:**  
I was tasked with building an end‑to‑end machine‑learning pipeline in Python that could be deployed within two weeks and reduce churn by at least 5%.

**Action:**  
Using scikit‑learn, I cleaned the raw event logs, engineered features (session frequency, feature usage depth), and split data into 80/20 train/test sets. I compared logistic regression, random forest, and XGBoost, tuning hyperparameters with Optuna for optimal AUC. After training, I packaged the model with Flask and Docker, and set up a CI/CD pipeline in GitHub Actions to automatically retrain on nightly data. To ensure interpretability, I generated SHAP plots that highlighted “late‑night usage” as the top risk factor.

**Result:**  
The deployed model identified 4,200 at‑risk users per month, enabling targeted retention campaigns that cut churn by 6% in three months (down from 18% to 12%). The project was cited in our internal tech showcase and led to my promotion to ML Engineer. I learned the importance of rapid experimentation, automated retraining, and clear communication of model insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
