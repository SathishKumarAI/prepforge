---
qid: ing_14a132e657__fp__local
question: 'Explain: Notification Service — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 506
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:10-05:00'
sources: []
---

**Why a notification system is needed**

Users expect *low‑latency, high‑throughput* alerts that survive failures and scale to billions of events.  
The fundamental problem: **deliver an event to many heterogeneous endpoints (push, email, SMS) with bounded latency, while guaranteeing at‑least‑once semantics and graceful degradation**.

---

### 1. Core abstraction – *Event → Delivery Pipeline*

```
[Producer] → [Topic/Partition] → [Worker Queue] → [Delivery Adapter] → [Endpoint]
```

* **Topic/partition**: sharded by user ID to preserve ordering per user; this is a direct consequence of the *information‑theoretic* need for determinism in causal streams.
* **Worker queue (Kafka/Redis)**: decouples producers from slow adapters, giving backpressure control.

### 2. Delivery guarantees

| Guarantee | Implementation |
|-----------|----------------|
| Exactly‑once per endpoint | Idempotent adapters + deduplication key (`event_id+endpoint`) stored in a compact **Bloom filter** (memory‑efficient). |
| Ordering per user | Partitioned by user → single worker per partition ensures FIFO. |
| Fault tolerance | Replicated queues, checkpointing offsets; workers are stateless so they can be hot‑swapped.

### 3. Adapter design

* Stateless microservice per channel (e.g., PushAdapter, EmailAdapter).  
* Each adapter implements **retry with exponential backoff + circuit breaker**—an instance of the *optimal control* problem: minimize cost of retries while keeping SLA.

### 4. Scaling strategy

1. **Horizontal scaling of workers** – autoscale based on queue depth (queue‑length threshold).  
2. **Hot‑spot partitioning** – hot users get dedicated partitions to avoid lock‑step bottlenecks.  

---

#### Non‑obvious insight
Most designs treat the notification system as a “fire‑and‑forget” pipeline, but the *deep principle* is that **latency and consistency are two sides of the same optimization problem**: moving work from producers to workers (increasing latency) lets adapters use heavier guarantees (consistency). Balancing this trade‑off via partitioned queues and per‑endpoint backpressure yields a system that is both fast and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
