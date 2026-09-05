---
qid: vq_d64400701c__star__local
question: What is normalization? What are the types?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 332
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:21:50-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were migrating our legacy transactional system to a new PostgreSQL database. The production data had grown to over 12 GB and queries on the “transactions” table were taking seconds to minutes because of redundant customer and merchant information.

**Task:**  
I was asked to redesign the schema so that read/write performance improved by at least 50% while keeping the application code unchanged.

**Action:**  
I began with a **normalization audit**, applying the theory from first‑ through third normal form (1NF, 2NF, 3NF). I removed repeating groups and split the “transactions” table into four tables: `customers`, `merchants`, `transaction_types`, and `transactions`. Each child table referenced its parent via foreign keys. I also identified transitive dependencies that violated 3NF and moved derived columns (e.g., merchant city) to a separate `merchant_locations` table. After normalizing, I added composite indexes on `(customer_id, created_at)` and `(merchant_id, status)` to support the most common queries.

**Result:**  
Post‑migration, query latency dropped from 4 s to under 300 ms for the heavy reports, a 90% improvement. Write throughput increased by 35%. I learned that careful normalization combined with targeted indexing can drastically reduce data redundancy and boost performance without rewriting application logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
