---
qid: ing_86ef871a3f__star__local
question: 'Explain: At-least once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 285
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:21-05:00'
sources: []
---

**Situation**  
At a fintech startup I was responsible for the real‑time fraud detection pipeline that processed about 12 k transactions per minute. The previous batch system missed up to 2 % of fraudulent events because it only guaranteed at‑most‑once delivery.

**Task**  
I needed to redesign the ingestion layer so that every transaction was processed **at least once**, without duplicating alerts, and keep latency below 200 ms for compliance reasons.

**Action**  
I chose Apache Kafka as a durable log and used its consumer group semantics. Each partition’s offset was committed only after the ML model had produced a verdict and persisted it to our PostgreSQL database. To guard against processing duplicates I added an idempotency key (transaction ID) in the database and performed a “SELECT … FOR UPDATE” before inserting. For fault tolerance, I enabled Kafka’s exactly‑once semantics by using transactional producers for the downstream alert service.

**Result**  
The new pipeline delivered every transaction at least once; fraud detection latency dropped from 350 ms to 180 ms. Duplicate alerts fell below 0.01 %. We also cut operational overhead because the system automatically recovered from consumer restarts without re‑processing stale data, teaching me how to balance reliability with speed in streaming ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
