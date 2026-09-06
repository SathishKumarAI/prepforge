---
qid: vq_90d76ef8f7__faang__local
question: HOW DO YOU FIND THE SECOND-HIGHEST SALARY IN A TABLE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 460
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:22:44-05:00'
sources: []
---

**Clarify**  
We’re asked for the *second‑highest* salary in a relational table (e.g., `Employees(salary)`), assuming salaries are numeric and duplicates may exist. Clarify: Do we consider distinct values or the second highest row? Typically “second‑highest” means the next unique value below the maximum.

**Approach**  
1. Use SQL to isolate distinct salaries, ordered descending.  
2. Skip the first (max) and take the next one.  
3. Return that single value.

**Depth**  

```sql
SELECT MIN(salary) AS second_highest
FROM (
    SELECT DISTINCT salary
    FROM Employees
    ORDER BY salary DESC
    LIMIT 2
) AS top_two;
```

*Explanation*:  
- `DISTINCT` removes duplicates.  
- `ORDER BY ... DESC LIMIT 2` fetches the two highest distinct salaries.  
- The outer query takes the minimum of those two, which is the second‑highest.

Complexity: O(n log n) for sorting in most RDBMS; indexes on `salary` can reduce to O(log n).  
If only one unique salary exists, the subquery returns a single row and the outer query yields that value (you may add NULL handling).

**Edge Cases**  
- **Less than two distinct salaries**: return NULL or handle as “no second highest”.  
- **Negative or zero salaries**: still valid; ordering works.  
- **Large tables**: ensure `salary` is indexed for performance.

**Optimize & Communicate**  
- If the DB supports window functions, an even clearer version:

```sql
SELECT DISTINCT salary AS second_highest
FROM (
    SELECT salary,
           DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
    FROM Employees
) t
WHERE rnk = 2;
```

Explain that `DENSE_RANK` treats ties as the same rank, so the next distinct value gets rank 2.  
Wrap up by confirming assumptions (unique vs duplicate handling), test with boundary cases, and discuss indexing for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
