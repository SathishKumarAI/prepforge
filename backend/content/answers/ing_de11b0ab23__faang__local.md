---
qid: ing_de11b0ab23__faang__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:16-05:00'
sources: []
---

**Clarify**  
We need a multi‑tenant chatbot that guarantees *prompt isolation*: the text a user submits must never be seen or inferred by any other user. Key assumptions: (1) we have an API layer, (2) prompts are sent to a LLM service, (3) we control only our own infrastructure, and (4) no side‑channel leaks (network sniffing, shared memory).  

**Approach**  
1. **Request boundary isolation** – each request lives in its own process/VM/container; no shared RAM or disk for prompt data.  
2. **Secure channel to LLM** – encrypt prompts with TLS and an additional layer of per‑request symmetric keys.  
3. **Audit & logging** – log only hashed prompt identifiers, never raw text.  
4. **Post‑processing guardrails** – strip any user metadata before sending to downstream services.  

**Depth**  
- *Process isolation*: spawn a lightweight container per request (e.g., gVisor). Complexity O(1) per request but amortized cost of container start; mitigated by reusing worker pools.  
- *Encryption*: generate an AES‑GCM key per prompt, store it only in memory, encrypt the prompt before sending to LLM. Decryption happens immediately after response and is discarded.  
- *Logging*: use HMAC(prompt) → log entry; no plaintext.  
- *Side‑channel mitigation*: run on isolated hardware (SGX/TPM), disable debug interfaces, enforce strict network egress rules.

**Edge Cases**  
- A compromised LLM could leak the prompt via its own logs—assume trusted LLM or use a sandboxed inference engine.  
- Buffer overflows in containers; mitigate with memory limits and hardened runtimes.  
- Race conditions when reusing worker threads – enforce per‑thread prompt isolation.

**Optimize & Communicate**  
To reduce overhead, batch multiple prompts into a single container but keep them encrypted separately. Explain that the trade‑off is between throughput (fewer containers) and strict isolation (one container ≈ one prompt). Highlight how each layer—process, encryption, logging—provides defense in depth, ensuring no user prompt can leak to another, satisfying FAANG security standards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
