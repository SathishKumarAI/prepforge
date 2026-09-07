---
qid: ing_6ed4c88bd7__faang__local
question: 'Explain: What a Transaction Looks Like — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:23-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how an *ACID* transaction works in the context of system design—i.e., what a single client request looks like from start to finish, and why each ACID property matters. I’ll assume we’re dealing with a relational DB (or any transactional store) behind a micro‑service that processes a user’s “transfer” operation.

**Approach**  
1. Outline the end‑to‑end flow: client → API gateway → service → transaction manager → storage.  
2. Map each ACID property to a concrete step in that flow.  
3. Highlight the underlying primitives (locks, write‑ahead logs, two‑phase commit).  

**Depth**  
- **Atomicity** – The service starts a *transaction context*; all writes are buffered until `COMMIT`. If any step fails, the transaction manager rolls back, discarding all intermediate changes.  
- **Consistency** – Before committing, the DB engine runs integrity constraints (FKs, checks). Only if they pass does it proceed.  
- **Isolation** – The service obtains a *serializable* lock on affected rows or uses MVCC snapshots so concurrent transfers don’t see half‑applied states.  
- **Durability** – On `COMMIT`, the transaction manager writes an entry to the write‑ahead log (WAL) and flushes it to disk (or replicated storage). Even a crash after this point guarantees recovery to the committed state via replay.

**Edge Cases**  
- Network partitions during commit → use two‑phase commit with a coordinator to avoid “half‑committed” states.  
- Long‑running transactions → lock escalation or optimistic concurrency control to reduce contention.  
- Power loss before WAL flush → crash‑recovery replays the log, restoring atomicity.

**Optimize & Communicate**  
I’d stress that ACID is a contract; real systems often trade isolation (e.g., snapshot isolation) for throughput but still preserve atomicity and durability. When explaining, I’d narrate the flow with a simple “transfer” example, showing how each property protects user data, which demonstrates both technical depth and clear communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
