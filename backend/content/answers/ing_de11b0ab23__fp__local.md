---
qid: ing_de11b0ab23__fp__local
question: 'Explain: Q58: Design a system where one user''s prompt cannot leak to another
  user'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 486
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:49-05:00'
sources: []
---

### Why Isolation Matters  
When an AI model receives a *prompt*, it treats that text as part of its input state and can copy, modify, or even embed it in future generations. In a shared‑tenant deployment, the prompt is the only thing that distinguishes one user’s session from another’s. If two users share the same execution context (e.g., the same request‑to‑model pipeline), each prompt can leak directly into the other’s response or be extracted by an adversarial model.

### The Minimal Correct Design  
1. **Stateless request boundary** – Each user’s HTTP call is wrapped in a fresh, isolated container (process, thread, or sandbox) that owns its own *prompt buffer* and *generation state*.  
2. **Zero‑copy prompt handling** – The buffer is immutable; once written it is never shared with any other process. All internal model buffers are read‑only copies.  
3. **Model sharding + per‑user token bucket** – The model weights are replicated across shards, and each shard serves only the requests whose tokens are currently allocated to that user’s bucket.  
4. **Encrypted audit trail** – Logs are encrypted with a key derived from the user’s ID; no plaintext prompt ever leaves the container.

### Deeper Principle: *Information‑Theoretic Separation*  
The system enforces that the mutual information \(I(P_A;R_B)=0\) for any two users \(A,B\). By guaranteeing zero shared memory and encrypted logs, we satisfy this condition regardless of the model’s internal state. The architecture is thus a concrete instantiation of *information‑theoretic privacy* rather than a heuristic.

### Non‑Obvious Insight  
Many solutions rely on “just don’t share weights”; however, even with separate weights, a single shared GPU memory region can still leak prompts via *tensor aliasing*. The only foolproof guard is to **enforce immutability** at the language‑runtime level (e.g., Rust’s borrow checker or Go’s `const` slices) so that no prompt buffer can ever be aliased across users. This subtle, often overlooked property turns an otherwise secure design into a broken one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
