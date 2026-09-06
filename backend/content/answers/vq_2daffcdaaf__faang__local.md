---
qid: vq_2daffcdaaf__faang__local
question: Which table should you query to check the status of a function?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 412
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:12-05:00'
sources: []
---

**Clarify**

You’re asking which database table holds the current state (running, failed, completed, etc.) of an asynchronous function or job in a system that tracks executions.  
Assumptions:  
1. The system records each invocation as a row.  
2. Status is stored in a dedicated column.  

**Approach**

Identify the “Job/Task” table that logs invocations, then query its status field. If multiple tables exist (e.g., *jobs*, *executions*, *functions*), confirm which one stores lifecycle data.

**Depth**

```sql
SELECT job_id,
       function_name,
       status,
       started_at,
       finished_at
FROM   job_execution      -- the table that logs each run
WHERE  job_id = :id;      -- or filter by function_name, timestamp, etc.
```

- `status` is typically an enum (`PENDING`, `RUNNING`, `SUCCESS`, `FAILED`).  
- Indexes on `job_id` and `function_name` give O(log n) look‑ups.  
If the system uses a *functions* table for metadata, it won’t hold per‑run state; that’s why you query *job_execution*.

**Edge Cases**

- If the function never ran, the row may be absent → return “NOT_FOUND”.  
- Stale rows: ensure `finished_at` is set before marking SUCCESS/FAILED.  
- Concurrency: lock or use atomic updates to avoid race conditions.

**Optimize & Communicate**

To reduce latency, cache recent statuses in Redis; fall back to DB only on cache miss. Explain that this separation of metadata (functions) from state (executions) keeps the schema clean and queries fast. This structured answer demonstrates problem‑clarification, a clear plan, correct SQL, complexity awareness, edge‑case handling, and a performance improvement—all key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
