---
qid: q095
question: "How would you find the second-highest salary in an employees table using SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — Key question: do we want the second-highest *distinct* salary (ties collapsed), and what should happen if fewer than two distinct salaries exist? I'll assume distinct, returning NULL if none.

**Approach** — Show a portable subquery solution and a window-function solution, then discuss which handles ties and scale better.

**Depth** — Simple and portable:

```sql
SELECT MAX(salary) AS second_highest
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```

This returns NULL cleanly when there's no second value. A window-function version generalizes to the *N*th highest:

```sql
SELECT DISTINCT salary
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) t
WHERE rnk = 2;
```

I use `DENSE_RANK` so tied top salaries don't push the second distinct value out; `ROW_NUMBER` would incorrectly return a duplicate of the top. `OFFSET 1 LIMIT 1` on a distinct ordered list also works but returns no row (not NULL) when absent.

**Edge cases** — Duplicate top salaries, fewer than two distinct values, NULL salaries (filter them), and per-department "second highest" (add `PARTITION BY department`).

**Optimize & communicate** — For large tables an index on salary helps; the MAX-subquery is O(n) and simplest. I'd state my tie assumption aloud first — clarifying ambiguity before coding is the signal interviewers score.
