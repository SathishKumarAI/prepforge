---
qid: ing_a4bd5e0010__faang__local
question: 'Explain: What Checksums Can and Cannot Tell You — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 491
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:08:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to explain the utility and limits of checksum‑based integrity checks (e.g., CRC32, MD5) when designing distributed systems that store or transmit data. Assume we’re talking about detecting accidental corruption versus intentional tampering.

**Approach**  
1. List what a checksum *can* guarantee (detecting random bit errors).  
2. Highlight what it *cannot* do (prove authenticity, detect all collisions).  
3. Map these to common system scenarios: storage replication, network transfer, and security layers.  

**Depth**  
- **Detection** – A well‑chosen checksum will flag almost any accidental corruption; the probability of a random error passing undetected is 1/2^n (e.g., CRC32 ≈ 1 in 4 billion).  
- **Collision resistance** – MD5/SHA1 are fast but not collision‑resistant for adversaries; an attacker can craft two messages with the same hash.  
- **Authentication** – Checksums alone give no proof of origin; you need HMAC or digital signatures to bind data to a key or identity.  
- **Granularity** – Small blocks (e.g., per‑block CRC in SSDs) catch localized errors, while whole‑file checksums detect larger faults but miss intra‑block corruption if the checksum is recomputed incorrectly.

**Edge Cases**  
- *Intentional tampering* can bypass weak checksums.  
- *Replay attacks*: identical data yields same checksum; without timestamps or nonces you cannot differentiate.  
- *Large files*: computing a single checksum becomes expensive; use Merkle trees for efficient partial verification.

**Optimize & Communicate**  
Explain that in a production system we combine:  
1. Fast CRCs for low‑overhead corruption detection on storage media.  
2. Strong HMAC/SHA256 for data authenticity when security matters.  
3. Merkle trees or hash‑based message authentication codes to support efficient verification of subsets (e.g., block‑level in cloud backups).  

Conclude that checksums are indispensable for detecting accidental errors but must be paired with cryptographic techniques to guard against malicious manipulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
