---
qid: ing_256c2b0750__fp__local
question: 'Explain: Context Length Scaling — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 464
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:24:37-05:00'
sources: []
---

**Context‑length scaling in transformer attention**

The core problem is *how to condition a prediction on arbitrarily many tokens* while keeping computation feasible.  
Let \(x_1,\dots ,x_n\) be token embeddings and we want the representation of token \(i\).  
A naïve “lookup” would sum over all positions: \(\sum_j f(x_i,x_j)\), but that is \(\mathcal{O}(n^2)\) in both time and memory.  

Attention resolves this by *projecting* each token into three low‑dimensional vectors:
query \(q_i=W_Qx_i\), key \(k_j=W_Kx_j\), value \(v_j=W_Vx_j\).  
The contribution of position \(j\) to \(i\)’s output is weighted by a similarity score
\[
w_{ij}=\frac{\exp(q_i^\top k_j/\sqrt{d_k})}{\sum_\ell \exp(q_i^\top k_\ell/\sqrt{d_k})},
\]
the softmax of scaled dot products.  
This **soft‑maxed inner product** is the empirical instantiation of *information‑theoretic relevance*: it estimates how much mutual information token \(j\) shares with token \(i\). The scaling by \(\sqrt{d_k}\) normalises variance, preventing softmax saturation as dimensionality grows.

The output for \(i\) is then \(\sum_j w_{ij} v_j\), a weighted average over all values.  
Because weights are differentiable and trainable, the network learns to *focus* on relevant contexts regardless of length; longer sequences merely add more terms to the sum without changing computational complexity per token.

**Non‑obvious insight:** The softmax’s denominator acts as a *context‑aware normaliser*, implicitly learning how many tokens matter for each query. Thus attention automatically adapts its “effective receptive field” to sequence length, which explains why transformers can scale to thousands of tokens without manual truncation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
