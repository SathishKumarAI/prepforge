---
qid: ing_e2c6866997__star__local
question: 'Explain: LinkedIn — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 386
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:02:08-05:00'
sources: []
---

**Situation** – In my last role as a data scientist at a fintech startup, we were preparing for a large scale product launch that required real‑time fraud detection. The leadership team asked me to build an ML model that could flag suspicious transactions with 99 % precision while keeping latency below 50 ms, because our API had to serve millions of requests per day.

**Task** – I needed to design a lightweight yet accurate pipeline: collect and preprocess streaming data, train a model on historical fraud labels, deploy it as a microservice, and continuously monitor drift.

**Action** – I chose XGBoost for its speed and interpretability. I engineered features (transaction amount, time of day, device fingerprint) and used SHAP values to understand importance. For deployment, I containerized the scorer with Docker, orchestrated it via Kubernetes, and exposed a gRPC endpoint that served predictions in under 30 ms. To handle drift, I set up an automated retraining loop every 12 hours using a sliding window of the latest 10 % of data, and integrated Prometheus alerts for any drop in AUC below 0.92.

**Result** – The model achieved 99.2 % precision and 98.5 % recall on production traffic, reducing fraud losses by $1.8 M annually. Latency stayed well under the 50 ms target. I learned that balancing feature richness with inference speed is key in high‑volume ML systems, and that automated retraining pipelines are essential for maintaining performance over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
