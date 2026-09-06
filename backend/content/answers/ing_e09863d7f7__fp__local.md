---
qid: ing_e09863d7f7__fp__local
question: 'Explain: Self-attention in one screen — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 452
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:57:23-05:00'
sources: []
---

## Self‑attention: the “soft window” that lets language models read a sentence all at once

The core problem of a transformer is **contextual representation**—each token must know *who* else it talks to. A naïve solution would be a fixed‑size sliding window or a recurrent scan, but those impose an arbitrary locality and incur \(O(n^2)\) time if we let every pair talk directly.

Self‑attention solves this by turning the sentence into a **weighted graph** where each node (token) attends to every other. Formally, for tokens \(x_i\), we compute three vectors: query \(q_i = W_Q x_i\), key \(k_j = W_K x_j\), and value \(v_j = W_V x_j\). The attention weight is

\[
a_{ij}=\frac{\exp(q_i^\top k_j/\sqrt{d_k})}{\sum_{l}\exp(q_i^\top k_l/\sqrt{d_k})},
\]

a *softmax* over cosine‑like similarities. Each token’s output is \(\sum_j a_{ij} v_j\). This has three deep consequences:

1. **Global, differentiable context** – every pair influences the result; gradients flow everywhere, enabling end‑to‑end learning of long‑range dependencies.
2. **Efficient parallelism** – all \(q_i,k_j,v_j\) are computed in matrix form, so a single GPU kernel handles the entire sentence in \(O(n^2)\) time but with minimal serial bottlenecks.
3. **Interpretability as an attention map** – the softmax weights reveal *why* the model thinks token i cares about token j.

A non‑obvious insight: the temperature scaling \(\sqrt{d_k}\) isn’t just a trick; it keeps the dot products in a regime where the softmax gradient is neither vanishing nor exploding as dimensionality grows. This subtle balance lets transformers scale to millions of parameters while preserving learning dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
