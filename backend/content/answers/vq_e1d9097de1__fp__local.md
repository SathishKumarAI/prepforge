---
qid: vq_e1d9097de1__fp__local
question: How can I avoid blowing rollback segments ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 552
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:01:00-05:00'
sources: []
---

**Why rollback segments blow up**

Oracle keeps every change in *undo* (rollback) data so that a transaction can be rolled back or a read‑consistency snapshot can be reconstructed.  
When a statement touches many rows, the undo for each row is written sequentially; if the undo tablespace is full before the transaction commits, Oracle must extend it—this is what you see as “blowing” the rollback segment.

**Principle that governs it**

Undo is *write‑once* and *time‑based*.  
- Each piece of undo lives for at least `UNDO_RETENTION` seconds.  
- The space needed equals **(rows × average row size) × (undo per row)**, independent of how the rows are later read.

Thus the key to avoiding overflow is to **reduce the amount of undo produced** before a commit.

**Practical tactics**

| Technique | Why it works |
|-----------|--------------|
| **Commit frequently** | Splits large DML into smaller chunks so each chunk’s undo fits. |
| **Batch updates in smaller sets** | Keeps per‑statement row counts low. |
| **Use `SET UNDO_RETENTION` wisely** | Longer retention protects long reads but consumes more space; balance it with commit frequency. |
| **Increase the size/number of undo tablespaces** or enable *auto‑extend* | Gives the system room to grow when bursts occur. |
| **Avoid unnecessary DML on hot rows** | Hot spots generate massive undo; lock contention can force retries that double undo consumption. |

**Non‑obvious insight**

A long‑running **SELECT FOR UPDATE** can consume undo as well, because Oracle protects the row against concurrent modifications. If you only need a read‑consistency snapshot, use `READ ONLY` or `NOLOCK` hints to bypass undo generation entirely.

By treating rollback segments as a *capacity‑planning problem* rather than a mystery, you can design transactions that stay within their limits and keep the database healthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
