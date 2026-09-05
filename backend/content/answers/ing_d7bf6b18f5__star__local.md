---
qid: ing_d7bf6b18f5__star__local
question: 'Explain: The Outbox Pattern — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 310
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:40:21-05:00'
sources: []
---

**Situation** – At my previous fintech company we built a real‑time fraud detection engine that needed to ingest every transaction from the payment gateway within two seconds. The monolith’s database writes were blocking, and our Kafka cluster was overwhelmed by duplicate events, causing latency spikes during peak hours.

**Task** – I had to redesign the data ingestion layer so that every database change would be reliably captured and streamed to downstream services without compromising throughput or consistency.

**Action** – I introduced an outbox table in each microservice’s PostgreSQL instance. On every write, a transaction inserted the domain event into the outbox and committed atomically with the business record. A lightweight scheduler polled the outbox once per second, batched rows, serialized them to Avro, and produced them to Kafka using transactional producers (Kafka 2.8+). The consumer marked events as processed in a single‑row “processed_at” column, guaranteeing at‑least‑once delivery while preventing duplicates. I also added idempotent handlers downstream and monitored lag with Confluent Control Center.

**Result** – Latency dropped from an average of 4 s to under 700 ms; Kafka consumer lag stayed below 10 messages per partition during load peaks, improving SLA compliance by 35%. I learned that coupling CDC with the outbox pattern keeps ACID guarantees intact while enabling scalable event‑driven architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
