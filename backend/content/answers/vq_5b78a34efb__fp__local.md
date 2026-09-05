---
qid: vq_5b78a34efb__fp__local
question: How to combine dataframes in Pandas?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 353
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:36:26-05:00'
sources: []
---

Combining DataFrames is a *linear‑algebraic* problem: you want to assemble a new matrix whose rows or columns are the union of two existing ones, preserving relationships between observations.  
- **`pd.concat([df1, df2], axis=0)`** stacks rows (or columns). It aligns on the *union* of labels; missing entries become `NaN`. Think of it as adding vectors in a common basis.  
- **`pd.merge(df1, df2, on="key")`** is an *inner join*: you form a Cartesian product and then filter by equality on one or more keys. Internally Pandas builds hash tables for the key columns; this guarantees \(O(n)\) time if the keys are well‑distributed—an embodiment of the hashing principle in computer science.  
- **`df1.join(df2)`** is syntactic sugar for a left join on indices, useful when both DataFrames share meaningful row labels.

The subtlety most people miss: **index alignment is not cosmetic**. Pandas treats indexes as *semantic keys*. If you `concat` two time‑series with overlapping timestamps, the resulting index contains duplicates unless you drop them or set `ignore_index=True`. This behavior forces you to think of DataFrames as *relational tables* where every column can be indexed independently—a design choice that keeps operations consistent across heterogeneous data.

In short: use `concat` for vertical/horizontal stacking when labels don’t matter, and `merge/join` when relational integrity (keys or indices) is essential.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
