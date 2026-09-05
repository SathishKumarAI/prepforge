---
qid: vq_688f39d7ba__fp__local
question: How can one see who is using a temporary segment?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 458
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:44-05:00'
sources: []
---

**Detecting who is using a temporary segment**

A temporary segment lives in the temp file system; it grows when a session performs an operation that requires space (e.g., sorting, hash joins).  
Oracle records every allocation request in **`V$TEMPSEG_USAGE`**, which lists the *segment ID*, *owner*, *bytes allocated* and *last used time*.  
To know *who* is holding a segment, join this view with **`V$SESSION`**:

```sql
SELECT s.sid,
       s.serial#,
       t.seg_id,
       t.bytes_allocated,
       t.last_used_time
FROM   v$tempseg_usage  t
JOIN   v$session        s
ON     t.session_id = s.saddr;
```

The key insight is that the *segment ID* in `V$TEMPSEG_USAGE` is a **temporary object identifier** (the same one you would see with `DBMS_SPACE.OBJECT_SIZE`).  
Because each temporary segment is created per session, the join guarantees that only the current owner appears.  
If multiple sessions share the same segment (e.g., during a parallel query), Oracle creates *sub‑segments*; those are visible in **`V$TEMPSEG_USAGE_SUB`**.

**Why this works**  
The temp file system is managed by the optimizer’s buffer pool. When a session needs space, it asks the buffer manager for a *temporary segment ID*. The allocation is recorded with the caller’s *SADDR* (session address). By mapping that back to `V$SESSION`, you recover the exact user and SQL that owns the segment.

**Non‑obvious tip**  
If a segment remains allocated after the session ends, it means the session crashed or was terminated without proper cleanup. Monitoring `last_used_time` against the current time gives an early warning of orphaned temp space—an issue often missed in production tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
