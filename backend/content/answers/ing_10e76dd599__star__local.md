---
qid: ing_10e76dd599__star__local
question: 'Explain: Push vs Pull Delivery — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 315
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:18-05:00'
sources: []
---

**Situation** – While leading the migration of our real‑time fraud detection pipeline from a batch ETL to an event‑driven architecture, I noticed that our downstream analytics service was lagging behind by minutes, causing stale alerts for compliance teams.

**Task** – Design a Pub/Sub mechanism that guarantees low latency and high throughput while keeping resource usage predictable for the analytics microservice.

**Action** – I evaluated push versus pull models. For push, we’d need to maintain persistent TCP streams from the broker (Kafka) to every consumer, which would inflate connection overhead on the analytics nodes and complicate back‑pressure handling. Instead, I opted for a pull model using Kafka’s consumer group with *max.poll.records=200* and *fetch.min.bytes=1MB*. I implemented an exponential back‑off retry on deserialization failures and leveraged a lightweight in‑memory queue to batch messages before processing. This allowed the consumer to control its own flow rate, preventing memory blow‑outs during traffic spikes.

**Result** – Latency dropped from 4 minutes to under 300 ms average, throughput hit 15k events/sec, and CPU usage stayed below 40% even at peak load. I learned that pull delivery gives finer back‑pressure control in high‑velocity systems, while push can be simpler for low‑volume use cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
