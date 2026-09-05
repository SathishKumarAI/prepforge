---
qid: ing_a36644fdf0__star__local
question: 'Explain: Pros and cons — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 323
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:59:44-05:00'
sources: []
---

**Situation** – At my last role we had a SaaS product with over 3 million users and their activity logs were stored in a single PostgreSQL instance on AWS RDS. The read‑write throughput was peaking at 15,000 ops/sec and the query latency for reporting dashboards hit 350 ms during peak hours.

**Task** – I needed to scale the database horizontally so that we could handle the growing user base while keeping latencies under 100 ms for analytics queries, all within our budget constraints.

**Action** – I designed a sharding strategy: partition data by customer ID using a deterministic hash function. Each shard ran on its own Aurora Serverless cluster to leverage automatic scaling. I implemented a lightweight routing layer in Go that read the shard key from the incoming request and forwarded it to the correct endpoint. To avoid “hot shards” I added a small random offset to the hash for write-heavy tables. I also set up cross‑region replication for disaster recovery and used AWS Secrets Manager for secure credential rotation.

**Result** – After deployment, read latency dropped to 45 ms on average, while write throughput increased from 15k to 80k ops/sec. The cost per query fell by ~30 %. I learned that sharding is powerful when you design the key distribution carefully, but it adds operational complexity—especially for joins across shards and maintaining consistency during migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
