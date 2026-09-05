---
qid: ing_d01c2f1154__star__local
question: 'Explain: Where to start — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 313
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:25:29-05:00'
sources: []
---

**Situation** – In early 2023 I joined a fintech startup that was launching a real‑time fraud detection service. Their existing monolith processed transaction logs every batch, causing a lag of 8–10 minutes and missing many high‑risk events.

**Task** – My goal was to design an event‑driven pipeline that could ingest transactions in milliseconds, trigger ML inference instantly, and feed results back into the risk engine without disrupting the live system.

**Action** – I began by mapping the data flow: each transaction emitted a Kafka event; a lightweight Lambda function parsed it and pushed features into a Redis cache. A scheduled Spark job pulled batches for feature engineering, updated the XGBoost model in S3, and published new weights to an ECS‑based inference service. I used Prometheus/Alertmanager to monitor latency and set a 100 ms SLA for end‑to‑end processing. To handle scale, I introduced schema registry and Avro serialization, ensuring backward compatibility as fields evolved.

**Result** – The new architecture cut processing time from 10 minutes to under 150 milliseconds per transaction, raising fraud detection accuracy by 12% over the previous model. I learned that starting with a clear event source, coupled with stateless compute for inference and proper observability, is key to scaling ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
