---
qid: ing_777d411db1__star__local
question: 'Explain: RIGHT JOIN — How do SQL Joins Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 368
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:32:52-05:00'
sources: []
---

**Situation** – While building a recommendation engine for an e‑commerce platform, I noticed that the click‑through rate on product pages dropped by 18 % after a recent schema change. The new “product_info” table was split into two parts: `products` and `pricing`, and my analytics pipeline still expected a single source of truth.

**Task** – I had to merge these tables efficiently so that every click record could be enriched with the latest price, without discarding any click data even if a product lacked a current price entry. The goal was to restore accurate metrics in 48 hours.

**Action** – I wrote an SQL query using a `RIGHT JOIN` (or `LEFT JOIN` on the other side) to pull all rows from the `clicks` table and match them with pricing data when available:

```sql
SELECT c.user_id,
       c.product_id,
       p.price,
       c.click_time
FROM   clicks c
RIGHT  JOIN pricing p
ON     c.product_id = p.product_id;
```

This ensured every click stayed in the result set, while price was filled where it existed. I added a `COALESCE(p.price, default_price)` to handle missing prices and used `EXPLAIN ANALYZE` to confirm the join used an index on `product_id`. I also scheduled this job as a nightly batch.

**Result** – After deployment, click‑through rate metrics stabilized within 24 hours, and the enriched dataset improved recommendation accuracy by 12 %. I learned that choosing the correct join direction can preserve critical data while still allowing optional enrichment, which is essential for reliable ML feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
