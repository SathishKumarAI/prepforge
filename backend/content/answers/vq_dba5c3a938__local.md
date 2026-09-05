---
qid: vq_dba5c3a938__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 357
total_tokens: 584
web_searches: 0
cost_usd: 0.0
sources: []
---

**Quick answer:**  
When a transaction is rolled back, every change it made to the database is undone so that the data appears as if the transaction never executed. The engine rewinds its write‑ahead log (undo log) or restores snapshot versions and releases any locks it held.

---

### In practice

- **Undo logs**: In Oracle or PostgreSQL’s MVCC, each row update writes an undo record containing the previous state. A rollback walks these records backwards, writing new tuples with the original values and marking the transaction as aborted.  
- **Lock release**: All exclusive locks taken during the transaction are freed immediately; shared locks stay until commit time to avoid readers seeing partial data.  
- **Isolation impact**: In a serializable session, a rollback can trigger *phantom* reads on other concurrent transactions because their snapshots were based on the rolled‑back rows.  
- **Performance hit**: Large rollbacks (e.g., after a failed bulk insert) force many I/O operations to rewrite pages and update redo logs, which in production often turns into noticeable latency spikes.  
- **Failure modes**: If the rollback itself crashes before finishing, the database relies on its crash‑recovery mechanism to replay or discard changes—this is why durability requires that undo/redo logs be flushed to disk first.

In short, a rollback restores consistency at the cost of extra I/O and potential contention for locks. It’s a safety net that, when misused (e.g., rolling back huge batches), can become a performance bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
