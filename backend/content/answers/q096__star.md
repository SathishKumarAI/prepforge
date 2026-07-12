---
qid: q096
question: "How would you optimize a slow SQL query?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At an ad-tech company, a nightly attribution report ran for over 40 minutes and had started overrunning into business hours, blocking the morning dashboards. The on-call kept getting paged for it.

**Task** I owned getting that query back under a few minutes without changing the report's output.

**Action** I worked it methodically. First I ran EXPLAIN ANALYZE and found a sequential scan over a 200-million-row events table plus a nested-loop join. I added a composite index on the join and filter columns, which turned the seq scan into an index scan. I noticed the query pulled SELECT *, so I trimmed it to only the needed columns, cutting I/O. I pushed a date filter down so we scanned one day instead of all history, replaced a correlated subquery with a window function, and partitioned the events table by day so the planner could prune irrelevant partitions.

**Result** Runtime dropped from about 42 minutes to just under 90 seconds, and the morning-dashboard pages stopped. My takeaway: always start from the query plan rather than guessing, because the biggest wins came from killing full scans and reducing the rows and columns touched, not from clever rewrites.
