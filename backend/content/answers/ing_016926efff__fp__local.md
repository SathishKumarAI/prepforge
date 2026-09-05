---
qid: ing_016926efff__fp__local
question: What Is Cardinality in a Database? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 310
total_tokens: 492
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:08:04-05:00'
sources: []
---

**Cardinality in a database is the *number of distinct values* that a column (or set of columns) can hold.**  
Why does this matter? A query planner must decide whether to use an index or perform a full table scan. That decision hinges on how selective a predicate will be: if only 2 % of rows satisfy `WHERE status='active'`, the optimizer expects a *low cardinality* column and may favor a bitmap index; if every row is unique, a B‑tree index is preferable.  

From an optimization perspective, cardinality estimates feed directly into cost models that balance I/O, CPU, and cache usage. Misestimates can lead to catastrophic performance, so DBMSs invest heavily in statistics gathering (sampling, histograms).  

A non‑obvious insight: **cardinality is not just a static attribute of data; it’s also a function of the *query context*.** For example, `COUNT(*)` over an index-only scan depends on the cardinality of the indexed columns, but a correlated subquery can change effective cardinality by filtering rows before counting. Thus, accurate cardinality estimation must consider both schema statistics and runtime predicates—an interplay between data geometry (value distribution) and probabilistic inference.  

In short, cardinality is the bridge that lets a database translate raw data into efficient execution plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
