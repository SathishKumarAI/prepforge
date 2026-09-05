---
qid: ing_00c540fbb3__star__local
question: 'Explain: Idempotency in Messaging — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 302
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:30:05-05:00'
sources: []
---

**Situation** – In my last role I was building an order‑processing microservice that consumed Kafka events from the inventory system. A single “reserve‑stock” message could be retried by Kafka if no ACK was received, and our downstream services were starting to see duplicate reservations, which caused stock levels to go negative during peak load.

**Task** – I needed to guarantee that each reservation event would only affect inventory once, regardless of how many times it arrived, without adding a huge coordination layer or sacrificing latency.

**Action** – I added an idempotency key to every message (the order ID plus a version number) and stored the last processed key in Redis with a short TTL. On receipt, the service checked Redis; if the key existed it simply returned success. If not, it performed the reservation and wrote the key atomically. I used Redlock for distributed locking during the critical update to avoid race conditions between concurrent consumers.

**Result** – Duplicate reservations dropped from 12% of orders during a flash sale to <0.01%. Latency increased by only ~5 ms per request, and the system remained horizontally scalable. I learned that a lightweight cache‑based idempotency layer can solve retry problems without heavy consensus protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
