---
qid: ing_a4bd5e0010__star__local
question: 'Explain: What Checksums Can and Cannot Tell You — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 301
total_tokens: 543
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:48-05:00'
sources: []
---

**Situation:** While building a distributed training pipeline for an image‑classification model, we noticed occasional corruption of checkpoint files that caused training to abort on some workers.

**Task:** I needed to quickly detect corrupted checkpoints without adding heavy cryptographic overhead, and to ensure the system could recover gracefully.

**Action:** I implemented SHA‑256 checksums stored alongside each checkpoint. During a worker’s initialization it computes the checksum of its local file and compares it to the expected value from a central metadata service. If the sums differ, the worker requests a fresh copy from a reliable storage node. For integrity validation during data ingestion, we used CRC32 for quick byte‑level checks on streaming image buffers; if CRC matched, the buffer was accepted, otherwise discarded. I also added a lightweight Bloom filter to flag suspicious files before checksum calculation.

**Result:** The pipeline’s checkpoint failure rate dropped from 3 % to <0.1 %. Training time increased by only ~2 %, while data integrity confidence rose significantly. I learned that checksums are great for detecting accidental corruption or transmission errors, but they cannot guarantee authenticity or protect against intentional tampering—cryptographic signatures would be required for that level of security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
