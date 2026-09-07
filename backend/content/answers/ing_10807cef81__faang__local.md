---
qid: ing_10807cef81__faang__local
question: 'Explain: Where Checksums Are Used — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 584
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:42-05:00'
sources: []
---

**Clarify**  
*Problem:* “Where are checksums used in system design?”  
Assumptions I’d confirm: we’re talking about *data integrity* at the storage/network layer (not crypto), and that the audience is familiar with basic networking concepts.

---

**Approach**  
1. List layers where checksums appear.  
2. For each, explain purpose, typical algorithm, and trade‑offs.  
3. Tie back to real‑world systems (e.g., HDFS, TCP/IP, blockchains).

---

**Depth**

| Layer | Typical Use | Algorithm | Why & Trade‑offs |
|-------|-------------|-----------|------------------|
| **Transport (TCP/UDP)** | Detect bit‑rot during transit | 16‑bit Internet checksum | Fast, low overhead; fails on multi‑byte errors but suffices for most network traffic. |
| **File Systems / Block Storage** | Verify disk blocks & snapshots | CRC32/CRC64 or SHA‑256 in HDFS, Btrfs | Stronger detection (e.g., CRC handles burst errors). Overhead: extra bytes per block and compute cost. |
| **Distributed Replication** | Detect divergence between replicas | Merkle trees with hash checksums | Enables efficient diffing; trade‑off is larger metadata but saves bandwidth. |
| **Databases & WAL** | Ensure write‑ahead logs are intact | SHA‑1/SHA‑256 per log record | Guarantees crash‑consistency; hashing cost balanced by infrequent writes. |
| **Backup / Cloud Storage** | Validate object integrity on restore | MD5/SHA‑1 (legacy) or SHA‑256 | Cheap verification; risk of collision mitigated in practice with versioning. |
| **Blockchains** | Verify transaction blocks | SHA‑256/Keccak | Essential for consensus; hash cost is intentional security cost. |

---

**Edge Cases**

* Corrupted checksum field itself → double checks (e.g., CRC + hash).  
* Very small payloads: 16‑bit checksum may be too weak → use stronger hash.  
* High‑throughput systems: balance between CPU and network I/O.

---

**Optimize & Communicate**  

- **Layer‑specific tuning:** Use lightweight CRC at transport, heavier hashes at storage.  
- **Parallelism:** Compute checksums during I/O to hide latency.  
- **Explain trade‑offs clearly:** “We sacrifice a few bytes per block for 99.999% error detection; that’s acceptable in HDFS because disk errors are rare but catastrophic.”

This structured answer shows clarity, depth, and the ability to reason about system trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
