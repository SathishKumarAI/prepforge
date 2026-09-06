---
qid: ing_c5919130d9__fp__local
question: 'Explain: Basic and Advanced Database Operations — RocksDB | A persistent
  key-value store | RocksDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 484
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:01:58-05:00'
sources: []
---

**Why RocksDB?**  
A relational DB trades space for flexibility; a key‑value store trades flexibility for raw speed.  
RocksDB is a *log‑structured merge* (LSM) engine that writes sequentially to disk, turning random I/O into cheap appends and batching compactions. The core problem it solves: **maintain sorted order while keeping write throughput high**.

### Basic operations
| Operation | Mechanism |
|-----------|-----------|
| `put(k,v)` | Append (k,v) to an in‑memory *memtable* (a sorted map). When the memtable fills, spill it as a *SSTable* on disk. |
| `get(k)` | Search the newest memtable; if miss, binary search the *Bloom filter* of each SSTable in order, then read the exact key from the file. |
| `delete(k)` | Write a tombstone (k + special marker) to the memtable; later compaction removes it. |

### Advanced operations
1. **Column families** – separate namespaces with independent compression/compaction policies, enabling heterogeneous workloads on one instance.
2. **Write batches** – group many `put/delete` into one atomic operation, reducing I/O and guaranteeing consistency.
3. **Compaction filters & merge operators** – user‑defined logic that runs during background compactions; e.g., increment counters or deduplicate logs without application code.
4. **Snapshot isolation** – immutable read views backed by a *sequence number*; the engine keeps old SSTables until no snapshot references them, giving consistent reads even under heavy writes.

### Non‑obvious insight  
The LSM’s *compaction pipeline* is not just garbage collection—it’s an online **merge sort** that guarantees each key appears in exactly one place while keeping read amplification low. RocksDB exposes compaction knobs (levels, size ratios) so you can shape this merge process to match your data skew: bursty writes → many small files; steady reads → fewer large files.

In short, RocksDB turns the **write‑heavy** part of a system into a sequential log and uses clever probabilistic filters plus background merges to keep read latency predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
