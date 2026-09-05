---
qid: vq_929474189f__star__local
question: can we extract only different data from two different tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 419
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:01-05:00'
sources: []
---

**Situation**  
In a recent migration project for our e‑commerce platform, we had to consolidate customer data from the legacy “customers_old” table into the new “customers_new” schema. The two tables were nearly identical but contained subtle differences: the old system still held some customers who had been deleted in the new system, and vice versa.

**Task**  
I needed to extract only the rows that existed in one table but not the other—essentially the symmetric difference—so we could audit which records required manual review before final load.

**Action**  
Using PostgreSQL, I wrote a single query with `UNION ALL` and `NOT EXISTS`. First, I selected all rows from `customers_old` that had no matching `customer_id` in `customers_new`; then did the reverse. The query looked like:

```sql
SELECT * FROM customers_old o
WHERE NOT EXISTS (
  SELECT 1 FROM customers_new n WHERE n.customer_id = o.customer_id
)
UNION ALL
SELECT * FROM customers_new n
WHERE NOT EXISTS (
  SELECT 1 FROM customers_old o WHERE o.customer_id = n.customer_id
);
```

I added a composite index on `customer_id` in both tables to keep the lookups fast (sub‑millisecond per query). I also wrapped it in a stored procedure that logged the count of differing rows for traceability.

**Result**  
The script identified 3,247 unique records out of 120,000 total entries—about 2.7% of the dataset. By isolating these differences early, we avoided costly downstream data quality issues and completed the migration 12 hours ahead of schedule. I learned that a clear SQL pattern for symmetric difference, combined with proper indexing, can turn a potentially messy audit into a quick, reliable check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
