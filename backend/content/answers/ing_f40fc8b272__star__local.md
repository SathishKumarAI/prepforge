---
qid: ing_f40fc8b272__star__local
question: 'Explain: Company context — Sierra'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 346
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:36:00-05:00'
sources: []
---

**Situation**  
At Sierra, a mid‑size fintech firm, we were launching a new fraud‑detection product that had to process ~1 million transactions per day. The existing rule‑based engine missed 18% of fraudulent cases and was too slow for real‑time alerts.

**Task**  
I was tasked with building an AI‑driven classifier that could reduce false negatives by at least 50%, keep latency under 200 ms, and integrate seamlessly into our Kafka streaming pipeline without disrupting the current system.

**Action**  
First, I collected a balanced training set of labeled transactions from the past year and performed feature engineering on user behavior, device fingerprints, and geolocation. I trained an XGBoost model in Python, tuning hyperparameters with Optuna to hit our latency goal. To deploy it, I containerized the model with Docker, exposed it as a gRPC microservice, and added a caching layer using Redis to meet the 200 ms SLA. I also built a monitoring dashboard in Grafana that tracks precision‑recall curves in real time, allowing data scientists to retrain on new fraud patterns automatically.

**Result**  
Within three months of deployment, the system cut false negatives from 18% to 7%, boosting revenue protection by $2.4 M annually. Latency stayed consistently below 180 ms, and the model’s AUC improved from 0.84 to 0.92. I learned that marrying rigorous feature engineering with automated hyper‑parameter tuning can deliver production‑grade AI quickly while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
