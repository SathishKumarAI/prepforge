---
qid: ing_ffcd9d8894__fp__local
question: 'Explain: Transaction T'''': — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 440
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:03:36-05:00'
sources: []
---

**Why a “transaction” must obey ACID**

A database is a *state machine* that accepts a stream of updates and must remain in a legal state at all times (e.g., referential integrity).  
When concurrent clients issue writes, the system faces two competing goals:

1. **Consistency:** every write sequence must leave the database in one of its valid states.
2. **Concurrency‑control:** multiple users should be able to act simultaneously without stepping on each other.

From these constraints we can derive the four properties that a transaction *must* satisfy.

| Property | Derivation |
|----------|------------|
| **Atomicity** | If a sequence of operations is split, either *all* succeed or none do; otherwise the database could be partially updated and violate consistency. This is enforced by a *commit/rollback* log. |
| **Consistency** | The transaction’s pre‑condition (the current state) and post‑condition (the desired state) must both belong to the invariant set of legal states. Without this, we would corrupt the data model. |
| **Isolation** | Two concurrent transactions cannot interfere: each should appear as if it ran alone. This follows from the principle that a *serial* execution is always safe; any interleaving must not introduce new states outside the serializable order. |
| **Durability** | Once a transaction commits, its effects survive crashes. The only way to guarantee this without sacrificing consistency is to persist changes to non‑volatile storage before acknowledging commit. |

These four axioms together form the *ACID* contract.  
A subtle point many overlook: **Isolation is not “no overlap” but “serializability.”** Even if two transactions touch disjoint data, they can still interfere via triggers or cascading constraints; hence the system must enforce a serializable schedule to preserve consistency. This insight bridges ACID with the deeper theory of *concurrency control* and *optimistic/ pessimistic locking*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
