---
qid: ing_9d2d71aa22__fp__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 531
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:33-05:00'
sources: []
---

**Compaction in SSTables – why it is inevitable**

When a write arrives at a distributed key‑value store such as ScyllaDB, it is first written to an *in‑memory memtable*. Once the memtable reaches its size or age threshold, it is flushed to disk as a *Sorted String Table* (SSTable). Each SSTable is immutable and sorted by key. Reads therefore need to consult *many* SSTables: one for each flush that touched the queried keys.

If we simply left all SSTables forever, the read path would grow linearly with write traffic, turning a constant‑time lookup into an expensive merge over dozens of files. The core problem is **write amplification** versus **read latency**. Compaction resolves this by periodically merging and reorganising SSTables: it discends duplicates (later versions of a key), removes tombstones, and produces fewer larger files.

**How compaction works**

1. **Selection** – ScyllaDB’s scheduler picks a set of SSTables that overlap in key ranges and are small enough to fit in memory.
2. **Merge‑sort** – The chosen tables are streamed simultaneously (a k‑way merge). Because each is sorted, the algorithm runs in linear time relative to total size.
3. **Deduplication & tombstone handling** – For each key, only the newest version survives; deleted keys marked by tombstones are dropped once a safe‑time threshold passes.
4. **Write back** – The merged output becomes a new SSTable; the old ones are marked for deletion.

**Compaction strategies**

- *Size‑Tiered* (default): groups tables by size, merging when enough tables of the same tier exist. Simple and effective for write‑heavy workloads.
- *Leveled*: keeps tables in strict size bounds per level; each key appears in at most one SSTable per level. This reduces read amplification but increases compaction overhead.
- *Hybrid*: blends both to balance CPU, I/O, and latency.

**Non‑obvious insight**

Compaction is not merely garbage collection—it is a **probabilistic optimisation of the data layout**. By selecting overlapping ranges that are likely to be accessed together (e.g., due to locality or access patterns), ScyllaDB reduces *cache miss* probability on reads, which often dominates latency in real workloads. Thus, compaction strategies can be tuned as a form of *adaptive spatial indexing*, not just file housekeeping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
