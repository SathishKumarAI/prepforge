---
qid: vq_7cf8ff86a9__star__local
question: How do I order a union ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 366
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:06:30-05:00'
sources: []
---

**Situation:** In my previous role I had to generate a consolidated sales report for two regions. Each region’s data was stored in separate tables with identical schemas but different date ranges. The executive team wanted the combined list sorted by total revenue per product.

**Task:** Merge the two datasets into one result set and order it by descending revenue, ensuring no duplicate products were counted twice.

**Action:** I wrote a single SQL query that used `UNION ALL` to stack the rows from both tables, then wrapped it in a subquery that aggregated revenue per product with `SUM()`. Finally, I applied an outer `ORDER BY total_revenue DESC`. The query looked like:

```sql
SELECT product_id,
       SUM(revenue) AS total_revenue
FROM (
    SELECT product_id, revenue FROM region_a_sales
    UNION ALL
    SELECT product_id, revenue FROM region_b_sales
) AS all_sales
GROUP BY product_id
ORDER BY total_revenue DESC;
```

I tested it on a sample dataset to confirm the ordering and deduplication worked as expected.

**Result:** The report produced a single, sorted list of 1,200 products in under two seconds. Executives used it to prioritize high‑margin items for next quarter’s marketing spend. I learned that using `UNION ALL` plus aggregation is faster than `UNION DISTINCT` when duplicates are intentional, and that ordering should happen after the final aggregation to avoid unnecessary sorting on intermediate rows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
