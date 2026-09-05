---
qid: ing_fa053c9cf9__star__local
question: 'Explain: Result context — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 380
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:30-05:00'
sources: []
---

**Situation** – At a fintech startup, our recommendation engine generated personalized offers in real time. The engine ran as a microservice that stored the offer payload in PostgreSQL and pushed it to an analytics Kafka topic for downstream consumption. During peak hours we hit a 30 % spike in latency, and occasional message losses occurred because DB writes sometimes committed while Kafka producers failed.

**Task** – I needed to guarantee exactly‑once delivery of offer events from the recommendation service to the analytics pipeline without sacrificing throughput or adding significant complexity.

**Action** – I introduced a transactional outbox table. Each database transaction that created an offer also inserted a row into `offer_outbox` with the event payload, a unique UUID, and a status flag. A lightweight Go worker, running in the same service process, polled the outbox for rows marked “pending”, serialized them to Avro, and produced them to Kafka within the same transaction. Once the message was successfully sent, the worker atomically updated the row’s status to “sent”. I also set up a retry mechanism with exponential back‑off and used Debezium to capture any missed outbox changes for idempotent replay.

**Result** – Delivery latency dropped from 250 ms to under 80 ms during load, and message loss fell below 0.001 %. The system now reliably processes over 15k events per second with a single transactional guarantee layer. I learned that coupling DB writes with an outbox table keeps consistency tight while still allowing asynchronous scaling of the consumer side.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
