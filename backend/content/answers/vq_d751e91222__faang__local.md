---
qid: vq_d751e91222__faang__local
question: How do you get the second highest salary from a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 466
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:37:08-05:00'
sources: []
---

**Clarify**  
You’re given a relational table `Employees(id, name, salary)`. The goal is to return the *second* highest distinct salary value (not a row). Ask: Do ties count? Is `NULL` possible? Assume salaries are numeric and non‑null.

**Approach**  
1. Retrieve distinct salaries in descending order.  
2. Skip the first (max) and pick the next one.  

SQL offers several idioms; we’ll show two common ones.

**Depth**  

```sql
-- 1️⃣ Window function – O(n log n) sort, O(1) extra space
SELECT DISTINCT salary
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employees
) t
WHERE rnk = 2;
```

```sql
-- 2️⃣ Subquery – O(n log n) sort, no windowing engine needed
SELECT MAX(salary) AS second_highest
FROM Employees e1
WHERE EXISTS (
      SELECT 1
      FROM Employees e2
      WHERE e2.salary > e1.salary
)
AND NOT EXISTS (
      SELECT 1
      FROM Employees e3
      WHERE e3.salary > e1.salary AND e3.salary <> e1.salary
);
```

Both yield the second distinct salary; the first is clearer and usually faster on modern engines.

**Edge cases**  
- Less than two distinct salaries → returns `NULL`.  
- All salaries equal → also `NULL`.  
- Negative or zero values are handled naturally.  

Test with tables: (1) normal data, (2) duplicate max, (3) only one row, (4) all same.

**Optimize & Communicate**  
If the table is huge and indexed on `salary`, a simple query using `ORDER BY salary DESC LIMIT 2` followed by `OFFSET 1` can be faster. Explain that you’d benchmark both versions in production and choose the one with lower execution time or CPU usage. This demonstrates analytical rigor, clear communication, and depth—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
