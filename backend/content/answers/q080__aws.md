---
qid: q080
question: "What does GROUP BY do in SQL, and how does HAVING differ from WHERE?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

GROUP BY collapses rows sharing a value into one row per group so I can apply aggregates (COUNT, SUM, AVG) per group. The WHERE vs HAVING distinction is about **when** filtering happens: WHERE filters individual rows **before** grouping; HAVING filters **after** aggregation, on the grouped results. So "orders over $100" is WHERE; "customers whose total spend exceeds $1,000" is HAVING, because that total only exists post-aggregation.

I'd stress the performance point through **Dive Deep** and **Frugality**: pushing predicates into WHERE shrinks the set before the expensive grouping, so I filter early wherever the logic allows and reserve HAVING strictly for aggregate conditions. Mixing them up either returns wrong numbers or scans far more data than needed.

A real example: I owned a query flagging high-value churners that put a spend threshold in HAVING when it belonged in WHERE (a per-row status filter). Moving that predicate to WHERE cut the Redshift scan and dropped runtime from 90 seconds to under 10, and it ran on a schedule so that compounded daily.

A bar-raiser listens for whether I understand the logical order of execution and can reason about correctness and cost together, not just recite the syntax.
