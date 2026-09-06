---
qid: ing_df912f6104__fp__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 372
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:55:20-05:00'
sources: []
---

**Durability – the “last” pillar of ACID**

When a transaction commits, its changes must survive *any* subsequent failure: power loss, crash, network split, or even a faulty disk.  
Why? Because a database is a **state machine** that models real‑world facts. If a committed change can be lost, the system no longer reflects reality; users would see inconsistent data and the entire trust in the DBMS collapses.

From first principles:

1. **State persistence**: A transaction’s new state must be written to *stable storage* before the commit is acknowledged.  
2. **Atomic write‑ahead logging (WAL)**: The log records every change before it touches data pages. On recovery, replaying the log restores the committed state even if the data files were corrupted.  
3. **Write ordering guarantees**: Using `fsync`/`fdatasync` or equivalent primitives ensures that once a commit record is flushed to disk, all preceding log records are physically persisted.

Thus durability is not an ad‑hoc feature; it’s the consequence of enforcing *write‑ahead* plus *ordering*.  
A non‑obvious insight: **Durability can be achieved without duplicating data**. Many systems (e.g., PostgreSQL) rely solely on a single WAL stream and do not maintain redundant copies of every page. The log itself is the durable snapshot, so as long as the log survives, the committed state does too.

In short, durability guarantees that *once* the system says “commit succeeded,” the data will always be retrievable—no matter what catastrophic event follows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
