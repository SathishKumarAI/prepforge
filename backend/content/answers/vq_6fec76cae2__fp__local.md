---
qid: vq_6fec76cae2__fp__local
question: What is a sub-query?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 377
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:12-05:00'
sources: []
---

**Sub‑query**  
In relational query planning the goal is to evaluate a *set of rows* that satisfy a predicate expressed in SQL’s declarative language. A sub‑query is a *nested declarative specification* that supplies either a set or scalar value to an outer predicate, thereby decomposing a global condition into smaller, reusable parts.

Why must it work this way?  
1. **Separation of concerns** – The outer query can focus on its own joins and projections while delegating a complex filter (e.g., “rows whose ID appears in another table”) to the sub‑query.  
2. **Logical equivalence** – A sub‑query is semantically equivalent to an explicit join or EXISTS clause, but it preserves locality: the optimizer can decide whether to inline it, materialize its result, or push predicates down.  
3. **Optimization principle** – The optimizer treats a sub‑query as a *sub‑plan*. It estimates cost and selects execution strategies (hash‑join, merge‑join, index scan) based on cardinality and selectivity, just like any other component of the query tree.

**Non‑obvious insight:**  
Sub‑queries are often misinterpreted as “extra work” that must always be executed. In fact, many modern engines transform correlated sub‑queries into *semi‑joins* or even eliminate them entirely by rewriting the plan to use a single join with appropriate filters. Thus, a well‑written sub‑query can be *free* if the optimizer recognizes it as equivalent to a cheaper operation—highlighting that the power of SQL lies not in the syntax but in the optimizer’s ability to reason about equivalence classes of relational algebra expressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
