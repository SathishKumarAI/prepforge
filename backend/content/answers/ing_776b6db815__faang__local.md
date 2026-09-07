---
qid: ing_776b6db815__faang__local
question: How to populate Sales Rank table? — Salesrankbycategory
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:21:28-05:00'
sources: []
---

**Clarify**  
We need a table `SalesRankByCategory` that, for each product category and time period (e.g., month), stores the rank of every SKU based on its sales volume.  
Assumptions to confirm:  
- Sales data are available in a fact table (`sales(sku_id, qty_sold, sale_date)`).  
- There is a dimension `products(p_id, category)` and a date dimension for grouping.  
- Ranking should be 1‑based with ties handled by `DENSE_RANK`.  

**Approach**  
1. Join sales to products and date dimensions.  
2. Aggregate total quantity per SKU per month.  
3. Partition by category & month, order by qty descending, compute rank.  
4. Insert or upsert into `SalesRankByCategory(sku_id, category, month, rank, qty)`.

**Depth (SQL)**  

```sql
INSERT INTO SalesRankByCategory
SELECT 
    p.sku_id,
    p.category,
    DATE_TRUNC('month', d.sale_date) AS month,
    DENSE_RANK() OVER (
        PARTITION BY p.category, DATE_TRUNC('month', d.sale_date)
        ORDER BY SUM(d.qty_sold) DESC
    ) AS rank,
    SUM(d.qty_sold) AS qty
FROM sales d
JOIN products p ON d.sku_id = p.sku_id
GROUP BY p.sku_id, p.category, DATE_TRUNC('month', d.sale_date);
```

Complexity: O(N log N) due to window function; memory proportional to distinct (category, month, sku).  

**Edge Cases**  
- No sales for a SKU in a period → row omitted.  
- Ties produce same rank; subsequent ranks skip numbers (dense vs dense).  
- Data volume spikes may require batch processing or incremental updates.

**Optimize & Communicate**  
Use incremental materialized view: on new month, only process that month’s data. Index `SalesRankByCategory` on `(category, month)` for fast queries. Explain to interviewers how the window function neatly handles ranking and why dense rank fits business semantics, showcasing structured reasoning and depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
