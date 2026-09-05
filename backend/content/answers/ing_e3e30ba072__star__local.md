---
qid: ing_e3e30ba072__star__local
question: 'Explain: Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 355
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:04:16-05:00'
sources: []
---

**Situation** – At my previous company we were launching a real‑time fraud detection pipeline for credit card transactions. The volume was ~50k events per second, and our existing batch model lagged by minutes, so the business needed near‑instant alerts.  

**Task** – Build a scalable, fault‑tolerant messaging layer that could ingest millions of events daily, decouple producers from consumers, and guarantee at‑least‑once delivery without data loss or backpressure spikes.

**Action** – I chose Google Cloud Pub/Sub for its global availability and managed scaling. First, I defined two topics: *transaction-events* (raw) and *fraud-alerts* (processed). Producers (POS terminals) published to the raw topic using the REST publisher API with batching of 1000 records to reduce overhead. For consumers, I spun up a Kubernetes cluster running a Python microservice that subscribed via pull subscriptions; each message was wrapped in a Cloud Pub/Sub “ack” after successful processing. To avoid duplicate alerts, we idempotently stored event IDs in BigQuery before publishing to the *fraud-alerts* topic. We also implemented dead‑letter topics for messages that failed >5 times, triggering an alert to ops.  

**Result** – The system handled 80k events/s peak with <200 ms latency from publish to alert. False positives dropped by 18% thanks to real‑time scoring, and the architecture reduced infrastructure cost by 25% compared to our earlier on‑prem Kafka setup. I learned that careful topic partitioning, back‑pressure handling, and dead‑letter strategies are critical for a production Pub/Sub system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
