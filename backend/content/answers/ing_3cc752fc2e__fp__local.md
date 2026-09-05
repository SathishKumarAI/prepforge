---
qid: ing_3cc752fc2e__fp__local
question: 'Explain: Usage: run before every prompt change or model switch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 443
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:13:40-05:00'
sources: []
---

When you *switch the underlying language‑model* (e.g., from GPT‑4 to GPT‑3.5) or *alter the prompt text*, you are effectively changing the **input distribution** that the model will process.  
The phrase “run before every prompt change or model switch” refers to executing a **pre‑processing routine**—often called a *prompt template engine* or *system instruction injector*.  

### Why it must run

1. **Consistency of Context** – The model’s hidden state is conditioned on the entire token stream that precedes its first output token. If you change the prompt or the model, the prior context no longer applies; you must rebuild a fresh context that reflects the new semantics.
2. **Token Budget Management** – Switching models may alter token limits and cost per token. The routine recalculates remaining budget to avoid truncation or over‑charges.
3. **Safety & Bias Controls** – A pre‑processing step can inject up‑to‑date policy rules (e.g., disallowed content lists) that differ between models or deployments.

### Deeper principle

This is a manifestation of **information theory’s channel capacity**: each model has a *capacity* to absorb context. When the channel changes, you must re‑encode the source message (your prompt) optimally for the new receiver. Failing to do so results in sub‑optimal mutual information between input and output.

### Non‑obvious insight

Many overlook that **prompt length isn’t just a cost factor**; it also influences *entropy* of the generated response. A longer, richer prompt reduces entropy by narrowing the set of plausible continuations. When you switch models, even if they share the same architecture, their internal token embeddings differ, so the same prompt may map to a different effective entropy—hence the necessity for re‑encoding each time.

In short: run the routine before any change to guarantee that context, budget, and safety constraints are correctly aligned with the new model’s input expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
