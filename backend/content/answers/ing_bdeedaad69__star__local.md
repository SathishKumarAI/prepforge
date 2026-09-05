---
qid: ing_bdeedaad69__star__local
question: 'Explain: In Memory Database - Redis — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 351
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:46-05:00'
sources: []
---

**Situation** – While leading a data‑intelligence project for a fintech client, we discovered that the nightly batch ETL taking hours to aggregate transaction logs was causing stale dashboards and delayed risk alerts.

**Task** – I had to design an in‑memory caching layer that would store aggregated metrics in real time, provide low‑latency read access for front‑end dashboards, and support automatic persistence to avoid data loss.

**Action** – I chose Redis because of its proven speed, rich data types, and built‑in persistence. I first modeled the aggregation state as a sorted set (`ZSET`) keyed by user ID with scores representing cumulative spend, allowing O(log N) range queries for top‑k users. For real‑time updates, I used Lua scripts to perform atomic increments and TTL resets, preventing race conditions. To handle sharding across 4 nodes, I implemented Redis Cluster with hash slots and set up read replicas to offload dashboard queries. Finally, I enabled RDB snapshots every 5 minutes and AOF append‑only files for durability, tuning `appendfsync` to `everysec`.

**Result** – The new architecture cut metric refresh time from 45 minutes to under 2 seconds for end users, increased dashboard throughput by 3×, and reduced ETL load on the data lake by 70%. I learned how Redis’ data structures, Lua scripting, and cluster configuration together create a scalable, fault‑tolerant in‑memory system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
