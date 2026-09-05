---
qid: ing_498f59d2ec__star__local
question: 'Explain: Common Patterns — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 319
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:40-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time recommendation engine for a video streaming platform that served 2 M active users daily. The existing monolith had latency issues; we needed to decouple data ingestion from model inference.

**Task** – Design an event‑driven pipeline that could ingest user interaction events, train models incrementally, and push predictions back into the recommendation service with sub‑second latency while keeping costs under $50k/month.

**Action** – I chose a Pub/Sub architecture using Google Cloud Pub/Sub. User clicks were published to a “user‑events” topic; a data‑flow job subscribed to this stream, enriched events with user profile metadata, and wrote them to BigQuery for batch training. A separate lightweight model served via Vertex AI Prediction was exposed as a gRPC service. Predictions were pushed back into another Pub/Sub topic (“recommendations”) consumed by the recommendation microservice over Kafka Streams. I implemented dead‑letter queues and exponential back‑off retries to handle transient failures, and used Cloud Monitoring dashboards for SLA tracking.

**Result** – The new pipeline reduced end‑to‑end latency from 1.2 s to 250 ms, increased recommendation click‑through rate by 18%, and cut operational costs by 25%. I learned how Pub/Sub can elegantly separate concerns in ML workflows while maintaining real‑time responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
