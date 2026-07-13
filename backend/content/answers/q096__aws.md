---
qid: q096
question: "How would you optimize a slow SQL query?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd frame this as **Dive Deep**: I don't guess, I measure. First I run EXPLAIN (or the query plan) to find where time actually goes, full table scans, nested-loop joins, spills to disk, or a bad row estimate. Optimizing without the plan is superstition.

Then I work the usual levers in order of impact: add or fix **indexes** on join and filter columns; **filter early** and select only needed columns to shrink the working set; rewrite correlated subqueries as joins or window functions; avoid functions on indexed columns that defeat the index; and check that **statistics** are fresh so the planner estimates rows correctly. On a warehouse like Redshift I'd add distribution and sort keys to co-locate joins and prune blocks; on Athena I'd partition and use columnar Parquet to cut data scanned.

A real example: a daily report ran 12 minutes. EXPLAIN showed a full scan from a non-sargable date filter (a function wrapped the column). I rewrote the predicate to be range-based, added a sort key on the date, and it dropped to under 30 seconds, which compounded since it ran hourly, and also cut Redshift cost.

A bar-raiser listens for whether I diagnose with the query plan before changing anything and quantify the win, rather than blindly adding indexes.
