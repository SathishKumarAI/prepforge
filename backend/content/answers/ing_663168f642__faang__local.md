---
qid: ing_663168f642__faang__local
question: 'Explain: How Verification Works — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:42:02-05:00'
sources: []
---

**Verification in Distributed Systems – Checksum Design**

| Step | What I’ll Cover |
|------|-----------------|
| **Clarify** | We need a lightweight way for nodes to detect data corruption during transfer or storage. Assume: <br>• Data arrives as byte streams or blocks.<br>• Bandwidth and latency are critical; we can’t send full digests.<br>• Checksums must be fast, deterministic, and collision‑resistant enough for our use case. |
| **Approach** | 1️⃣ Use a rolling checksum (e.g., Adler‑32) to detect accidental corruption quickly. <br>2️⃣ Pair it with a cryptographic hash (SHA‑256) only on failure or during periodic audits. <br>3️⃣ Store the short checksum in metadata; if mismatch, request retransmission. |
| **Depth** | *Adler‑32* runs O(n) with low constant factors and fits in 4 bytes. It catches most random errors (≈1‑in‑2³²). *SHA‑256* adds ≈30× overhead but guarantees negligible collision probability for malicious attacks. For a block size of 64 KB, verification time is <1 ms on modern CPUs. |
| **Edge Cases** | • Reordered packets: rolling checksum still works because it’s per‑block.<br>• Deliberate tampering: only SHA‑256 will detect; if not run, collision risk remains (acceptable for non‑security data).<br>• Extremely large files: stream the checksum rather than buffering entire file. |
| **Optimize & Communicate** | • Cache recent checksums to avoid recomputing on repeated reads.<br>• Expose a “verify‑on‑write” flag so clients can opt‑in for stronger guarantees at cost of throughput.<br>Explain trade‑offs: faster but weaker (Adler) vs slower but secure (SHA). This clarity satisfies interviewers looking for structured reasoning and practical system design. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
