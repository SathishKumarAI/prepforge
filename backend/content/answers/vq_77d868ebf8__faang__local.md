---
qid: vq_77d868ebf8__faang__local
question: How can I eliminate duplicate values in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 477
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:17:49-05:00'
sources: []
---

**Clarify**  
> *Problem*: Given a relational table that may contain duplicate rows, how do we remove those duplicates?  
> *Assumptions to confirm*  
> 1. Duplicates are defined by all columns or a subset of key columns.  
> 2. We can create temporary tables / indexes if needed.  
> 3. The database is relational (SQL‑like) and supports standard set operations.

**Approach**  
1. Identify the duplicate criteria (full row or specific keys).  
2. Use a window function to rank rows per key group.  
3. Delete all but one of the ranked rows, or create a new deduplicated table via `SELECT DISTINCT`/`GROUP BY`.

**Depth**  
```sql
-- Example: keep first occurrence based on primary key id
WITH ranked AS (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY col1, col2, … ORDER BY id) AS rn
  FROM   my_table
)
DELETE FROM my_table
WHERE  id IN (SELECT id FROM ranked WHERE rn > 1);
```
*Complexity*: O(n log n) due to the window function’s sort; space for temp rows.  
*Trade‑offs*:  
- Using `ROW_NUMBER()` keeps a deterministic “first” row; `DENSE_RANK` would keep all ties.  
- If duplicates are rare, `SELECT DISTINCT INTO new_table` + drop old table is simpler.

**Edge Cases**  
- Null values in key columns: `PARTITION BY col1, col2` treats NULLs as equal only if the DB supports it; use `COALESCE`.  
- Very large tables: may need batch deletes or partitioned temp tables.  
- Unique constraints already enforce uniqueness—check before running.

**Optimize & Communicate**  
Explain that window functions are preferable for in‑place deletion because they avoid intermediate storage and guarantee atomicity. If the table is massive, recommend using a staging table with `INSERT … SELECT DISTINCT` followed by an index rebuild to reclaim space. Conclude by summarizing performance: the method scales linearly with rows, uses minimal extra I/O, and aligns with typical FAANG production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
