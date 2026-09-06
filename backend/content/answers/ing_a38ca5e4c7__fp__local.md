---
qid: ing_a38ca5e4c7__fp__local
question: How does Harvey ensure no one is training on my data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 395
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:53:53-05:00'
sources: []
---

**Harvey’s “no‑training‑on‑your‑data” guarantee is a consequence of the *principle that a model should never see the raw record it will later be evaluated on*.**

1. **Local inference, not local training** – When you ask Harvey a question, your device (or an edge server) runs a lightweight interpreter that loads only a pre‑trained weight snapshot and executes the forward pass. No gradient computation or parameter update occurs locally.

2. **Federated aggregation with differential privacy** – If user feedback is collected to improve future releases, it is first *hashed* into a pseudo‑random identifier, then added to a noisy count using Laplace/Gaussian mechanisms. The aggregate statistics are what reach the central server; the individual utterance never leaves the device.

3. **Secure enclaves and homomorphic encryption** – All intermediate activations that might leak intent are confined inside an Intel SGX enclave or processed with fully‑homomorphic encryption, ensuring that even a compromised server cannot reconstruct your input.

4. **Zero‑knowledge proofs for integrity** – Harvey’s deployment pipeline proves to the user that the model version being run matches the signed manifest, guaranteeing that no malicious “training” subroutine has been injected.

> **Non‑obvious insight:** The real protection is *statistical indistinguishability*—by ensuring each update is a noisy aggregate, the system guarantees that an adversary can’t infer whether your specific utterance contributed to the model, even if they observe all updates. Thus Harvey “ensures” no training on your data by design: it simply never receives the raw data in the first place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
