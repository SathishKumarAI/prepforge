---
qid: vq_f4ed265ecf__fp__local
question: WHAT IS THE DIFFERENCE BETWEEN LEAD() AND LAG() FUNCTIONS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 441
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:46-05:00'
sources: []
---

### From First Principles

In a relational table the *row order* is an abstraction: it only matters when you define a **window** (a contiguous slice of rows) and want to refer to elements *before* or *after* the current row.  
The two window functions that implement this are `LEAD()` and `LAG()`.  

| Function | Direction relative to the current row |
|----------|---------------------------------------|
| `LEAD(col, offset)` | **Future** rows (offset > 0) |
| `LAG(col, offset)`  | **Past** rows (offset < 0) |

Both take an *ordering* (`ORDER BY`) and a *window frame* (`ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` by default). The engine materializes the sorted partition, then for each row it looks up the value of `col` at position *current index ± offset*.  

#### Why this design?

- **Determinism**: By fixing the order first, the functions become pure; they always return the same result for a given dataset.
- **Index‑friendly**: The offset lookup can be done in O(1) per row if the underlying engine keeps an array of values (e.g., a materialized list).
- **Uniform API**: A single function family (`LEAD`/`LAG`) covers both directions, simplifying the language grammar.

#### Non‑obvious insight

The *frame* clause does not affect `LEAD()` or `LAG()` themselves; it only limits which rows are considered part of the window. Thus you can use `LEAD(col) OVER (ORDER BY t DESC ROWS BETWEEN UNBOUNDED PRECEDING AND 1 FOLLOWING)` to look one row ahead **in reverse order**, effectively turning `LEAD` into a “previous” value in that ordering. This symmetry lets you write elegant queries without switching functions, merely by tweaking the frame bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
