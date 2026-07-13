---
qid: q080
question: "What does GROUP BY do in SQL, and how does HAVING differ from WHERE?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Note the two parts: what GROUP BY does, and the WHERE-vs-HAVING distinction. Assume you want per-group summaries via aggregate functions (COUNT, SUM, AVG, MIN, MAX).
2. **Mental model.** GROUP BY collapses rows sharing key values into buckets, one output row per bucket. The WHERE/HAVING split is really about *timing*: filter before bucketing versus after. Anchor everything on SQL's logical execution order.
3. **Reason step by step.** GROUP BY department lets you COUNT and AVG per department. WHERE filters individual rows *before* grouping and cannot see aggregates. HAVING filters whole groups *after* aggregation and *can* reference aggregates like AVG(salary) > 50000. Combine both: WHERE removes inactive rows first, then HAVING drops low-average groups.
4. **Traps to dodge.** Do not swap them — WHERE cannot use aggregates, HAVING is for post-aggregation. Do not treat them as interchangeable. Do not assume GROUP BY sorts output.
5. **Sanity-check and communicate.** Recite the logical order — FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY — to prove the timing story. Deliver GROUP BY's bucketing role, then "WHERE = pre-aggregation rows, HAVING = post-aggregation groups."
