---
qid: ing_26f3840519__fp__local
question: 'Explain: Index lifecycle state machine — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 476
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:27:41-05:00'
sources: []
---

**Why an index needs a life‑cycle state machine**

In a distributed system that serves billions of rows per second, an *index* is not a static data structure; it is a live object that evolves: it is created, queried, updated, and eventually dropped or replaced.  
If each phase were handled by ad‑hoc code, the system would have to reconcile hundreds of consistency invariants (schema, replica state, GC, fault tolerance) at every operation, leading to *write amplification* and brittle recovery.

A *state machine* formalises these phases as a finite set of well‑defined states:

| State | What it guarantees |
|-------|--------------------|
| **Draft** | Index exists locally; not yet replicated. |
| **Publishing** | Metadata propagated; replicas acknowledge. |
| **Active** | Queries can hit any replica; updates are applied via CDC. |
| **Decommissioning** | Replica evicts data; no new writes accepted. |
| **Deleted** | All replicas have purged the index; space reclaimed. |

Transitions are triggered by *events* (e.g., a replication heartbeat, a delete request). Because each transition is deterministic and idempotent, any node can recover its correct state from logs alone.

**How LedgerStore leverages this**

1. **Log‑driven persistence** – Every transition writes an immutable record to the ledger; replaying yields the exact index state without extra coordination.
2. **Eventual consistency by design** – The *Publishing* phase only requires a quorum of replicas to acknowledge, so the system can tolerate failures while still guaranteeing that once a state is observed, it will be seen everywhere eventually.
3. **Space reclamation** – In *Decommissioning*, the ledger records the exact range of data to drop; garbage‑collection workers delete only those shards, avoiding costly scans.

**Non‑obvious insight**

Because each index transition is an atomic event in the ledger, *the cost of adding a new index does not grow with the number of existing indexes*. LedgerStore can append a few bytes per new index regardless of trillions of other indices, keeping write amplification constant and enabling Uber to maintain a vast catalog without sacrificing latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
