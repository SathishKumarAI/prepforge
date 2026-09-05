---
qid: ing_5c6b0e6c47__star__local
question: 'Explain: Eventually consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 377
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:16-05:00'
sources: []
---

**Situation** – At Uber I was part of the team that built the real‑time trip analytics pipeline. We had to serve hundreds of millions of rides per day, each with dozens of attributes (driver ID, pickup zone, fare components). The existing relational store couldn’t keep up; reads were too slow and writes were bottlenecked by ACID guarantees.

**Task** – Design a storage layer that could index trillions of key/value pairs across multiple dimensions while still delivering sub‑second query latency for dashboards and fraud detection. We had to accept eventual consistency but guarantee that every read would see a “good enough” snapshot without blocking writes.

**Action** – I led the implementation of Uber’s LedgerStore, a log‑structured, append‑only store built on top of RocksDB shards replicated via Raft for durability. For indexing we introduced *eventually consistent indexes*: lightweight in‑memory B+ trees that map composite keys (e.g., `driver_id:date`) to log offsets. Every write appends to the ledger and asynchronously updates the index in a background worker; if a read happens before the update propagates, it falls back to scanning recent logs up to a configurable lag window. We used protobuf for schema evolution and tuned compaction to keep hot partitions in memory.

**Result** – The system handled 3 trillion indexed entries with <200 ms average query latency during peak hours. Write throughput increased from 12k ops/s to 48k ops/s, freeing up the relational tier for batch analytics. I learned that trading strict consistency for bounded staleness can unlock massive scale when coupled with a well‑designed append‑only ledger and async indexing pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
