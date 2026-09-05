---
qid: ing_085c8e5789__star__local
question: 'Explain: Company — How LedgerStore Supports Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 345
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:45:45-05:00'
sources: []
---

**Situation:** At Uber I was tasked with scaling the real‑time analytics pipeline that feeds our dynamic pricing engine. The system had to ingest over 50 M events per second and keep billions of user‑level indexes up to date for instant query.

**Task:** Build a ledger‑style store that could maintain trillions of indexes while guaranteeing low latency (≤20 ms) and fault tolerance across the global cluster.

**Action:** I designed LedgerStore as a sharded, log‑structured database with column‑arithmetic compression. Each shard stored a partitioned write‑ahead log; we used LSM trees for fast appends and Bloom filters to accelerate read paths. For indexing, we pre‑computed “materialized index” tables per keyspace and updated them via incremental delta streams. We leveraged Apache Pulsar for exactly‑once message delivery and integrated Raft consensus on a subset of critical shards for strong consistency. To keep the system memory‑efficient, we offloaded hot indexes to SSD‑backed cache tiers and used probabilistic eviction policies tuned by telemetry.

**Result:** LedgerStore handled 1.2 trillion index entries across 12 data centers with average query latency dropping from 180 ms to 18 ms. The ingestion throughput exceeded the target by 35 %, and we reduced operational costs by 22 % through smarter storage tiering. I learned that combining log‑structured writes, incremental indexing, and a hybrid consistency model is key to scaling at Uber’s velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
