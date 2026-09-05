---
qid: vq_afedf566ea__star__local
question: WHAT ARE UNION AND UNION ALL, AND HOW DO THEY DIFFER?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:58-05:00'
sources: []
---

**Situation:** While working on a reporting dashboard for our e‑commerce analytics platform, I had to combine user activity logs from two separate microservices—one handling purchases and the other handling returns. Each service stored its data in different PostgreSQL tables but with identical schemas.

**Task:** My goal was to generate a single, chronological stream of all transactions to feed into an ETL pipeline that produced daily revenue reports. I needed to decide whether to use `UNION` or `UNION ALL`.

**Action:** I started by profiling the data volume: each table held about 2 M rows per day. Using `EXPLAIN ANALYZE`, I saw that `UNION` triggered a de‑duplication step, which added roughly 15 % overhead due to sorting and hashing. Since our schemas were guaranteed non‑overlapping (purchases never duplicated returns), I opted for `UNION ALL`. I implemented it in the data warehouse view:

```sql
CREATE VIEW daily_transactions AS
SELECT * FROM purchases
UNION ALL
SELECT * FROM returns;
```

I also added a partitioned index on the timestamp column to keep query times under 2 seconds.

**Result:** The pipeline’s runtime dropped from ~35 s (with `UNION`) to <5 s, saving about 30 k CPU‑hours per month. I learned that choosing between `UNION` and `UNION ALL` hinges on data overlap guarantees and performance trade‑offs—`UNION` enforces uniqueness at the cost of extra processing, while `UNION ALL` preserves all rows and is faster when duplicates are impossible or acceptable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
