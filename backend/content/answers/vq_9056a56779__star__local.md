---
qid: vq_9056a56779__star__local
question: WHAT IS A SUBQUERY IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 334
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:39-05:00'
sources: []
---

**Situation:**  
During a quarterly sales report project for our retail client, the executive team asked us to deliver a single dashboard that highlighted top‑selling products by region while also showing each product’s contribution to overall revenue.

**Task:**  
I needed to write an efficient SQL query that could pull the top 5 products per region and calculate their percentage share of total sales in that region—all within one statement, so the report generation time stayed under two minutes.

**Action:**  
I used a correlated subquery inside a window function. First, I built a CTE (`region_sales`) to aggregate sales by product and region. Then, for each row I added a column `rank` using `ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC)`. Finally, I wrapped that in an outer query that filtered `WHERE rank <= 5`, and used another subquery to compute the total regional revenue (`SELECT SUM(total_sales) FROM region_sales WHERE region = r.region`) for the percentage calculation. This kept all logic on the server, avoided multiple round‑trips, and leveraged indexes on `region` and `product_id`.

**Result:**  
The dashboard loaded in 1.8 seconds—30% faster than our previous two‑query approach—and the client could instantly see each product’s impact per region. I learned how to balance readability with performance by combining window functions and subqueries, and that a well‑placed correlated subquery can dramatically simplify complex reporting logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
