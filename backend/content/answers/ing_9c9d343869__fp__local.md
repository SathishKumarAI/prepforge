---
qid: ing_9c9d343869__fp__local
question: 'Explain: Multiple Tables and Window Logic: All Three Correct, One Much
  Slower'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 551
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:38:14-05:00'
sources: []
---

**Why do three distinct SQL plans all produce the same result yet differ wildly in speed?**

At its core, the query is a *join‑and‑aggregate* problem: for each row in **Orders**, we need the most recent **CustomerHistory** record that precedes it (the “windowed” join). The optimizer can realize this in three mathematically equivalent ways:

| Plan | Core idea | Strength |
|------|-----------|----------|
| 1. Nested‑loop with `TOP 1` per order | For each order, scan **CustomerHistory** until the first matching key and timestamp ≤ order date. | Works when history is already sorted by key + timestamp. |
| 2. Merge join on `(key, ts)` | Two sorted streams are merged; for every order we keep the last seen history row that satisfies `ts <= order.ts`. | Linear in total rows if both sides are sorted. |
| 3. Window function (`ROW_NUMBER() OVER (PARTITION BY key ORDER BY ts DESC)`) | Compute a running number per customer, then filter `rn = 1`. | Exploits the engine’s built‑in windowing optimizer; can push predicates into index scans. |

All three compute **exactly** the same set of rows because they are all equivalent transformations of the relational algebra: a *left‑anti* join with a correlation condition turned into an *existential* test.

**Why is one much slower?**

The slowest plan usually comes from a mis‑estimated cost for the nested loop (Plan 1). It assumes that, on average, only a handful of history rows must be examined per order. In reality, if **CustomerHistory** contains many older records per key, the engine will scan far deeper into the table before finding a match—often all rows. The optimizer’s statistics mislead it because the correlation condition (`ts <= order.ts`) is not represented in the cardinality estimates; thus it underestimates the work.

The merge join (Plan 2) and window function (Plan 3) both exploit *index seek* or *streaming* semantics that respect the ordering constraint, so they avoid scanning irrelevant rows. The key non‑obvious insight: **the optimizer’s cost model cannot see the “window” predicate across correlated subqueries; only a plan that materializes the order (merge or window) can guarantee linear time**.

In short, all three are algebraically correct, but the one that respects the ordering constraint in its execution path is the efficient choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
