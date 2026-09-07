---
qid: ing_2a6da04f64__faang__local
question: 'Explain: Retry capabilities — Saga, CDC with Transactional Inbox/Outbox
  - DEV Community'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 487
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:48-05:00'
sources: []
---

**Clarify**  
The interview asks how to guarantee that a machine‑learning pipeline (model training → inference → feedback loop) reliably processes events even when services fail or the database is temporarily unreachable.  
We’ll assume:  
- A distributed micro‑service architecture.  
- Events are persisted in a relational store.  
- We need idempotent processing and eventual consistency.

**Approach**  
1. **Saga** for long‑running transactions across services.  
2. **CDC (Change Data Capture)** coupled with a *Transactional Inbox/Outbox* pattern to surface database changes as events safely.

**Depth**

| Pattern | How it works | Retry logic |
|---------|--------------|-------------|
| **Saga** | Each step emits an event; compensating actions are defined for failures. A saga coordinator tracks progress and triggers retries or rollbacks. | On failure, the coordinator reschedules the failed step (e.g., with exponential back‑off) until success or a max‑retry threshold is hit. |
| **CDC + Inbox/Outbox** | The outbox table records domain events in the same transaction as state changes. A CDC tool streams these rows to a message broker. Consumers read from an *inbox* table, marking rows as processed. | If consumption fails, the row remains unprocessed; consumers retry reading it until acknowledged. This guarantees at‑least‑once delivery without duplicating business logic. |

**Edge Cases**  
- Duplicate events: both patterns rely on idempotent handlers or unique keys in the inbox/outbox.  
- Service crash mid‑retry: saga coordinator survives (e.g., stored state) and resumes.  
- CDC lag: monitor lag metrics; backpressure or buffering may be needed.

**Optimize & Communicate**  
- Use a lightweight saga orchestrator (state machine) to reduce coordination overhead.  
- Leverage database triggers for outbox inserts to avoid extra code paths.  
- Expose retry counts and failure reasons via dashboards so the team can tune thresholds.  

This design ensures that ML pipeline stages are retried reliably, maintaining data integrity while keeping latency acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
