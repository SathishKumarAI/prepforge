---
qid: vq_ecef0e3e0a__star__local
question: WHAT IS A COMPOSITE INDEX?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 316
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:54-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we had a user table with over 12 million rows and a reporting dashboard that ran nightly queries on the last‑month transaction volume. The report kept timing out because it filtered on `country`, `account_type` and `created_at`.

**Task**  
I was asked to reduce the query runtime from ~4 minutes to under 30 seconds while keeping write throughput high.

**Action**  
I proposed a composite (multi‑column) index on `(country, account_type, created_at DESC)` using PostgreSQL. I first ran `EXPLAIN ANALYZE` on the slow query and saw it scanning almost the entire table. After creating the composite index, I tuned the fillfactor to 70% for better write performance and added a partial clause `WHERE status='active'` because inactive accounts were rarely queried. I also dropped an old single‑column index that was now redundant.

**Result**  
The nightly report execution time dropped from 4 min 32 s to 22 s, a 94% improvement. Write latency increased by only ~3%, well within SLA. I learned how the order of columns in a composite index directly affects query plans and how partial indexes can give you the best of both worlds—speed for hot data while keeping writes efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
