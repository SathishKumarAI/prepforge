---
qid: vq_4cae68d2db__star__local
question: What is the purpose of PARTITION BY in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:22-05:00'
sources: []
---

**Situation** – In my last role at a retail analytics firm, we were building a monthly sales dashboard for each store chain. The BI team needed the top‑performing product categories per region, but our raw fact table had millions of rows and the report was taking minutes to run.

**Task** – I had to deliver an efficient SQL query that could compute the rank of each category within every region without materializing huge intermediate tables or writing complex correlated subqueries. The goal was a 30 % faster runtime and accurate per‑region rankings for the executive summary.

**Action** – I used the `PARTITION BY` clause inside a window function:  
```sql
SELECT region,
       category,
       SUM(sales) AS total_sales,
       RANK() OVER (PARTITION BY region ORDER BY SUM(sales) DESC) AS rank
FROM sales_fact
GROUP BY region, category;
```
By partitioning on `region`, the database engine performed the ranking calculation independently for each region’s subset of rows. This avoided cross‑region joins and let the query planner use parallel execution paths.

**Result** – The dashboard load time dropped from 2 minutes to under 30 seconds—a 90 % improvement. The executives could now see real‑time top categories per region, and I learned that `PARTITION BY` turns a global aggregation into localized windows, drastically reducing IO and CPU costs in large analytical queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
