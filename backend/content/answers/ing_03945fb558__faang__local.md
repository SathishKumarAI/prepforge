---
qid: ing_03945fb558__faang__local
question: 'Explain: Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 485
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:52:33-05:00'
sources: []
---

**Checksums in ML Systems – A Structured FAANG‑style Answer**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You want to know how checksums are used for data integrity in large‑scale ML pipelines, and what trade‑offs they introduce.”  Assumptions: we’re dealing with distributed storage (e.g., S3/HDFS), batch training jobs, and need sub‑second verification. |
| **Approach** | 1️⃣ Compute a lightweight hash (MD5/SHA‑256) on the fly as data streams to storage. <br>2️⃣ Store the checksum alongside the artifact (metadata table). <br>3️⃣ On read, recompute and compare before deserialization or model load. |
| **Depth** | • **Hash choice:** MD5 is fast but collision‑prone; SHA‑256 gives stronger guarantees at ~10× CPU cost. <br>• **Performance:** For 100 GB shards, hashing costs ≈ 1–2 s on a single GPU; can parallelize across workers. <br>• **Storage overhead:** 32 bytes per checksum is negligible vs data size. <br>• **Failure modes:** Corruption during transfer → detection before training; stale checksum if data is updated without recomputation. |
| **Edge Cases** | • Small files (<1 KB) where hashing cost dominates – use a pre‑computed table or skip. <br>• Highly compressed formats (Parquet) – compute checksum on decompressed stream to catch bit‑rot inside the container. <br>• Multi‑tenant clusters – isolate checksums per namespace to avoid cross‑contamination. |
| **Optimize & Communicate** | • Use streaming hash libraries that run in hardware or GPU for speed.<br>• Cache recent checksums in memory (e.g., Redis) to avoid recomputation on hot data. <br>Explain trade‑offs: faster hashes → more collisions, slower → higher CPU; choose based on acceptable risk and latency budget. |

**TL;DR:** In ML pipelines we store a SHA‑256 checksum with each artifact, verify it on load, and balance hash speed vs collision safety to guarantee data integrity without hurting training throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
