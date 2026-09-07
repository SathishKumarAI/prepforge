---
qid: ing_bca1d5ef47__faang__local
question: 'Explain: What a Checksum Is — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 500
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:01:39-05:00'
sources: []
---

**Clarify**  
You’re asking what a *checksum* is and why it matters in distributed systems or data‑storage pipelines. I’ll assume the goal is integrity verification for files, logs, or network packets—no cryptographic security needed.

**Approach**  
1. Define checksum conceptually.  
2. Explain typical algorithms (CRC, Adler‑32, SHA‑256).  
3. Discuss trade‑offs: speed vs collision resistance.  
4. Show a concrete example in a system design context (e.g., HDFS block checksums).

**Depth**  
A *checksum* is a deterministic function that maps arbitrary data to a short fixed‑size value (often 32/64 bits). When a receiver recomputes the checksum, a mismatch signals corruption.  

- **CRC (Cyclic Redundancy Check)**: fast bitwise polynomial division; excellent for detecting burst errors in network frames.  
- **Adler‑32**: simple two‑word sum, used in zlib; faster than CRC but less robust against intentional tampering.  
- **SHA‑256**: cryptographic hash; slower but virtually collision‑free, suitable when integrity must be proven against adversaries.

In a distributed file system, each block is stored with its checksum (e.g., HDFS uses 32‑bit CRC). When reading, the client recomputes and compares; if mismatch, it retries from another replica. This gives *linear* time overhead proportional to block size and negligible space cost (4 bytes per block).

**Edge Cases**  
- Small data: checksum may be identical for distinct inputs—acceptable in non‑security contexts.  
- Large files: recomputing checksums can become a bottleneck; use incremental or parallel hashing.  
- Storage corruption that mimics a valid checksum (rare with CRC but possible); add redundancy or stronger hash if needed.

**Optimize & Communicate**  
For high throughput, prefer CRC32 or Adler‑32 and compute in the I/O path using SIMD instructions. If security is a concern, switch to SHA‑256 only on write or verification phases to avoid constant hashing cost. Explain this trade‑off clearly: “We use lightweight CRC for everyday reads because latency dominates; we fall back to SHA‑256 when a failure is detected.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
