---
qid: ing_5571e7b357__star__local
question: 'Explain: Caching — A Cheatsheet on Database Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 379
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:18:52-05:00'
sources: []
---

**Situation** – While leading a data‑science team at a fintech startup, we launched a real‑time fraud detection model that pulled user transaction histories from our PostgreSQL warehouse every second. The query latency jumped from 50 ms to over 1.2 s during peak hours, causing the API to time out and users to see “service unavailable” errors.

**Task** – I had to reduce average query latency below 200 ms without compromising data freshness or adding excessive infrastructure cost.

**Action** – First, I profiled the query plan with `EXPLAIN ANALYZE` and discovered a full table scan on a 5‑million row “transactions” table. I introduced a Redis cache keyed by user ID that stored the last 24 hours of transactions in a sorted set. The model now first checks Redis; if miss, it fetches from Postgres, updates the cache, and serves the result. I added a TTL of 5 minutes to keep the cache fresh for real‑time alerts. I also refactored the query to use `WHERE user_id = $1 AND timestamp > NOW() - INTERVAL '24 hours'` and created an index on `(user_id, timestamp)`.

**Result** – Latency dropped from 1.2 s to 85 ms (≈93% reduction), API uptime improved by 15%, and CPU usage fell by 30%. I learned that a well‑designed caching layer can dramatically improve performance when the data access pattern is highly repetitive, but it must be paired with appropriate invalidation strategies to avoid stale results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
