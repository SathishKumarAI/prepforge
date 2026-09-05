---
qid: ing_007655e8c2__fp__local
question: 'Explain: Signing with PKCS #11 URIs — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 448
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:06:23-05:00'
sources: []
---

### Why a *PKCS #11 URI* matters for AI model signing

When an ML model is distributed, the fundamental problem is **trust**: how can a consumer verify that the artifact came from a legitimate source and has not been tampered with?  
The solution is to attach a cryptographic signature. In the *sigstore/model‑transparency* project this signature is produced by a **Hardware Security Module (HSM)** or smart card that follows the PKCS #11 API. The URI (`pkcs11:token=...;object=...`) tells the signing tool exactly which key in the HSM to use, without exposing the private key itself.

#### Derivation from first principles
1. **Secure key storage** → the private key must never leave the HSM.  
2. **Standardized API** → PKCS #11 defines a uniform interface for all token types.  
3. **Deterministic signing** → the same message and key always produce the same signature, allowing reproducible verification.

Thus the URI is *not* just a locator; it encodes the security domain (token label) and the specific object (key). The signing tool uses this to open a session, authenticate, and invoke `CKM_RSA_PKCS` or similar.  

#### A non‑obvious insight
Most people think the PKCS #11 URI only selects a key; in fact it also **binds the signature to a particular token state** (e.g., counter, firmware version). If the HSM’s *token label* changes (say after a firmware update), signatures signed with the old URI become unverifiable. Therefore, for supply‑chain integrity, you must store the exact PKCS #11 URI—down to its token fingerprint—in the model metadata, ensuring that future verifiers can map back to the same secure environment. This subtlety guarantees that *not only* the key but also the **trust anchor’s provenance** is preserved across releases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
