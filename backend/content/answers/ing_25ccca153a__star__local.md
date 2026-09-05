---
qid: ing_25ccca153a__star__local
question: 'Explain: Update a document — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 339
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:44:26-05:00'
sources: []
---

**Situation:**  
At my previous company we migrated a real‑time inventory service from Cassandra to MongoDB because the product team needed faster, more flexible updates for high‑volume SKU changes during flash sales.

**Task:**  
I had to refactor the update logic so that each SKU could be updated atomically and with minimal latency, while preserving the eventual consistency guarantees we relied on in Cassandra.

**Action:**  
In Cassandra I used lightweight transactions (LWT) with `IF EXISTS` to enforce uniqueness, but every write incurred a Paxos round‑trip, pushing our latency from 8 ms to ~35 ms under load. Switching to MongoDB, I leveraged the `$set` operator inside an upsert (`updateOne({sku}, {$set: {...}}, {upsert:true})`). I added a TTL index on a `lastModified` field to purge stale data automatically. For conflict resolution I used MongoDB’s built‑in document versioning via `__v`, and implemented optimistic locking in the application layer.

**Result:**  
The switch cut average update latency from 35 ms to 12 ms, increased throughput by 3× during peak traffic, and reduced operational complexity because we no longer had to manage Cassandra’s LWT bottlenecks. I learned that while Cassandra excels at wide‑column writes at scale, MongoDB’s document model and atomic per‑document updates can be a better fit when fine‑grained consistency is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
