---
qid: ing_f5c738a5b9__fp__local
question: 'Explain: Blockdiff: How we built our own file format for VM disk snapshots
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 481
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:41:53-05:00'
sources: []
---

### Why a *BlockDiff* snapshot is necessary  
A virtual‑machine (VM) image is essentially a huge array of 4 KiB blocks that change rarely.  Persisting the entire disk after every write would cost \(O(n)\) I/O and storage, while naïve copy‑on‑write schemes waste space by duplicating unchanged blocks.  The core problem: **efficiently capture only the *difference* between two consecutive disk states while keeping reads fast**.

### Deriving the format  
1. **Delta as a sparse map** – Represent a snapshot as a mapping from block index → data hash (e.g., SHA‑256).  Only changed blocks appear, so the file size is proportional to the number of writes, not total disk size.  
2. **Content‑addressable storage** – Store each unique block in a content‑hash table (content‑addressed blob store).  This guarantees that identical blocks across snapshots share the same physical chunk, achieving maximal deduplication.  
3. **Write‑ahead log for consistency** – Append new deltas to a write‑ahead log; on crash, replay until the last consistent checkpoint.  This mirrors WAL semantics but at block granularity, preserving atomicity without full snapshot rebuilds.

### Deeper principle: Information theory  
The delta file’s size is bounded by the *entropy* of changes: if \(p\) fraction of blocks change, the expected size ≈ \(-n p \log_2 p\).  By hashing we compress each block to a fixed‑size fingerprint, avoiding storing redundant data and enabling exact reconstruction from minimal information.

### Non‑obvious insight  
Most people treat snapshots as “copy the whole disk”.  The BlockDiff trick is that **you can recover any past state without ever materializing it**: keep only the base image plus a chain of delta maps.  Reads traverse the chain lazily, fetching blocks from the latest snapshot that contains them; thus read latency remains near‑constant while write throughput scales with actual changes.

In short, BlockDiff solves “write‑efficient, storage‑efficient VM snapshots” by turning disk evolution into a sparse, content‑addressable delta graph—an elegant application of information theory to systems engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
