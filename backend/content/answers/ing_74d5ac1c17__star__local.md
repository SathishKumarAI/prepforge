---
qid: ing_74d5ac1c17__star__local
question: 'Explain: Exactly once — Delivery Semantics'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 327
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:25-05:00'
sources: []
---

**Situation** – At my last role, we built a real‑time fraud detection system that ingested credit‑card transactions from a Kafka topic and pushed predictions to an external API for downstream processing. The upstream stream was highly reliable but the downstream service had a strict quota: each transaction could only be processed once, otherwise we’d get duplicate alerts and hit rate limits.

**Task** – I needed to guarantee exactly‑once delivery of prediction results while keeping latency under 200 ms per record, even during spikes or broker restarts.

**Action** – I implemented Kafka’s transactional producer with idempotence enabled. The pipeline used a stateful Flink job that keyed by transaction ID and stored a lightweight snapshot in RocksDB. When the job read a new event, it first checked the state store; if the ID was already marked “sent”, it dropped the record. Otherwise it wrote the prediction to Kafka within a single transaction, committed the key‑value pair to the state store, and flushed both atomically. The downstream API used an idempotent endpoint that returned 409 for duplicates, so we could safely retry without side effects.

**Result** – After deployment, duplicate alerts dropped from ~12 % during traffic bursts to <0.01 %. Latency stayed at 180 ms on average. I learned that combining Kafka’s transactional guarantees with local state tracking provides a robust exactly‑once pattern for ML inference pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
