---
qid: ing_b80bbb8194__fp__local
question: 'Explain: Step 1: Notification Request Creation — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 324
total_tokens: 505
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:35-05:00'
sources: []
---

**Step 1 – Notification‑Request Creation (Designing the “Producer” side)**  

The fundamental problem is *“how do we turn an arbitrary event into a durable, eventually‑consistent message that can be consumed later by any number of services?”*  
We solve this by **decoupling event emission from delivery**: each producer writes a *notification request* to a write‑optimized store (e.g., Kafka topic or a database table).  

1. **Event → Canonical Payload** – The service that generates the event normalises it into a schema‑driven JSON (`{userId, type, payload, priority, ttl}`) so downstream consumers need not know the origin.  
2. **Durability & Ordering** – Writing to a log guarantees persistence and preserves causal order per user (partitioned by `userId`).  
3. **Back‑pressure & Flow Control** – By limiting write throughput (e.g., using token buckets or producer throttling) we prevent hot spots that would otherwise starve the consumer layer.  

This design follows *information‑theoretic* principles: we compress all necessary context into a single message, minimizing entropy for downstream services.  
A non‑obvious insight: **including `ttl` and `priority` in the request, not just metadata, lets the queue itself enforce expiration and fairness without extra coordination**—a subtle optimization that saves both latency and storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
