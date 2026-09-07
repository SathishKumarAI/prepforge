---
qid: ing_007655e8c2__faang__local
question: 'Explain: Signing with PKCS #11 URIs — GitHub - sigstore/model-transparency:
  Supply chain security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 497
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:45:32-05:00'
sources: []
---

**Clarify**  
You’re asking how a model‑signing workflow can reference a key via a *PKCS #11 URI* (e.g., `pkcs11:token=MyToken;object=ModelSigner`) in the sigstore/model‑transparency project.  
Assumptions to confirm:  

1. The signing side has access to a PKCS #11 HSM or software token.  
2. The verification process can resolve that URI and communicate with the same module.  
3. The model artifact is immutable once signed.

**Approach**  
1. Embed the PKCS #11 URI in the `sigstore` signature metadata (the `.signature.json`).  
2. On signing, call the HSM via a PKCS #11 library to generate a detached signature over the model hash.  
3. Store the resulting JWS and URI together.  
4. During verification, parse the URI, load the same module, fetch the public key, and verify the JWS.

**Depth**  
- The URI follows RFC 7517 style but uses PKCS #11 attributes (token, object, pin).  
- Signing code: `signer.Sign(data, pkcs11URI)` → JWS with header `kid=pkcs11:<hash>`.  
- Verification: `verifier.Verify(jws, pkcs11URI)`, which internally does a key lookup via the HSM.  
- Complexity is O(1) per signature; the heavy work is inside the HSM.  
- Security: the private key never leaves the module; only public key and URI are exposed.

**Edge Cases**  
- Token not found or PIN incorrect → raise explicit error.  
- Multiple objects with same label → enforce unique `object` attribute.  
- HSM downtime → fallback to software signing (not recommended for production).  

**Optimize & Communicate**  
Explain that using PKCS #11 URIs decouples the key from code, enabling rotation and hardware isolation without changing the signature files. Highlight trade‑offs: added latency for HSM calls vs stronger security. Conclude with how this fits sigstore’s goal of supply‑chain integrity for ML models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
