---
qid: ing_aca64bb39e__star__local
question: 'Explain: Indexing — Database-Internals/DataStructures/Index.md at main
  \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 326
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:17:37-05:00'
sources: []
---

**Situation:** In my last role I was tasked with refactoring the product catalog microservice that served millions of search queries per day. Our latency had spiked from 120 ms to over 1.2 s after adding new attributes, and the database was choking on full-table scans.

**Task:** Reduce average query time below 200 ms while keeping write throughput high enough for real‑time inventory updates.

**Action:** I first profiled the workload and identified that most reads were filtering by `category_id` and ordering by `price`. I designed a composite B‑Tree index on `(category_id, price)` using PostgreSQL’s `btree_gin` extension to support both equality and range predicates. To avoid write amplification, I added a partial index only for active products (`is_active = true`). I also tuned the fill factor to 70% and enabled `pg_stat_statements` to monitor hot spots. During deployment, I used `CREATE INDEX CONCURRENTLY` to keep the service online.

**Result:** Query latency dropped from 1.2 s to 110 ms on average—an 90% reduction—and the index added only a 3 % write overhead. The exercise taught me how to balance read performance with write cost by selecting the right data structure (B‑Tree) and using partial indexes to keep storage efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
