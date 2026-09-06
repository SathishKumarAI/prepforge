---
qid: ing_d7dfda3cc1__fp__local
question: 'Explain: Push Notification Processor — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 484
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:39:25-05:00'
sources: []
---

**Push‑Notification Processor – From “I need a bell” to “I need an event‑driven, cost‑efficient, fault‑tolerant system”**

At its core the problem is *matching a user’s intent (send me a message) with her device state (online/offline, battery low, etc.)* while keeping latency < 100 ms for high‑volume traffic.  
1. **Event source → queue** – Every “send notification” request is an event. A *partitioned, ordered log* (Kafka or Pulsar) guarantees at‑least‑once delivery and horizontal scaling; partitions are keyed by user ID to preserve per‑user ordering.  
2. **Worker pool → rate‑limit & batching** – Workers pull batches from the queue, apply a *token bucket* per device type to respect provider quotas, and coalesce payloads for devices that poll periodically (e.g., Android FCM “topic” push). This reduces API calls by 70 % compared with naïve one‑by‑one.  
3. **Device registry → stateful routing** – A low‑latency KV store (DynamoDB, Redis) holds the latest device token and metadata (OS, app version, last online time). Workers consult it to decide whether to push immediately or enqueue for later delivery (FCM “delivery receipt” semantics).  
4. **Retry & dead‑letter** – Exponential back‑off with a bounded retry window (e.g., 24 h) ensures eventual consistency; undeliverable messages go to a DLQ for manual inspection, preventing silent failures.  
5. **Observability → feedback loop** – Metrics (delivery rate, latency, error codes) feed into a *reinforcement‑learning* policy that tunes per‑device retry windows and batch sizes in real time.

**Non‑obvious insight:** Treat the notification service as a *constrained stochastic control problem*. The system’s cost is not just API calls but also user experience (latency). By modeling delivery probability as a function of retry interval, you can solve for the *optimal policy* that maximizes expected successful deliveries under budget constraints—something most designs overlook in favor of brute‑force scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
