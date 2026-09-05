---
qid: vq_8d5ffcce47__fp__local
question: How do control which rollback segment I use ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 392
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:43-05:00'
sources: []
---

### How an Oracle session picks a rollback segment

At its core, a rollback segment is a *buffer* that holds the undo data for all DML statements executed by a transaction.  
When a statement starts, Oracle must guarantee that it can roll back to a consistent snapshot at any point in time.  
To do this, it first selects an **undo table** (the “rollback segment”) from which to allocate space.  

1. **Session‑level hint** – `ALTER SESSION SET USE_ROLLBACK_SEGMENT = seg_name` forces that particular segment for the duration of the session.  
2. **Transaction level** – `SET TRANSACTION ... USE_ROLLBACK_SEGMENT = seg_name` limits it to a single transaction.  
3. **Default tablespace** – If no hint is given, Oracle uses the default undo tablespace (`UNDOTBS1` by default).  

The selection process is *optimised* for locality: Oracle prefers segments that are already partially filled or have space in the same block group as the current buffer cache to minimise I/O.  
If a segment runs out of space, Oracle automatically migrates the transaction to another available segment (the “undo migration” step).  

**Non‑obvious insight:** The rollback segment choice is not just about undo; it also influences **concurrency control**. By keeping a transaction in a dedicated segment, Oracle can delay the release of locks until the segment is reclaimed, thereby reducing lock contention for long‑running transactions. This subtle coupling between undo allocation and locking behaviour is why you should explicitly set rollback segments only when you need fine‑grained performance tuning or isolation guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
