---
qid: vq_a059566b19__star__local
question: WHOW DOES INDEXING IMPROVE PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:30-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the migration of our e‑commerce order database from a legacy MySQL schema to Amazon Aurora. The orders table had over 12 million rows and every daily sales report ran in >10 minutes because queries scanned the entire table.

**Task** – Reduce the query time for `SELECT * FROM orders WHERE customer_id = ? AND status = 'shipped'` from 9 minutes to under 1 second, while keeping write throughput high for new order inserts.

**Action** – I benchmarked the current plan with EXPLAIN ANALYZE and saw a full table scan. I created a composite B‑tree index on `(customer_id, status)` and added a partial index `WHERE status='shipped'` to keep it small. Using PostgreSQL’s `pg_stat_user_indexes`, I verified that 99.8 % of lookups hit the index. I also tuned the `autovacuum_vacuum_scale_factor` to maintain index health without affecting insert latency, and switched the engine to Aurora Serverless v2 for auto‑scaling during peak hours.

**Result** – Query latency dropped from 9 minutes to 0.7 seconds (≈1,300× faster). The write throughput increased by 15% because the smaller partial index reduced lock contention. I learned that targeted composite and partial indexes, combined with careful vacuum tuning, can dramatically improve read performance without sacrificing writes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
