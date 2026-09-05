---
qid: vq_e8f885d9e2__star__local
question: Looking to land a role as a machine learning engineer?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 310
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:11-05:00'
sources: []
---

**Situation:** In my final semester at university I led a team of four on a capstone project to predict student dropout rates for an online learning platform that had seen a 12% churn increase over the past year.

**Task:** My goal was to build a model that could identify high‑risk students with ≥85 % precision, so the platform’s support team could intervene early and reduce churn by at least 4%.

**Action:** I chose a LightGBM pipeline because of its speed on large tabular data. First, I engineered features from engagement logs (session length, quiz attempts, forum posts) and used SHAP to surface the most predictive signals. Next, I performed stratified k‑fold cross‑validation with early stopping and tuned hyperparameters via Bayesian optimization in Optuna. I integrated the model into a Flask microservice and deployed it on AWS Lambda, ensuring sub‑200 ms latency for real‑time scoring.

**Result:** The final model achieved 87 % precision and 79 % recall on a held‑out test set, surpassing our target. When rolled out in a pilot, the platform saw a 5.2% drop in churn within three months, saving an estimated $35k annually. I learned how to blend feature engineering, explainability, and production‑ready deployment into one coherent ML workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
