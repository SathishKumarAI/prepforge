---
qid: ing_075bec593c__faang__local
question: 'Explain: Distributed Systems — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 432
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:01:31-05:00'
sources: []
---

**Distributed Systems – Checksums in System Design**

| Step | What to say |
|------|-------------|
| **Clarify** | “We’re building a fault‑tolerant distributed storage where data is replicated across nodes. We need a lightweight mechanism to detect corruption during replication or network transfer.”  Confirm: *What size of data chunks?* *Which consistency model (strong vs eventual)?* *Is the checksum stored with metadata or in a separate log?* |
| **Approach** | • Choose a fast, non‑cryptographic hash (e.g., xxHash, Murmur3) for speed. <br>• Compute per‑chunk checksums on write; attach to chunk metadata. <br>• On read/replication, recompute and compare. <br>• If mismatch, trigger a repair by fetching from another replica or running erasure‑code recovery. |
| **Depth** | • Complexity: O(n) time per chunk, negligible space overhead (e.g., 8 bytes). <br>• Collision probability ≈2⁻¹⁶⁰ for xxHash64; acceptable for integrity checks but not authentication. <br>• Use a Merkle tree if you need hierarchical verification across large files. |
| **Edge Cases** | • Network‑level corruption (bit flips) → caught by checksum. <br>• Node failure during write → store partial chunk with flag and recompute on recovery. <br>• Stale replica: if all replicas corrupt, trigger global consistency check or alert. |
| **Optimize & Communicate** | • Cache checksums in memory for hot data to avoid recomputation. <br>• Batch checksum calculation during background compaction jobs. <br>Explain trade‑offs: faster hash → lower collision risk; larger chunk size → less metadata overhead but higher recovery cost. Conclude with how this design keeps integrity checks lightweight while enabling rapid fault detection in a distributed environment. |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
