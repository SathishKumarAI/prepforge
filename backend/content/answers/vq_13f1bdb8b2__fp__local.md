---
qid: vq_13f1bdb8b2__fp__local
question: WHAT IS A CORRELATED SUBQUERY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 390
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:23:53-05:00'
sources: []
---

### Correlated Subqueries – Why They Exist

When a database evaluates a query, it often needs to compare each row of the outer relation with some value that depends on that very row. A *correlated subquery* is the SQL mechanism for expressing “for this particular row, compute something else”.  
Formally, a correlated subquery contains at least one reference to a column from an outer query; the engine must therefore **re‑execute** it once per qualifying row.

#### The underlying principle
The core problem is *dependency*: we want a derived value that varies with each input row. In relational algebra this would be a **join** between the outer relation and the result of the subquery, but SQL lets us write it as a nested SELECT for readability and composability.  
Because the subquery’s predicate can change per row, the optimizer treats it like a *parameterized* query; it cannot push selections or projections across the boundary without knowing the bound values.

#### Non‑obvious insight
Many developers assume that a correlated subquery is merely syntactic sugar for an equivalent join. In practice, however, the engine **does not materialize** the inner result set once; instead, it streams each outer row through the subquery’s plan. This means:

- The subquery can be **lazy‑evaluated** (short‑circuiting on `EXISTS` or `NOT EXISTS`);
- It may trigger **nested loops** that are far less efficient than a hash join.

Thus, while correlated subqueries are elegant for expressing “per‑row” logic, they often conceal a costly nested‑loop execution pattern. Recognizing this can guide you to rewrite the query as an explicit join or use window functions for better performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
