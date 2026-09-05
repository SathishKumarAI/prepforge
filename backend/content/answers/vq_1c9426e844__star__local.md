---
qid: vq_1c9426e844__star__local
question: WHAT IS THE DIFFERENCE BETWEEN COUNT(), SUM(), AND AVG()?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 331
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:21-05:00'
sources: []
---

**Situation:**  
In a recent data‑migration project for an e‑commerce platform, the analytics team had to rewrite legacy reports that were running on an old Oracle database. The new system used PostgreSQL, and we noticed the quarterly sales dashboard was lagging behind by several minutes.

**Task:**  
I needed to refactor the query that calculated total revenue, number of orders, and average order value so it ran under two seconds while still producing accurate figures for the BI tool.

**Action:**  
First, I replaced the legacy `SELECT * FROM orders` with a single aggregated query. I used `COUNT(*)` to get the exact number of rows (orders), `SUM(total_amount)` to compute total revenue, and `AVG(total_amount)` to derive the average order value. I also added indexes on `order_date` and `total_amount`, and rewrote subqueries as Common Table Expressions to keep the plan readable. I benchmarked each function’s execution time in PostgreSQL’s EXPLAIN ANALYZE to confirm the planner was using the indexes.

**Result:**  
The refactored query executed in 1.3 seconds versus the previous 8.7 seconds, cutting dashboard load time by 85%. The clear separation of `COUNT`, `SUM`, and `AVG` also made the logic easier for analysts to audit, improving confidence in the metrics. I learned that understanding each aggregate’s semantics is essential for both performance tuning and data accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
