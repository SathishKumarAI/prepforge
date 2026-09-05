---
qid: ing_7f6ac83dc4__star__local
question: 'Explain: Covering Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 308
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:48:27-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time recommendation engine that pulled user‑behavior data from a PostgreSQL warehouse. The query that fed the model ran in ~1 s, but our SLA required <300 ms to keep latency low for the front‑end.

**Task** – Reduce the query time without adding costly caching layers or rewriting the model pipeline.

**Action** – I profiled the query with `EXPLAIN ANALYZE` and found that the engine was scanning 12 million rows, loading columns that were never used in the join. I created a covering index on `(user_id, event_time DESC)` including the `feature_value` column as an expression index. This allowed the planner to satisfy the entire SELECT—filter, sort, and projection—from the index alone, eliminating the heap scan. I also added a partial index for events within the last 30 days to keep the index size manageable.

**Result** – Query latency dropped from ~1 s to 220 ms (≈78% reduction). The recommendation throughput increased by 35%, freeing compute resources for training updates. I learned that careful index design, especially covering indexes, can deliver dramatic performance gains without extra infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
