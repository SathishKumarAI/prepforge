---
qid: ing_172e9344d7__star__local
question: 'Explain: Sharding — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 361
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:15:12-05:00'
sources: []
---

**Situation** – At my previous company we had an e‑commerce platform that hit 10 M daily page views and the PostgreSQL cluster was maxing out on write throughput (≈2 kTPS) and latency started creeping past 300 ms during flash sales.

**Task** – I needed to design a horizontal scaling strategy so the database could handle at least 20 kTPS with <100 ms read latency, while keeping data consistency for orders and inventory.

**Action** – I chose sharding by customer region. First, I added a deterministic hash on `customer_id` to route writes to one of six PostgreSQL shards spread across separate servers in each availability zone. To maintain global uniqueness of order IDs I introduced a UUID‑v1 generator with a per‑shard prefix. Reads were routed via a lightweight proxy (Citus) that transparently performed cross‑shard joins for reports. I implemented Redis caching for product catalogs to reduce read pressure, and set up asynchronous replication from each shard to a central analytics database using Debezium/Kafka streams. We also introduced a global lock service with etcd for inventory updates to avoid race conditions.

**Result** – Post‑deployment we achieved 25 kTPS write capacity, read latency dropped to 70 ms, and the system handled a 100× traffic spike during a holiday sale without outages. I learned that sharding is not just splitting data; it requires careful routing logic, consistency guarantees, and an auxiliary cache layer to meet real‑world SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
