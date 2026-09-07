---
qid: ing_fdb241b15d__faang__local
question: 'Explain: No Model Training — Secure legal AI for the most sensitive matters
  | Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 508
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:59-05:00'
sources: []
---

**Clarify**  
We need to explain how a system can provide *secure, legally compliant AI* for highly sensitive use‑cases **without performing any model training**.  
Key assumptions: (1) the AI must satisfy strict privacy / regulatory constraints (GDPR, HIPAA, etc.), (2) no in‑house training data or model weights are allowed to leave the secure environment, and (3) the system should still deliver useful predictions or insights.

**Approach**  
1. **Leverage pre‑trained models** hosted behind a *trusted execution environment* (TEE).  
2. **Zero‑knowledge inference**: wrap the TEE with a privacy‑preserving protocol so that inputs/outputs never leave encrypted form.  
3. **Audit & attestation**: use hardware attestation to prove that only authorized code runs inside the enclave and that no model weights are exposed.  
4. **Legal compliance layer**: embed policy engines (e.g., XACML) that enforce data‑handling rules at runtime.

**Depth**  
- *TEE* (Intel SGX, AMD SEV) isolates computation; the model resides in memory only inside the enclave.  
- Clients send encrypted inputs via homomorphic encryption or secure multiparty computation (SMPC).  
- The enclave decrypts locally, runs inference, re‑encrypts results—ensuring no plaintext leaks.  
- Attestation logs are signed and stored on immutable ledgers for audit trails.  
Complexity: O(n) inference time with a small constant overhead from encryption/decryption; memory footprint limited to the model size plus enclave stack.

**Edge Cases**  
- **Side‑channel attacks**: mitigate via constant‑time kernels and regular patching of enclave firmware.  
- **Model drift**: if updates are needed, perform them inside a *trusted* update pipeline rather than re‑training on client data.  
- **Regulatory changes**: policy engine must be updatable without exposing the model.

**Optimize & Communicate**  
Explain that this architecture eliminates training‑time data leakage while still delivering state‑of‑the‑art inference performance. Highlight trade‑offs: higher latency due to encryption, but negligible for most sensitive use cases. Conclude by stressing that legal compliance is baked into the runtime via attestation and policy enforcement, making the solution “secure‑by‑design.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
