---
qid: vq_46cba13478__star__local
question: HOW DO YOU USE THE WHERE CLAUSE IN SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 371
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:57:05-05:00'
sources: []
---

**Situation:**  
At my last company I was tasked with generating a monthly sales report for the retail division. The raw data had over 1.2 million rows in the `transactions` table, and the existing query pulled every record, causing the report to run for almost an hour and saturating our reporting database.

**Task:**  
I needed to rewrite the query so it returned only the relevant transactions—those from the last month, with a status of “completed,” and belonging to high‑margin product categories—while keeping execution time under five minutes.

**Action:**  
I started by adding a composite index on `(transaction_date, status, category_id)` to speed up lookups. Then I rewrote the SELECT statement to use a WHERE clause that combined all three filters:

```sql
SELECT p.name,
       SUM(t.amount) AS monthly_sales,
       COUNT(*)          AS txn_count
FROM transactions t
JOIN products p ON t.product_id = p.id
WHERE t.transaction_date >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH)
  AND t.status = 'completed'
  AND p.category_id IN (SELECT id FROM categories WHERE margin > 0.25)
GROUP BY p.name;
```

I also used `EXPLAIN` to verify that the index was being used and removed any redundant joins.

**Result:**  
The query now returns results in under three minutes, a 95% reduction in runtime. The sales team can review the data daily instead of waiting for batch jobs. I learned that a well‑crafted WHERE clause, combined with appropriate indexing, is often more powerful than adding materialized views or rewriting business logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
