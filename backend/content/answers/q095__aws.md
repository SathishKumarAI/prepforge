---
qid: q095
question: "How would you find the second-highest salary in an employees table using SQL?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

I'd start by clarifying requirements, because "second-highest" is ambiguous: do we mean the second-highest **distinct** salary, and what should happen with ties or when fewer than two distinct values exist? Getting that right is **Dive Deep** and **Insist on the Highest Standards**.

Then I'd offer a clean solution. My preferred approach is DENSE_RANK, because it handles ties and duplicates correctly:

```sql
SELECT salary FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rk
  FROM employees
) t WHERE rk = 2;
```

DENSE_RANK ensures duplicate top salaries don't consume the second slot. I'd contrast the common `SELECT MAX(salary) WHERE salary < (SELECT MAX(salary))` trick, which works for the top two but doesn't generalize to Nth and returns nothing (rather than NULL) if there's no second value, an edge case I'd call out. The window approach generalizes to "Nth highest" by parameterizing the rank.

I'd mention performance: with an index on salary this is cheap; on a warehouse like Redshift the window function scans once.

A bar-raiser listens for whether I clarify the distinct/ties ambiguity up front, pick a solution that generalizes and handles edge cases, and can reason about correctness rather than just recalling one memorized snippet.
