---
qid: ing_8835bb08d5__star__local
question: 'Explain: Best practice questions by the author of Blind 75 | Tech Interview
  Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 337
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:58-05:00'
sources: []
---

**Situation:**  
During my internship at a fintech startup, we were building a fraud‑detection model that had to process millions of transactions per day. The data pipeline was built on Spark and the model used XGBoost. Our quarterly audit required us to prove that our feature engineering and hyperparameter tuning followed industry best practices.

**Task:**  
I needed to audit the entire ML workflow, identify any gaps against the “Blind 75” checklist (e.g., proper train‑test splits, cross‑validation, handling class imbalance), and redesign it so we could meet the audit deadline while keeping latency under 200 ms per prediction.

**Action:**  
First, I added stratified K‑fold CV to ensure every fold had the same fraud ratio. Then I introduced SMOTE on the training set and implemented a pipeline that performed feature scaling inside each fold to avoid data leakage. For hyperparameters, I automated Bayesian optimization with Optuna, constraining the search space to keep training time < 30 min. Finally, I refactored the model deployment into a Docker container with an async FastAPI endpoint and added Prometheus metrics for latency.

**Result:**  
The revised pipeline reduced false‑positive rate from 12% to 7%, increased precision by 4%, and kept inference latency at ~180 ms. The audit passed without objections, and I documented the entire process in a GitHub repo that became part of our internal ML Ops playbook. I learned how rigorous adherence to best‑practice checklists can dramatically improve both model quality and operational reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
