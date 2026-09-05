---
qid: ing_0f640d3ea6__fp__local
question: 'Explain: Query Optimization — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 307
total_tokens: 478
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:38:11-05:00'
sources: []
---

**Query optimization is the engine that turns a declarative SQL statement into an efficient execution plan.**  
At its core, it solves the *search‑over‑plans* problem: given a set of operators (scans, joins, aggregates) and their costs, find the cheapest plan to satisfy a query. The cost model reflects two deep principles:

1. **Information‑theoretic entropy** – a join’s selectivity determines how many tuples survive; lower entropy means fewer rows to process downstream.  
2. **Geometric locality** – indexes reduce I/O by clustering related keys on disk, analogous to reducing the “distance” between data points in a metric space.

The optimizer starts with a *catalog* of statistics (histograms, cardinalities). It enumerates candidate plans using dynamic programming or heuristics, estimating cost as  
`cost = Σ I/O + CPU + network`, where each term is weighted by the expected selectivity. The cheapest plan is chosen.

**Non‑obvious insight:** *Predicate pushdown is not just a speed trick; it’s a form of “early filtering” that changes the probability distribution of intermediate results.* By applying filters before expensive joins, the optimizer effectively reduces the dimensionality of the data space, which can transform an otherwise quadratic join into linear time. This subtle shift in distribution often makes the difference between a 10‑second query and a minute-long one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
