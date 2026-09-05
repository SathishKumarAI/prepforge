---
qid: ing_3703878b61__star__local
question: What Is a Database Index? — Indexing | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:18-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with refactoring the product analytics pipeline for an e‑commerce startup that had just hit 2 M daily active users. The clickstream data landed in a PostgreSQL table with 25 million rows per day, and our reporting queries were timing out at 30 seconds—far too slow for real‑time dashboards.

**Task:**  
I needed to reduce the query latency on the `events` table from >30 s to under 2 s without rewriting the entire schema or moving data to a NoSQL store.

**Action:**  
First, I profiled the queries and discovered that most reads filtered by `user_id` and `event_timestamp`. I created a composite B‑tree index on `(user_id, event_timestamp)` with PostgreSQL’s `CREATE INDEX CONCURRENTLY` to avoid locking. To further speed up range scans, I added a partial index on rows where `event_type = 'purchase'`, which reduced the index size by 70 %. I also tuned the `work_mem` and `maintenance_work_mem` settings so that the database could use more memory for sorting during query execution. Finally, I rewrote the slow queries to explicitly reference the new index using `SET enable_seqscan = off;`.

**Result:**  
After deployment, the average latency of our key analytics queries dropped from 28 s to 1.8 s—a 94% improvement—and we eliminated the 30‑second timeouts. The indexing strategy also cut disk usage for the index tables by roughly 40 %. I learned that a well‑designed composite index, combined with thoughtful query rewriting and resource tuning, can dramatically improve performance without costly infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
