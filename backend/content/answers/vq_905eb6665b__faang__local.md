---
qid: vq_905eb6665b__faang__local
question: What is ROWID and ROWNUM in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 502
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:36-05:00'
sources: []
---

**Clarify**  
You’re asking about two Oracle‑specific pseudo columns: **ROWID** (the physical address of a row) and **ROWNUM** (a sequential number assigned during query evaluation). I’ll assume we’re dealing with Oracle SQL, not ANSI‑standard ROW_NUMBER().

**Approach**  
Explain each concept separately, then contrast their purposes, lifecycle, and typical use cases. Highlight differences in volatility, ordering, and mutability.

**Depth**  

| Feature | ROWID | ROWNUM |
|---------|-------|--------|
| **Definition** | Unique identifier for a physical row; format `partition:block:row`. | Position of the row in the result set (before ORDER BY). |
| **Persistence** | Static until the row is moved/updated. | Volatile per query execution; changes if query plan or predicates change. |
| **Ordering** | No inherent order; reflects physical storage. | Assigned after filtering but before sorting. |
| **Use cases** | • Fast look‑ups, updates, deletes (`WHERE ROWID = …`). <br>• Bulk operations (e.g., `ROWNUM`-based pagination).<br>• Data movement between tables. | • Pagination (`WHERE ROWNUM <= 100`).<br>• Limiting result sets in older Oracle versions.<br>• Simple row counting before analytic functions were available. |
| **Limitations** | Not portable; ties to physical storage, can change after `ALTER TABLE MOVE`. | Cannot be used reliably with `ORDER BY` (needs subquery). |

**Edge cases**  
- `ROWID` changes when a table is moved or reorganized.  
- In partitions, the same logical row may have different ROWIDs across partitions.  
- `ROWNUM` can misbehave if you add `ORDER BY` in the same query; it will apply before sorting.

**Optimize & communicate**  
When needing deterministic ordering, use analytic functions (`ROW_NUMBER() OVER (ORDER BY …)`) instead of ROWNUM. For high‑performance row access, index the ROWID or use it directly for updates/deletes. Always document that ROWID is Oracle‑specific and avoid relying on it in cross‑database code. This keeps the solution robust while leveraging the strengths of each pseudo column.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
