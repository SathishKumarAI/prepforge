---
qid: vq_6f171ccdcf__star__local
question: WHAT ARE AGGREGATE FUNCTIONS IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 360
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:35-05:00'
sources: []
---

**Situation:**  
In a recent e‑commerce analytics project, our product team needed to understand daily sales trends across multiple regions. The dashboard they built was lagging because the raw order table had over 3 million rows, and every refresh required scanning the entire dataset.

**Task:**  
I had to rewrite the reporting queries so that the dashboard could pull insights in under two seconds while still delivering accurate totals, averages, and counts for each region and product category.

**Action:**  
I leveraged SQL aggregate functions—`SUM`, `AVG`, `COUNT`, `MIN`, and `MAX`—to collapse millions of rows into a single row per group. I grouped by `region_id` and `category_id`, added a `WHERE` clause to filter the last 30 days, and indexed those columns to speed up lookups. For example:  
```sql
SELECT region_id,
       category_id,
       COUNT(*) AS orders,
       SUM(amount) AS revenue,
       AVG(amount) AS avg_order_value
FROM orders
WHERE order_date >= CURRENT_DATE - INTERVAL '30 DAY'
GROUP BY 1,2;
```
I also used window functions (`SUM() OVER (PARTITION BY ...)`) to calculate running totals without multiple scans.

**Result:**  
The query execution time dropped from ~15 seconds to <0.5 seconds, enabling real‑time dashboard updates. Sales managers could now see instant regional revenue and average order values, leading to a 12% faster decision cycle for promotional campaigns. I learned that thoughtful use of aggregates, combined with proper indexing, turns massive data into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
