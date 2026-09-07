---
qid: ing_6da93d0b0f__faang__local
question: 'Explain: Signature generation — ''A cheat sheet for API designs'''
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 547
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:58:19-05:00'
sources: []
---

**Signature Generation – A Cheat Sheet for API Design**

| Step | What to Do | Why It Matters |
|------|------------|----------------|
| **1️⃣ Clarify the Goal** | *Define “signature”* (e.g., request hash, OAuth token, HMAC). Confirm: 1) what data is signed, 2) which algorithm, 3) revocation/rotation policy. | Guarantees we’re protecting the right surface and can reason about security trade‑offs. |
| **2️⃣ Approach** | 1. *Collect canonical payload* (sorted params, UTF‑8). <br>2. *Choose a cryptographic hash* (SHA‑256 or SHA‑3 for forward‑compatibility). <br>3. *Apply keying*: HMAC with rotating secret or RSA/ECDSA if public‑key is required. | Keeps signatures deterministic and auditable, while supporting scalability. |
| **3️⃣ Depth** | - **Canonicalization**: URL‑encode, strip whitespace, enforce UTF‑8. <br>- **Key Management**: use AWS KMS / Azure Key Vault; rotate every 90 days. <br>- **Performance**: batch HMACs with SIMD; cache keys per request. <br>- **Compliance**: log signature, timestamp, nonce to audit trail. | Complexity ~O(n) per request; memory footprint minimal; key rotation cost amortized by caching. |
| **4️⃣ Edge Cases** | - Missing/duplicate params → fail fast. <br>- Time‑skew: reject >5 min clock drift. <br>- Replay attacks: include nonce + timestamp, store seen nonces for 1 hr. <br>- Deprecated fields: still signed for backward compatibility. | Prevents subtle bugs and ensures backward‑compatibility without breaking clients. |
| **5️⃣ Optimize & Communicate** | • Use constant‑time comparison to avoid timing leaks.<br>• Expose a reusable library (`SignatureUtil`) with clear API (`sign(request, key)` / `verify(signature, request)`).<br>• Document failure modes in README and provide unit tests for each edge case. | Enables quick onboarding, reduces bugs, and gives interviewers confidence in your systematic thinking. |

*Key takeaway*: Treat signature generation as a first‑class design component—clear spec → canonical payload → secure keying → robust error handling → well‑documented library. This pattern scales from microservices to public APIs while meeting security and performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
