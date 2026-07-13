---
qid: q096
question: "How would you optimize a slow SQL query?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the engine (Postgres vs. a columnar warehouse), whether it's a repeated production query, and the current runtime and data volume, since these change the levers.

**Approach** — Start with measurement, not guessing: read the execution plan to find the actual bottleneck, then apply targeted fixes.

**Depth** — First, `EXPLAIN ANALYZE` to see where time goes — sequential scans, expensive joins, spills to disk, bad row estimates. Common fixes: **indexing** columns used in WHERE/JOIN/ORDER BY (composite indexes matching predicate order; covering indexes to avoid table lookups); **reducing scanned data** by filtering early, projecting only needed columns, and leveraging partition pruning; **fixing joins** (right join order/type, ensuring join keys are indexed, avoiding cartesian blowups); and **rewrites** — replacing correlated subqueries with joins or window functions, avoiding functions on indexed columns that block index use. Stale statistics cause bad plans, so `ANALYZE`. Pre-aggregating with materialized views helps repeated heavy queries.

**Edge cases** — Data skew, parameter-sniffing, N+1 query patterns from the app, and low-selectivity indexes that the planner ignores. In columnar warehouses, indexing matters less than partitioning, clustering, and pruning.

**Optimize & communicate** — I'd measure before and after and change one thing at a time. Narrating "read the plan, find the bottleneck, fix that specific thing, re-measure" demonstrates the disciplined, evidence-driven approach interviewers reward over shotgun tuning.
