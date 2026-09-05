---
qid: ing_e5fdcec8e9__star__local
question: 'Explain: Multi-tenant architecture — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 362
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:43-05:00'
sources: []
---

**Situation** – At my previous SaaS company we had a sudden spike in users: from 50,000 to over 250,000 in six months. Each tenant’s data was stored in the same MongoDB cluster, and the single collection grew beyond 500 GB. Reads per second doubled, causing 30% latency increases on our analytics endpoints.

**Task** – I had to design a scalable, multi‑tenant architecture that kept each tenant isolated for compliance while keeping query performance within SLA (≤200 ms). The goal was to partition data across shards without breaking existing APIs or compromising data consistency.

**Action** – I introduced a sharding strategy based on the tenant ID as the shard key. Using MongoDB’s automatic sharding, I created three shards: two for production tenants and one for staging. I added a hashed index on `tenantId` to evenly distribute documents and implemented per‑shard quotas via `mongod` configuration. To keep cross‑tenant queries fast, I denormalized frequently accessed metrics into a separate “summary” collection that was replicated across all shards. Finally, I wrapped the driver calls in a tenant‑aware middleware that automatically injected the tenant filter.

**Result** – Latency dropped from 350 ms to 110 ms on average, and we handled 10× more concurrent users without additional hardware. The architecture also reduced disk usage by 25% through better data locality. I learned how sharding keys directly impact query patterns and that careful indexing can offset the complexity of a multi‑tenant design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
