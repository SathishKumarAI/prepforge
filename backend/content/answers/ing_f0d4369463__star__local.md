---
qid: ing_f0d4369463__star__local
question: 'Explain: Message — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:47-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time anomaly detection pipeline for IoT sensor data. The existing batch jobs were too slow; we needed to ingest millions of events per day and trigger alerts within seconds.

**Task** – Design a scalable, fault‑tolerant messaging layer that could decouple producers (edge devices) from multiple consumers (ML inference services, monitoring dashboards, and alerting microservices).

**Action** – I chose Google Cloud Pub/Sub as the backbone because of its low latency, at‑least‑once delivery, and built‑in scaling. I defined a topic hierarchy: `sensors/{device_type}` with message attributes for sensor type and region. Producers publish JSON payloads via the REST API, batching when possible to reduce overhead. Consumers subscribe using push subscriptions; each subscription is attached to a Cloud Run container that runs an inference model (TensorFlow Lite). To guarantee exactly‑once processing I implemented a de‑duplication layer in the consumer that stores message IDs in a Redis cache with a 24 h TTL. I also set up monitoring dashboards on Stackdriver, alerting when Pub/Sub backlog exceeds 10 % of the ingestion rate.

**Result** – The new architecture handled 5 M events/day with an average end‑to‑end latency of 450 ms, reducing alert delay from 15 min to under a second. Backlog was never more than 8 %, and we cut operational costs by 30 % through serverless scaling. I learned that careful topic design, attribute usage, and de‑duplication are key to reliable real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
