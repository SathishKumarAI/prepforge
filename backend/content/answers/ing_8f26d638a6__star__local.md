---
qid: ing_8f26d638a6__star__local
question: 'Explain: Changing Events Safely — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:24-05:00'
sources: []
---

**Situation** – While leading a recommendation engine team at a streaming service, we noticed that our real‑time clickstream pipeline was dropping or misordering events during peak traffic (8 pm–10 pm), which caused stale model updates and a 3% drop in click‑through rate.

**Task** – Design a Pub/Sub architecture that guarantees exactly‑once delivery of “user action” events, preserves order per user, and scales to 5 M events/second without impacting latency (<50 ms).

**Action** – I introduced a partitioned Kafka cluster with topic keys set to the user ID. To prevent duplicates we added a de‑duplication layer using Redis Streams as an idempotence cache keyed by event UUIDs. For ordering, each consumer group processed only its assigned partitions sequentially and used a per‑user lock in Zookeeper to serialize writes to the model update store (Elasticsearch). I also implemented backpressure via Kafka’s “max.poll.records” tuning and autoscaling of consumers based on CPU/latency metrics. Finally, we added a monitoring dashboard with Prometheus alerts for message lag >200 ms.

**Result** – After deployment, event loss fell below 0.01%, order violations dropped to zero, and model freshness improved by 12% in A/B tests. The system now supports 6 M events/second with <30 ms latency, and I learned that combining partitioned Kafka, idempotence caching, and per‑key sequencing is key for safe event handling in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
