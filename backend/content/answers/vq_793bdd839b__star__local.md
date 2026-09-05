---
qid: vq_793bdd839b__star__local
question: WHAT IS A COMPOSITE KEY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 340
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:05:37-05:00'
sources: []
---

**Situation**  
While revamping the order‑processing system for a mid‑size e‑commerce platform, we discovered that our orders table was growing exponentially—over 12 million rows by year two—and queries on “pending shipments” were taking minutes.

**Task**  
I had to design a robust primary key and indexing strategy that would keep inserts fast, enforce uniqueness across multiple attributes, and drastically cut down the search time for status‑based queries.

**Action**  
I introduced a composite key consisting of `customer_id`, `order_date`, and `sequence_no`. The first two columns ensured that each customer’s orders were grouped chronologically, while the third was an auto‑incremented sequence per day. I added a covering index on `(status, order_date)` to accelerate “pending” lookups. During data migration, I wrote a PL/pgSQL script that rebuilt the table in batches of 100k rows, maintaining referential integrity with foreign keys to `customers` and `products`. I also switched from a single auto‑incrementing surrogate key to this composite key, so every order’s uniqueness was guaranteed by business logic rather than an arbitrary ID.

**Result**  
Query latency for pending shipments dropped from ~90 s to <3 s. Insert throughput improved by 45% because the database no longer had to maintain a global sequence counter. The new schema also reduced storage overhead by eliminating an unused surrogate key column. I learned that composite keys, when aligned with natural data relationships, can simplify logic and yield tangible performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
