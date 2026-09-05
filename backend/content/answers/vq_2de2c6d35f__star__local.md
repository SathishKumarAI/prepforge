---
qid: vq_2de2c6d35f__star__local
question: HOW DO YOU PERFORM A PIVOT IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 379
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:43-05:00'
sources: []
---

**Situation** – In my last role at a retail analytics firm, we had a monthly sales report that required summarizing revenue by product category across each store. The existing dataset was in long format: one row per transaction with columns for `store_id`, `category`, and `amount`. Managers needed a concise wide table showing total sales per category side‑by‑side.

**Task** – I had to transform the data into a pivoted view that grouped by `store_id` and displayed each category as a separate column, ensuring performance was acceptable on our 50 GB warehouse while keeping the solution maintainable for future categories.

**Action** – I used SQL Server’s `PIVOT` operator. First, I created a CTE to aggregate totals per store‑category pair:

```sql
WITH SalesAgg AS (
    SELECT store_id,
           category,
           SUM(amount) AS total_sales
    FROM transactions
    GROUP BY store_id, category
)
SELECT *
FROM SalesAgg
PIVOT (
    MAX(total_sales)
    FOR category IN ([Electronics], [Clothing], [Home])
) AS pvt;
```

I added an index on `store_id` and `category` to speed the aggregation. For dynamic categories, I built a stored procedure that queried `INFORMATION_SCHEMA.COLUMNS` to generate the column list at runtime.

**Result** – The pivoted report loaded in under 3 seconds versus 45 seconds pre‑pivot. Managers could instantly compare categories across stores, and the solution was easily extensible when new product lines were added. I learned how to balance SQL readability with performance tuning and automated dynamic pivots.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
