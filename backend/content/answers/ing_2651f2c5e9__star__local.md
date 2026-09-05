---
qid: ing_2651f2c5e9__star__local
question: 'Explain: What interviewers grade — Ai System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:27-05:00'
sources: []
---

**Situation** – In my last role I was asked to lead the redesign of a recommendation engine for an e‑commerce platform that had seen its click‑through rate drop from 12% to 7% after a recent update. The client demanded real‑time personalization without increasing latency beyond 200 ms.

**Task** – My goal was to architect a scalable AI system that delivered sub‑250 ms inference, handled millions of concurrent users, and could be iterated on with new data pipelines—all while keeping cost under the existing budget.

**Action** – I began by mapping the end‑to‑end flow: data ingestion (Kafka + Spark), feature store (RedisCache + Delta Lake), model serving (TensorRT in Docker on Kubernetes). I performed a trade‑off analysis between latency and accuracy, settling on a two‑stage approach: a lightweight XGBoost for instant ranking, followed by a larger transformer that ran asynchronously for batch re‑ranking. I introduced circuit breakers to fall back to static rules if the model was down. For monitoring, I set up Prometheus metrics (inference latency, error rate) and integrated with Grafana dashboards; automated retraining pipelines were added using MLflow.

**Result** – The new system lifted CTR back to 11% within two weeks of launch while keeping inference latency at 180 ms on average. Monthly compute costs dropped by 18%. I learned that interviewers look for a clear understanding of trade‑offs, robust observability, and a deployment strategy that balances speed, cost, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
