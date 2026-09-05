---
qid: ing_b9311d8583__star__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 313
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:41:34-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the order‑processing pipeline for a fintech startup that had been struggling with stale state data and audit failures. The existing monolith stored the latest order snapshot in a relational DB, but our compliance team needed an immutable event log to trace every change.

**Task** – Build a scalable, fault‑tolerant system that captures every state transition as an event, publishes them to downstream services (fraud detection, analytics), and guarantees exactly‑once delivery while still allowing quick reads for the UI.

**Action** – I chose Kafka as the backbone: each order update writes a JSON event to a dedicated topic. A lightweight microservice consumes these events, updates a read‑model in Redis for low‑latency queries, and forwards a filtered subset to a Pub/Sub system (Google Cloud Pub/Sub) that triggers real‑time fraud checks. I implemented idempotent consumers using Kafka’s commit offsets and added a deduplication layer in the event processor to handle retries without duplicate side effects. For persistence, I stored raw events in an S3 bucket with immutable versioning for audit purposes.

**Result** – The new design cut order processing latency from 1.2 s to 350 ms, increased throughput by 4×, and eliminated compliance incidents. I learned the value of separating write and read models and how event sourcing can simplify both auditing and real‑time analytics in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
