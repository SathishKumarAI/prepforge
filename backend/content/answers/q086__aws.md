---
qid: q086
question: "What are SQL window functions and how do they differ from GROUP BY?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

Window functions compute a value across a set of rows related to the current row **without collapsing them**. That's the key difference from GROUP BY: GROUP BY returns one row per group, while a window function keeps every row and adds the aggregate alongside it, using OVER(PARTITION BY ... ORDER BY ...). So I can show each order next to its customer's running total or rank.

They unlock things GROUP BY can't do cleanly: running totals, ROW_NUMBER/RANK for top-N-per-group, LAG/LEAD for period-over-period deltas, and moving averages. I frame this through **Dive Deep** and **Invent and Simplify**: window functions replace ugly self-joins and correlated subqueries with one readable, faster pass.

A real example: I needed each customer's most recent order plus their lifetime rank. The existing query used three self-joins and ran for minutes. I rewrote it with ROW_NUMBER() OVER (PARTITION BY customer ORDER BY order_date DESC) and SUM() OVER (...); it dropped to seconds on Redshift and the logic fit on one screen, so the next analyst could actually maintain it.

A bar-raiser listens for whether I know when a window function is the right tool over GROUP BY, and whether I care about both correctness and readability and performance, not just producing a result.
