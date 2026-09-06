---
qid: ing_91b8183cc5__fp__local
question: 'Explain: F8: Adapter signing key rotation breaks legacy clients'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 470
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:14:50-05:00'
sources: []
---

**Why adapter signing‑key rotation matters**

An *adapter* (e.g., a language model wrapper) signs every request/response with an asymmetric key to guarantee integrity, authenticity, and non‑repudiation. The client verifies the signature against a public key it trusts.  
When the service rotates its signing key—necessary to limit exposure if a private key leaks—the public part of the new key must be distributed to all clients.  

**What legacy clients miss**

Legacy clients were built with only the *old* public key baked in, or they cache that key locally and never refresh it.  
During rotation:

1. The adapter signs payloads with **new‑key private**.
2. Legacy client still verifies against **old‑key public** → signature mismatch → authentication failure.
3. Even if the legacy client fetches the new public key, many libraries enforce strict *static* trust anchors; they reject any key that differs from what was originally configured.

Thus, rotation “breaks” them because the verification step is a hard constraint: signatures must match the expected key exactly.

**Deeper principle**

This is an instance of **trust‑anchor immutability vs. forward‑compatibility**. The system enforces *security* (prevent replay or forgery) by refusing any signature that doesn’t come from the known, signed key. But this strictness ignores the *information flow* needed for clients to learn new anchors—essentially a missing “key‑rotation protocol”.

**Non‑obvious insight**

Most people think key rotation only affects servers; in reality it’s a *client‑side state problem*. The client must have a *dynamic trust store* (e.g., via a secure HTTP endpoint that returns the current public key or certificate chain). Without this, any cryptographic upgrade forces backward incompatibility. A robust design couples key rotation with an out‑of‑band distribution channel—otherwise you break every legacy consumer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
