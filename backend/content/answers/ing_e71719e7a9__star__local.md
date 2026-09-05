---
qid: ing_e71719e7a9__star__local
question: 'Explain: so everything was stored as events flowing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 351
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:29-05:00'
sources: []
---

**Situation:**  
At my last role I worked on a recommendation engine for an e‑commerce platform that had to scale from 50k to 500k active users within six months. The existing batch‑processed data pipeline was hitting latency bottlenecks and our model drifted because we were training on stale snapshots.

**Task:**  
I needed to redesign the feature store so it could ingest real‑time user interactions, keep features fresh, and still support offline training without breaking downstream inference services.

**Action:**  
I introduced an event‑driven architecture using Kafka for ingestion and a time‑series database (TimescaleDB) as the feature store. Each click, view, or purchase emitted a JSON event that was parsed by a lightweight microservice which updated rolling aggregates (e.g., 1‑hour click‑through rate) in TimescaleDB. I also built a scheduled Spark job to materialize nightly snapshots for batch training, ensuring both pipelines shared the same schema via Avro schemas. To avoid race conditions, I used optimistic locking on feature keys and added backpressure handling with Kafka’s consumer groups.

**Result:**  
The new system cut feature latency from 15 minutes to under 2 seconds, allowing us to retrain models every hour. Model accuracy improved by 12% (lift in conversion rate), and we reduced infrastructure cost by 18% due to more efficient data retention policies. I learned the value of coupling event sourcing with a time‑series store for ML workloads that require both real‑time freshness and batch consistency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
