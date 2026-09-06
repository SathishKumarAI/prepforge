---
qid: ing_6487e38ca9__fp__local
question: The customer's CISO says no data can leave their network. How does that
  constrain your architecture, and what are the options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 294
total_tokens: 478
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:48-05:00'
sources: []
---

When a CISO mandates *zero egress*, the fundamental problem becomes **information flow control**: every byte that leaves the network is an unauthorized leakage.  
The architecture must therefore be built around **local inference and local data residency**.  

1. **On‑prem AI appliances** – models run inside the firewall; only model weights and inference outputs are exposed, and even those can be scrubbed or aggregated before leaving.  
2. **Federated learning** – each host trains locally on its own data, shares only gradient updates (differentially private) to a central orchestrator that aggregates without ever seeing raw data.  
3. **Secure enclaves / SGX / TEEs** – data is encrypted at rest and only decrypted inside the enclave; the network traffic consists of encrypted model parameters or inference results that can be signed by the enclave, proving authenticity.  

A non‑obvious insight: *you can still benefit from a global model without moving raw data by treating each host as a “black box” that exposes only a **privacy‑preserving feature vector***. The central server learns from these vectors, not from the underlying records. This blends information theory (mutual information minimization) with cryptographic guarantees, satisfying the zero‑egress policy while retaining model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
