---
qid: ing_9efec062d7__star__local
question: 'Explain: Common Queue Patterns — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:50:12-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we had to process real‑time transaction alerts across millions of users. The existing polling API caused latency spikes and duplicated work during peak hours.

**Task:** I was tasked with designing a resilient event pipeline that could handle 1 M events per minute, guarantee at‑least‑once delivery, and allow independent scaling of consumers without data loss or bottlenecks.

**Action:** I introduced a publish/subscribe pattern using Apache Kafka. Producers published to topic “tx‑alerts” with partitioning by user ID to preserve ordering. Consumers ran as stateless microservices behind a Kubernetes deployment, each reading from its own consumer group for horizontal scaling. To guard against transient failures, I added a dead‑letter queue (DLQ) that captured messages failing three retries. For idempotency, consumers logged processed event IDs in Redis with TTL to prevent duplicate handling. I also implemented exponential backoff and jitter on re‑tries to avoid thundering herd problems.

**Result:** The new pipeline reduced alert latency from 4 s to under 200 ms during peak load, increased throughput by 250%, and eliminated data duplication incidents. I learned that choosing the right queue pattern (pub/sub vs point‑to‑point) combined with proper partitioning and DLQ handling is critical for high‑scale, fault‑tolerant systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
