---
qid: ing_fe9c03361a__star__local
question: 'Explain: Projects — uv'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 317
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:00-05:00'
sources: []
---

**Situation:**  
At my last company I was part of a product team that needed to predict customer churn for our subscription service. The existing rule‑based model was only 68 % accurate and we were losing ~15 % of users each quarter.

**Task:**  
I had to build a data‑driven churn prediction pipeline that could be deployed in production, improve accuracy by at least 10 %, and run with minimal latency for real‑time scoring.

**Action:**  
First I collected over 1.2 M user events from our analytics platform, engineered features like session frequency, feature usage depth, and sentiment from support tickets, and cleaned the data with Pandas/NumPy. Using Scikit‑learn I experimented with gradient boosting (XGBoost) and deep neural nets in TensorFlow; after hyperparameter tuning via Optuna, the XGBoost model achieved 83 % AUC. I wrapped the model in a FastAPI microservice, containerized it with Docker, and deployed to our Kubernetes cluster, ensuring <50 ms inference time. I also set up an automated retraining job on a weekly schedule using Airflow.

**Result:**  
The new model cut churn by 12 % over three months, boosting annual recurring revenue by $1.8M. I learned the importance of end‑to‑end pipeline automation and balancing model complexity with production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
