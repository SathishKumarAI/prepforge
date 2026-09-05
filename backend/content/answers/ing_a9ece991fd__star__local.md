---
qid: ing_a9ece991fd__star__local
question: 'Explain: Composite Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 377
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:12:25-05:00'
sources: []
---

**Situation:**  
At my previous startup we were launching a real‑time recommendation service for an e‑commerce platform with 50 million users and 10 million products. Our analytics pipeline stored every user click in a PostgreSQL table, but query latency for the “top N items” per user was over 2 seconds during peak traffic.

**Task:**  
Reduce the query time to under 200 ms while keeping write throughput above 5k ops/sec, and ensure the index didn’t bloat storage or slow down inserts.

**Action:**  
I designed a composite B‑tree index on `(user_id, event_timestamp DESC, item_id)`. This order let us quickly locate a user’s most recent clicks and then filter by item. I added partial indexes for high‑volume users (top 1% of traffic) to keep the overall size manageable. To handle the write side, I switched to PostgreSQL’s `REWRITE` WAL settings and tuned `autovacuum` so inserts didn’t trigger full index rebuilds. Finally, I benchmarked with `pgbench`, adjusting `fillfactor` until we hit the sweet spot.

**Result:**  
Query latency dropped from 2 s to 180 ms on average, while write throughput stayed at 6k ops/sec. Storage grew by only 12% versus a naïve single‑column index. I learned that the key is ordering columns in the composite index to match the most common query pattern and balancing read/write performance with storage constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
