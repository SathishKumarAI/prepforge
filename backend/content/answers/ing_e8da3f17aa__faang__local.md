---
qid: ing_e8da3f17aa__faang__local
question: 'Explain: Scheduler Service — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 470
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:51-05:00'
sources: []
---

**Clarify**  
We need a *Scheduler Service* that triggers notifications (email/SMS/push) at user‑defined times or on events. Assume high throughput (10⁶ ops/s), low latency (<200 ms per send), and durability across restarts. Confirm: delivery guarantees, retry policy, time zones, message format, and compliance (GDPR).

**Approach**  
1. **Event Ingestion** – REST/GRPC API → Kafka topic (`sched-events`).  
2. **Scheduling Engine** – microservice that consumes events, stores them in a distributed priority queue (e.g., Redis‑sorted set or RocksDB) keyed by trigger timestamp.  
3. **Worker Pool** – pulls due items every second, pushes to *Notification Queue* (Kafka).  
4. **Delivery Service** – subscribes to the notification topic, uses provider SDKs (SMTP, Twilio, FCM), retries with exponential back‑off.  
5. **Monitoring & Auditing** – expose metrics (latency, queue depth) and audit logs.

**Depth**  
- *Data model*: `{id, userId, type, payload, triggerAt, tz}`.  
- *Ordering*: Use a min‑heap per shard; time complexity O(log n).  
- *Fault tolerance*: Kafka gives at‑least‑once semantics; idempotent send logic prevents duplicates.  
- *Scalability*: Shard queue by hash(userId) → horizontal scaling of workers.

**Edge Cases**  
- Clock drift: store `triggerAt` in UTC, convert on delivery.  
- Missed events due to worker crash: periodic “catch‑up” scan of items where `triggerAt < now`.  
- Time‑zone changes: keep user tz at send time, not ingestion.

**Optimize & Communicate**  
We can reduce latency by using *in‑memory* timers for the most imminent 5 min window and fall back to queue for far‑future events. Explain trade‑offs: memory vs. throughput. Conclude with a diagram of components, highlighting that each layer is stateless except the queue, enabling easy scaling and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
