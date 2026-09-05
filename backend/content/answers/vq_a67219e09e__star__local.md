---
qid: vq_a67219e09e__star__local
question: WHAT IS THE DIFFERENCE BETWEEN EXISTS AND IN?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:13:16-05:00'
sources: []
---

**Situation** – In a data‑quality audit for our e‑commerce platform, the nightly ETL was flagging duplicate orders because the join on `orders.customer_id` to `customers.id` was returning rows that actually didn’t exist in the customers table. The performance log showed the query was running over 10 seconds per run.

**Task** – I needed to rewrite the filtering logic so it correctly excluded non‑existent customer IDs and reduced runtime by at least 50%.

**Action** – I replaced the `WHERE orders.customer_id IN (SELECT id FROM customers)` clause with a correlated `EXISTS` subquery:  
```sql
SELECT o.*
FROM orders o
WHERE EXISTS (
    SELECT 1
    FROM customers c
    WHERE c.id = o.customer_id
);
```
Because `EXISTS` stops scanning the customers table as soon as it finds a match, the optimizer could use an index on `customers.id`. I also added a covering index on `orders(customer_id)` to avoid lookups. During testing, the query plan switched from a hash join to a nested‑loop with index seeks.

**Result** – The nightly job time dropped from 12 seconds to 4 seconds, and duplicate orders fell by 98%. I learned that `IN` is great for small, static lists but can trigger full table scans on large subqueries, whereas `EXISTS` leverages short‑circuit evaluation and index usage for better scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
