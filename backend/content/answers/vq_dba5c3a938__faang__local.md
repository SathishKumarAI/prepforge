---
qid: vq_dba5c3a938__faang__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 439
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:12-05:00'
sources: []
---

**Clarify**  
A *transaction* in a database is an atomic unit of work. When it’s **rolled back**, all changes made by that transaction are undone so the database state reverts to what it was before the transaction began. I’ll assume we’re talking about relational DBMSs with ACID guarantees and standard isolation levels.

**Approach**  
1. Track every write operation in a *redo/undo log* (WAL).  
2. On commit, persist the log and apply changes.  
3. On rollback, read the undo portion of the log and revert each modification.  
4. Release locks held by the transaction.  

**Depth**  
- **Undo logging**: For every `INSERT`, `UPDATE`, or `DELETE` we record enough data to reverse it (e.g., old row values).  
- **Checkpointing & recovery**: If a crash occurs mid‑rollback, the DBMS re‑executes undo logs during recovery.  
- **Isolation levels**: Rollback guarantees that other transactions never see partial changes; locks prevent dirty reads.  
- **Performance**: Undo logging adds write overhead but keeps rollback O(number of operations) and constant per record.

**Edge Cases**  
- *Long‑running transaction*: Rolling back large batches may be expensive; use batch undo or deferred cleanup.  
- *Nested transactions*: Outer rollback undoes all inner work regardless of their individual commits.  
- *Triggers/side effects*: Undo logs must capture any side‑effecting actions (e.g., audit tables) to fully revert state.

**Optimize & Communicate**  
To reduce latency, many engines use *write‑ahead logging* with batching and defer actual row updates until commit time (“lazy update”). I’d explain this trade‑off: faster rollback but potentially more complex recovery. Concluding: a rollback restores consistency by replaying undo logs, releases locks, and leaves the database as if the transaction never occurred.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
