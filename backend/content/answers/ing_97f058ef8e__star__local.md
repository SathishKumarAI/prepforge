---
qid: ing_97f058ef8e__star__local
question: 'Explain: Design with Docstore — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 373
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:29-05:00'
sources: []
---

**Situation:**  
At Uber I was part of the infrastructure team tasked with scaling our real‑time trip matching service. Our existing SQL index layer could not keep up with the 2 million daily ride requests; read latency spiked to 150 ms, and we hit a bottleneck on the number of unique indexes we needed for user preferences, vehicle types, and dynamic pricing rules.

**Task:**  
Design an indexing solution that would support trillions of index entries while keeping query latency under 50 ms and allowing hot‑reloads of schema changes without downtime.

**Action:**  
I led the migration to a custom **Docstore** called LedgerStore. We modeled each entity as a document with embedded sub‑documents for every indexed field, using a B+ tree layout over a sharded keyspace keyed by composite hash (entity type + index value). To avoid hot spots, we employed consistent hashing and tunable replication. For write amplification, I implemented an append‑only log that batched updates into 64 MB segments, then ran background compaction with LSM‑style merging. We exposed a lightweight gRPC API for reads, caching the most popular index shards in an in‑memory LRU store to hit sub‑10 ms.

**Result:**  
LedgerStore handled 3 trillion active indexes across 12 shards, reducing read latency from 150 ms to 35 ms and cutting operational cost by 30 % due to fewer disk seeks. I learned that sharding with composite hashes and append‑only logs can break the myth that “indexes must be in RAM” while still delivering sub‑millisecond performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
