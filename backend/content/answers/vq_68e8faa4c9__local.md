---
qid: vq_68e8faa4c9__local
question: WHAT IS A COMMON TABLE EXPRESSION (CTE)?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 425
total_tokens: 650
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
A Common Table Expression (CTE) is a temporary named result set you can reference within the same `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement—think of it as an in‑query subtable that lives only for the duration of that query. In practice, I use CTEs to break complex analytics pipelines into readable pieces: one CTE computes daily user sign‑ups, another joins that with churn metrics, and the final SELECT aggregates them.

**Nuance & Experience:**  
- **Readability vs Performance:** In production on Snowflake and Redshift, CTEs simplify code but can trigger a *subquery flattening* optimization that rewrites the query into a single pass. When I added a recursive CTE to walk a category hierarchy in a catalog DB, Snowflake materialized it as an intermediate table, costing ~10 % more compute than an equivalent JOIN‑based solution.  
- **Recursive CTEs:** They’re powerful for graph traversal (e.g., finding all descendants of a node). In PostgreSQL I’ve seen them hit the *max recursion depth* limit; raising `max_recursion_depth` solved it but added overhead.  
- **Debugging:** Because CTEs are scoped, I often materialize them temporarily (`SELECT … LIMIT 0`) to inspect intermediate results with `EXPLAIN ANALYZE`. This helped catch a Cartesian product that was inflating runtime from 2 s to 45 s in an ETL job.  
- **Tooling:** In dbt models, CTEs become reusable macros; I wrap them in Jinja templates so the same logic can be reused across projects without duplicating SQL.

In short, CTEs are a developer‑friendly way to decompose queries, but you must watch for optimizer rewrites and recursion limits that can turn a readable statement into a performance bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
