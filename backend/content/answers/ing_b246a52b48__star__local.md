---
qid: ing_b246a52b48__star__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 420
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:28:18-05:00'
sources: []
---

**Situation** – In my last role I was redesigning the event bus for a fintech platform that processed ~50k transactions per second. The existing broker dropped messages during network hiccups and had no replay capability, so audit logs were incomplete and fraud detection lagged.

**Task** – Build a durable Pub/Sub system that guarantees at‑least‑once delivery and allows consumers to replay events from any point in time without data loss or duplication, while keeping latency under 200 ms for real‑time alerts.

**Action** – I chose Apache Kafka as the backbone because of its log‑based persistence. Each topic was partitioned by customer ID to preserve ordering; we set a retention policy of 30 days and enabled `replica.fetch.max.bytes` to tune throughput. To support replay, consumers subscribe with an offset reset strategy (`earliest`) and maintain a “consumer group” that tracks committed offsets in ZooKeeper. I added idempotent write logic on the producer side using a deterministic message key (transaction ID + timestamp) so re‑publishing does not corrupt downstream state. For monitoring, I exposed Prometheus metrics: `kafka_consumer_lag`, `producer_throughput_bytes`, and set up alerting for lag > 5 min.

**Result** – After deployment, we saw a 99.999% message durability rate (only 3 lost out of 10⁸ messages over a month) and real‑time latency dropped to ~120 ms. The replay feature allowed the fraud team to reprocess the last week’s data in under an hour, uncovering $2.5 M in fraudulent activity that had previously slipped through. I learned how partitioning strategy, offset management, and idempotence together deliver both durability and replay without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
