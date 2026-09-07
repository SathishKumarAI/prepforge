---
qid: ing_9d01d46a36__faang__local
question: 'Explain: Model Signing — GitHub - sigstore/model-transparency: Supply chain
  security for ML \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 537
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:07-05:00'
sources: []
---

**Clarify**  
The question asks how *model signing* works in the context of **sigstore/model‑transparency**, a GitHub project that protects ML supply chains. I’ll assume the audience knows basic cryptography but not sigstore specifics, and that we’re focusing on model artifacts (weights, configs) rather than code.

**Approach**  
1. Explain the security goal: prove authenticity & integrity of an ML artifact and its provenance.  
2. Outline the components: key management, signing workflow, transparency log, verification.  
3. Show how sigstore integrates with GitHub Actions / container registries.  

**Depth**  
- **Key Management** – Model owners generate a PGP/Ed25519 key pair; the public key is uploaded to a *keyless* system (e.g., Fulcio) that issues an X.509 cert tied to a short‑lived identity.  
- **Signing** – The artifact’s hash (SHA‑256) is signed by the private key. Sigstore’s `cosign` CLI produces a detached `.sig` file plus an *attestation* JSON containing metadata (model name, version, training data hash).  
- **Transparency Log** – The signature and attestation are submitted to a public append‑only log (e.g., Rekor). Each entry gets a unique, verifiable index (`rekorID`). This guarantees that the artifact was signed at a specific time and cannot be retroactively altered.  
- **Verification** – Consumers fetch the artifact, its `.sig`, and the `rekorID`. Using cosign they verify the signature against the public key *and* query Rekor to ensure the entry exists, proving the chain of custody from training to deployment.

**Edge Cases**  
- Key compromise → rotate keys and re‑sign; transparency log still shows old signatures.  
- Missing attestation fields → verification fails unless a policy allows partial data.  
- Large models → use chunked signing or hash aggregation to keep signature size manageable.

**Optimize & Communicate**  
To scale, store only hashes in the log (not raw weights), and batch multiple models per transaction. I’d narrate this by first framing the threat model (unauthenticated model injection), then walking through the pipeline with diagrams, ending with a quick demo of `cosign sign` / `cosign verify`. This shows clear problem‑solving, technical depth, and awareness of trade‑offs—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
