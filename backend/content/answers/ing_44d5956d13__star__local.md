---
qid: ing_44d5956d13__star__local
question: 'Explain: There you go. Now, the next cell — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 312
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:30-05:00'
sources: []
---

**Situation** – In my last internship at a fintech startup, the fraud‑detection team was flagging almost 30 % of legitimate transactions as suspicious, which caused customer churn and delayed payouts.

**Task** – I was tasked with building an ML model that could reduce false positives by at least 15 % while keeping true‑positive rates above 95 %.

**Action** – First, I gathered a labeled dataset of 1.2 million transactions from the last year, then performed feature engineering: one‑hot encoding for merchant categories, time‑of‑day buckets, and rolling statistics on user spend over the past week. Using Scikit‑Learn’s `GradientBoostingClassifier`, I tuned hyperparameters with Optuna to balance precision and recall. To deploy quickly, I wrapped the model in a FastAPI service and used Docker for containerization, ensuring zero downtime during rollout.

**Result** – After A/B testing, false positives dropped from 30 % to 18 %, a 12 % improvement, while true‑positive rate stayed at 96.3 %. Customer complaints fell by 22 %, and the team adopted this pipeline for all new accounts. I learned how to iterate rapidly on data pipelines, balance business metrics, and containerize models for production use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
