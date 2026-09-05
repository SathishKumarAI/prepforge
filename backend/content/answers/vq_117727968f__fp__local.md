---
qid: vq_117727968f__fp__local
question: HOW DO YOU GET THE NTH HIGHEST SALARY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 445
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:22-05:00'
sources: []
---

**Why the problem is a “selection‑order” problem**

When you ask for *the Nth highest salary* you are essentially asking for the *N‑th order statistic* of a set that may contain duplicates.  
In mathematics, an order statistic is defined by sorting the sample and then picking the element at position *k*. SQL gives us two tools to express this: **ordering** (`ORDER BY`) and **ranking** (window functions).  

```sql
SELECT salary
FROM (
    SELECT salary,
           ROW_NUMBER() OVER (ORDER BY salary DESC) AS rn
    FROM   employees
) t
WHERE  rn = :N;
```

`ROW_NUMBER()` assigns a unique, strictly increasing index to each row in the descending order of salaries. The outer query simply filters for the desired rank.  

**Why `ROW_NUMBER()` and not `RANK()` or `DENSE_RANK()`?**

- `RANK()` would skip numbers when there are ties (e.g., two people earn the 1st salary → next rank is 3).  
- `DENSE_RANK()` would collapse ties into a single rank, so you could miss the exact *Nth* distinct salary.  
If you truly want “the Nth highest distinct salary”, use `DENSE_RANK()`.  

**Non‑obvious insight**

You can achieve the same result without an explicit window function by leveraging **LIMIT/OFFSET** (in MySQL/PostgreSQL) or a correlated subquery that counts higher salaries. However, those approaches are less efficient and harder to maintain when you need additional columns in the result set. The window‑function method is both declarative and scales with large tables because the database can use indexes on `salary` directly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
