---
qid: ing_194bdeb4e3__fp__local
question: 'Explain: Security and privacy ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 597
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:59:59-05:00'
sources: []
---

## Why a Glean MCP Server Needs Robust Security & Privacy

### The Core Problem  
Glean’s **MCP (Machine‑Learning‑Powered) server** ingests raw user data—text, code snippets, logs—to train models that power search and recommendation. If an adversary gains access, they could:

1. **Leak personal or corporate secrets** contained in the data.
2. **Corrupt training** by injecting malicious examples (poisoning).
3. **Steal model weights**, turning proprietary intelligence into a commodity.

Thus, protecting *data confidentiality*, *model integrity*, and *user privacy* is not optional; it is mathematically mandated by information‑theoretic limits on adversarial inference.

### How the Design Fulfills the Limits  

| Requirement | Implementation | Underlying Principle |
|-------------|-----------------|----------------------|
| **Confidentiality** | End‑to‑end encryption (TLS 1.3) + zero‑knowledge storage (client‑side key derivation). | Shannon’s secrecy: without the key, ciphertext yields no information. |
| **Integrity** | Authenticated requests (HMAC‑SHA256) + immutable audit logs (append‑only Merkle trees). | Cryptographic hash commitments enforce a one‑to‑one mapping between request and stored data; any alteration is detectable. |
| **Privacy‑Preserving ML** | Differentially private stochastic gradient descent (ε‑DP) + secure aggregation of gradients. | The DP guarantee bounds the mutual information between any single user’s data and the released model, ensuring that inference attacks learn at most ε bits per record. |
| **Access Control** | Role‑based IAM with fine‑grained policies + automatic revocation via short‑lived JWTs. | Principle of least privilege: limiting the attack surface reduces the combinatorial explosion of possible breach vectors. |

### A Non‑Obvious Insight  
Many teams focus on encrypting *at rest* and *in transit*. The **real vulnerability** lies in *how gradients are aggregated*. If a single malicious client can send arbitrary gradient updates, it can steer the model to overfit to that data or leak other users’ information. Glean’s solution is to perform **secure multi‑party aggregation**: each client masks its update with a random vector; only after all clients submit do the masks cancel out. The server never sees any individual contribution, satisfying *privacy by design* and preventing poisoning without sacrificing model quality.

### Bottom Line  
Glean’s MCP security stack is a direct application of cryptographic secrecy, integrity proofs, differential privacy, and secure aggregation—all derived from first‑principle constraints on what an adversary can learn or influence. This holistic approach guarantees that the server can train useful models while preserving users’ confidentiality and protecting against malicious tampering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
