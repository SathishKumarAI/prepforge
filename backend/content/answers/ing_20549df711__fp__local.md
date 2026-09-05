---
qid: ing_20549df711__fp__local
question: 'Explain: Verify Signatures — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 446
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:14:51-05:00'
sources: []
---

**Why a signature matters**

When a service A posts data to your endpoint, the network is a public channel: anyone can inject or modify payloads. To guarantee *integrity* and *authenticity*, A signs the message with a key it shares only with you. The verifier must prove that the message came from A and has not been altered.

**The core algorithm**

1. **Canonicalization** – both sides format the request deterministically (e.g., UTF‑8 JSON, sorted headers).  
2. **Hash & HMAC** – compute `H = HMAC_SHA256(secret_key, canonical_payload)`.  
3. **Header injection** – A sends `X-Signature: H` alongside the payload.  
4. **Verification** – you recompute `H'` using the same secret and compare constant‑time. If equal → trusted.

This works because HMAC is a *cryptographic hash* keyed to the shared secret; any tampering changes the digest with overwhelming probability, and only holders of the key can produce a valid digest.

**System‑design implications**

| Aspect | Design choice |
|--------|---------------|
| **Secret rotation** | Store secrets in a KMS; rotate via webhook configuration updates; replay protection using timestamps. |
| **Rate‑limiting** | Validate signature before heavy processing to avoid DoS from bogus payloads. |
| **Statelessness** | Signature verification is pure and stateless, enabling horizontal scaling without session stores. |

**Non‑obvious insight**

*Timing side‑channels*: a naive `if (a == b) return true;` leaks the first byte that matches. Always use constant‑time comparison (`crypto.timingSafeEqual` in Node.js, `hmac.compare_digest` in Python). This subtle detail is often missed but essential for security.

By grounding verification in cryptographic primitives and aligning it with system‑scale concerns—canonicalization, rotation, rate‑limiting—you build a webhook endpoint that is both robust and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
