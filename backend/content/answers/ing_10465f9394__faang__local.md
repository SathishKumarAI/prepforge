---
qid: ing_10465f9394__faang__local
question: 'Explain: HMACs and Digital Signatures — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 525
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:14-05:00'
sources: []
---

**HMAC vs. Digital Signature (Checksums in ML Pipelines)**  

| | HMAC | Digital Signature |
|---|------|--------------------|
| **Purpose** | Authenticates data integrity *and* origin using a shared secret | Confirms authenticity and non‑repudiation with asymmetric keys |
| **Key type** | Symmetric (shared) | Asymmetric (private/public) |
| **Algorithm** | Hash + MAC (e.g., HMAC‑SHA256) | Sign( hash ) with RSA/ECDSA |
| **Performance** | O(n) hashing; cheap in ML pipelines (batch logs, model weights) | Slightly heavier due to modular exponentiation or EC ops |
| **Scalability** | All parties must keep secret key; risk of leakage | Public key can be distributed freely; only signer holds private key |
| **Use‑case** | Verify that a model file hasn’t been tampered during transfer between dev & infra nodes | Ensure a third‑party data provider signed the dataset (non‑repudiation) |

---

### When to use each in ML systems

1. **Model artifacts & checkpoints**  
   *Compute HMAC* with a key stored in a secrets manager.  
   *Why?* Fast, deterministic, and sufficient when only internal teams access the artifact.

2. **Third‑party datasets or model cards**  
   Require *digital signatures* signed by the provider’s private key.  
   *Why?* Allows any consumer to verify provenance without sharing secret keys.

3. **Pipeline logs & audit trails**  
   Attach HMACs to each log entry so downstream services can validate integrity in real time.

---

### Edge Cases

- Key compromise → all HMAC‑protected data is vulnerable; rotate keys frequently.  
- Signature verification failure → abort pipeline, alert DevOps.  
- Very large files: use streaming hash + incremental HMAC to avoid memory blowup.

---

### Optimization & Communication  

- **Batch HMAC**: Compute once per file, store as metadata (e.g., S3 object tag).  
- **Parallel signing**: Use GPU‑accelerated libraries for RSA‑PSS when signing many small blobs.  
- **Explain**: “We use HMACs for internal artifact integrity because they’re fast and only require a shared secret. For external data, we switch to asymmetric signatures so anyone can verify provenance without risking our private keys.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
