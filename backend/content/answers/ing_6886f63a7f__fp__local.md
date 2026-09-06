---
qid: ing_6886f63a7f__fp__local
question: 'Explain: How to prepare — Deepseek'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 366
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:46:38-05:00'
sources: []
---

### Preparing for a DeepSeek‑style LLM

**The problem it solves**  
We want an autoregressive transformer that can *reason* about long context (hundreds of thousands of tokens) while keeping inference cheap. The core constraint is the quadratic cost of self‑attention: \(O(L^2)\).  

**Why the solution works**  
1. **Sparse attention** – instead of attending to every token, we restrict each query to a *local window* plus a handful of *global anchors*. This preserves local coherence and still lets the model access high‑value distant tokens.  
2. **Mixture‑of‑Experts (MoE)** – the feed‑forward layers are split into many experts; only a few are activated per token, so the effective width stays large without blowing up compute.  
3. **Prefix‑tuning** – a lightweight prefix is prepended to every prompt and trained jointly with the model, giving it task‑specific inductive bias without fine‑tuning all weights.

These choices arise from *information bottleneck* theory: we only need to transmit the most informative parts of the context to each position. Sparse attention enforces this bottleneck; MoE expands representational capacity while keeping communication sparse; prefix‑tuning injects task knowledge efficiently.

**Non‑obvious insight**  
The global anchors do not have to be static; they can be *learned* via a small auxiliary network that predicts which positions are most useful for each query. This dynamic selection turns the attention pattern into an adaptive graph, allowing the model to discover long‑range dependencies without ever paying full quadratic cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
