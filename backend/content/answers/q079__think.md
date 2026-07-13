---
qid: q079
question: "Explain the difference between INNER, LEFT, RIGHT, and FULL OUTER joins in SQL."
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Establish the setup: two tables joined on a key, and the question is *which rows survive* when matches are missing. Assume the "left" table is the one named first in the query.
2. **Mental model.** Picture a Venn diagram of two tables. Each join type keeps a different region: the overlap only, the whole left circle, the whole right circle, or both circles entirely, with NULLs filling absent columns.
3. **Reason step by step.** INNER keeps only rows matched in both. LEFT keeps every left row plus matches, NULLs where the right has none. RIGHT is the mirror: every right row, NULLs on the left. FULL OUTER keeps all rows from both, NULLs wherever either side lacks a match. A quick example: `customers LEFT JOIN orders` lists customers with no orders as NULL order ids.
4. **Traps to dodge.** Do not say INNER returns all rows, or that LEFT drops left rows, or that FULL returns only matches. Watch that wrong join types silently drop or duplicate rows.
5. **Sanity-check and communicate.** Verify with the Venn mental image and note the anti-join trick — `LEFT JOIN ... WHERE right.key IS NULL` finds left rows with no match. Deliver the four types crisply with what each does to unmatched rows.
