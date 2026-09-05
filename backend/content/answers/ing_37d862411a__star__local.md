---
qid: ing_37d862411a__star__local
question: 'Explain: Concept drift vs. Model drift — What is concept drift in ML, and
  how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 317
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:02-05:00'
sources: []
---

**Situation** – In my last role I was maintaining a churn prediction model for a telecom client that processed daily usage logs. Six months after launch, the model’s AUC dropped from 0.82 to 0.68, and the business team reported an unexpected rise in false positives.

**Task** – I had to determine whether the decline was due to concept drift (the underlying relationship between features and churn changed) or just noise, and then restore performance without redeploying a new model overnight.

**Action** – First, I set up a monitoring pipeline that streamed feature distributions and prediction scores into Grafana dashboards. Using KS‑test and sliding‑window Pearson correlation on key predictors, I detected a significant shift in the “average daily data usage” feature correlated with churn probability. I then performed an online learning experiment: retrained the model incrementally on the last 30 days of labeled data while keeping the original weights as a fallback. Finally, I automated this process in Airflow so that whenever drift metrics exceeded thresholds, a new model version was queued for A/B testing.

**Result** – After deploying the updated model, the AUC rebounded to 0.81 within two weeks and false positives dropped by 35%. The exercise taught me the importance of continuous feature monitoring and having an automated retraining loop ready to combat concept drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
