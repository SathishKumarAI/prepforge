---
qid: vq_7a04d206a4__faang__local
question: How to select unique records from a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 538
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:17-05:00'
sources: []
---

**Clarify**

> “Select unique records” usually means *de‑duplicate rows that are identical on all columns* (or a subset of key columns).  
> Assumptions:  
> 1. The table is in a relational DB (SQL).  
> 2. We need to keep one copy and remove the rest, or at least return a set of distinct rows.  
> 3. There’s no surrogate primary key; duplicates are exact.

**Approach**

1. Identify columns that define uniqueness (`key_cols`).  
2. Use `ROW_NUMBER()` over those columns ordered by an arbitrary column (e.g., timestamp) to flag duplicates.  
3. Keep the first row per group and delete the rest, or simply `SELECT DISTINCT`.

**Depth**

```sql
-- Option 1: Return deduplicated result set
SELECT DISTINCT * FROM my_table;

-- Option 2: Physically remove duplicates
WITH ranked AS (
    SELECT *,
           ROW_NUMBER() OVER (PARTITION BY key_cols ORDER BY created_at DESC) AS rn
    FROM my_table
)
DELETE FROM my_table
WHERE id IN (SELECT id FROM ranked WHERE rn > 1);
```

*Complexity*:  
- `SELECT DISTINCT` scans the table once, O(n log n) with hashing or sorting depending on engine.  
- The CTE + DELETE does a full scan plus an index lookup for each duplicate; still linear in rows but requires write lock.

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| Nulls in key columns | `ROW_NUMBER()` treats NULL as distinct, may keep multiple “NULL” rows. | Include nulls and verify only one remains. |
| Very large table | In‑place delete can lock table; use batch deletes or partitioning. | Run on >10M rows with temp tables. |
| Composite key not unique due to hidden columns | Distinct on all columns may miss duplicates if a non‑key column differs. | Verify by selecting count(*) vs distinct count. |

**Optimize & Communicate**

- If duplicates are rare, `SELECT DISTINCT` is simplest and safe for reads.  
- For heavy writes or large tables, consider adding a unique constraint to prevent future duplicates.  
- Explain trade‑offs: read‑only de‑duplication vs physical deletion; impact on indexes and locks.  

> “We’ll start with a distinct query to surface the issue, then switch to a row‑number based delete once we confirm the volume.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
