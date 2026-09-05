---
qid: vq_8d749fe3db__star__local
question: WHAT IS A UNIQUE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 335
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:11-05:00'
sources: []
---

**Situation:**  
In a recent migration of our customer‑orders database from on‑prem to AWS Aurora, the orders table had a composite key that was causing duplicate rows when multiple microservices wrote concurrently.

**Task:**  
I needed to enforce uniqueness on the combination of `customer_id`, `order_date`, and `product_sku` without adding application logic, and ensure the migration completed within our two‑week release window.

**Action:**  
First I analyzed the existing data for duplicates using a SELECT with COUNT(*) HAVING. After cleaning up anomalies, I created a UNIQUE INDEX on `(customer_id, order_date, product_sku)` directly in Aurora’s MySQL dialect:  
```sql
ALTER TABLE orders ADD CONSTRAINT uq_customer_order_product 
UNIQUE KEY (customer_id, order_date, product_sku);
```
I also added a partial index for the most common SKU ranges to keep write latency low. During the rollout I monitored `InnoDB`’s lock wait times and adjusted the isolation level from REPEATABLE READ to READ COMMITTED for our write-heavy services.

**Result:**  
Post‑migration, duplicate insert attempts dropped to zero; we logged a 15 % reduction in application‑level error handling. The index added only 0.8 GB of storage overhead and improved query performance by 12 % on common lookups. I learned that careful pre‑migration deduplication coupled with targeted indexing can dramatically improve data integrity while keeping system latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
