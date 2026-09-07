---
qid: ing_d6e2f16c8e__faang__local
question: 'Explain: Microservice Connector — How do we incorporate Event Sourcing
  into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 401
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:58:57-05:00'
sources: []
---

**Microservice Connector – Event‑Sourcing in a Distributed System**

| Step | What to say |
|------|-------------|
| **Clarify** | “We’re building a microservice that needs durability, auditability and eventual consistency.  How can we use event sourcing so each service owns its own immutable log?” I’d confirm assumptions: (1) services are loosely coupled via an async bus, (2) state changes are captured as events, (3) we need replay for recovery or new projections. |
| **Approach** | 1️⃣ Define a clear *Event* schema per domain aggregate. <br>2️⃣ Persist each event to a durable log (Kafka/Redis Streams). <br>3️⃣ Update read‑model projections asynchronously. <br>4️⃣ Use idempotent consumers so replays are safe. |
| **Depth** | • **Write path**: Service receives command → validates → emits event → writes to stream + updates own write‑side DB (CQRS). <br>• **Read path**: Projection services subscribe, build materialized views; queries hit the read store. <br>• **Recovery**: On crash, replay from last checkpoint. <br>Complexity: Write is O(1) append; read projection is O(events). |
| **Edge cases** | • Event schema evolution → versioning and migration pipelines.<br>• Ordering guarantees on multi‑partition streams – use single partition per aggregate or logical ordering keys.<br>• Competing writes → optimistic concurrency with event sequence numbers. |
| **Optimize & communicate** | • Batch events to reduce overhead; compress payloads.<br>• Snapshotting after N events to cut replay time.<br>Explain that this gives auditability, easy rollback, and decouples services while keeping eventual consistency. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
