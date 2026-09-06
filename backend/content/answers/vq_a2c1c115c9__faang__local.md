---
qid: vq_a2c1c115c9__faang__local
question: How to fetch alternate records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 428
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:14-05:00'
sources: []
---

**Clarify**

> “Alternate records” means every second row in the logical ordering of the table (e.g., rows 1, 3, 5,…).  
> *Assumptions to confirm*:  
> • What defines the order? (`ORDER BY` column(s))  
> • Do we need a stable result after inserts/deletes?  
> • Is this for a one‑time query or a recurring job?

**Approach**

1. Identify the deterministic ordering (e.g., `ORDER BY created_at, id`).  
2. Use a window function to assign row numbers over that order.  
3. Filter on the row number’s parity (`row_num % 2 = 1`).

If performance is critical and the table has an index on the order columns, this can be pushed down to the optimizer.

**Depth**

```sql
SELECT *
FROM (
    SELECT t.*,
           ROW_NUMBER() OVER (ORDER BY created_at, id) AS rn
    FROM my_table t
) sub
WHERE rn % 2 = 1;   -- 1=odd rows => alternate records
```

*Complexity*: `O(n)` scan plus sort on the order columns.  
*Trade‑offs*: Requires a stable ordering column; without it, “alternate” is arbitrary.

**Edge Cases**

- Empty table → returns nothing.  
- Table with duplicate keys in the ORDER BY → window still works but results may vary across runs.  
- Concurrency: if rows are inserted/deleted concurrently, parity can shift; use snapshot isolation or a stable surrogate key.

**Optimize & Communicate**

If only every other row is needed for a large table, consider adding an indexed computed column `row_parity = (ROW_NUMBER() OVER (...)) % 2` and query that directly. Explain to the interviewer: “I’m using windowing because it guarantees deterministic ordering; I’ll validate the assumptions about order columns and discuss snapshot isolation if concurrency is a concern.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
