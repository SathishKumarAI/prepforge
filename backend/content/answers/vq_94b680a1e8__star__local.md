---
qid: vq_94b680a1e8__star__local
question: How can I generate primary key values for my table?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 298
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:16-05:00'
sources: []
---

**Situation** – In the last quarter I was refactoring our e‑commerce order service. The orders table had a composite key of (customer_id, timestamp) and we were hitting duplicate rows when customers placed multiple orders in rapid succession, which broke idempotency checks.

**Task** – I needed to introduce a robust primary key that would guarantee uniqueness, support sharding across database replicas, and still allow efficient range queries on order dates.

**Action** – I chose UUIDv4 for its low collision probability and independence from the application layer. To keep query performance high, I added a secondary B‑tree index on (order_date DESC) and partitioned the table by month. In PostgreSQL I used `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";` and set the default value of `id` to `uuid_generate_v4()`. I also updated the ORM mapping so that the application no longer had to generate IDs, reducing latency.

**Result** – The new schema eliminated duplicate orders entirely; load tests showed a 12 % reduction in write contention. Querying recent orders stayed under 80 ms on average. I learned that choosing the right PK strategy can dramatically simplify distributed system design while keeping performance predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
