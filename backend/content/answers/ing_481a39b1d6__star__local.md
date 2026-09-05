---
qid: ing_481a39b1d6__star__local
question: 'Explain: Duplicate Processing — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 363
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:36-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the order‑processing pipeline for a high‑traffic e‑commerce platform that had just migrated from a monolith to a microservice architecture. The new system used Kafka as the backbone, but we were seeing a 12 % spike in duplicate orders being created during peak sales events because messages were sometimes replayed after consumer failures.

**Task** – I needed to eliminate those duplicates while keeping latency below 200 ms and ensuring at‑least‑once delivery semantics for critical downstream services like billing and inventory.

**Action** – I introduced a de‑duplication layer using a Redis sorted set keyed by the message ID, coupled with a time‑to‑live of 24 h. Each consumer first checked Redis; if the key existed it skipped processing. To avoid a single point of failure I ran Redis in a clustered mode and added an idempotent persistence flag on the order service so that reprocessing a message would be harmless. I also tweaked Kafka’s `max.poll.interval.ms` to give consumers more time during spikes, and implemented a retry back‑off strategy to reduce replays.

**Result** – Duplicate orders dropped from 12 % to <0.1 %. End‑to‑end latency stayed at ~180 ms under load, and the system now scales to 10k messages per second with confidence that each order is processed only once. I learned that a lightweight, distributed cache combined with idempotent service design can turn a fragile queue into a robust backbone for real‑time commerce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
