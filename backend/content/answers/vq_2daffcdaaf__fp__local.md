---
qid: vq_2daffcdaaf__fp__local
question: Which table should you query to check the status of a function?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 465
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:29:30-05:00'
sources: []
---

**Why you look at `ALL_OBJECTS` (or its user‑specific cousin)**  

When a PL/SQL function is compiled, the database writes a *metadata record* that describes its existence, type and compilation state.  
The fundamental problem is: *“Given an object name, how do I know whether it’s actually there and ready to run?”*  
Oracle solves this by keeping every object in a single system table, **`ALL_OBJECTS`** (and the equivalent `USER_OBJECTS`, `DBA_OBJECTS`).  
Each row contains an `OBJECT_TYPE` column; for functions that value is `'FUNCTION'`.  
The companion column **`STATUS`** stores the compile result: `'VALID'` if the function compiles cleanly, otherwise `'INVALID'` (often with a diagnostic message in `USER_ERRORS`).  

This design follows the *information‑theoretic* principle of “one source of truth”: every object’s life cycle is tracked in one place, so any query engine can answer “is this function usable?” without needing to inspect the code or attempt execution.  
A non‑obvious insight: the same table also holds procedures, packages and triggers; by filtering on `OBJECT_TYPE`, you get a *polymorphic* view of all executable objects, which is why many DBA scripts loop over `ALL_OBJECTS` rather than having separate tables for each type.

```sql
SELECT object_name,
       status
FROM   all_objects
WHERE  object_type = 'FUNCTION'
AND    owner      = :schema;
```

This query tells you whether the function exists and whether it’s in a runnable state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
