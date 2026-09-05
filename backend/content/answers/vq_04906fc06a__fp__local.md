---
qid: vq_04906fc06a__fp__local
question: What is Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 353
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:20:57-05:00'
sources: []
---

A correlated subquery is a *conditional filter* whose evaluation depends on the outer query’s current row.  
Imagine you want to know, for each employee, whether their salary exceeds the average salary of the department they belong to. The “average salary” can’t be pre‑computed once and reused; it must be recomputed for every employee because the target department changes with each outer row.

Formally, a subquery is **correlated** if it references one or more columns from its parent query. During execution, the engine evaluates the subquery *for each* outer tuple, effectively treating the correlated columns as parameters. This dynamic binding turns a static expression into an *optimization problem*: we need to decide whether to materialize intermediate results (e.g., pre‑compute department averages) or to inline them and recompute on demand. Modern query optimizers often rewrite such subqueries into joins or window functions, which are more efficient because they exploit set‑based evaluation rather than row‑by‑row execution.

**Non‑obvious insight:**  
Correlated subqueries are not inherently bad; their cost arises from *inefficient* execution plans that fail to recognize when a join would be equivalent. If the optimizer can detect that the correlation is simply a key reference (e.g., `dept_id`), it can transform the query into an inner join with aggregation, turning a potentially O(n*m) operation into a single hash or merge join plus group‑by. Thus, understanding the underlying relational algebra lets us rewrite correlated subqueries into their “canonical” join form for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
