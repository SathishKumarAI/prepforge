---
qid: ing_d0798ada5a__faang__local
question: 'Explain: Write-Ahead Logging (WAL) & Event Sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 581
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:45:26-05:00'
sources: []
---

**Clarify**  
We’re asked to explain two persistence patterns that guarantee durability and auditability in distributed systems: *Write‑Ahead Logging* (WAL) and *Event Sourcing*. I’ll assume the audience knows basic ACID concepts and is interested in how these patterns differ, when to use each, and their trade‑offs.

**Approach**  
1. Define each pattern succinctly.  
2. Contrast them on durability, read‑model flexibility, and operational complexity.  
3. Highlight typical use cases (transactional DB vs domain‑driven design).  
4. Note implementation nuances (snapshotting, compaction).

**Depth**

| | Write‑Ahead Logging | Event Sourcing |
|---|---|---|
| **Goal** | Ensure durability: all state changes are logged before mutating the live store. | Persist a *complete* audit trail of domain events; the current state is derived by replaying them. |
| **Mechanism** | Append‑only log written to stable storage (e.g., disk, SSD). The main database updates only after the log flush succeeds. | Domain entities emit immutable events (`UserCreated`, `OrderShipped`). Events are stored in an append‑only stream; aggregates rebuild by replaying events. |
| **Read Model** | Reads from the primary store; logs are a safety net for crash recovery, not a source of truth. | The event stream is the source of truth; read models (CQRS) are projections built from it. |
| **Durability** | Guarantees that no committed transaction is lost; log can be replayed to recover state. | Guarantees every state transition is captured; any state can be reconstructed by replaying up to a point. |
| **Complexity** | Low: just an extra file/partition; many RDBMS already implement it. | High: requires event schema evolution, idempotent handlers, and eventual consistency in projections. |

**Edge Cases**  
- WAL: log corruption or truncation leads to data loss unless backups exist.  
- Event Sourcing: large event streams can slow replay; need snapshots or compaction. Schema changes can break older events.

**Optimize & Communicate**  
In practice, I’d combine them: use WAL for the underlying storage engine and employ event sourcing for business logic where auditability and CQRS are valuable. When explaining to interviewers, emphasize that WAL is a *mechanism* for durability, while Event Sourcing is an *architecture* choice that changes how state is stored and consumed. Highlight trade‑offs: simplicity vs. power, performance vs. flexibility, and the importance of tooling (e.g., Kafka, EventStore) to manage event streams efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
