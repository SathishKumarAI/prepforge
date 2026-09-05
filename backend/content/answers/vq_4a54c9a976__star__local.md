---
qid: vq_4a54c9a976__star__local
question: Q20- When should you use classification over regression?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 299
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:02-05:00'
sources: []
---

**Situation:** In a recent project for an e‑commerce platform, I was tasked with predicting customer churn to guide retention campaigns. The business had two options: treat churn as a binary outcome or predict the exact probability of churn over time.

**Task:** My goal was to build a model that could be deployed in real time to flag high‑risk accounts so that marketing could intervene immediately.

**Action:** I first examined the data distribution and realized churn events were rare (≈4 % of users). A regression model predicting continuous churn probability would produce many borderline values, making threshold tuning difficult and diluting interpretability. Instead, I framed it as a binary classification problem—churn vs. no churn—and used XGBoost with class‑weight balancing. I added engineered features such as “days since last purchase” and “average basket size,” then performed cross‑validation to tune the decision threshold for optimal precision‑recall trade‑off.

**Result:** The classifier achieved 0.92 AUC and a recall of 0.85 at a 5 % false‑positive rate, allowing us to target 3,200 users per month with a projected churn reduction of 12 %. I learned that when outcomes are discrete, rare, and decisions hinge on clear yes/no actions, classification is the pragmatic choice over regression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
