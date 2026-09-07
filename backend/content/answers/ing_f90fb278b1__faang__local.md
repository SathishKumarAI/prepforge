---
qid: ing_f90fb278b1__faang__local
question: 'Explain: Recovery and Fault Tolerance — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 544
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:18:49-05:00'
sources: []
---

**Clarify**  
The interview asks how a database ensures *recovery* and *fault tolerance* using the ACID properties (Atomicity, Consistency, Isolation, Durability). We’ll assume we’re discussing relational DBMSs that log transactions and recover after crashes or power failures.

**Approach**  
1. Map each ACID property to its recovery mechanism.  
2. Explain how logs (redo/undo) are used during crash‑recovery.  
3. Touch on isolation levels’ impact on fault tolerance.  
4. Mention typical trade‑offs (performance vs safety).

**Depth**  

| Property | Recovery Mechanism |
|----------|--------------------|
| **Atomicity** | *Write‑ahead logging*: a transaction’s log records are flushed to disk before any data pages are written. On restart, incomplete transactions are undone using the log. |
| **Consistency** | Constraints (foreign keys, triggers) are enforced at commit time; if a crash occurs mid‑commit, consistency is restored by rolling back or replaying committed changes. |
| **Isolation** | Locking/serialization protocols prevent dirty reads. In case of deadlocks, one transaction is aborted and its log entries used to roll it back. |
| **Durability** | *Write‑through* or *fsync* guarantees that once a commit record appears in the log on stable storage, all subsequent recovery will replay those changes even after power loss. |

During **crash‑recovery**, the engine scans the log from the last checkpoint:  
1. **Redo pass** replays committed transactions (ensuring durability).  
2. **Undo pass** rolls back uncommitted ones (atomicity).  

This two‑phase recovery guarantees that the database is left in a consistent state.

**Edge Cases**  
- *Partial page writes*: Use checksums to detect corruption; replay logs until checksum matches.  
- *Simultaneous crashes of log and data disks*: Employ redundant logging or mirrored volumes.  
- *Long‑running transactions*: Periodic checkpoints reduce redo work but increase I/O overhead.

**Optimize & Communicate**  
To improve performance, many systems use **lazy recovery** (replay only when a transaction is needed) and **ARIES algorithm** for efficient log scanning. When explaining this to interviewers, emphasize that ACID isn’t just a theoretical promise—it’s enforced by the logging and checkpointing machinery that guarantees recovery even under catastrophic failures. This structured view showcases both conceptual understanding and practical system design knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
