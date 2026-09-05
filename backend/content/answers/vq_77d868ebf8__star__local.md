---
qid: vq_77d868ebf8__star__local
question: How can I eliminate duplicate values in a table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 350
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:31-05:00'
sources: []
---

**Situation** – While working on the customer analytics platform for a retail client, the nightly ETL job was loading millions of transaction records into a PostgreSQL fact table. By mid‑January we noticed that sales totals were 12 % higher than expected because duplicate rows were being inserted during the incremental load.

**Task** – I had to design a robust de‑duplication step that could run on large volumes without breaking the existing pipeline, and reduce the nightly processing time by at least 20 %.

**Action** – First, I added a unique composite index on (`customer_id`, `transaction_date`, `product_sku`) to catch duplicates early. Then I rewrote the load script to use a CTE that selects distinct rows from the staging table, writes them into a temporary table, and finally performs an `INSERT … ON CONFLICT DO NOTHING` into the fact table. For performance, I enabled parallel workers on the PostgreSQL server and switched the target tables’ fillfactor to 70 %. Finally, I scheduled a nightly data quality check that logs the count of duplicates found each run.

**Result** – The duplicate rows were reduced from ~1.2 M to <5 k per day, cutting the ETL runtime from 3 h to 2.4 h (a 20 % improvement). I learned how careful index design and PostgreSQL’s upsert semantics can cleanly solve deduplication at scale while keeping pipelines maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
