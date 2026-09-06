---
qid: vq_7951eb659f__faang__local
question: Query to find duplicate value in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 467
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:06-05:00'
sources: []
---

**Clarify**  
You want a query that lists values appearing more than once in a column (or set of columns). Assume a single table `t` with column `col`. Clarify: *Do we need the duplicate rows themselves, just the value counts, or handle composite keys?* We’ll answer for one column.

**Approach**  
1. Group by the target column.  
2. Count rows per group.  
3. Keep only groups where count > 1.  

Optionally join back to original table if full duplicate rows are required.

**Depth**  
```sql
-- 1️⃣ Find duplicate values and their frequencies
SELECT col, COUNT(*) AS dup_cnt
FROM   t
GROUP BY col
HAVING COUNT(*) > 1;

-- 2️⃣ If you need the actual duplicate rows:
WITH dup_vals AS (
    SELECT col
    FROM   t
    GROUP BY col
    HAVING COUNT(*) > 1
)
SELECT *
FROM   t
WHERE  col IN (SELECT col FROM dup_vals);
```
Complexity:  
- First query scans once (`O(n)`), groups, and aggregates – linear time.  
- Second query performs a hash‑join or index seek on `col`.  

**Edge Cases**  
- NULL values are ignored by `GROUP BY` unless you add `WHERE col IS NOT NULL`.  
- Large tables may benefit from an index on `col`.  
- Composite duplicates: replace `col` with multiple columns in the `GROUP BY`.

**Optimize & Communicate**  
For huge data sets, consider a window function to avoid grouping:

```sql
SELECT DISTINCT col
FROM (
    SELECT col, COUNT(*) OVER (PARTITION BY col) AS cnt
    FROM   t
) x
WHERE cnt > 1;
```

Explain that this uses a single pass and leverages the database’s windowing engine. Mention trade‑offs: window functions may use more memory but avoid an explicit group aggregate when you also need row data. This structured walk‑through shows clear problem restatement, systematic solution, complexity awareness, edge‑case handling, and optimization rationale—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
