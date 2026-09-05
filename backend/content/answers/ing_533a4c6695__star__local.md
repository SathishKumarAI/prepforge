---
qid: ing_533a4c6695__star__local
question: 'Explain: Topic — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 361
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:36-05:00'
sources: []
---

**Situation** – In my last role I was tasked with scaling the real‑time feature ingestion pipeline for a recommendation engine that served millions of users daily. The existing batch ETL model couldn’t keep up with the 5 k events per second churn from user interactions, and latency hit our SLA at peak hours.

**Task** – Design an event‑driven architecture that could reliably ingest, buffer, and forward high‑velocity telemetry to downstream ML models while ensuring fault tolerance and minimal data loss.

**Action** – I chose Google Cloud Pub/Sub as the backbone: producers (mobile SDKs) publish “click” and “view” events to a topic; a set of subscriber workers in Kubernetes pull messages via Pull mode, apply schema validation with Avro, and push them into Kafka for downstream stream processors. To guarantee at‑least‑once delivery I configured dead‑letter topics and message retention of 7 days. I also implemented exponential backoff retries and used Cloud Monitoring dashboards to track message backlog and latency, tuning the subscription flow control to keep the queue under 2 k messages.

**Result** – The new pipeline handled 12 k events/sec peak while keeping average end‑to‑end latency below 200 ms. We reduced feature lag from 15 min to <1 s, boosting recommendation accuracy by 3.5 % and cutting operational incidents by 40 %. I learned that choosing the right messaging pattern (pub/sub + dead‑letter) and monitoring is critical for real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
