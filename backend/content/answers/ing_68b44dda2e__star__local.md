---
qid: ing_68b44dda2e__star__local
question: 'Explain: Event Notification — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 341
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an in‑house event notification service for a SaaS product that handled millions of user actions per day. The existing webhook approach caused latency spikes and missed events during traffic surges.

**Task** – Design a scalable, fault‑tolerant publish/subscribe system that guarantees at-least-once delivery, supports dynamic subscriber registration, and keeps end‑to‑end latency under 200 ms even at peak load.

**Action** – I chose Apache Kafka as the backbone for its partitioned log and strong ordering guarantees. Topics were sharded by tenant ID to isolate traffic; consumer groups handled per‑service subscriptions. To reduce message size, I used Avro schemas with a schema registry so every producer/consumer shared an evolving contract. For reliability I implemented idempotent event handlers and a dead‑letter queue for persistent failures. Metrics were exposed via Prometheus; we set up Kafka’s built‑in replication factor of 3 and enabled exactly‑once semantics in the producer API. We also added a lightweight REST gateway that allowed new services to subscribe on demand by creating consumer groups dynamically.

**Result** – The new system processed over 10 M events per minute with an average latency of 120 ms, dropping missed notifications from 12% to <0.1%. It reduced infrastructure costs by 30% through better resource utilization. I learned that choosing the right messaging backbone and exposing clear schemas are critical for building a resilient event‑driven architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
