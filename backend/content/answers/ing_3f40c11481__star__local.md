---
qid: ing_3f40c11481__star__local
question: 'Explain: There are two general approaches when it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 357
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:34:40-05:00'
sources: []
---

**Situation:** In my last role as a data scientist at a fintech startup, we were tasked with detecting fraudulent credit card transactions within milliseconds of the transaction being processed. Our existing rule‑based system was catching only 65% of frauds and had a false positive rate of 12%, which caused customer churn.

**Task:** I needed to design a real‑time fraud detection model that increased true positives by at least 20% while keeping false positives below 8%.

**Action:** I chose a supervised learning pipeline because we had labeled historical data. First, I engineered features (transaction velocity, merchant category patterns, device fingerprinting) and performed feature selection with recursive elimination to reduce dimensionality. Then I compared two algorithm families: tree‑based ensembles (XGBoost) for interpretability and neural nets for raw performance. After hyperparameter tuning via Bayesian optimization, I integrated the best XGBoost model into our streaming platform using Kafka and deployed it as a containerized microservice behind an API gateway. To keep latency low, I compressed the model with ONNX and used GPU inference on edge servers.

**Result:** The new system lifted fraud detection accuracy to 86% (a 21% improvement) and cut false positives to 6%. It processed each transaction in under 10 ms, meeting our SLA. From this project I learned that choosing supervised learning for labeled problems, combined with careful feature engineering and deployment optimization, can deliver measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
