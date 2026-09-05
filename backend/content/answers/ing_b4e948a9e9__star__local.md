---
qid: ing_b4e948a9e9__star__local
question: 'Explain: Common Types of Locks — Database Locks Explained'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 369
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:21-05:00'
sources: []
---

**Situation**  
During a migration of our e‑commerce order system to PostgreSQL, we noticed transaction latency spiking by 40 % during peak checkout hours. Log analysis revealed frequent deadlocks and long wait times on the `orders` table.

**Task**  
I needed to diagnose which lock types were causing contention, refactor queries to reduce blocking, and ensure that our new schema still supported ACID guarantees without sacrificing throughput.

**Action**  
First I enabled `pg_stat_activity` and `pg_locks` views to capture live lock states. I discovered a mix of *Row Share* locks from `SELECT … FOR UPDATE` in the inventory service and *Exclusive* locks from bulk `UPDATE orders SET status='shipped'` runs triggered by nightly jobs. Using `EXPLAIN (ANALYZE, BUFFERS)` I rewrote the bulk update into a set‑based statement with an index on `(status, shipped_date)`, cutting lock duration from 12 s to 1.3 s. I also introduced optimistic concurrency control in the checkout API: each order row had a `version` column, and updates used `WHERE version = $old`. This reduced the need for row‑level locks altogether.

**Result**  
Lock wait times dropped by 78 %, overall transaction latency fell below 120 ms during peak load, and we avoided any deadlocks in production. I learned that understanding the subtle differences between *Row Share*, *Exclusive*, and *Share* locks—and aligning query patterns with proper indexing—can transform system performance without compromising data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
