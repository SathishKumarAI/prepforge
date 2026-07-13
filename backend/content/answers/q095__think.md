---
qid: q095
question: "How would you find the second-highest salary in an employees table using SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Ask the crucial question: how to handle **ties** — if two people share the top salary, is "second highest" the next distinct value or the second row? Also confirm behavior when fewer than two salaries exist (should return NULL, not error).
2. **Mental model.** This is a ranking problem. Two families of solutions: distinct-value approaches (subquery/OFFSET) and window-function ranking (`DENSE_RANK`).
3. **Reason step by step.** Cleanest tie-safe answer: `SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)` — the max below the max, inherently distinct. Alternative: `DENSE_RANK() OVER (ORDER BY salary DESC)` in a subquery, filter `rank = 2` (DENSE_RANK, not RANK, so tied top earners don't push second place off). Or `SELECT DISTINCT salary ... ORDER BY salary DESC LIMIT 1 OFFSET 1` — but note LIMIT/OFFSET without DISTINCT breaks on ties.
4. **Traps to avoid.** Using `LIMIT 1 OFFSET 1` on raw rows (duplicate top salaries give the wrong answer); using `RANK` instead of `DENSE_RANK`; assuming a row always exists; forgetting per-group variants need `PARTITION BY`.
5. **Sanity-check and deliver.** Test on data with tied top salaries and on a one-row table. Communicate by stating your tie assumption first, then give the MAX-below-MAX one-liner and mention DENSE_RANK as the scalable, per-department-ready version.
