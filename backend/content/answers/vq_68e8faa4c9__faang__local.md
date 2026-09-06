---
qid: vq_68e8faa4c9__faang__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 391
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:14:27-05:00'
sources: []
---

**Clarify**  
A Common Table Expression (CTE) is a temporary result set that you can reference within a single SQL statement—think of it like an inline view or a named subquery. It’s defined using the `WITH` clause and exists only for the duration of that query.  

**Approach**  
1. Show syntax: `WITH cte_name (col_list) AS (subquery)`  
2. Explain usage: recursive vs non‑recursive, referencing itself.  
3. Mention scope: visible to the following SELECT/INSERT/UPDATE/DELETE.  

**Depth**  
- **Non‑recursive CTEs** are equivalent to derived tables; they can improve readability and allow reusing a complex subquery.  
- **Recursive CTEs** let you traverse hierarchical data (e.g., employee → manager). They work by iteratively joining the base case with the recursive term until no new rows appear.  
- Performance: the optimizer may materialize or inline the CTE; it’s not guaranteed to be cached across statements.  

**Edge Cases**  
- Infinite recursion if the termination condition is missing (needs a depth limit).  
- Large result sets can cause memory pressure; consider adding `OPTION (MAXRECURSION 0)` carefully.  
- Some engines don’t allow CTEs in DML statements that modify the same table referenced by the CTE.  

**Optimize & Communicate**  
Use CTEs for clarity, not for performance hacks. If you need a truly reusable temporary set across multiple queries, prefer temp tables or indexed views. When explaining to an interviewer, emphasize that CTEs are primarily syntactic sugar for cleaner code and recursive logic, while also noting their limitations in terms of persistence and optimization guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
