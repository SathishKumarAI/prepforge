---
qid: ing_11d256602f__aws__local
question: 'Explain: Risky Shard Key: created_at — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 451
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:50-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy analytics platform to a fully‑sharded architecture on **Amazon DynamoDB**. The table was initially keyed by `created_at`, which caused hot‑partitioning and throttling during high‑volume ingest (≈ 3 M writes/s). My goal was to eliminate the shard key risk while preserving real‑time query performance.

**Action & Design**  
I re‑engineered the key to a **compound partition key**: `user_id#shard_id` where `shard_id = hash(user_id) % 256`.  
* **AWS services used:** DynamoDB (global tables for multi‑region), Kinesis Data Streams for ingest, Lambda for sharding logic.  
* **Scalability/Availability:** The 256 shards distribute writes evenly; each shard can scale to > 10 M I/O/s and remains in the same AZ, giving us 99.999% availability with DynamoDB’s automatic replication.  
* **Cost trade‑off:** Adding a lightweight `shard_id` field increased item size by < 5 bytes but cut write capacity units (WCUs) from ~30 k to ~4 k per shard—saving ~$1,200/month.  

**Result**  
After deployment, throughput hit 12 M writes/s without throttling, and latency dropped from 350 ms to 45 ms for point‑lookups. The platform now supports 10× more users while staying under budget.

> **Leadership Principles:** *Ownership* (I drove the end‑to‑end solution), *Dive Deep* (analyzed hot‑spot patterns), *Bias for Action* (deployed in two sprints).  
> **Bar‑raiser note:** Demonstrated measurable impact, transparent trade‑offs, and lessons learned—specifically that a well‑chosen shard key can turn a fragile system into a scalable, cost‑efficient service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
