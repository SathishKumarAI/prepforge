---
qid: vq_c8bd46980c__faang__local
question: HOW CAN YOU USE DISTINCT IN A SQL QUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 439
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:33:17-05:00'
sources: []
---

**Clarify**  
You want to return only unique rows from a result set, or count distinct values in a column. Clarify: *Are we deduplicating entire rows or just one field?* Do you need the SQL dialect (PostgreSQL, MySQL, etc.)?

**Approach**  
1. **`SELECT DISTINCT …`** – simplest way to de‑duplicate columns.  
2. **Aggregate with `COUNT(DISTINCT column)`** – when counting unique values.  
3. Use a **subquery or CTE** if you need distinctness after joins.  

**Depth**  
```sql
-- 1. Return unique rows
SELECT DISTINCT col1, col2 FROM table;

-- 2. Count unique values in one column
SELECT COUNT(DISTINCT user_id) AS unique_users FROM orders;

-- 3. Distinct after a join (PostgreSQL)
WITH joined AS (
    SELECT t1.id, t2.value
    FROM t1 JOIN t2 ON t1.key = t2.key
)
SELECT DISTINCT id, value FROM joined;
```
*Complexity*: `DISTINCT` typically runs in O(n log n) due to sorting or hashing. Indexes on the selected columns can make this O(n).  

**Edge Cases**  
- NULLs: `DISTINCT` treats all NULLs as one group (SQL standard). If you need separate handling, use `COALESCE`.  
- Large result sets: consider materialized views or incremental deduplication to avoid memory blow‑up.  
- Multi‑column distinctness vs single column: double‑check the requirement.

**Optimize & Communicate**  
Explain that adding an index on the distinct columns dramatically speeds up retrieval. If you only need a count, `COUNT(DISTINCT …)` can be more efficient than pulling rows and deduplicating in application code. Always benchmark with real data and discuss trade‑offs (CPU vs I/O) when explaining to interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
