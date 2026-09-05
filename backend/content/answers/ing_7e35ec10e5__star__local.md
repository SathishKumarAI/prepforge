---
qid: ing_7e35ec10e5__star__local
question: 'Explain: Checksums vs Encryption — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 324
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:46:11-05:00'
sources: []
---

**Situation:**  
While leading the data‑pipeline overhaul for our e‑commerce platform, we noticed that nightly batch jobs were occasionally corrupting product metadata—customers saw wrong prices or missing images. The existing checksum validation was too slow and didn't prevent tampering, yet encryption would add latency and complexity.

**Task:**  
I had to design a lightweight integrity check that could detect accidental corruption without blocking legitimate updates, while also ensuring sensitive customer data remained protected during transit.

**Action:**  
First, I introduced SHA‑256 checksums on every JSON payload stored in our S3 bucket. The checksum was calculated at write time and verified on read, catching bit‑rot or accidental edits in ~0.2 ms per object. For the sensitive fields (credit card numbers, SSNs), I applied AES‑256 encryption using AWS KMS; only the encrypted blob was stored, and the checksum covered the ciphertext to guarantee integrity without exposing plaintext. I added a versioning layer so that if a checksum failed we could roll back to the last good state automatically.

**Result:**  
After deployment, data corruption incidents dropped from 3 per week to zero. The end‑to‑end latency increased by only 12 ms on average—well within our SLA—and compliance audits passed without any manual intervention. I learned that checksums are ideal for fast integrity verification of non-sensitive data, while encryption should be reserved for protecting confidentiality; combining both gives a robust, performant solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
