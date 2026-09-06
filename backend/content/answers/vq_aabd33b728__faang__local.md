---
qid: vq_aabd33b728__faang__local
question: How does one select EVERY Nth row from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:27:30-05:00'
sources: []
---

**Clarify**  
We need to return *every* N‑th row from a relational table, preserving the natural order (e.g., primary key or timestamp).  
Assumptions:  
1. The table has an ordering column (`id`, `created_at`).  
2. “Every Nth” means 1‑based indexing (row N, 2N, 3N…).  
3. The result set should be deterministic and scalable.

**Approach**  
Use a window function to assign row numbers in the desired order, then filter on the modulus of that number. This keeps the query declarative and works across major engines (PostgreSQL, SQL Server, MySQL 8+, Oracle).

```sql
SELECT *
FROM (
    SELECT t.*,
           ROW_NUMBER() OVER (ORDER BY id) AS rn
    FROM   my_table t
) sub
WHERE  MOD(rn, :N) = 0;          -- every Nth row
```

If the table is very large and you want to avoid a full sort, consider an index on the ordering column or use `FETCH NEXT` with offset in a loop (less efficient).

**Depth**  
- **Complexity:** O(n log n) for sorting + O(n) scan.  
- **Trade‑offs:** Windowing is read‑only and non‑blocking; it doesn’t lock rows.  
- **Index usage:** A covering index on `(id, …)` can satisfy the sort without touching the heap.

**Edge Cases**  
- `N = 1` returns all rows.  
- `N > row_count` yields no rows (handle with a guard).  
- Duplicate ordering values: add a tie‑breaker (`ORDER BY id, pk`) to guarantee determinism.

**Optimize & Communicate**  
Explain that the window function is preferred because it’s set‑based and leverages the DB optimizer. If performance becomes critical, suggest partitioning the table or precomputing row numbers in a materialized view. Conclude with a brief note on testing: validate against known data sets, check boundary values of `N`, and confirm that the query plans use the intended indexes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
