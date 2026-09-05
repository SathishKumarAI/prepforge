---
qid: ing_15051907e3__fp__local
question: 'Explain: ALiBi (Attention with Linear Biases) — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 330
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:49:50-05:00'
sources: []
---

**ALiBi – Attention with Linear Biases**

At its core, a transformer learns to attend between tokens by weighting their dot‑products. When training on long contexts the model never “sees” positions beyond its maximum length, so it has no inductive bias about *how* attention should decay with distance. ALiBi injects that bias directly into the logits:

\[
\text{logit}_{ij}= \frac{q_i^\top k_j}{\sqrt{d}} + b_{|i-j|}
\]

where \(b_{\Delta}\) is a *linear* function of the absolute position difference. The line’s slope is learned once per head and shared across all positions, yielding a simple yet powerful prior: “tokens farther apart should be penalized proportionally to their distance.”  

Why linear? In an ideal world where context length grows unbounded, attention should become a convolution with a kernel that decays smoothly; the *linear* bias is the simplest non‑constant function that preserves relative ordering and respects translation invariance. It also guarantees **causal consistency**: for any new token the same slope applies regardless of how many tokens precede it.

A subtle, often overlooked benefit is that ALiBi eliminates the need to recompute positional encodings during inference. The bias depends only on indices, so a single pre‑computed matrix suffices for all lengths, dramatically reducing memory and computation overhead—critical for real‑time LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
