---
qid: ing_7d0ec6c849__faang__local
question: 'Explain: Databases — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:36:09-05:00'
sources: []
---

**Clarify**  
You’re asking how a database uses checksums for data integrity and what design choices underpin that system. I’ll assume we’re talking about relational or key‑value stores that persist pages to disk, want crash consistency, and can afford a small per‑page overhead.

**Approach**  
1. **Identify the unit of storage (page/tuple).**  
2. **Define checksum algorithm & placement.**  
3. **Explain when it’s computed / verified.**  
4. **Show how it ties into logging and recovery.**  
5. **Discuss trade‑offs (speed vs safety, deterministic vs cryptographic).**

**Depth**  
- Each disk page (e.g., 8 KB) ends with a 4‑byte CRC32 or SHA‑256 digest of the page’s contents plus its logical address.  
- On write, the engine recomputes the checksum and appends it before flushing to SSD/NVMe; on read, the checksum is verified immediately.  
- The checksum protects against bit‑rot and silent corruption (e.g., power loss mid‑write).  
- In a write‑ahead log (WAL), each log record also carries its own checksum so that during recovery we can detect corrupted redo/undo operations.  
- For performance, checksums are often computed in parallel with I/O using SIMD or offloaded to the SSD controller.

**Edge Cases**  
- **False positives:** CRC collisions are astronomically unlikely but possible; use stronger hashes for regulatory compliance.  
- **Corrupted checksum field itself:** Store a redundant copy or use ECC on metadata blocks.  
- **Multi‑node replication:** Checksums must be recalculated per node to account for byte‑order differences.

**Optimize & Communicate**  
To improve throughput, batch checksum calculations across pages and leverage hardware CRC engines. I’d explain that the design balances 1–2 % storage overhead against the cost of undetected corruption (downtime, data loss). In a FAANG interview, I’d finish by summarizing: “Checksums are lightweight guards that turn silent bit‑rot into detectable failures, enabling reliable crash recovery while keeping write latency minimal.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
