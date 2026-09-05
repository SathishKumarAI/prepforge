---
qid: ing_30724fb9f6__star__local
question: 'Explain: So to solve this problem we need — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:17-05:00'
sources: []
---

**Situation**  
During my capstone project I was asked to predict customer churn for a telecom provider that had over 120,000 monthly usage records and an existing but stale rule‑based system that only achieved 65 % accuracy.

**Task**  
I needed to build a data‑driven model that surpassed the legacy system by at least 10 % in F1 score while keeping training time under two hours on a standard laptop.

**Action**  
First, I extracted and cleaned the raw logs with Pandas, handling missing values via median imputation and encoding categorical features using target‑encoding. Next, I engineered interaction terms (e.g., `total_minutes * avg_call_duration`) and performed feature scaling with StandardScaler. For modeling, I implemented a Gradient Boosting Machine (XGBoost) in Python, tuning hyperparameters through randomized search on 5‑fold cross‑validation. I used early stopping to avoid overfitting and logged every experiment with MLflow for reproducibility. Finally, I deployed the trained model as a FastAPI service, exposing an endpoint that accepts JSON payloads and returns churn probability.

**Result**  
The XGBoost model achieved an F1 score of 0.78 on the held‑out test set—12 % higher than the legacy system—and training completed in 1 hour 45 minutes. The API response time averaged 35 ms, well within operational requirements. I learned how to balance model complexity with deployment constraints and the importance of experiment tracking for scaling ML workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
