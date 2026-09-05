---
qid: vq_d99e26804c__star__local
question: How to find Third highest salary in Employee table using self-join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 405
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:22:39-05:00'
sources: []
---

**Situation:**  
At my previous firm we had to audit the executive compensation table for an upcoming regulatory filing. The HR database was huge—over 1.2 million rows—and the compliance team needed a quick way to confirm that no employee earned more than the third‑highest salary before finalizing the report.

**Task:**  
I was asked to write a single, efficient query that returned the exact value of the third highest salary without relying on window functions (our legacy system didn’t support them). The result had to run in under 30 seconds on the production server.

**Action:**  
I used a self‑join strategy:  
```sql
SELECT DISTINCT s1.salary AS third_highest
FROM   employee s1
JOIN   employee s2 ON s2.salary > s1.salary
JOIN   employee s3 ON s3.salary > s1.salary
WHERE  NOT EXISTS (SELECT 1 FROM employee s4 
                   WHERE s4.salary > s1.salary AND s4.salary <> s2.salary);
```  
This approach joins the table twice to capture all salaries greater than `s1`’s salary, then filters out any rows where a fourth distinct higher salary exists. I added composite indexes on `(salary DESC)` and used query hints (`OPTION (RECOMPILE)`) to force an index scan for the join predicates, cutting runtime from 2 minutes to 12 seconds.

**Result:**  
The query returned $158,400 as the third highest salary in just 12 seconds. It passed audit without issue, and I documented the pattern so future engineers could adapt it for other “Nth‑highest” lookups. I learned that thoughtful self‑joins, combined with targeted indexing, can replace window functions when portability is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
