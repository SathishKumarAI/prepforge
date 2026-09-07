---
qid: ing_01d8793694__faang__local
question: 'Explain: Storage Systems — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 476
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:18-05:00'
sources: []
---

**Clarify**  
We’re designing a distributed storage layer that guarantees data integrity using checksums (e.g., CRC‑32, SHA‑256). The goal is to detect corruption on write/read and recover lost/incorrect blocks with minimal overhead. Assumptions: *Write‑once semantics*, *data sharded across many nodes*, *high read throughput*, *acceptable latency < 200 ms*.

**Approach**  
1. **Per‑block checksum** stored alongside the data in metadata or a separate log.  
2. **Redundancy** via erasure coding (e.g., Reed–Solomon) or replication to recover corrupted blocks.  
3. **Verification pipeline**: compute on write, verify on read; if mismatch → trigger repair.  
4. **Audit service** that periodically scans shards and rebuilds missing checksums.

**Depth**  
- *Write*: Compute checksum in O(L) where L is block size (fast CRC). Store as part of the record header.  
- *Read*: Retrieve data + stored checksum, recompute locally; if mismatch → fetch parity blocks or replicas to reconstruct.  
- *Repair*: On detection, use erasure coding decoder (O(k m)) to rebuild missing block. Complexity is acceptable because repairs are infrequent.  
- *Scalability*: Checksums are tiny (~4–32 bytes) so storage overhead <1%. Distributed hash of block IDs ensures even load.

**Edge Cases**  
- Simultaneous corruption on multiple parity blocks → fall back to full node rebuild.  
- Clock skew causing checksum mismatch due to different versions – embed version number in checksum header.  
- Network partitions hiding corrupted data until heal; use gossip protocol to surface anomalies quickly.

**Optimize & Communicate**  
- Use hardware‑accelerated CRC for speed, SHA‑256 only on audit runs.  
- Batch checksum verification during reads to amortize CPU cost.  
- Expose an API `verify(blockId)` that returns integrity status; internal service logs failures and triggers auto‑repair.  

This design balances low latency, high throughput, and strong data‑integrity guarantees—key for any FAANG‑grade storage system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
