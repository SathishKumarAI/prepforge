---
qid: ing_21667d46fd__faang__local
question: 'Explain: Horizontal Scalability — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 472
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:02:33-05:00'
sources: []
---

**Horizontal Scalability – Designing a Notification Service**

| Step | What to do |
|------|------------|
| **Clarify** | “Build a system that can send millions of notifications (push/email/SMS) per day while keeping latency < 200 ms and supporting 10× traffic growth.” Confirm: notification type, delivery guarantees (at‑least‑once vs. exactly‑once), SLA for offline users, compliance (GDPR). |
| **Approach** | 1️⃣ **Event ingestion** – API gateway → rate limiter → Kafka topic per channel. <br>2️⃣ **Worker pool** – microservices consume from Kafka, serialize payloads to a *notification queue* (e.g., Redis Streams) keyed by user ID. <br>3️⃣ **Delivery engines** – separate workers for push, email, SMS; each polls its queue, batches requests to external providers, and writes status to a NoSQL store (Cassandra). <br>4️⃣ **State & retry** – use a TTL‑based deduplication map; exponential backoff with max retries. <br>5️⃣ **Monitoring** – Prometheus metrics per channel + alerts for lag. |
| **Depth** | *Complexity*: Ingestion O(1) per message; processing O(k) where k = batch size. Horizontal scaling achieved by adding Kafka partitions, more workers, and sharding the queue by user hash. Consistency: eventual‑consistency is acceptable; we avoid distributed locks to keep throughput high. |
| **Edge Cases** | • Users with multiple devices → duplicate suppression via dedup map.<br>• Provider outages → circuit breaker + fallback to alternative channel.<br>• Burst traffic → auto‑scale workers based on queue depth. |
| **Optimize & Communicate** | • Use *Kafka Streams* for in‑stream transformations, reducing round‑trips.<br>• Cache user preferences in Redis to avoid DB hits per message.<br>Explain trade‑offs: strict exactly‑once delivery would need transactional messaging (higher latency), whereas at‑least‑once is simpler and scales better. Present this plan clearly, showing how each component horizontally scales while meeting SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
