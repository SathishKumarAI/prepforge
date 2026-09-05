---
qid: vq_bf08ffcc60__star__local
question: WHAT IS A COVERING INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 339
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:17-05:00'
sources: []
---

**Situation**  
In a recent e‑commerce analytics project we had to generate monthly sales reports for 10,000 stores every night. The query joined the `orders` table (≈50 M rows) with `store_info`, selecting only `order_id`, `store_id`, `amount`, and `created_at`. On production it ran for 12 minutes and clogged our nightly batch window.

**Task**  
I needed to cut that runtime to under a minute so the reports could be available by noon, without adding hardware or rewriting the business logic.

**Action**  
I analyzed the query plan: the engine was scanning `orders`, then doing look‑ups on `store_info`. I created a covering index on `orders` with columns `(store_id, order_id, amount, created_at)` plus a clustered key on `order_id`. Because all required fields were in the index, the optimizer could satisfy the query entirely from the index tree, avoiding any table data access or join. I also added a filtered index on orders where `status = 'completed'` to reduce size further. Finally, I tuned the buffer pool and set `innodb_read_io_threads` higher to allow parallel index reads.

**Result**  
The nightly report generation dropped from 12 minutes to **45 seconds**, a 99% reduction. Storage overhead increased by only 1.2 GB, and maintenance cost was negligible because we used partial indexes. I learned that a well‑designed covering index can turn a full table scan into an efficient seek, dramatically improving performance with minimal operational impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
