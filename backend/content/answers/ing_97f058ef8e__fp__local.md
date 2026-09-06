---
qid: ing_97f058ef8e__fp__local
question: 'Explain: Design with Docstore — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 524
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:09-05:00'
sources: []
---

### Why a “trillion‑index” system is unavoidable

Every Uber trip generates *many* keys: user ID, driver ID, vehicle ID, geographic tile, time bucket, fare type, etc.  
If we stored each key in a conventional relational table, the join cost would explode: a single query could touch millions of rows, and the write path would require locking billions of indexes.  
The core problem is **high‑cardinality, many‑to‑many relationships** that must be queried ad‑hoc without pre‑defined schemas.

### LedgerStore’s solution – append‑only, deterministic sharding

1. **Append‑only logs per key family**  
   Each “index” (e.g., `driver→trip`) is a separate log of `(key, value)` pairs.  
   Append‑only eliminates write amplification and lock contention; the system simply streams new entries to disk.

2. **Deterministic partitioning by hash of the index key**  
   The hash guarantees *uniform* distribution across shards, so each shard handles roughly the same I/O load.  
   Because partitions are immutable once written, we can safely parallelise reads without coordination.

3. **Sparse in‑memory Bloom filters + tiered compaction**  
   A Bloom filter per shard tells us whether a key exists before hitting disk, dramatically reducing latency for negative lookups.  
   Compaction merges logs and removes duplicates, keeping the storage footprint linear in the number of unique keys rather than writes.

### Deeper principle – *information‑theoretic minimalism*

By treating every index as an independent stream, we avoid storing any redundancy that a relational engine would duplicate across foreign keys. The system’s entropy is bounded by the true cardinality of each key space; no extra metadata or indexing structure is needed beyond the deterministic hash and Bloom filter.

### Non‑obvious insight

Because every shard is write‑only and read‑only, **updates are simply new log entries**—no “update” semantics exist. This allows the system to scale linearly with traffic: a new machine can take over an orphaned shard without downtime or re‑balancing, something that traditional RDBMSs cannot do without heavy coordination.

In short, LedgerStore turns Uber’s trillion‑index nightmare into a collection of lightweight, deterministic logs whose growth is linear and whose reads are bounded by simple hash lookups plus a tiny Bloom filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
