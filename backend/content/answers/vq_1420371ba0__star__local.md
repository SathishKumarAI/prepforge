---
qid: vq_1420371ba0__star__local
question: How do you pivot data in SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:48:59-05:00'
sources: []
---

**Situation:** In a recent e‑commerce analytics project I was asked to generate monthly sales reports for each product category across the last year, but the raw data was stored in a long table with columns `order_date`, `category`, and `sales_amount`. The BI team needed a wide format view where each month became its own column.

**Task:** Transform that vertical dataset into a pivoted table so stakeholders could compare monthly performance side‑by‑side without writing custom code in the reporting tool.

**Action:** I used SQL Server’s `PIVOT` operator. First, I extracted year‑month using `FORMAT(order_date,'yyyy-MM')`. Then I created a derived table with aggregated sales per month and category. The pivot statement looked like:

```sql
SELECT Category,
       [2023-01], [2023-02], … , [2024-04]
FROM (
    SELECT Category, FORMAT(order_date,'yyyy-MM') AS Month,
           SUM(sales_amount) AS Sales
    FROM Orders
    WHERE order_date BETWEEN '2023-01-01' AND '2024-04-30'
    GROUP BY Category, FORMAT(order_date,'yyyy-MM')
) src
PIVOT (
    MAX(Sales)
    FOR Month IN ([2023-01],[2023-02],…,[2024-04])
) pvt;
```

I also added a `COALESCE` fallback to replace nulls with zeros and created an index on `(Category, order_date)` to speed the aggregation.

**Result:** The pivoted view delivered a single query that returned 12 columns per category, cutting report generation time from ~15 minutes to under 2 seconds. The BI dashboard updated instantly, and I received kudos for turning a manual Excel‑based process into an automated SQL solution. This reinforced the value of mastering T‑SQL pivot techniques for real‑world analytics challenges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
