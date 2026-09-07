---
qid: ing_c8258c7ce8__faang__local
question: 'Explain: Requirements Gathering — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 635
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:42-05:00'
sources: []
---

**Clarify**  
We’re building a *notification service* that pushes alerts (email, SMS, push) to users in real time. The key requirements are:  
1. **High availability & low latency** – messages must be delivered within milliseconds of generation.  
2. **Scalability** – millions of events per second, bursty traffic during outages or promotions.  
3. **Reliability** – no message loss; at least once delivery with deduplication.  
4. **Configurability** – users can subscribe/unsubscribe to channels and set preferences (time windows, do‑not‑disturb).  
5. **Observability** – metrics on success/failure rates, latency per channel, retry counts.

*Assumptions to confirm*: are we limited to a single data center? Do we need GDPR compliance for email addresses? Is there an SLA for 99.999% uptime?

---

**Approach**  
1. **Event ingestion layer** – a lightweight API that accepts notification payloads and pushes them into a distributed queue (Kafka or Kinesis).  
2. **Routing & enrichment service** – consumes from the queue, joins with user preferences stored in a fast key‑value store (Redis) to decide channels.  
3. **Delivery workers** – horizontally scalable microservices per channel that batch send messages via third‑party APIs (SendGrid, Twilio).  
4. **Retry & dead‑letter handling** – exponential backoff and DLQ for persistent failures.  
5. **Monitoring** – Prometheus metrics + Grafana dashboards; alerting on latency or failure spikes.

---

**Depth**  
- *Data model*: User → Preferences (channel, schedule) stored in Redis with TTL to keep hot data in memory.  
- *Queue partitioning*: Use user ID as key to preserve order per user while allowing parallelism.  
- *Throughput*: Kafka can handle >10k partitions; each worker processes ~1k msgs/s, scaling by adding pods.  
- *Latency*: End‑to‑end < 200 ms achievable with in‑memory routing and async HTTP calls to providers.

---

**Edge Cases**  
- **Burst traffic**: backpressure from the queue (Kafka’s `max.in.flight.requests.per.connection`) and dynamic worker spin‑up.  
- **Provider outages**: failover to alternate SMTP/Twilio accounts; circuit breaker pattern.  
- **Duplicate events**: idempotent message IDs stored in a Bloom filter before sending.

---

**Optimize & Communicate**  
I’d suggest adding *deduplication at the queue level* (Kafka’s `exactly_once` semantics) and *batching per channel* to reduce API calls. I would present this architecture diagram, walk through a sample notification flow, and discuss trade‑offs: e.g., Redis for speed vs. consistency; Kafka for durability vs. operational overhead. This demonstrates structured thinking, depth, and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
