---
qid: q086
question: "What are SQL window functions and how do they differ from GROUP BY?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm we want the conceptual difference plus a concrete example, and assume a standard SQL dialect (Postgres/BigQuery).

**Approach** — Define a window function, contrast row cardinality against GROUP BY, then show a canonical use case.

**Depth** — A window function computes an aggregate or ranking across a set of rows *related to the current row* without collapsing them. GROUP BY reduces many rows to one per group; a window function keeps every row and adds a computed column. The `OVER (PARTITION BY ... ORDER BY ...)` clause defines the window. Example: `AVG(salary) OVER (PARTITION BY dept)` returns each employee's row alongside their department average — impossible with GROUP BY alone without a self-join. Ranking functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`), offset functions (`LAG`, `LEAD`), and running totals (`SUM(...) OVER (ORDER BY ...)`) are the workhorses.

**Edge cases** — `RANK` leaves gaps after ties while `DENSE_RANK` doesn't; `ROW_NUMBER` is arbitrary among ties without a deterministic ORDER BY. Frame clauses (ROWS vs. RANGE) change running-total results. Window functions run after WHERE/GROUP BY, so you can't filter on them directly — you need a subquery/CTE.

**Optimize & communicate** — I'd note windows can replace expensive self-joins and narrate that I reach for them for "per-group context on each row," signaling SQL fluency interviewers score.
