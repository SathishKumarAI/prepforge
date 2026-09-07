---
qid: ing_8dd6504b20__faang__local
question: 'Explain: Verify on Both Write and Read — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 425
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:51-05:00'
sources: []
---

**Clarify**  
We need a design that guarantees data integrity both when writing to storage and when reading it back, using checksums. Assume we’re building an object store (e.g., S3‑like) that must detect corruption in transit or at rest, support large files, and scale horizontally.

**Approach**  
1. **Checksum generation** – Compute a cryptographic hash (SHA‑256) on the client before upload.  
2. **Write path** – Store the checksum alongside the object metadata; optionally split large objects into fixed‑size blocks, each with its own block‑checksum, and keep a Merkle tree root.  
3. **Read path** – On retrieval, recompute the hash (or block hashes) and compare to stored values. If mismatch, trigger a retry or fetch from replicas.  
4. **Failure handling** – Use erasure coding + redundant copies; if checksum fails, fetch alternate replica and verify again.

**Depth**  
- *Complexity*: O(n) for hashing per object; storage overhead ≈ 32 bytes (SHA‑256) per block, plus Merkle tree nodes (~O(log n)).  
- *Trade‑offs*: Larger block size reduces metadata but increases risk of undetected corruption; smaller blocks improve detection granularity.  
- *Security*: Use HMAC with a secret key to prevent malicious checksum forgery.

**Edge Cases**  
- Network truncation or partial writes: detect via missing bytes vs expected length.  
- Clock drift on distributed nodes: use monotonically increasing sequence numbers instead of timestamps for versioning.  
- Zero‑byte objects: still store a checksum (hash of empty string).

**Optimize & Communicate**  
Future improvements include adaptive block sizing based on access patterns, and leveraging GPU‑accelerated hashing for high throughput. I’d explain this roadmap to interviewers, emphasizing the balance between integrity guarantees and system performance, and how each design choice aligns with FAANG scalability standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
