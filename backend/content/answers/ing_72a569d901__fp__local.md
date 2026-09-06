---
qid: ing_72a569d901__fp__local
question: 'Explain: Security — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 457
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:08:20-05:00'
sources: []
---

### Why a client‑server model is the *only* way to secure an ML service

The fundamental problem: **a trained model is valuable intellectual property and a vector for attacks (model inversion, membership inference, adversarial inputs).**  
In a distributed setting the client holds data that must stay private; the server hosts the model. The design goal is to keep *both* secrets isolated while still enabling inference.

1. **Information‑theoretic isolation.**  
   By separating computation and data we enforce that any protocol exposing only a single function (prediction) can be formally analyzed: the client sends a request, the server returns a bounded‑size response. No side channel leaks parameters or training data because the network stack already filters out timing/size variations.

2. **Zero‑trust assumption → minimal privileged code.**  
   The server runs only the inference engine; all security controls (authentication, rate limiting) are on the client side. This mirrors the *principle of least privilege* in operating systems: the more code you run with elevated rights, the larger the attack surface.

3. **Secure multiparty primitives as building blocks.**  
   If model weights must never leave the server, we can use *secure enclaves* or *homomorphic encryption*. The client encrypts its input, sends it; the enclave evaluates a *fixed‑point* approximation of the neural network and returns the ciphertext. This satisfies both confidentiality (by encryption) and integrity (by enclave attestation).

#### Non‑obvious insight  
Most designs focus on protecting the model; they ignore **query privacy**. Even if the server never learns raw inputs, the pattern of queries can reveal sensitive user behavior. The proper first‑principles solution is to *randomize* request timing or batch requests from multiple clients—effectively turning a deterministic service into an *oblivious transfer* protocol. This subtle step turns a simple client‑server inference API into a privacy‑preserving system without sacrificing usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
