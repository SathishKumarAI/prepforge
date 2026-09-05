---
qid: ing_6fd3a06a28__star__local
question: What is Database Sharding? — A Crash Course on Database Sharding
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 331
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:10:32-05:00'
sources: []
---

**Situation** – At my previous startup we launched a real‑time recommendation engine that served millions of users daily. Our PostgreSQL cluster was hitting 3 s query latency during peak hours because the user profile table had ballooned to 250 M rows and all reads were routed to a single replica.

**Task** – I was asked to reduce read latency below 500 ms while keeping the architecture cost‑effective and ensuring minimal downtime for our live service.

**Action** – I designed a horizontal sharding strategy:  
1. Partitioned the user table by `user_id % 8`, creating eight separate PostgreSQL instances on the same host cluster.  
2. Implemented a lightweight routing layer in Node.js that hashed incoming requests to the correct shard, using consistent hashing for future scalability.  
3. Migrated data incrementally with `pg_dump/restore` and live replication, ensuring zero loss of write traffic by temporarily redirecting writes through an intermediary “shard‑router” service.  
4. Added a caching layer (Redis) per shard to further cut read latency.

**Result** – Post‑deployment, average query time dropped from 3 s to 120 ms, and peak throughput increased by 4× with no additional hardware costs. I learned that sharding is not just about splitting data; it’s also about building a robust routing layer and careful migration planning to avoid service disruption.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
