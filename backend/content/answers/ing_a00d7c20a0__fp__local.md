---
qid: ing_a00d7c20a0__fp__local
question: 'Explain: Primer: Linux filesystem concepts — Blockdiff: How we built our
  own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 464
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:45:42-05:00'
sources: []
---

**Why a custom snapshot format?**  
A virtual‑machine (VM) image is essentially a sparse array of fixed‑size blocks that the hypervisor reads lazily. When a VM writes to disk, it mutates only a few blocks per second, yet a naïve copy‑on‑write (COW) snapshot stores *every* block, wasting space and I/O. The problem reduces to **efficient incremental storage**: keep the minimal set of changed blocks while still allowing fast random access.

**The block‑diff principle**  
Treat the VM image as a hash table keyed by block index → content hash. When creating a snapshot, compute each block’s hash; if it matches an existing entry in the parent snapshot, reuse that block instead of writing a duplicate. This is a *deduplication* optimization grounded in information theory: identical data carries no new entropy and need not be stored twice.

**Why blocks?**  
Blocks are the natural granularity for OS file systems (4 KiB or larger). They align with disk I/O, caching, and journaling mechanisms. Operating at block level preserves compatibility with existing tools (e.g., `dd`, `qemu-img`) and keeps metadata small.

**Non‑obvious insight: “write‑once, read‑many” consistency via hash‑based addressing**  
Because each block is immutable once written, we can use its content hash as a *content‑addressable* identifier. Reads resolve to the same hash irrespective of the snapshot layer, eliminating pointer indirection and enabling parallel reads across snapshots without locking.

**Resulting format**  
1. **Header**: version, base image reference, block size.  
2. **Index table**: sorted list of `(block_index, hash)` pairs.  
3. **Data blobs**: concatenated raw blocks stored in a single file or LZ4‑compressed stream.

This structure yields near‑optimal space (only changed blocks are written), fast lookups via binary search on the index, and seamless integration with existing Linux block devices through FUSE or loopback mounts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
