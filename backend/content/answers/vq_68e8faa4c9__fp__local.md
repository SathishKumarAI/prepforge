---
qid: vq_68e8faa4c9__fp__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 384
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:52-05:00'
sources: []
---

A **Common Table Expression (CTE)** is a temporary named result set that lives only for the duration of a single SQL statement.  
Think of it as a *named sub‑query* that you can reference multiple times—much like a local variable in a program, but for relational data.

**Why it must exist**

1. **Readability & modularity** – Complex queries often involve nested sub‑queries or repeated logic. A CTE lets you write the logic once and refer to it by name, making the outer query cleaner.
2. **Optimization** – The optimizer treats a CTE like an inline view; it can decide whether to materialize it (store intermediate rows) or fold it into the main plan. This gives the engine flexibility to choose the most efficient execution strategy.
3. **Recursion** – For hierarchical data, a recursive CTE provides a declarative way to iterate until no new rows appear, avoiding procedural loops.

**Deeper principle**

A CTE is essentially a *declarative closure* over a sub‑query. It encapsulates a set of rows and exposes it as an immutable view. The optimizer can then apply relational algebraic transformations (e.g., push‑down predicates) inside the CTE before merging with the outer query, preserving correctness while maximizing performance.

**Non‑obvious insight**

Most people think CTEs are always “materialized” like temporary tables. In fact, unless you use `WITH ... AS MATERIALIZED` (PostgreSQL) or a similar hint, the engine may choose to inline the CTE. Thus, a poorly written recursive CTE can lead to exponential blow‑up if the optimizer materializes it; understanding this subtle execution mode is key to writing efficient recursive queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
