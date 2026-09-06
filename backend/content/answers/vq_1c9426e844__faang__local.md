---
qid: vq_1c9426e844__faang__local
question: WHAT IS THE DIFFERENCE BETWEEN COUNT(), SUM(), AND AVG()?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 469
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:00:18-05:00'
sources: []
---

**Clarify**  
You’re asking about three common aggregate functions in SQL (and many analytical frameworks). I’ll assume we’re working with a relational table where each row is an observation and the functions operate over a set of numeric or nullable values.

**Approach**  
Explain each function’s semantics, then contrast them on: 1) result type, 2) handling of NULLs, 3) computational cost, 4) use‑case scenarios. Provide a quick example to illustrate differences.

**Depth**  

| Function | What it returns | NULL behavior | Typical use |
|----------|-----------------|---------------|-------------|
| `COUNT(*)` | Number of rows in the group (including those with NULL values in any column). | Counts all rows; ignores only row absence. | Size estimation, pagination. |
| `COUNT(col)` | Number of non‑NULL entries in *col*. | Skips NULLs. | Cardinality of a specific attribute. |
| `SUM(col)` | Arithmetic sum of non‑NULL values. | Ignores NULLs; result is NULL only if no rows or all values are NULL (depending on DB). | Totals, budgets. |
| `AVG(col)` | Mean = SUM(col)/COUNT(col) over non‑NULL values. | Uses the same COUNT semantics as SUM’s numerator. | Average performance metrics. |

**Edge cases**  
- Empty group → `SUM` and `AVG` return NULL; `COUNT(*)` returns 0.  
- All NULL values → same as above.  
- Integer overflow in `SUM`; use appropriate numeric types or cast to BIGINT.

**Optimize & communicate**  
Explain that most engines compute `SUM` and `COUNT` in a single pass, so `AVG` is just an extra division. If only the average is needed, avoid materializing both aggregates separately. Mention that indexing on the aggregated column can speed up `COUNT(col)` but not `COUNT(*)`. Conclude by highlighting when each function is appropriate: use `COUNT(*)` for row counts, `COUNT(col)` for distinct non‑NULL entries, and `SUM/AVG` for quantitative summaries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
