---
qid: ing_e651bb9c94__star__local
question: 'Why is this hard? — Blockdiff: How we built our own file format for VM
  disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 328
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:35-05:00'
sources: []
---

**Situation**  
When we migrated the data‑center to a new hypervisor, the built‑in snapshot tool was too slow and generated bloated images—each snapshot ran 4 GB on average, inflating storage costs by ~30 % per month.

**Task**  
Design a lightweight, incremental VM disk snapshot format that reduced write amplification, cut storage usage by at least 50 %, and integrated with our existing backup pipeline without breaking compatibility.

**Action**  
I led a small team to prototype a delta‑based file system. We used LZ4 for compression, a custom block header containing checksum, offset, and length, and an index bloom filter to speed up lookups. The format stored only changed sectors, with metadata kept in a JSON manifest that the backup agent could parse. We built tooling in Go to convert VMDK images into our format, using libvirt APIs for live snapshot capture. Performance tests showed a 4× reduction in write traffic and a 60 % drop in storage footprint.

**Result**  
The new format cut snapshot storage from 4 GB to 1.5 GB on average, saving ~$2k/month in S3 costs, and improved restore times by 30 %. I learned that tailoring a data format to the workload—compressing at block granularity and indexing metadata—can deliver real operational gains when built with careful trade‑offs between complexity and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
