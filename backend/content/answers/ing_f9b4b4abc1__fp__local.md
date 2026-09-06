---
qid: ing_f9b4b4abc1__fp__local
question: 'Explain: Write Path — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 530
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:50:25-05:00'
sources: []
---

### The Write‑Path that Scales to Trillions of Indexes  
At its core, a ledger is **append‑only**: every write must be persisted exactly once and later retrievable in order. Uber’s LedgerStore turns this simple requirement into a scalable *write‑path* by marrying two deep principles—**sequential I/O efficiency** and **content‑addressable deduplication**.

1. **Sequential Buffering**  
   Instead of writing every record to random disk locations, the system buffers writes in memory until a configurable batch size is reached. The buffer is then flushed as a single large block (≈ 64 MB). This guarantees that the underlying storage device sees only sequential I/O, achieving 10× throughput on SSDs and eliminating seek‑time overhead.

2. **Immutable Append & Checkpointing**  
   Each block is cryptographically hashed to form a *block ID*. The ledger keeps a tiny in‑memory index of these IDs; the rest of the index lives on disk as a sparse, write‑once file. Because blocks never change, any append operation can simply append to this sparse file without updating existing entries.

3. **Deduplication via Content‑Addressable Storage**  
   Many events (e.g., telemetry pings) are identical across millions of devices. By hashing the payload and reusing an existing block ID when a duplicate is detected, LedgerStore eliminates redundant writes. The probability that two distinct events collide on a 128‑bit hash is astronomically low, ensuring correctness while saving I/O.

4. **Tiered Indexing**  
   The in‑memory index holds only *recent* block pointers; older ones are stored in a compressed, immutable segment tree on disk. Lookup walks this tree in O(log N) time but never rewrites the tree itself—only appends new leaf nodes. Thus, even with trillions of records, the write path stays constant‑time.

#### Non‑obvious Insight  
The key to scaling is that **writes need not be random at all**; by designing the data model so that *every* append is a pure sequential operation and *all* deduplication occurs before the flush, LedgerStore turns a potentially chaotic write load into a deterministic stream. This transforms the hard problem of trillions of indexes into a linear‑time pipeline governed by disk bandwidth, not CPU or network latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
