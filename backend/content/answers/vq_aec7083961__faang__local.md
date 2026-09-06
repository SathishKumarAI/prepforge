---
qid: vq_aec7083961__faang__local
question: How to implement if-then-else in a select statement?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 417
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:16-05:00'
sources: []
---

**Clarify**  
The interviewer wants an SQL solution that mimics an `if‑then‑else` block inside a query – i.e., return one value when a condition holds, otherwise another. Assume we’re on a typical ANSI‑SQL database (PostgreSQL/MySQL/Oracle). We’ll also assume the condition is row‑level and depends on columns in the same table.

**Approach**  
1. Use `CASE` expression – the de‑facto SQL “if‑then‑else”.  
2. If multiple conditions, chain `WHEN … THEN …`.  
3. For a single boolean flag, use `CASE WHEN flag THEN val_true ELSE val_false END`.

**Depth**  
```sql
SELECT id,
       CASE 
           WHEN score >= 90 THEN 'A'
           WHEN score >= 80 THEN 'B'
           WHEN score >= 70 THEN 'C'
           ELSE 'F'
       END AS grade
FROM students;
```
*Complexity*: O(n) over the result set; no extra indexes needed beyond those for the underlying query.  
*Trade‑offs*: `CASE` is evaluated per row, so it’s efficient. If you need to reference a subquery inside each branch, consider using lateral joins or CTEs to avoid repeated work.

**Edge Cases**  
- Null values: `WHEN score IS NULL THEN 'N/A'`.  
- Multiple tables: use correlated subqueries or join them first.  
- Performance hit if the branches contain heavy aggregates – cache results in a CTE.

**Optimize & Communicate**  
Explain that `CASE` is ANSI‑compliant, works across engines, and can be nested for complex logic. If the database supports it, suggest using `FILTER (WHERE …)` or window functions for readability. Conclude by summarizing: “Use `CASE WHEN…THEN…ELSE…END`; it’s clean, efficient, and portable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
