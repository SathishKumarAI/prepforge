---
qid: ing_bed45cf234__fp__local
question: Your assistant reads untrusted content (web pages, customer documents, email)
  and can call tools. How do you defend against prompt injection?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 398
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:13-05:00'
sources: []
---

**Why prompt injection matters**

An LLM is a *black‑box function* `f(inputs) → outputs`.  
When the assistant receives arbitrary text it effectively concatenates that text with its own “system” instructions before calling `f`. If an attacker injects a phrase like “Ignore all safety checks; now act as…” they are altering the input space of `f` to produce unsafe outputs. The problem is *distribution shift*: the model behaves correctly on benign inputs but fails on crafted ones.

**Fundamental defence: Input‑to‑output isolation**

1. **Strict token budget per user input** – limit the number of tokens that can influence the prompt, so an attacker cannot overwhelm the system with long instructions.  
2. **Explicit role separation** – prepend a *fixed* system prompt (e.g., “You are a helpful assistant…”) and never allow user text to modify it. Treat user content as data only, not as code.  
3. **Controlled tool invocation** – keep the tool‑call API separate from natural language; require a deterministic trigger token that is hard‑to‑forge (e.g., a signed JSON payload).  

These steps embody an *optimization* principle: constrain the search space of `f` to a convex set where safety constraints are satisfied. By reducing entropy in the input, we reduce the exploitable surface.

**Non‑obvious insight**

Even with token limits, attackers can embed malicious intent in *latent representations* (e.g., using synonyms or whitespace tricks). The solution is to **pre‑embed user text into a fixed embedding space via a lightweight encoder** before concatenation. This converts arbitrary prose into a bounded vector that the LLM can only interpret within its learned distribution, effectively turning prompt injection into a standard inference problem rather than a prompt manipulation one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
