---
qid: ing_6b76a58e8f__faang__local
question: 'Explain: Pre-LN vs Post-LN — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 549
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:45-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the difference between *pre‑LN* (pre‑layer‑norm) and *post‑LN* (post‑layer‑norm) variants of transformer blocks as used in large language models (LLMs).  
Assumptions:  
- The audience knows standard Transformer architecture.  
- We focus on how the layer‑normalization placement impacts training stability, speed, and model capacity.

**Approach**  
1. Define the two designs.  
2. Contrast their forward equations.  
3. Discuss empirical findings (e.g., convergence, gradient flow).  
4. Touch on downstream effects (attention scaling, residual scaling).

**Depth**  

| Variant | Residual + LN order | Forward pass |
|---------|---------------------|--------------|
| **Pre‑LN** | `x → LN(x) → MHA/FFN → y = x + g·(MHA/FFN(LN(x)))` | Normalization applied before the sublayer. |
| **Post‑LN** | `x → MHA/FFN → LN(...) → y = x + g·LN(MHA/FFN(x))` | Normalization applied after the sublayer. |

*Pre‑LN* keeps gradients from exploding: the sublayer sees a normalized input, so its output scale is bounded. It allows training deeper stacks (e.g., 48 layers) without gradient vanishing. *Post‑LN* was the original design in BERT/ GPT‑2; it works well for ≤ 24 layers but struggles beyond that due to unbounded residual growth.

**Edge Cases**  
- Extremely deep models (> 30 layers): Post‑LN often diverges.  
- Mixed‑precision training: Pre‑LN tolerates lower precision better because LN stabilizes activations earlier.  
- Fine‑tuning small datasets: Post‑LN can overfit due to larger effective learning rates in residuals.

**Optimize & Communicate**  
If building a new LLM, start with **Pre‑LN** for scalability; add *residual scaling* (`g`) or *attention dropout* to further stabilize. For lighter models or when memory is tight, Post‑LN may suffice and has slightly lower computational overhead (one fewer LN call).  

Explain this trade‑off clearly: “We choose Pre‑LN because it gives us a larger training horizon with minimal architectural change; if we hit diminishing returns, we can revisit Post‑LN.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
