---
qid: ing_7e3d8c6ecc__star__local
question: 'Explain: Concept drift vs. Data drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 314
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:11-05:00'
sources: []
---

**Situation:**  
While leading a churn‑prediction pipeline for a telecom client, we noticed the quarterly churn rate had spiked from 12% to 18%, yet our model’s AUC stayed around 0.78.

**Task:**  
Determine why performance degraded and devise a strategy to keep predictions accurate over time without retraining on stale data.

**Action:**  
I set up a monitoring dashboard that logged feature distributions and prediction scores every week. Using Kolmogorov–Smirnov tests, I compared live feature histograms against the training distribution (data drift). For concept drift, I employed a sliding‑window ROC analysis: we computed AUC on the last 30 days of predictions versus the baseline model’s AUC. When the difference exceeded 0.05, it triggered an alert. To address drift, I built an online retraining loop that sampled the most recent 10k labeled cases and fine‑tuned the model with a learning rate schedule, then deployed the updated version via a canary rollout.

**Result:**  
Within two months of implementing this pipeline, AUC rose to 0.84 and churn prediction accuracy improved by 7 percentage points. I learned that distinguishing data drift (feature shift) from concept drift (label–feature relationship change) is key; automated detection and incremental retraining keep models relevant in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
