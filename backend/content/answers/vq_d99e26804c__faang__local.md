---
qid: vq_d99e26804c__faang__local
question: How to find Third highest salary in Employee table using self-join?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 402
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:37:46-05:00'
sources: []
---

**Clarify**  
> *Goal:* Return the third‑highest distinct salary from an `Employee` table.  
> *Assumptions I’d confirm:*  
> - The column name is `salary`.  
> - Salaries are numeric and may contain duplicates.  
> - We’re allowed to use a self‑join only (no window functions).  

**Approach**  
1. Join the table to itself on salaries that are strictly higher.  
2. For each row, count how many distinct higher salaries exist.  
3. Rows with exactly two higher salaries are candidates for third place.  
4. Return the maximum salary among those candidates (handles ties).

**Depth**  
```sql
SELECT MAX(e1.salary) AS third_highest
FROM Employee e1
JOIN Employee e2 ON e2.salary > e1.salary
GROUP BY e1.salary
HAVING COUNT(DISTINCT e2.salary) = 2;
```
*Complexity:* O(n²) in the worst case due to self‑join, but acceptable for moderate table sizes.  
*Trade‑off:* No window functions → simpler on older DBs; however, performance suffers on large datasets.

**Edge Cases**  
- Less than three distinct salaries ⇒ returns `NULL`.  
- Duplicate top salaries are ignored because we count distinct higher values.  
- Negative or zero salaries handled naturally.

**Optimize & Communicate**  
For larger tables, replace the self‑join with a subquery that pre‑computes distinct salaries sorted descending and then pick the third entry (or use `LIMIT 2,1` in MySQL). Explain to interviewers: “I chose this self‑join pattern because the question explicitly limits us; I’d switch to a window function (`DENSE_RANK()`) or an indexed subquery if performance becomes critical.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
