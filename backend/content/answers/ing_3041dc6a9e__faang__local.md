---
qid: ing_3041dc6a9e__faang__local
question: 'Explain: 5.1 Handling Failures and Retries — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 483
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:36:32-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *notification service* that reliably delivers messages (email/SMS/push) even when downstream components fail. Assume: • High throughput (≥10⁶ msgs/s). • At least 99.9% delivery. • Multiple notification channels, each with its own SLA and failure modes. What guarantees do we need—exact‑once? eventual? Also confirm persistence layer choice and monitoring expectations.

**Approach**  
1. **Decouple producers → queue (Kafka/RabbitMQ) for durability.**  
2. **Worker pool per channel** that pulls, formats, and sends messages via external APIs.  
3. **Idempotent deduplication store (Redis/DB)** keyed by message‑id to avoid duplicates on retries.  
4. **Retry policy:** exponential backoff + jitter; after N attempts mark “dead” → route to a dead‑letter queue for manual inspection.  
5. **Circuit breaker per external API** to stop hammering when an endpoint is down.  
6. **Metrics & alerting** (Prometheus/Grafana) on failure rates, latency, queue depth.

**Depth**  
- Queue guarantees *at least once*; deduplication ensures *exact‑once* semantics for end users.  
- Workers are stateless; state lives in the dedup store and message metadata.  
- Complexity: enqueue O(1); processing O(log N) for retry scheduling.  
- Trade‑offs: higher durability → more latency; dedup store adds a single point of failure but can be replicated.

**Edge Cases**  
- Sudden spike → backpressure on queue, trigger scaling of workers.  
- External API throttling → circuit breaker opens, fallback to alternate channel.  
- Corrupted message payload → validation step routes to dead‑letter queue immediately.

**Optimize & Communicate**  
Explain that we start with a simple Kafka + worker model for rapid iteration, then instrument metrics, add horizontal scaling, and finally implement multi‑region replication of the dedup store for disaster recovery. Emphasize how each component directly addresses failure scenarios and meets SLAs, showcasing structured problem solving and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
