---
qid: ing_ff2377ad31__fp__local
question: 'Explain: KV cache — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 603
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:02:24-05:00'
sources: []
---

**KV Cache in Large‑Language Models**

Large language models (LLMs) generate text autoregressively: at step *t* they predict token *yₜ* conditioned on all prior tokens *x₁,…,x_{t‑1}*. The core computation is a transformer block that, for every new query vector **q** (the embedding of the current token), must attend to every previous key–value pair (**k**, **v**) produced by earlier layers. Naïvely recomputing these keys and values at each step would cost *O(t²)* operations—untenable when *t* reaches thousands.

The KV cache solves this by **materializing** the keys and values of all previous tokens once, then reusing them for every subsequent query. Formally, after processing token *xᵢ*, the transformer outputs a key **kᵢ** and value **vᵢ**; these are stored in two matrices \(K \in \mathbb{R}^{t\times d_k}\) and \(V \in \mathbb{R}^{t\times d_v}\). For step *t+1*, the attention score for query **q_{t+1}** is computed as
\[
\text{score}_{i}= \frac{\mathbf{q}_{t+1}\cdot \mathbf{k}_i}{\sqrt{d_k}},
\]
and the output is a weighted sum over \(V\). Thus the expensive key/value projections are performed only once per token.

**Why it must work this way**

* **Statelessness of attention:** Attention depends solely on pairwise dot products between queries and keys. Once a key–value pair is computed, its value in future steps is fixed; caching preserves correctness.
* **Linear‑time inference:** The cache turns an *O(t²)* operation into *O(t d_k + t d_v)* per step, enabling real‑time generation.
* **Memory locality:** Keys and values are contiguous tensors, improving GPU utilization.

**Deeper principle**

The KV cache embodies *dynamic programming*: it stores intermediate results (keys/values) to avoid recomputation, a classic optimization technique. It also reflects the *information bottleneck* of transformers—once information is encoded in keys/values, no further transformation of the past tokens is needed.

**Non‑obvious insight**

Many treat KV cache as a mere speed trick, but it fundamentally **decouples model depth from sequence length**. Because each layer’s key/value computation is independent across layers, caching allows deeper models to run without increasing per‑token memory beyond *O(L t)* (L = layers). This decoupling enables scaling depth while keeping inference latency linear in token count—a subtle but critical design choice for practical LLM deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
