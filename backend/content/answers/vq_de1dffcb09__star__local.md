---
qid: vq_de1dffcb09__star__local
question: Why are the DML operations are slower on Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 280
total_tokens: 518
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:23:22-05:00'
sources: []
---

**Situation** – At my previous company we had a nightly ETL that inserted 1.2 million transaction records into the `orders` table. The table had a composite index on `(customer_id, order_date)` to speed up reporting queries.

**Task** – I was asked to reduce the load window from 4 hours to 30 minutes without sacrificing data integrity or report latency.

**Action** – First I profiled the insert run with `EXPLAIN` and found that each row triggered an index update on two columns. To mitigate this, I dropped the composite index temporarily, ran a bulk `INSERT … SELECT`, then rebuilt the index in one go using `CREATE INDEX CONCURRENTLY`. I also switched from individual inserts to a single batch insert via `COPY` with `ON CONFLICT DO NOTHING` to avoid per-row locks.

**Result** – The load time dropped from 4 hours to 25 minutes, and the post‑load query latency improved by 35%. I learned that indexes impose write overhead because each DML operation must maintain the index structure; batching updates or deferring index rebuilds can dramatically improve performance when bulk loading data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
