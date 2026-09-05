---
qid: ing_1081363071__star__local
question: 'Explain: 👍 Advantages of Indexes — Database-Internals/DataStructures/Index.md
  at main \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 316
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:01:18-05:00'
sources: []
---

**Situation** – In late 2023 I was refactoring a legacy e‑commerce platform that served over 1 M monthly active users. The product catalog query “SELECT * FROM products WHERE category_id = 42” was taking ~800 ms, causing the checkout page to time out during peak traffic.

**Task** – My goal was to bring that latency below 50 ms without adding costly caching layers or rewriting the entire data model.

**Action** – I started by profiling the query plan; it showed a full table scan on a 12 GB table. I created a B‑tree index on `category_id` and added a covering composite index `(category_id, price)` to satisfy the SELECT list. Using PostgreSQL’s `pg_stat_user_indexes`, I verified hit rates were >99%. I also tuned `maintenance_work_mem` for faster rebuilds during peak hours and set `autovacuum_vacuum_scale_factor` lower to keep the index fresh.

**Result** – The query latency dropped from 800 ms to 35 ms, reducing checkout page load time by 40 % and eliminating timeout errors. Additionally, read throughput increased by ~3×, freeing CPU cycles for other services. I learned that a well‑placed B‑tree index can dramatically improve performance while keeping the system simple and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
