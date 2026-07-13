---
qid: q080
question: "What does GROUP BY do in SQL, and how does HAVING differ from WHERE?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Confirm the interviewer wants what GROUP BY produces plus the WHERE-vs-HAVING distinction, likely with the logical order of execution.

**Approach** — Explain grouping and aggregation, then contrast the two filters by *when* they run in the query pipeline.

**Depth** — **GROUP BY** collapses rows sharing the same values in the grouping columns into one row per group, so aggregate functions (COUNT, SUM, AVG, MIN, MAX) compute per group — e.g., revenue per region. Every non-aggregated column in SELECT must appear in GROUP BY. The filters differ by stage: **WHERE** filters individual rows *before* grouping and cannot reference aggregates. **HAVING** filters *after* grouping and can reference aggregates. Logical order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. So `WHERE amount > 0` trims rows first; `HAVING SUM(amount) > 1000` then keeps only qualifying groups.

**Edge cases** — Putting an aggregate in WHERE errors out. Filtering rows in HAVING that WHERE could handle is inefficient — WHERE reduces rows earlier and can use indexes. NULLs form their own group. SELECT columns not in GROUP BY (in strict SQL) error.

**Optimize & communicate** — Push non-aggregate conditions into WHERE so fewer rows reach the grouping step. Narrate: "WHERE filters rows pre-aggregation, HAVING filters groups post-aggregation" — stating the execution order is exactly the signal.
