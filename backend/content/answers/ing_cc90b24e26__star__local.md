---
qid: ing_cc90b24e26__star__local
question: 'Explain: Microsoft System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 305
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:18:02-05:00'
sources: []
---

**Situation** – In my last role I was asked to redesign the recommendation engine for our e‑commerce platform, which had been pulling in data from three legacy microservices and serving less than 10% click‑through rate. The engineering team needed a scalable solution that could handle millions of requests per day while keeping latency under 200 ms.

**Task** – Build an end‑to‑end system: ingest real‑time user behavior, train a lightweight matrix‑factorization model, and serve predictions with minimal lag, all on Azure.

**Action** – I chose Azure Event Hubs for streaming, Spark Structured Streaming to aggregate events into feature tables in Azure SQL, and Azure ML Pipelines to retrain the model every 12 hours. For serving, I deployed an ONNX‑exported XGBoost model behind a Kubernetes cluster using Istio for traffic shaping. We used Application Insights to monitor latency and A/B test new features.

**Result** – The new pipeline cut prediction latency from 1.2 s to 80 ms and boosted click‑through by 35%. I learned that combining managed services with lightweight ML models can deliver production‑grade performance without sacrificing agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
