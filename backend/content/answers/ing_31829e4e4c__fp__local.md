---
qid: ing_31829e4e4c__fp__local
question: 'Explain: 5.3 Reliability — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 448
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:50:05-05:00'
sources: []
---

**Reliability in a Notification Service**

A notification system’s *fundamental* goal is to deliver messages to users **exactly once and eventually**, even when components fail or the network partitions.  
To formalize this, we model the service as a *distributed state machine* that accepts an event `E` (e.g., “user signed up”) and must produce an output event `O` (“send welcome email”). The key constraints are:

1. **Atomicity** – each input yields at most one output.  
2. **Durability** – once the output is acknowledged, it survives crashes.  
3. **Liveness** – every valid input eventually produces an output.

The *CAP* theorem tells us we can’t guarantee all three simultaneously in a partitioned network; we must choose between consistency and availability while ensuring eventual delivery. The solution is to separate **write‑through persistence** from **asynchronous processing**:

| Component | Role | Why it matters |
|-----------|------|----------------|
| **Transactional log (Kafka, Pulsar)** | Durable, ordered event store | Guarantees replayability after failure |
| **Worker pool with idempotent workers** | Processes events | Idempotence removes duplicate deliveries |
| **Dead‑letter queue** | Stores poison messages | Prevents a single bad record from blocking the stream |
| **Circuit breaker & back‑pressure** | Protects downstream services | Maintains availability under load |

The *non‑obvious insight* is that **idempotence should be baked into the data model, not just the worker logic**. By encoding a deterministic hash of `(user_id, event_type, timestamp)` as the message key and using it to de‑duplicate at every layer (log, consumer group, database), we eliminate race conditions that arise when workers are restarted or scaled horizontally—something many designs overlook. This guarantees “exactly once” delivery without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
