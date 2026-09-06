---
qid: ing_699f785d03__fp__local
question: 'Explain: Memory — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 393
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:49:01-05:00'
sources: []
---

**Memory – Back‑of‑the‑Envelope in ML System Design**

When designing a learning pipeline we first ask: *How many parameters and activations must live in RAM at any time?*  
A model with \(P\) learnable weights, each \(w_i \in \mathbb{R}\), needs \(8P\) bytes (double precision). During training the forward pass generates an activation tensor per layer; for a batch of size \(B\) and feature map size \(F\) this adds roughly \(8BF\) bytes. The backward pass must keep all activations until gradients are computed, so the memory budget is dominated by  
\[
M_{\text{total}} \approx 8P + 2\sum_{\ell} B\,F_\ell ,
\]
the factor‑two accounting for forward and backward copies.

Why this form? It stems from **information conservation**: each gradient requires the exact activation that produced it, a direct consequence of the chain rule. Thus we cannot compress activations arbitrarily without loss; they must be stored in full precision until backprop completes.

A non‑obvious insight is that *batch size \(B\) is often the most expensive term*. Reducing \(B\) by even 10 % can free enough memory to double the model size, a strategy many overlook. In practice we therefore treat batch size as the primary lever in the “memory budget equation” and only then tune precision or activation checkpointing.

This simple algebraic estimate guides whether a GPU with 12 GB will fit a transformer of \(P=10^8\) parameters at \(B=32\), steering early design decisions before costly profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
