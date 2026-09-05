---
qid: ing_831f32a1a8__star__local
question: 'Explain: Choose the Right Granularity — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 351
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:30-05:00'
sources: []
---

**Situation** – In my last role, we were building a distributed file storage service that needed to detect corruption across terabytes of data. The existing checksum strategy calculated a single SHA‑256 per file, which meant any bit flip required downloading the whole file to recompute it.

**Task** – I was tasked with redesigning the integrity check mechanism so that corrupt chunks could be identified and repaired in minutes rather than hours, without dramatically increasing storage overhead or latency.

**Action** – I proposed a multi‑level checksum hierarchy: compute a 64‑bit CRC32 for each 4 MiB block (granularity chosen after profiling read/write throughput) and store them in a Merkle tree. On upload, we stream blocks, update the CRC on the fly, and push the hash to a lightweight key‑value store (Redis). For repair, we compare leaf hashes; only mismatched blocks trigger re‑download from peers. I also added an adaptive policy: if a node’s latency spikes above 150 ms, we temporarily increase block size to 8 MiB to reduce RPC overhead.

**Result** – The new scheme cut corruption detection time from ~3 hours to under 15 minutes for 99th‑percentile files. Storage cost rose by only 0.2 % due to the small CRC footprint, and read latency dropped by 12 %. I learned that choosing checksum granularity is a trade‑off between fault isolation granularity, network traffic, and compute overhead—balancing them with real workload metrics leads to robust system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
