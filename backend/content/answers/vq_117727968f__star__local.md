---
qid: vq_117727968f__star__local
question: HOW DO YOU GET THE NTH HIGHEST SALARY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 340
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:30-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech, our payroll dashboard was lagging because the “Nth highest salary” query kept timing out during peak reporting hours. The data set had over 75,000 employee records and we needed to provide managers with the top‑10 salaries in real time.

**Task:**  
I had to rewrite the query so it returned the nth highest salary (for any n up to 10) within under 200 ms, without adding extra indexes that would bloat write performance.

**Action:**  
First, I profiled the existing `SELECT DISTINCT` + `ORDER BY DESC` approach; it scanned the entire table each call. I switched to a window function:  
```sql
WITH ranked AS (
  SELECT salary,
         DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
)
SELECT salary FROM ranked WHERE rnk = @n;
```
I then added a covering index on `(salary DESC)` and used `WHERE salary >= (SELECT MIN(salary) FROM employees ORDER BY salary DESC LIMIT @n)` to prune the scan. Finally, I wrapped it in a stored procedure with caching for repeated n values.

**Result:**  
The query latency dropped from ~1.2 s to 45 ms on our test cluster, and real‑time dashboards loaded instantly. The project taught me that window functions plus targeted covering indexes can turn an O(n) scan into near‑constant time for ranked queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
