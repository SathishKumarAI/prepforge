---
qid: vq_ece6ed7d1c__faang__local
question: What are ‘inserted’ and ‘deleted’ tables (aka. magic tables)?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 457
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:25-05:00'
sources: []
---

**Clarify**  
You’re asking about *magic tables*—the “inserted” and “deleted” pseudo‑tables that appear in a SQL Server trigger. In any trigger, these tables contain the rows that are being inserted or removed from the target table during the DML operation. The assumption is that we’re dealing with row‑level change data capture inside an AFTER/INSTEAD OF trigger.

**Approach**  
1. Explain what each pseudo‑table holds.  
2. Show how they’re used in a trigger body.  
3. Highlight why they’re called “magic” (they exist only for the duration of the trigger).  
4. Note key differences between row‑level and statement‑level triggers.

**Depth**  
- **`inserted`**: For an `INSERT`, it contains all new rows; for an `UPDATE`, it contains the post‑update values.  
- **`deleted`**: For a `DELETE`, it holds the removed rows; for an `UPDATE`, it holds pre‑update values.  
Both are read‑only, temporary tables with the same schema as the target table plus any computed columns. They can be queried like normal tables (`SELECT * FROM inserted`). In an `AFTER` trigger you typically use them to audit changes or enforce business rules; in an `INSTEAD OF` trigger they’re used to implement custom DML logic.

**Edge Cases**  
- Bulk operations: both tables may contain many rows, so set‑based processing is required.  
- Triggers on views: the pseudo‑tables reflect the underlying base table changes.  
- Recursive triggers can cause nested `inserted/deleted` contexts—must guard against infinite loops.

**Optimize & Communicate**  
Emphasize that using these tables avoids row‑by‑row cursors, keeps the trigger set‑based (O(n)), and that proper indexing on the target table improves join performance when correlating audit data. Conclude by noting that understanding `inserted`/`deleted` is foundational for designing robust CDC or audit pipelines in enterprise systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
