---
qid: ing_60695ddcb0__star__local
question: 'Explain: Write a SQL query to update the counter — Distributed Counter
  System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 316
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:05-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building an online leaderboard for a gaming platform that served millions of concurrent users. The counters (scores, achievements) had to be updated in real time while keeping the data consistent across several read replicas.

**Task** – Design a distributed counter system and write the SQL logic that safely increments a user’s score without race conditions or lost updates, even when multiple writes hit the same row simultaneously.

**Action** – I used PostgreSQL with an advisory lock on the `user_id` to serialize updates per row. The update statement looked like this:

```sql
BEGIN;
SELECT pg_advisory_xact_lock(user_id) FROM users WHERE id = $1;

UPDATE user_scores
SET score = score + $2,
    last_updated = NOW()
WHERE user_id = $1;

COMMIT;
```

The advisory lock guarantees that only one transaction can modify a particular `user_id` at a time, eliminating lost updates. I also added an index on `user_id` for fast look‑ups and set the isolation level to `READ COMMITTED` to keep throughput high.

**Result** – After deployment the leaderboard latency dropped from 200 ms to under 30 ms per update, and we saw zero score discrepancies in production even during peak traffic. I learned that combining lightweight advisory locks with targeted indexing can provide strong consistency without sacrificing performance in a distributed environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
