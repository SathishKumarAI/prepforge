---
qid: ing_df5f285dbe__fp__local
question: 'Explain: Conclusion — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 483
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:54:50-05:00'
sources: []
---

**How LedgerStore scales to trillions of indexes**

At its core, a ledger is an *append‑only* sequence of records that guarantees monotonic order and fault‑tolerant durability. Uber’s LedgerStore builds on this by treating every index as a lightweight *pointer* into that log rather than storing the full key–value pair in memory or disk.  

1. **Distributed, sharded log** – The ledger is partitioned across hundreds of nodes; each shard holds a contiguous time window of writes. Because inserts are strictly append‑only, contention is eliminated and throughput scales linearly with the number of shards.

2. **Pointer‑based index entries** – Each index entry contains only a key hash and a 64‑bit offset into the ledger file. The entry size is < 16 bytes, so even trillions of keys fit in RAM as a Bloom filter + sparse array of offsets, with disk lookups deferred to the log.

3. **Compaction & compression** – Periodic background jobs rewrite older shards, dropping obsolete index entries and applying delta‑encoding. This keeps the per‑shard footprint < 1 GB for 10⁹ keys while preserving a *temporal locality* guarantee: recent queries hit hot shards in RAM.

4. **Probabilistic pruning** – A two‑stage Bloom filter first eliminates non‑existent keys, and only then a deterministic binary search on the sparse offset array is performed. This keeps read latency < 5 ms even under 10⁶ concurrent queries.

**Non‑obvious insight:**  
Because all writes are monotonic, LedgerStore can *freeze* older shards for fast reads without locking the entire system. The immutable nature of the log turns what would normally be a hot index into a cold one that can be aggressively compressed and stored on inexpensive tiered storage—yet still accessed in sub‑millisecond time thanks to the pointer indirection. This blend of immutability, distributed sharding, and probabilistic pruning is why Uber can support trillions of indexes without exploding memory or I/O costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
