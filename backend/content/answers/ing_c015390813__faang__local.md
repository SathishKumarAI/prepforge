---
qid: ing_c015390813__faang__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 451
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:08:41-05:00'
sources: []
---

**Clarify**  
We need a system that captures every event (user actions, state changes) so it can be audited later and replayed via webhooks. Assumptions: events are high‑volume, need low latency, must survive failures, and the audit log must support queries by user/time.

**Approach**  
1. **Event ingestion layer** – lightweight HTTP API that pushes events to a Kafka topic (or Kinesis).  
2. **Persistent store** – a distributed append‑only log (Kafka/Kinesis) plus a relational DB (PostgreSQL or ClickHouse) for fast queries.  
3. **Replay service** – subscribes to the event stream, batches events, and forwards them to registered webhook URLs with retry/backoff.  
4. **Audit API** – reads from the DB, filters by user/time/metadata, supports pagination.

**Depth**  
* Ingestion: 10 k‑req/s → Kafka partitioned by `user_id` ensures order per user.  
* Persistence: Kafka gives durability; the DB indexes on `(user_id, timestamp)` for O(log n) lookups.  
* Replay: Each webhook is a durable queue (e.g., RabbitMQ); the replay worker pulls events, POSTs with idempotency keys and exponential backoff.  
* Complexity: Ingestion O(1), audit query O(log n + k).  
* Trade‑offs: Kafka → eventual consistency for audit; DB → higher latency but faster queries.

**Edge Cases**  
* Duplicate events → use deduplication key (event_id) in Kafka.  
* Out‑of‑order delivery → sort by timestamp before replay.  
* Down‑stream failures → circuit breaker and dead‑letter queue.

**Optimize & Communicate**  
Future improvements: switch to a columnar store for analytics, add CDN caching for static audit views, implement per‑webhook throttling. I’d explain each layer’s responsibility, show how Kafka guarantees order and durability, and quantify latency/throughput trade‑offs to demonstrate deep understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
