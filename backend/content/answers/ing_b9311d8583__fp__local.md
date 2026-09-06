---
qid: ing_b9311d8583__fp__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 358
total_tokens: 529
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:39-05:00'
sources: []
---

**Event‑Sourcing + Pub/Sub: a principled view**

The core problem is *state consistency* under concurrent updates.  
If every write mutates a single “current” table, readers may see partial
updates and rollbacks become expensive.  Instead of storing the state,
store **every change as an immutable event** `E = (type, payload, ts)`.  
The system’s state is the *replay* of all events in order – a deterministic
derivation from first principles: if two observers replay the same log they
must converge to the same view.  This guarantees eventual consistency without
locks.

Now consider scaling writes and reads.  A **publish/subscribe** layer decouples
producers (generators of `E`) from consumers (read‑model builders, UI, audit).  
The broker merely stores the immutable stream; any subscriber can start at
any offset.  This satisfies *causal ordering*—a deeper principle in
distributed systems: operations that are causally related must be seen in
the same order by all observers.

**Non‑obvious insight:**  
Because events are immutable, a subscriber can **rewind** to any point and
rebuild its local projection.  This makes *time travel debugging* trivial:
just replay up to the desired timestamp.  Most designs treat logs as “write‑once”
but ignore their ability to serve as a complete undo history; event sourcing
leverages this property for both consistency and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
