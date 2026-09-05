---
qid: vq_9920765a00__star__local
question: Difference between WHERE and HAVING clause?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 317
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:11:00-05:00'
sources: []
---

**Situation** – In a quarterly sales report dashboard I was pulling data from our PostgreSQL warehouse for the marketing team. The raw table had over 1.2 million rows, and we needed to show the top‑10 products by average monthly revenue.

**Task** – I had to filter out inactive SKUs and then group by product category while keeping only categories that generated more than $50K in total sales for the quarter.

**Action** – I started with a `WHERE` clause to exclude rows where `is_active = false`, which reduced the dataset from 1.2 million to 480,000 rows before any aggregation. Then I used `GROUP BY product_category` and applied an aggregate function `SUM(sales_amount)`. To enforce the $50K threshold I added a `HAVING SUM(sales_amount) > 50000`. This ensured the filter ran after grouping, so it considered the summed totals per category rather than each individual row.

**Result** – The query executed in under 1.8 seconds instead of the previous 5.3 seconds, and the dashboard displayed accurate top‑10 categories in real time. I learned that `WHERE` is for pre‑aggregation filtering on raw rows, while `HAVING` is strictly post‑aggregation, essential when conditions involve aggregate functions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
