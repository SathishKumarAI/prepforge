---
qid: vq_cb825f4af8__star__local
question: HOW DO YOU OPTIMIZE SQL QUERIES FOR PERFORMANCE?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 341
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:44-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, our fraud‑detection service ran nightly jobs that scanned billions of transaction records. The query that generated the daily risk score table was taking 12 minutes on a 4‑node cluster, causing downstream alerts to be delayed past SLA.

**Task** – I had to cut the runtime to under 3 minutes while keeping accuracy intact and without refactoring the entire ETL pipeline.

**Action** – First, I used `EXPLAIN ANALYZE` to identify a full table scan on the `transactions` table. I added a composite index on `(merchant_id, transaction_date)` after profiling that these columns were the most selective. Next, I rewrote the query to replace correlated subqueries with a window function (`SUM() OVER`) and pushed filters into the CTEs so the planner could prune rows earlier. I also switched from `INNER JOIN` to `LEFT JOIN` where appropriate to avoid unnecessary row duplication, and leveraged PostgreSQL’s `parallel_hashjoin`. Finally, I tuned work_mem and enabled `enable_nestloop = off`.

**Result** – The job completed in 2 minutes, a 75% speed‑up. Alert latency dropped below our SLA, and we saw a 10% reduction in false positives because the faster pipeline allowed more timely data ingestion. I learned that profiling + targeted indexing combined with query rewrite can deliver dramatic gains without costly hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
