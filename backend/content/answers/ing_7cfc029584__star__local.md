---
qid: ing_7cfc029584__star__local
question: Why Shard? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 320
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:49-05:00'
sources: []
---

**Situation** – In my last role I was leading the data ingestion pipeline for a real‑time recommendation engine that served millions of users each day. Our single PostgreSQL instance started to hit 300 k QPS, and latency began creeping above 400 ms during peak hours, which broke our SLA.

**Task** – I needed to scale read/write throughput without rewriting the entire application stack or losing ACID guarantees for user profiles and preference vectors.

**Action** – I introduced horizontal sharding across three PostgreSQL nodes. First, I defined a deterministic hash key on `user_id` to evenly distribute rows while keeping all of a user’s data collocated. Then, I used PgPool-II to route queries based on that hash, adding a lightweight routing layer so existing SQL code stayed unchanged. To preserve consistency, I employed two‑phase commit via the `pgx` driver for cross‑shard transactions involving cart updates. Finally, I set up automated backup and failover with Patroni, ensuring zero downtime during maintenance.

**Result** – Throughput increased from 300 k QPS to over 1.2 M QPS, latency dropped to under 120 ms on average, and the system now scales linearly with added shards. I learned that sharding is most effective when combined with a smart routing layer and careful transaction handling, keeping code complexity manageable while delivering robust performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
