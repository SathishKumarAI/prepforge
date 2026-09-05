---
qid: vq_7326a2762e__star__local
question: How can I get the definition of a view ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 328
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:32-05:00'
sources: []
---

**Situation** – While refactoring our data warehouse, I discovered an orphaned view `vw_sales_summary` that was still referenced by several downstream reports. The team needed to understand its logic before deciding whether to keep or replace it.

**Task** – Retrieve the full definition of the view from the database, verify its correctness, and document any issues for the next sprint.

**Action** – I logged into our PostgreSQL instance with `psql` and used the system catalog:  
```sql
SELECT pg_get_viewdef('vw_sales_summary', true) AS definition;
```
The second argument (`true`) forces the function to return the view’s SQL with all aliases expanded. I then compared the result against the version stored in our Git repo, noting a missing `JOIN` that caused stale aggregates. Using `EXPLAIN (ANALYZE)` on the query revealed an unnecessary full table scan on the `orders` table, so I rewrote the view to use indexed sub‑queries and added an index on `orders.customer_id`. Finally, I committed the corrected definition back to Git and updated the documentation.

**Result** – The view now runs 35% faster, reducing report generation time from 12 min to 7 min. I learned that always querying `pg_get_viewdef` with `true` surfaces hidden dependencies, saving hours of debugging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
