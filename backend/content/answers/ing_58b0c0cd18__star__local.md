---
qid: ing_58b0c0cd18__star__local
question: 'Explain: Choosing the Right Index — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 367
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:24:54-05:00'
sources: []
---

**Situation:**  
I was leading a recommendation engine for a streaming platform that served over 10 million users per day. Our query layer was built on PostgreSQL with a large `user_item_score` table (≈ 3 billion rows). After a spike in traffic, we hit > 200 ms latency on top‑k queries.

**Task:**  
Reduce average query time to < 80 ms while keeping write throughput high enough for real‑time scoring updates.

**Action:**  
1. Profiled queries with `EXPLAIN ANALYZE` and found the planner repeatedly used a sequential scan because of a poorly chosen index on `(user_id, item_id)`.  
2. Designed a composite B‑tree index on `(user_id, score DESC)` to satisfy the top‑k ORDER BY clause.  
3. Added a partial index for cold users (`last_active > now() - interval '30 days'`) to keep the index small.  
4. Implemented an in‑memory cache (Redis) for the hottest 1 % of users, falling back to SQL only when needed.  
5. Monitored write latency; tuned `maintenance_work_mem` and used `CONCURRENTLY` rebuilds during off‑peak windows.

**Result:**  
Query latency dropped from 210 ms to 65 ms on average, with a 40% reduction in CPU usage. Write throughput remained > 5k TPS. I learned that indexing must align with the exact query pattern (user → top items) and that hybrid caching can bridge the gap between strict consistency and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
