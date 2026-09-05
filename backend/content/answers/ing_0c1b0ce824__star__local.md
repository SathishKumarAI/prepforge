---
qid: ing_0c1b0ce824__star__local
question: 'Explain: Serializing the diff between two files — Blockdiff: How we built
  our own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 406
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:53-05:00'
sources: []
---

**Situation:**  
At my previous company we were migrating a legacy hypervisor to a cloud‑native platform. The old system stored entire VM disks as monolithic images, causing 30 GB per snapshot and slow restores. Our devops team needed a way to ship incremental snapshots over the network without pulling whole disks.

**Task:**  
Design and implement a lightweight “block diff” file format that could capture only changed sectors between two disk images, compress them efficiently, and be fast enough for on‑the‑fly restoration during live migration.

**Action:**  
I started by profiling the VM write patterns; most writes were small, 4 KB blocks. I built a custom binary format: a header with metadata (snapshot ID, parent hash), followed by a sequence of records—each record contains block offset, length, and zstd‑compressed payload. To generate diffs I streamed both source and target images through a rolling Adler32 checksum to detect changed blocks without loading the entire disk into memory. The diff engine writes only new or modified blocks, leaving untouched sectors as zero‑filled placeholders that reference the parent snapshot. For restoration, a lightweight patcher reads the diff stream, decompresses blocks on‑the‑fly, and applies them to a base image via mmap for sub‑second performance.

**Result:**  
The new blockdiff format reduced average snapshot size from 30 GB to 4–6 GB (≈80% compression) and cut restore times by 70%, enabling real‑time migration of high‑density VMs. I also documented the spec in a public repo, which later became an open‑source reference for other teams. This project taught me how to balance disk I/O, compression trade‑offs, and backward compatibility when designing storage protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
