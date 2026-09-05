---
qid: vq_90d76ef8f7__star__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 330
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:46-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building an analytics dashboard that needed to show the top two executive salaries for compliance reports. The HR database had over 12,000 employee records and was updated nightly; running a full scan every time was too slow.

**Task** – I had to write a single efficient query that returned the second‑highest salary in under 200 ms, even on the largest data set, without loading all rows into memory or using temporary tables.

**Action** – I leveraged SQL’s window functions. In PostgreSQL I wrote:

```sql
SELECT DISTINCT salary
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM employees
) sub
WHERE rnk = 2;
```

This calculates the rank of each distinct salary on the fly, then filters to rank 2. I added an index on `salary` and tuned the query planner’s statistics, which reduced execution time from ~1.8 s to <0.12 s.

**Result** – The dashboard now loads in milliseconds, even with 50,000 rows, and the compliance team can generate reports instantly. I learned that a thoughtful use of window functions combined with proper indexing can turn a naïve O(n) scan into a sub‑100 ms query, saving both compute cost and developer time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
