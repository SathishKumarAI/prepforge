---
qid: ing_3cc752fc2e__faang__local
question: 'Explain: Usage: run before every prompt change or model switch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 543
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:05:17-05:00'
sources: []
---

**Clarify**

You’re asking why a particular routine (e.g., a *pre‑prompt* hook, cache flush, or warm‑up call) should run **before every prompt change or model switch** in an AI system.  
Assumptions to confirm:  
1. The routine resets internal state or clears caches.  
2. Prompt changes and model switches can introduce stale context.  
3. The goal is consistent, correct inference.

---

**Approach**

1. Identify the stateful artifacts that survive across calls (token buffers, embedding tables, beam histories).  
2. Explain how a pre‑call routine invalidates or reinitializes these artifacts.  
3. Tie each step to the impact on correctness and latency.

---

**Depth**

- **Context Reset:** When a prompt changes, previous token embeddings and attention masks must be discarded; otherwise, the model may attend to irrelevant tokens, corrupting logits.  
- **Model Switch Cache Flush:** Switching back‑end weights (e.g., from GPT‑4 to Llama‑2) requires clearing cached kernels or GPU memory slots that were compiled for the old model’s tensor shapes; failing to do so can cause segmentation faults or wrong outputs.  
- **Warm‑up / Profiling:** Running a dummy forward pass primes JIT compilation and GPU pipeline, ensuring subsequent real inferences hit steady‑state latency.  

Complexity: O(1) per call for cache clears; warm‑up adds an extra forward pass (O(n) where n is prompt length). Trade‑off: negligible overhead vs. risk of stale state.

---

**Edge Cases**

- **Incremental Prompting:** If the system supports streaming, a full reset on every new token would be wasteful; we’d only reset on explicit “new conversation” signals.  
- **Model Reload Failure:** Ensure the routine can recover if the model file is corrupted—e.g., fallback to a default checkpoint.  
- **Multi‑tenant Environments:** Isolation must be strict; otherwise, one tenant’s prompt could bleed into another’s context.

---

**Optimize & Communicate**

- Bundle resets into a single atomic “resetContext” API to avoid race conditions.  
- Log the reset event for observability (e.g., `prompt_reset: true`).  
- Explain during interviews that this guarantees determinism and protects against subtle bugs like hidden state leakage, which is critical in production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
