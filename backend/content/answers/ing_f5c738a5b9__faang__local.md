---
qid: ing_f5c738a5b9__faang__local
question: 'Explain: Blockdiff: How we built our own file format for VM disk snapshots
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 509
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:11:14-05:00'
sources: []
---

**Clarify**  
The question asks how *BlockDiff*—Cognition’s custom snapshot format—was engineered for virtual‑machine (VM) disk images.  
Assumptions: we’re dealing with large block devices, need incremental snapshots, low I/O overhead, and fast restore.

---

### Approach
1. **Baseline:** Snapshot the entire VM image → huge storage & slow restores.  
2. **Delta strategy:** Capture only changed blocks since last snapshot.  
3. **Encoding:** Store metadata (block offsets, lengths) + compressed payload.  
4. **Indexing:** Build a sparse index to jump directly to any block during restore.

---

### Depth
- **Change detection**: Read current image in 64 KiB chunks; compare SHA‑256 digests with previous snapshot’s hash table → O(n) time, minimal I/O.  
- **Compression**: Use LZ4 per chunk for speed and ~2× size reduction.  
- **Storage layout**: `[header][index][data]`. Header holds magic number, version, base snapshot ID. Index is a sorted array of `(offset, length)` pairs plus a checksum. Data blocks follow immediately, each prefixed with its compressed size.  
- **Restore**: Binary search the index for requested offset; stream only necessary data blocks, decompress on‑the‑fly. Complexity: O(log m + k) where *m* is number of changed blocks and *k* the bytes read.

---

### Edge Cases
- **Zeroed blocks**: Skip storing entirely to save space.  
- **Corrupted index**: Verify checksums; fall back to full snapshot if needed.  
- **Large contiguous changes**: Threshold to store as a single large block instead of many small ones.

---

### Optimize & Communicate
- **Batching writes**: Group multiple snapshots into a single log file to reduce seek churn.  
- **Parallel diff**: Utilize multi‑core CPUs for hash/compression.  
- **Explain trade‑offs**: Compression vs. CPU, chunk size vs. metadata overhead.  
- **Narrative**: “We started with the simplest full snapshot, realized its cost, then engineered a delta format that keeps I/O linear to actual changes while keeping restore time constant for any block.”

*Word count: 212.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
