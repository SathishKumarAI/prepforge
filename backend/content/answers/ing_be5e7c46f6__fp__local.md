---
qid: ing_be5e7c46f6__fp__local
question: 'Explain: How the tool works — Blockdiff: How we built our own file format
  for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 505
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:48:20-05:00'
sources: []
---

**BlockDiff – a loss‑less snapshot format**

When a virtual machine writes to its virtual disk, the underlying storage engine sees *blocks* (e.g., 4 KiB sectors). The naive way to take a snapshot is to copy every block that changes; this costs I/O and space.  
The core problem is: *how can we record only what truly differs while still allowing instant restores?*  

1. **Observation – sparsity of change**  
   In most workloads, a single write touches only a handful of blocks per second. Therefore the set of changed blocks \(C_t\) at time \(t\) is sparse relative to the entire disk size \(N\).  
2. **Mathematical framing – incremental delta**  
   Define a *delta* \(\Delta_t = C_{t} \setminus C_{t-1}\). Each snapshot can be represented as a sequence of such deltas, each delta being a list of block offsets and their new contents.  
3. **Optimization – deduplication by hash**  
   For every block we compute a lightweight hash \(h(b)\). If \(h(b)\) already exists in an earlier snapshot, we store only the reference (pointer) rather than the raw data. This transforms the problem into a *set cover* where each unique block is a set element; the optimal solution is simply to keep one copy per distinct content.  
4. **Geometry – tree‑like index**  
   To accelerate reads, we build a B‑tree whose keys are block offsets and values are either raw data or pointers to earlier snapshots. The tree’s depth \(O(\log N)\) guarantees that restoring any block takes logarithmic time, independent of the number of deltas.

**Non‑obvious insight:**  
Because the hash space is much larger than the disk size, collisions are astronomically unlikely; thus we can treat a *hash match* as an exact match with probability ≈ 1. This lets us avoid storing duplicate data without ever recomputing block contents during restores—making BlockDiff both compact and fast.

In short, BlockDiff turns the snapshot problem into a sparse delta encoding plus hash‑based deduplication, backed by a B‑tree index for quick access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
