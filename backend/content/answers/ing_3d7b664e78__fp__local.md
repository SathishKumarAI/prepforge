---
qid: ing_3d7b664e78__fp__local
question: 'Explain: of event sourcing there''s two events going'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 396
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:07-05:00'
sources: []
---

**Event Sourcing in a nutshell**

At its core, event sourcing turns *state* into a *timeline*.  
Instead of persisting the current snapshot of an aggregate, we persist every
change that ever happened: an immutable log of **events**.  
Re‑hydrating the object is simply replaying those events in order.

Why two kinds?  
1. **Domain (business) events** – “OrderCreated”, “ItemShipped”.  
   These are the *causal* changes driven by user intent; they encode
   business invariants and drive downstream processes.  
2. **Infrastructure/system events** – “EventPersisted”, “SnapshotTaken”.  
   These are *mechanical* side‑effects that keep the system healthy (e.g.
   compaction, audit, monitoring). They don’t belong to the domain model but
   must still be recorded for consistency.

The split is not arbitrary: it mirrors the **separation of concerns** in
information theory. Domain events carry *semantic information*; infrastructure
events carry *metadata*. Mixing them would blur the signal‑to‑noise ratio,
making replay brittle and analytics noisy.

> **Non‑obvious insight:**  
> If you treat infrastructure events as domain events, you can use the same
> event log for *automated compliance audits*: every system action becomes a
> first‑class citizen in the audit trail without extra logging code. This
> duality turns the event store into both a source of truth and a
> forensic database—an elegant synergy that many implementations overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
