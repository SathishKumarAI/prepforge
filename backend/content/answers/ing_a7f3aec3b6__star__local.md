---
qid: ing_a7f3aec3b6__star__local
question: 'Explain: Secondary Indexes — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 396
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:08:58-05:00'
sources: []
---

**Situation** – In a fintech startup we had to migrate a fraud‑detection service from an old relational DB to a new distributed store. The data model was heavy on queries like “find all transactions for a user in the last 24 hrs” and “lookup accounts by email”. We chose Cassandra for its write throughput but needed fast secondary lookups, so we compared its built‑in secondary indexes with MongoDB’s compound indexes.

**Task** – I had to benchmark query latency and write amplification for both systems under realistic workloads (10 M writes/day, 1 M read queries/second) and decide which architecture could support our SLA of <150 ms per lookup.

**Action** – In Cassandra I created a materialized view on the user_id column and also tested a GSI with the “user_email” key, measuring write amplification via nodetool metrics. For MongoDB I built compound indexes on `{userId: 1, ts: -1}` and `{email: 1}` and used the explain plan to verify index usage. I ran YCSB workloads with 80/20 read/write mix, collected latency percentiles, and monitored GC pauses.

**Result** – Cassandra’s GSI added ~25 % write amplification but kept read latency under 120 ms for 95th percentile queries; however, the materialized view caused 3‑second hot spot writes during peak load. MongoDB’s compound indexes delivered <80 ms reads with no write penalty, but scaling required sharding and increased memory usage. I recommended a hybrid approach: keep Cassandra for bulk ingestion and use MongoDB as an auxiliary index store for high‑speed lookups, achieving SLA compliance while keeping operational overhead manageable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
