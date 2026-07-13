---
qid: q096
question: "How would you optimize a slow SQL query?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask which query, on what engine, how slow, and how often it runs — an ad-hoc analyst query and a hot production query justify different effort. State the assumption: I'll diagnose before changing anything.
2. **Mental model.** "Measure, don't guess." The `EXPLAIN`/`EXPLAIN ANALYZE` plan is the source of truth; optimization means cutting the amount of data scanned and the cost of joins.
3. **Reason step by step.** Read the plan for red flags: full table scans on large tables, expensive sorts, nested-loop joins over big inputs, bad row estimates (stale statistics). Then apply levers in order of leverage: add/adjust **indexes** on filter and join columns (and covering indexes); filter early and select only needed columns (avoid `SELECT *`); ensure predicates are **sargable** (no functions wrapping indexed columns); fix join order/type and join keys; pre-aggregate or **materialize** heavy repeated work; partition large tables; and `ANALYZE` to refresh statistics.
4. **Traps to avoid.** Adding indexes blindly (they slow writes and may go unused); optimizing without a plan; ignoring that `OR`, leading-wildcard `LIKE`, and column-wrapping functions defeat indexes; premature tuning of a query that runs once.
5. **Sanity-check and deliver.** Re-run `EXPLAIN ANALYZE` and compare actual time/rows before and after. Communicate the bottleneck you found, the change, and the measured speedup.
