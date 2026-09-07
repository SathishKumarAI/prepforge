---
qid: ing_170af1d4b8__faang__local
question: 'Explain: Cryptographic Hashes — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 463
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:38:10-05:00'
sources: []
---

**Clarify**  
You’re asking for a system‑design overview of *cryptographic hashes used as checksums*—i.e., how we compute, store, and verify integrity data in large distributed services (e.g., file storage or CDN). Key assumptions:  
- Data volume is high (PB scale), read‑heavy.  
- We need collision‑resistant, fast hashing.  
- Integrity must be verifiable client‑side and server‑side.

**Approach**  
1. **Hash selection** – choose SHA‑256 / BLAKE3 for speed & security.  
2. **Compute pipeline** – streaming hash during upload; chunked processing to avoid memory spikes.  
3. **Metadata store** – key = object ID, value = hash + size + timestamp in a highly replicated KV store (e.g., DynamoDB).  
4. **Verification path** – client sends hash with request; server recomputes on read and compares.  

**Depth**  
- *Complexity*: O(n) per object for hashing; storage overhead ≈ 32 bytes/hash + metadata.  
- *Trade‑offs*: SHA‑256 is slower than BLAKE3 but battle‑tested; BLAKE3 offers ~4× speed on modern CPUs with similar security.  
- *Consistency*: Use eventual consistency in KV store, but lock or versioning to avoid stale hashes during updates.  

**Edge Cases**  
- Partial uploads: use resumable upload tokens + incremental hash state.  
- Corrupted metadata: detect via checksum mismatch and trigger recompute from source (e.g., S3).  
- Large files: split into fixed‑size blocks, store per‑block hashes for fine‑grained corruption detection.

**Optimize & Communicate**  
Explain that adding a secondary lightweight “fast hash” (e.g., xxHash) for quick client‑side pre‑validation reduces round trips. Emphasize monitoring: rate of mismatches → alert for disk failures. Conclude with how this design scales linearly, keeps latency low (< ms per lookup), and satisfies security guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
