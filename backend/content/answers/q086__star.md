---
qid: q086
question: "What are SQL window functions and how do they differ from GROUP BY?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** On an analytics team at a SaaS company, a product manager wanted each customer's monthly revenue shown next to their running cumulative total and their rank within their segment, all in one table. The existing query used GROUP BY and collapsed everything, losing the row-level detail they needed.

**Task** I had to produce per-row analytics without throwing away the individual rows.

**Action** This was the perfect case for window functions. The key difference is that GROUP BY collapses many rows into one aggregate, while a window function computes across a set of rows but keeps every row intact. I used SUM(revenue) OVER (PARTITION BY customer ORDER BY month) for the running total, RANK() OVER (PARTITION BY segment ORDER BY revenue DESC) for the ranking, and LAG(revenue) OVER (...) to compute month-over-month change in the same pass. It replaced three self-joins and a subquery with one clean statement.

**Result** The query went from about 30 lines and 12 seconds down to 8 lines and under 2 seconds, and the PM got the row-level detail plus aggregates together. What I really internalized is that window functions add context to each row rather than summarizing it away.
