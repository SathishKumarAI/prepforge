---
qid: ing_0c1b0ce824__fp__local
question: 'Explain: Serializing the diff between two files — Blockdiff: How we built
  our own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 463
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:31:36-05:00'
sources: []
---

**Why a “block‑difference” format?**  
When a virtual machine (VM) writes to its disk, most sectors stay untouched; only a handful change each tick. Storing the whole image after every snapshot would waste bandwidth and storage—especially in cloud data centers where snapshots are frequent. The problem is *how to capture exactly what changed* while keeping the representation as compact as possible.

**The underlying principle: locality‑sensitive hashing + run‑length coding**  
Blockdiff tackles this by partitioning a disk image into fixed‑size blocks (e.g., 4 KiB). For each block it computes a cryptographic hash. When two snapshots are compared, only the hashes that differ indicate modified blocks. Because the hash is a compact fingerprint, we avoid comparing raw bytes unless necessary. This exploits *data locality*: adjacent sectors tend to change together, so consecutive differing blocks can be collapsed into a single “gap” entry.

**Encoding the diff**  
The format stores three kinds of records:

1. **Unmodified block reference** – points to the same block in the base snapshot (no data stored).  
2. **New block payload** – raw bytes for blocks that changed.  
3. **Run‑length “skip”** – a length value telling the reader to copy a contiguous stretch of unchanged blocks from the base.

These records are written sequentially, so a decoder can reconstruct the new snapshot by streaming through the base and overlaying only the necessary payloads. The skip runs reduce metadata overhead when large stretches stay identical—a property that emerges naturally from block‑level hashing.

**Non‑obvious insight: “hash as locality filter”**  
Many people think hashes are only for integrity checks. In Blockdiff they double as a *locality filter*: a mismatch immediately signals that the entire block is worth inspecting, while a match guarantees that all bytes inside are identical—no per‑byte comparison needed. This dual role lets us avoid expensive diff algorithms and still keep the format lightweight.

In short, Blockdiff reduces VM snapshot storage to “hash + payload + skip”, leveraging locality, hashing, and run‑length coding so that only genuinely changed data consumes bandwidth and disk space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
