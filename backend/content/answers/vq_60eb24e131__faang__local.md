---
qid: vq_60eb24e131__faang__local
question: SQL basics concepts such as Rank, Dense Rank, Row Number?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 556
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:12:56-05:00'
sources: []
---

**Clarify**  
You’re asking how the window functions **ROW_NUMBER()**, **RANK()**, and **DENSE_RANK()** differ and when you’d pick each one. I’ll assume a relational DB (PostgreSQL/MySQL 8+, SQL Server, etc.) and that we’re ranking rows within a partition of a result set.

**Approach**  
1. Explain the semantics of each function.  
2. Give a concrete example.  
3. Highlight use‑cases.  
4. Note performance implications.

**Depth**  

| Function | Result for duplicate values | Gap after tie |
|----------|-----------------------------|---------------|
| **ROW_NUMBER()** | Assigns unique sequential numbers regardless of ties. | No gaps – every row gets a distinct number. |
| **RANK()** | Same rank for tied rows, then skips subsequent ranks by the number of ties. | Gaps appear after ties (1,2,2,4). |
| **DENSE_RANK()** | Same rank for ties, but next rank is continuous – no gaps. | No gaps (1,2,2,3). |

*Example:*  
```sql
SELECT dept,
       employee_id,
       salary,
       ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) AS rn,
       RANK()      OVER (PARTITION BY dept ORDER BY salary DESC) AS rnk,
       DENSE_RANK()OVER (PARTITION BY dept ORDER BY salary DESC) AS drnk
FROM employees;
```
If two sales reps earn \$100k, they’ll both get `rnk = 1`, but `rn` will be 1 and 2; the next rep gets `rnk = 3` (gap) vs. `drnk = 2`.

**Edge Cases**  
- Nulls: window functions treat NULL as distinct; ordering may place them last or first depending on `NULLS FIRST/LAST`.  
- Large partitions: memory usage can spike; consider indexing the order column.  

**Optimize & Communicate**  
Use **ROW_NUMBER()** when you need a deterministic, gapless sequence (e.g., pagination). Use **RANK()** for reporting “rankings” where ties should be reflected and gaps are acceptable. Use **DENSE_RANK()** when you want rank continuity without gaps but still respect ties. Always explain your choice in an interview: “I’d pick RANK because the business wants to show tied performers as sharing the same rank, and the occasional gap is fine for our leaderboard.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
