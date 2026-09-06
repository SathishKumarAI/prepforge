---
qid: vq_1cfe0fe044__faang__local
question: How to remove duplicate rows from table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 498
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:26-05:00'
sources: []
---

**1️⃣ Clarify**  
> *Problem:* “Remove duplicate rows from a table.”  
> *Assumptions to confirm:*  
> - What defines a duplicate? Entire row equality or specific columns (e.g., `id`, `email`)?  
> - Do we need to preserve the first/last occurrence or any one?  
> - Is the table large enough that in‑memory operations are infeasible?  
> - Are there constraints/indexes that must remain intact?

**2️⃣ Approach**  
1. Identify duplicates using a window function (`ROW_NUMBER()` over the key columns).  
2. Delete rows where `row_num > 1`.  
3. Optionally, create a new table without duplicates if transaction size is huge.

**3️⃣ Depth (SQL example)**  

```sql
WITH dup AS (
    SELECT id,
           ROW_NUMBER() OVER (PARTITION BY colA, colB ORDER BY created_at DESC) rn
    FROM   my_table
)
DELETE FROM my_table
WHERE  id IN (SELECT id FROM dup WHERE rn > 1);
```

*Complexity:* O(n log n) for sorting; index on `(colA, colB)` can reduce it to near‑linear.  
*Trade‑offs:*  
- In‑place delete is fast but locks the table.  
- Copy‑to‑new approach avoids locking but needs extra storage.

**4️⃣ Edge Cases**  
- **Nulls in key columns:** `ROW_NUMBER()` treats each null as distinct; use `COALESCE` or a custom comparator if needed.  
- **Large partitions:** May exceed memory → stream the result to temporary table.  
- **Foreign keys:** Ensure cascading deletes or temporarily drop constraints.

**5️⃣ Optimize & Communicate**  
Explain why window functions are preferred over self‑joins (less I/O, clearer intent). Discuss using `DELETE` with `CTE` for readability versus raw subquery for performance tuning. Highlight that after removal, re‑creating unique indexes guarantees future deduplication. Conclude by summarizing the plan’s safety (transactional rollback), scalability (index usage), and maintainability (clear logic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
