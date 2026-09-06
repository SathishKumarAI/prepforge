---
qid: ing_c015390813__think__local
question: 'Explain: Store Events for Audit and Replay — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 460
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:38:22-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - What “audit” means (immutable log, compliance, traceability).  
   - “Replay” expectations (exact state restoration, idempotency).  
   - Webhook constraints: fire‑and‑forget vs guaranteed delivery.  
   - System scale (events per second), retention period, and latency targets.

**2️⃣ Adopt a design framework**  
   - **Event sourcing + CQRS**: store every domain event once; query side rebuilds state on replay.  
   - **Durable messaging layer** (Kafka/Redis Streams) for ordering & retries.  
   - **Webhook dispatcher service** that reads from the stream and pushes to external URLs.

**3️⃣ Reason step‑by‑step**  
   1. Capture domain event → write to a partitioned, append‑only log.  
   2. Persist metadata (timestamp, source, version).  
   3. Webhook consumer subscribes to the stream, transforms payload, and sends HTTP POST.  
   4. On failure, retry with exponential backoff; after max attempts, route to dead‑letter queue.  
   5. For replay, a separate worker reads the log sequentially, applies events to rebuild read models or trigger side‑effects.

**4️⃣ Avoid common traps**  
   - *Duplicate events*: use idempotent keys and deduplication logic.  
   - *Ordering violations*: enforce partitioning per aggregate or use global ordering only when necessary.  
   - *Webhook “fire‑and‐forget” pitfalls*: don’t assume success; implement acknowledgment flow.  
   - *Scalability hiccups*: avoid single‑point bottlenecks in the dispatcher.

**5️⃣ Sanity‑check & communicate**  
   - Verify that replay restores state exactly (use checksums).  
   - Ensure webhook retries respect rate limits of external services.  
   - Present a diagram: Event Store ↔︎ Stream ↔︎ Webhook Dispatcher ↔︎ External System, highlighting durability and idempotency at each hop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
