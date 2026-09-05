---
qid: ing_e642efe573__star__local
question: 'Explain: Microsoft Design and Hard Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:28-05:00'
sources: []
---

**Situation** – In a recent FAANG interview I was asked to design an online recommendation system for a streaming platform that handles 10 million users and 5 billion content items, with a requirement to serve real‑time recommendations under 50 ms.

**Task** – My goal was to propose a scalable architecture that balances latency, freshness of data, and model accuracy while keeping cost reasonable. I needed to justify the choice of ML models, feature pipelines, and serving infrastructure.

**Action** – I started by outlining an end‑to‑end flow: raw clickstream → Kafka ingestion → Spark/Flume for batch feature aggregation (daily churn score, popularity), and a streaming layer with Flink for per‑user session features. For the model, I chose a two‑stage approach: first a LightGBM ranking model trained offline on historical interactions, then an online neural network that re‑weights top‑k candidates using real‑time context (device, time of day). To meet latency, I deployed the neural net as a TensorFlow Serving cluster behind a Redis cache of pre‑computed embeddings. Cost was kept in check by autoscaling the serving pods and using spot instances for batch jobs.

**Result** – The prototype achieved 0.68 NDCG@10 on our validation set, reduced recommendation latency to 35 ms on average, and cut infrastructure spend by 15% compared to a monolithic solution. I learned that marrying offline heavy‑weight models with lightweight online re‑ranking often yields the best trade‑off between performance and cost in large‑scale ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
