---
qid: ing_1e794d9aed__fp__local
question: 'Explain: Open Questions — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 469
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:06-05:00'
sources: []
---

**Why a custom “BlockDiff” snapshot?**

When a virtual machine (VM) runs on commodity storage, every write touches the same disk image file. A naïve copy‑on‑write snapshot would duplicate that whole file, wasting space and I/O. The fundamental problem is *efficient change tracking* for large images (tens of GBs) while keeping reads fast.

**Core idea:**  
Treat a VM disk as an array of fixed‑size blocks (e.g., 4 KiB). A snapshot records **only the blocks that changed** since the previous version, together with their offsets. The snapshot itself is a small index plus a stream of block payloads. To reconstruct a particular state we replay changes from the base image up to that snapshot.

**Why it works:**

1. **Locality & compression:**  
   Most VM writes are contiguous or clustered; grouping by block preserves locality, enabling better compression (ZSTD) on the changed blocks.

2. **Random access:**  
   The index is a hash map of offset → payload location, so reading any block is O(1). This satisfies the VM’s need for fast reads without scanning the whole snapshot.

3. **Deduplication across snapshots:**  
   Because each block is identified by its content (or a hash), identical blocks in different snapshots can share the same physical data, turning the format into an implicit deduplicating layer.

4. **Incremental backup & restore:**  
   Incremental backups become simple: just copy the delta files. Restoring to an older state is linear in the number of deltas between base and target.

**Non‑obvious insight:**  
The index can be *self‑contained* within the snapshot file by using a sparse bitmap that marks “dirty” blocks. This eliminates a separate metadata store, reducing the risk of corruption and simplifying atomic writes: we write the bitmap first, then append all changed blocks, guaranteeing consistency even if power fails mid‑snapshot.

In short, BlockDiff turns VM snapshots into lightweight, dedupable deltas that preserve read performance while cutting storage overhead by an order of magnitude.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
