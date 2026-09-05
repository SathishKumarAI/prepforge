---
qid: ing_14abc2c2d2__star__local
question: 'Explain: Indexing — 7 Must-Know Strategies to Scale Your Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 346
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:32-05:00'
sources: []
---

**Situation:**  
At my previous company we built a recommendation engine that served millions of users daily. The query performance on the PostgreSQL backend degraded from 50 ms to over 2 s during peak traffic, causing a noticeable lag in the user experience.

**Task:**  
I was tasked with reducing the latency of the most expensive SELECT statements (≈ 15% of total queries) by at least 80% without redesigning the schema or adding new hardware.

**Action:**  
1. **Column‑level indexes** on `user_id`, `item_id`, and `rating` to accelerate filtering.  
2. Created a **composite B‑tree index** (`user_id, item_score DESC`) for the top‑N recommendation query.  
3. Implemented a **partial index** (`WHERE is_active = true`) to shrink index size on sparse data.  
4. Added a **GIN index** on the JSONB `attributes` column to speed up tag searches.  
5. Used **expression indexes** (`lower(name)`) for case‑insensitive lookups.  
6. Deployed an **index-only scan** by adding `covering columns`.  
7. Regularly ran `REINDEX CONCURRENTLY` and monitored with `pg_stat_user_indexes`.

**Result:**  
Query latency dropped from 2 s to 200 ms, a 90% improvement, and the CPU load decreased by 35%. I learned that thoughtful index design—balancing coverage, selectivity, and maintenance—can deliver massive performance gains without extra infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
