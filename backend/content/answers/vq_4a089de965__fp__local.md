---
qid: vq_4a089de965__fp__local
question: What are the differences between Temporary Table and Table Variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 483
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:34:03-05:00'
sources: []
---

**Why the distinction matters**

In relational systems, *temporary* storage is a local optimisation of the query planner: it must be fast enough for short‑lived use yet isolated so that concurrent sessions don’t interfere. Two mechanisms exist—**temp tables** (`#…`) and **table variables** (`@…`). The choice boils down to *scope* vs. *metadata cost*.

| Aspect | Temp Table | Table Variable |
|--------|------------|----------------|
| **Lifetime** | Session‑wide until dropped or connection closed | Function/Batch‑scoped; automatically released |
| **Visibility** | Accessible by any nested procedure, triggers, and can be indexed on the fly | Visible only in current batch; cannot be indexed after declaration |
| **Statistics & Re‑planning** | SQL Server creates statistics (often auto) → optimizer has accurate cardinality estimates; can benefit from query plan caching | No statistics are built; optimizer treats it as a single row, leading to pessimistic plans unless hints or `OPTION (RECOMPILE)` are used |
| **Indexing** | Can create indexes/constraints before use | Only the primary key is implicit; no explicit indexes allowed |
| **Concurrency & Locking** | Uses shared/demand locks like normal tables | Uses a lightweight “row‑level” lock, but still subject to deadlocks in complex scenarios |

**Deeper principle**

The difference stems from *how metadata costs trade against execution speed*. Temp tables pay an upfront cost (creating a physical tempdb object and statistics) that pays off when the optimizer can predict cardinality. Table variables avoid that overhead but give up statistical precision, which is why they’re preferable for very small, predictable sets.

**Non‑obvious insight**

Because table variables lack statistics, their use in large joins often forces the query engine to pick suboptimal plans—sometimes even ignoring indexes on other tables. A quick fix: **declare a `TABLE` variable and then `INSERT … SELECT …` into it**, letting the optimiser treat the source as a temporary result set with proper statistics, while still keeping the variable’s scoped semantics. This hybrid technique is rarely mentioned but can dramatically improve performance in stored procedures that mix small look‑ups with larger analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
