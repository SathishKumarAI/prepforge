---
qid: ing_2479d22f8c__fp__local
question: 'Explain: Design goals — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 434
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:23:21-05:00'
sources: []
---

### Why a *BlockDiff* format?

A virtual‑machine snapshot must capture **exactly** the state of a disk at a point in time while keeping storage small and restores fast.  
From first principles this is an *information‑theoretic* problem: we need to encode the difference between two large binary blobs (the old and new disk images) so that
- the encoded data is minimal (entropy‐bound by the Hamming distance),
- it can be applied in a single pass without random access,
- and it survives corruption (a bit‑flip should not corrupt the entire snapshot).

### Design goals

| Goal | Why it must hold |
|------|------------------|
| **Block granularity** | Disk I/O is block‑based; keeping changes at block level preserves cache locality and allows partial restoration. |
| **Append‑only log** | Snapshots are often taken sequentially. An append‑only stream avoids costly rewrites and fits streaming storage backends (S3, GCS). |
| **Deduplication per block** | Two snapshots of the same VM rarely differ in many blocks; we can skip re‑encoding unchanged blocks, saving bandwidth. |
| **Compression per block** | Small blocks compress better with generic codecs (zstd), keeping decompression linear and memory‑friendly. |
| **Checksum per entry** | Detect corruption early; a single bad checksum does not invalidate the whole snapshot. |

### Non‑obvious insight

The *block hash* used for deduplication is computed as a **rolling CRC32C** over each block’s data. This lets us reuse the same hash when a block is partially overwritten: we only recompute the changed tail, keeping deduplication incremental even for large writes.

Thus BlockDiff turns a naïve “full‑image” snapshot into an *information‑optimal*, streaming, fault‑tolerant diff that respects VM I/O semantics and storage constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
