---
qid: ing_66e2137a87__star__local
question: 'Explain: DB Shards - Recommendations — Shardsrecommendations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 367
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:53:37-05:00'
sources: []
---

**Situation** – In my last role I was building a real‑time product recommendation engine for an e‑commerce platform that served over 10 million users daily. The user‑interaction table (clicks, views, purchases) grew to 12 TB and our single PostgreSQL instance started lagging behind with 200 ms query latency during peak hours.

**Task** – I had to redesign the data layer so that recommendation queries could run in under 50 ms while still supporting a full‑text search on product titles and a real‑time analytics dashboard for marketing teams.

**Action** – I split the interaction table into horizontal shards by user ID hash, using a sharding key “user_id % N”. Each shard was deployed as a separate Postgres instance behind a connection pooler (PgBouncer). For the recommendation engine I added an in‑memory Redis cache keyed by user and product to hold precomputed similarity scores. To keep the shards balanced I implemented a nightly rebalancer that migrated hot users to underutilized nodes, and used logical replication for failover. I also introduced a secondary shard on a dedicated analytics cluster with columnar storage (Citus) to power ad‑hoc queries.

**Result** – Query latency dropped from 200 ms to 35 ms during peak traffic, and the recommendation throughput increased by 4× without additional hardware. The rebalancer kept shard sizes within ±10% variance, reducing disk usage spikes. I learned that careful sharding coupled with caching and a dedicated analytics cluster can turn a monolithic database into a scalable foundation for ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
