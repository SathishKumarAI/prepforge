---
qid: ing_1e0ccef789__star__local
question: 'Explain: Sharding Approaches — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 342
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:58-05:00'
sources: []
---

**Situation** – While leading the data ingestion pipeline for a real‑time ad‑tech platform, our single PostgreSQL instance was choking on nightly batch loads: query latency spiked to 12 s and write throughput dropped below 2k TPS. The engineering manager asked me to scale out without rewriting the application.

**Task** – Design a sharding strategy that would keep the existing ORM code working, reduce read/write contention, and allow us to add more nodes as traffic grew.

**Action** – I first profiled the workload: most queries filtered on `user_id` and `campaign_id`. I chose horizontal sharding by composite hash (MD5(user_id || campaign_id)) modulo 8, implemented via a proxy layer (`pgbouncer` + custom routing logic) that translated application connections into shard‑specific pools. For cross‑shard analytics I built an asynchronous event stream using Kafka; each write emitted a lightweight message so downstream services could aggregate without blocking the primary transaction. To keep the schema consistent, I used logical replication to push updates from a master shard to read replicas, then employed PostgreSQL’s `pg_partman` for time‑based partitioning within each shard.

**Result** – Write throughput rose to 12k TPS and read latency dropped below 200 ms under peak load. The proxy added <5 % overhead, and adding a new shard required only updating the routing table—no code changes. I learned that careful key selection plus lightweight middleware can turn a monolith into a horizontally scalable system without sacrificing developer productivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
