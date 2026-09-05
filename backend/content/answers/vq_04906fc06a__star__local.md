---
qid: vq_04906fc06a__star__local
question: What is Correlated Subquery?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 346
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:10-05:00'
sources: []
---

**Situation:**  
In a recent data‑pipeline project for our e‑commerce analytics team, we had to generate daily sales reports that included the average discount applied by each product category. The raw sales table was over 500 M rows, and the initial query returned an error because it tried to compute the average discount in a subquery without referencing the outer query’s current row.

**Task:**  
I needed to rewrite the query so it could calculate, for every category, its own average discount while still filtering by the day’s date range, all within a single statement that ran under our 2‑minute SLA.

**Action:**  
I used a correlated subquery:  
```sql
SELECT c.category_id,
       ( SELECT AVG(d.discount)
         FROM sales s
         JOIN discounts d ON s.discount_id = d.id
         WHERE s.category_id = c.category_id
           AND s.sale_date BETWEEN :start AND :end ) AS avg_disc
FROM categories c;
```
The subquery references `c.category_id` from the outer query, ensuring each iteration computes the average for that specific category. I also added a covering index on `(category_id, sale_date)` to speed lookups and switched to PostgreSQL’s `WITH` clause to materialize the discount table once.

**Result:**  
The final report generated in 1 min 45 s—70% faster than the legacy batch job—and produced accurate per‑category averages. I learned how correlated subqueries, while sometimes slower, can be tuned with proper indexing and query refactoring to meet strict performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
