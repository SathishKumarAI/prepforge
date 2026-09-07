---
qid: ing_472d16ad44__faang__local
question: 'Explain: Stage 2 — How Google Authenticator Works'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 530
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:29:33-05:00'
sources: []
---

**Clarify**

> *“Explain how Stage 2 of Google Authenticator works.”*  
> I’ll assume you’re asking about the time‑based one‑time password (TOTP) algorithm used after a user has set up the app: i.e., how the app and server generate matching 6‑digit codes from a shared secret.

**Approach**

1. **Shared secret exchange** – QR code/URL encodes a base32 key.  
2. **Time slice calculation** – current Unix epoch divided by a 30 s window → counter.  
3. **HMAC generation** – HMAC‑SHA1(secret, counter).  
4. **Truncate & mod** – dynamic truncation to 31 bits, then `% 10⁶` for six digits.  
5. **Validation** – server recomputes code for current and ±1 window to allow small drift.

**Depth**

* The secret is stored in the app’s secure enclave; it never leaves the device.  
* Counter = floor(⌊epoch / 30⌋). For example, at epoch = 1610000000 → counter ≈ 53666666.  
* HMAC‑SHA1 produces a 20‑byte digest; dynamic truncation selects an offset from the last byte (`digest[-1] & 0x0F`), then extracts 4 bytes starting there, clears the sign bit.  
* Code = (truncated_value % 1000000). Padding with zeros yields the 6‑digit OTP.  
* Server keeps its own copy of the secret; it recomputes for current and ±1 windows to tolerate minor clock skew.

**Edge Cases**

| Case | What breaks? | Test |
|------|--------------|------|
| Clock drift >30 s | Code mismatch | Simulate device/server time offsets |
| Corrupted secret | All codes wrong | Verify QR decode integrity |
| Replay attacks | Same code reused | Ensure server tracks last used counter |

**Optimize & Communicate**

*Use constant‑time comparison to avoid timing leaks.*  
Explain that Google Authenticator is stateless: no network calls during OTP generation, so it scales.  
When interviewing, highlight trade‑offs (30 s window vs. usability) and mention that some services allow longer windows or 8‑digit codes for higher entropy.

This structured walk‑through shows clarity, algorithmic depth, and awareness of edge cases—key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
