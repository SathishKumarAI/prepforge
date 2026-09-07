---
qid: ing_2a143aa30e__faang__local
question: 'Explain: Historical Index data backfill — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 500
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:21:05-05:00'
sources: []
---

**Clarify**

We’re asked how Uber’s **LedgerStore** can *back‑fill* historical index data for **trillions of indexes**—i.e., reconstruct past states of all indexed entities after a failure or schema change.  
Assumptions:  
- Indexes are immutable, append‑only logs per entity type.  
- Back‑fill must run offline, not impact live traffic.  
- Data is stored in a distributed log (Kafka/FS).  

**Approach**

1. **Snapshot the current state** of each index table (current key→value mapping).  
2. **Record every mutation** (insert/update/delete) as an event in a *change‑log* per shard.  
3. To back‑fill, replay events from the earliest checkpoint to the present, applying them to a clean in‑memory map and persisting snapshots periodically.  

**Depth**

- Use a *partitioned log* where each partition contains a contiguous time range of events; this allows parallel replay across many machines.  
- Store checkpoints every N events (e.g., 10M) so that reprocessing can start from the nearest checkpoint, reducing work to Δt.  
- For trillions of keys, keep the in‑memory map as a *Bloom‑filter + compressed bitmap* per shard; only full key/value pairs are written to disk when a checkpoint is taken.  
- Complexity: replay cost O(total_events). With partitioning, throughput ≈ Σ (events_per_sec per shard) → linear scalability.  

**Edge Cases**

- **Clock skew**: enforce logical timestamps in events.  
- **Deletion vs. tombstone**: ensure deletes are persisted as tombstones to avoid resurrecting stale data.  
- **Partial failures** during replay: use idempotent writes and write‑ahead logs for recovery.  

**Optimize & Communicate**

- Introduce *event compression* (delta encoding) to cut storage by ~5×.  
- Leverage *GPU‑accelerated hash tables* for ultra‑fast replay in critical shards.  
- Explain that the system’s design guarantees eventual consistency: after back‑fill, a fresh snapshot equals the live state at the last checkpoint.  

By partitioning, checkpointing, and using compact in‑memory structures, LedgerStore can reliably reconstruct trillions of indexes with minimal downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
