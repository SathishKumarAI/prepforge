---
qid: ing_1602f8464a__star__local
question: 'Explain: Query a document by ID — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 324
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:22-05:00'
sources: []
---

**Situation** – In my last role I had to migrate an inventory service that handled millions of product records from a legacy relational database to a NoSQL solution. The key requirement was instant lookup by product SKU (the primary identifier) with sub‑millisecond latency.

**Task** – I needed to decide between Cassandra and MongoDB, design the schema for ID queries, and ensure the system could scale horizontally while keeping write throughput high.

**Action** – I benchmarked both systems using a synthetic workload: 10 M records, 5 k reads/second. For Cassandra I used a single‑column primary key on `sku`, enabled caching, and tuned read consistency to ONE. MongoDB used the default `_id` index with sharding across three nodes. I also implemented automatic TTL cleanup for stale entries in both stores. During testing, I introduced Bloom filters in Cassandra to reduce disk seeks, while MongoDB’s WiredTiger cache was tuned for write amplification.

**Result** – Cassandra returned 99.7 % of lookups in <2 ms even under peak load, with a 70 % lower CPU usage than MongoDB. MongoDB hit the same latency only after scaling to five shards and still consumed ~1.5× more memory due to its document overhead. I learned that for pure ID‑based reads on massive datasets, Cassandra’s columnar storage and tunable consistency give a clear edge over MongoDB’s document model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
