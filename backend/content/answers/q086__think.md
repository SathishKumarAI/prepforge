---
qid: q086
question: "What are SQL window functions and how do they differ from GROUP BY?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm they want the conceptual distinction plus syntax. State the assumption: both operate over groups, but they differ in whether rows collapse.
2. **Mental model.** `GROUP BY` *collapses* many rows into one per group; a window function computes across a set of rows (the "window") but *keeps every row*. Same aggregation math, different row cardinality in the output.
3. **Reason step by step.** Explain the `OVER (PARTITION BY ... ORDER BY ...)` clause: `PARTITION BY` defines the group, `ORDER BY` enables running/ranked calculations. Give examples window functions unlock that GROUP BY can't easily do: `ROW_NUMBER`/`RANK`/`DENSE_RANK`, running totals with `SUM() OVER (ORDER BY ...)`, `LAG`/`LEAD` for period-over-period, and per-row group averages for comparison. Note you can show a row *and* its group's total side by side.
4. **Traps to avoid.** Thinking window functions replace GROUP BY (they don't aggregate away rows); forgetting they run after the WHERE/GROUP BY but can't be used in a WHERE (wrap in a subquery/CTE); confusing RANK (gaps) with DENSE_RANK (no gaps) and ROW_NUMBER (arbitrary ties).
5. **Sanity-check and deliver.** Test: "top 3 earners per department" needs a window (ranking while keeping rows); "count per department" suits GROUP BY. Lead with "collapse vs preserve rows," then show one PARTITION BY example.
