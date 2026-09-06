---
qid: vq_8ac16d948f__faang__local
question: What are the different events in Triggers ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 474
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:21:19-05:00'
sources: []
---

**Clarify**  
You’re asking about *SQL Server trigger event types*—the keywords that determine when a trigger fires (e.g., `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`). I’ll assume we’re focusing on DML triggers in relational databases.

**Approach**  
1. List the four core DML events.  
2. Explain each’s semantics and differences.  
3. Touch on system‐level (`SCHEMA`/`DATABASE`) triggers if relevant.  
4. Mention cascading, multi‑row vs single‑row behavior.

**Depth**  

| Trigger Type | Fired On | Notes |
|--------------|----------|-------|
| **INSERT**  | When rows are added to the target table. | `inserted` pseudo‑table contains new rows; can be multi‑row. |
| **UPDATE**  | When any column of existing rows changes. | `deleted` + `inserted` tables give old/new values. |
| **DELETE**  | When rows are removed. | Only `deleted` table is populated. |
| **TRUNCATE**| When a bulk delete via `TRUNCATE TABLE`. | Not logged per row; triggers fire once per statement, cannot access deleted rows. |

*System events:*  
- `SCHEMA` (e.g., CREATE/DROP) – fires on DDL changes.  
- `DATABASE` (e.g., ALTER DATABASE) – database‑wide changes.

**Edge Cases**  

- Multi‑row operations: triggers fire once per statement, so logic must handle sets.  
- Recursive triggers: can lead to infinite loops unless disabled or guarded.  
- Truncate vs delete: trigger body cannot reference `deleted` for TRUNCATE.

**Optimize & Communicate**  

Explain that choosing the right event avoids unnecessary overhead (e.g., use `AFTER INSERT` only if you need committed data). Clarify that triggers are a last‑resort; prefer constraints or application logic when possible. End by summarizing: *INSERT, UPDATE, DELETE, TRUNCATE* are the primary DML events, with system‐level events for schema/database changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
