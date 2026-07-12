---
qid: q080
question: "What does GROUP BY do in SQL, and how does HAVING differ from WHERE?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** A stakeholder wanted "revenue per region, but only regions doing over a million, excluding refunded orders," and the analyst's query kept either erroring or returning wrong totals.

**Task** I needed to write it correctly and teach the difference between filtering rows before versus after aggregation.

**Action** GROUP BY collapses rows sharing a value, here region, into one row per group so you can compute aggregates like SUM and COUNT per group. The key distinction is WHERE versus HAVING: WHERE filters individual rows BEFORE grouping and can't reference aggregates, while HAVING filters the grouped results AFTER aggregation and is where aggregate conditions live. So I put the refund exclusion in WHERE, since that's a per-row condition applied before grouping, and the "over a million" threshold in HAVING, since that tests the SUM of each group. I made sure every non-aggregated column in the SELECT was in the GROUP BY.

**Result** The query returned the right eight regions with correct totals, and the report finally matched finance's numbers. The rule I drill in: WHERE filters rows before the group, HAVING filters groups after, and you can't swap them.
