---
qid: vq_dba5c3a938__fp__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 392
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:59:45-05:00'
sources: []
---

When a transaction is rolled back the database must return to *exactly* the state it had before the transaction began.  
The fundamental problem this solves is **conflict isolation**: while a transaction may read or write records that other transactions are concurrently accessing, we cannot let those intermediate changes become visible. A rollback guarantees that any partial updates—whether they are writes, deletes, or schema changes—are undone atomically.

Implementation works as follows:

1. **Write‑ahead logging (WAL).** Every modification is first written to a durable log before being applied to the data pages. The log entry records the old value and the new value.
2. **Transaction record.** At transaction start, a header with a unique XID and state “active” is logged. On commit, the header is updated to “committed”; on abort it becomes “aborted”.
3. **Undo phase.** When rollback is requested, the engine scans the log backwards from the last modification of that transaction, applying each *undo* record (the old value) to the data pages. Because logs are sequential, this scan can be done in a single pass.
4. **Recovery.** If the system crashes during rollback, the log still contains the “aborted” marker and all undo entries, so recovery will resume the same backward scan.

A non‑obvious insight: *the order of undoing matters less than the guarantee that every written page is restored to its pre‑transaction value.* Because logs are written sequentially, the engine can safely overwrite pages in any order; the durability comes from having already recorded the original state. Thus rollback is essentially a “reverse commit” that reverts the database to a consistent snapshot without needing to lock other transactions for long periods.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
