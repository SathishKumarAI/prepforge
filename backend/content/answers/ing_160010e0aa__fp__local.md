---
qid: ing_160010e0aa__fp__local
question: 'Explain: CDC (Change Data Capture) — How do we incorporate Event Sourcing
  into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 331
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:52:08-05:00'
sources: []
---

**Change Data Capture (CDC)** is a pattern that streams every mutation from a source database—insert, update, delete—as an immutable *event*. In effect it turns the relational log into a canonical event store.  

To embed **Event Sourcing** we treat each CDC‑produced row as a domain event and persist it in an append‑only stream. The key insight is that the *source of truth* becomes the sequence of events, not the current table state. Every read model (projection) rebuilds itself by replaying those events; any new projection can be added without touching the original schema.

Why this works:  
1. **Idempotence** – CDC guarantees a unique, monotonically increasing event ID (e.g., log position). Re‑processing an event never corrupts state.  
2. **Temporal consistency** – Because each event carries its timestamp and sequence number, we can reconstruct the exact database snapshot at any point, satisfying *time‑travel* queries.  
3. **Decoupling** – The event stream is independent of the underlying RDBMS; services consume it via a message broker, achieving eventual consistency.

A non‑obvious advantage: by treating CDC events as first‑class domain objects, we automatically gain auditability and replayability for *business* logic (e.g., fraud detection), not just data replication. This blurs the line between ETL and application state management, turning every database change into a triggerable, versioned business event.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
