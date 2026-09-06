---
qid: ing_7fc603149c__fp__local
question: 'Explain: Expression Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 471
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:16-05:00'
sources: []
---

### Why an **expression index** is needed

When a query uses a *derived* value—say `LOWER(name)` or `price * quantity`—the database can’t reuse a plain B‑tree on the underlying columns unless it recomputes that expression for every row. In machine‑learning pipelines, feature engineering often involves such derived columns (normalised counts, hashed fingerprints). Recomputing them at query time becomes a bottleneck.

The fundamental problem is *indexability of non‑columnar values*. A B‑tree can only order keys that are stored directly; it cannot sort on an arbitrary function of the data. Thus we must materialise the result of the expression and index that materialisation, just as we do for columns.

### The mechanism

1. **Materialised value**: When a row is inserted or updated, the database evaluates the expression once and stores the result in a hidden column.
2. **Index on the hidden column**: A B‑tree (or hash) is built over this column. The index entry contains the evaluated key plus a pointer to the original tuple.
3. **Query rewrite**: When a query references `LOWER(name)` in a predicate, the optimiser rewrites it to use the expression index automatically.

Thus the system turns an *unindexable* predicate into a standard indexed search with O(log n) complexity instead of O(n).

### Deeper principle

This is an instance of **pre‑computation for amortised cost**—a classic optimisation strategy. By paying once at write time (to compute and store the expression), we save many times during reads. It mirrors memoisation in functional programming: expensive computations are cached to avoid repeated work.

### Non‑obvious insight

Many people think expression indexes merely “store the result of a function.” In reality, they also **enable join optimisations**. Because the hidden column is part of the primary key of the index, the database can use it in hash‑join or merge‑join plans that would otherwise be impossible when only raw columns are available. This subtle ability to fuse expression evaluation with join predicates is what makes expression indexes indispensable for high‑throughput ML feature stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
