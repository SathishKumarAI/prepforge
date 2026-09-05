---
qid: ing_0fa06ee276__star__local
question: 'Explain: Walk me through a project you owned end to end. (The project deep
  dive - how to actually do well at it.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 293
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:37-05:00'
sources: []
---

**Situation:** At my last company I was tasked with building an AI‑driven recommendation engine for a subscription video platform that had been seeing a 12% churn rate over the past year.

**Task:** My goal was to design, train, and deploy a model that could boost engagement by at least 8% while keeping latency under 200 ms per user request.

**Action:** I began by collecting clickstream logs (≈3 TB) and used Spark for feature engineering—creating session embeddings and content similarity scores. I chose LightGBM as the base learner due to its speed, then wrapped it in a stacking ensemble with a shallow neural net that captured non‑linear interactions. For deployment, I containerized the model with Docker, orchestrated via Kubernetes, and exposed it through an internal gRPC service. I set up A/B testing pipelines in Optimizely, monitored metrics with Prometheus, and used MLflow for experiment tracking.

**Result:** The new engine lifted average watch time by 9% and reduced churn to 9%, surpassing the target. Latency stayed below 180 ms, and production cost dropped 15% thanks to model compression. I learned that end‑to‑end ownership requires tight cross‑functional collaboration, rigorous monitoring, and a willingness to iterate on both data pipelines and model architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
