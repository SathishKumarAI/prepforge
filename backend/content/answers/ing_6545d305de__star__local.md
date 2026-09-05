---
qid: ing_6545d305de__star__local
question: 'Explain: How Indexes Work — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 320
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:50:11-05:00'
sources: []
---

**Situation:**  
During a data‑science sprint for our e‑commerce recommendation engine, we had to pull user interaction logs from a PostgreSQL table that held over 12 million rows. A simple query on `user_id` was timing out in under a minute, causing the model training pipeline to stall.

**Task:**  
I needed to reduce the lookup latency from minutes to milliseconds so the feature extraction could run in real time without adding hardware costs.

**Action:**  
First I profiled the queries with `EXPLAIN ANALYZE`, revealing a full table scan. I then created a B‑tree index on `(user_id, event_timestamp DESC)` because we always queried the most recent events per user. To avoid index bloat, I added a partial index `WHERE event_type = 'click'` and set `VACUUM` schedules accordingly. I also tuned `work_mem` to 64 MB so the planner could use the index for larger sorts. Finally, I rewrote the query to use a window function that capped results at the last 10 events per user.

**Result:**  
Query time dropped from ~90 seconds to <200 ms on average—an 99% speedup. The training pipeline now processes a day's worth of logs in under an hour, freeing compute for hyper‑parameter sweeps. I learned that careful index design, combined with query refactoring and maintenance planning, can dramatically improve ML data pipelines without scaling hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
