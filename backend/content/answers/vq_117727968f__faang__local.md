---
qid: vq_117727968f__faang__local
question: HOW DO YOU GET THE NTH HIGHEST SALARY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 439
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:58:18-05:00'
sources: []
---

**Clarify**  
We need the *N*‑th highest distinct salary from a `Salary` table (e.g., `employees`). Clarify: are duplicates counted once or each row? Assume we want the N‑th unique maximum.

**Approach**  
1. **Deduplicate** salaries (`SELECT DISTINCT Salary FROM employees`).  
2. **Rank** them in descending order.  
3. Return the salary whose rank equals *N*.

SQL variants exist; we’ll use ANSI window functions for clarity and performance.

**Depth (Core answer)**  

```sql
-- N is supplied as a bind variable @n
SELECT Salary AS nth_highest_salary
FROM (
    SELECT DISTINCT Salary,
           DENSE_RANK() OVER (ORDER BY Salary DESC) AS rnk
    FROM employees
) AS ranked
WHERE rnk = @n;
```

* `DISTINCT` removes duplicates before ranking.  
* `DENSE_RANK()` assigns the same rank to equal salaries, so gaps are avoided.  
* Complexity: O(n log n) for sorting in the window function; indexes on `Salary` can reduce this to O(log n).  

**Edge Cases**  
- *N > number of distinct salaries*: returns empty set → handle with a fallback message.  
- Negative or zero N: validate input before query.  
- Very large tables: ensure an index on `Salary`; consider partitioning if needed.

**Optimize & Communicate**  
If the table is huge and only one result is needed, use a correlated subquery with `LIMIT` (PostgreSQL) or `TOP 1 WITH TIES` (SQL Server):

```sql
SELECT DISTINCT Salary
FROM employees
ORDER BY Salary DESC
OFFSET (@n-1) ROWS FETCH NEXT 1 ROW ONLY;
```

Explain that window functions are more readable and portable across DBMSs, while the offset approach can be faster on systems with efficient `LIMIT/OFFSET` support. Always benchmark both for your workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
