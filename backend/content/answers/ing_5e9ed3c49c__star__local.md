---
qid: ing_5e9ed3c49c__star__local
question: 'Explain: Mongos — MongoDB Sharding | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:10-05:00'
sources: []
---

**Situation:**  
In my last role I led the migration of a legacy monolith to a micro‑service architecture for a fintech startup that handled ~3 million daily transactions. The existing MongoDB cluster was single‑instance and had started hitting 10 GB storage limits, causing slow queries and frequent outages during peak hours.

**Task:**  
I needed to scale the database horizontally while maintaining strong consistency on user account data and ensuring zero downtime for the live trading platform.

**Action:**  
I designed a sharded cluster using **mongos** as the routing service. First I identified a natural shard key – the `region` field – which distributed traffic evenly across three shards. I set up replica sets for each shard to provide redundancy, then deployed a mongos router pool behind an internal load balancer so that application instances could query any router without knowing the shard layout. I used MongoDB’s built‑in balancing service to automatically move chunks between shards as data grew, and implemented TTL indexes on transaction logs to keep the cluster size stable. Throughout, I ran extensive integration tests in a staging environment to verify read/write paths and latency under simulated load.

**Result:**  
The sharded deployment cut query latency from 650 ms to 120 ms for the most frequent lookups, reduced storage usage by 40% due to automated purging, and eliminated downtime incidents during peak trading. I learned that choosing the right shard key and exposing mongos as a stateless router simplifies scaling while keeping application code agnostic of cluster topology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
