---
qid: ing_826007a7b9__fp__local
question: 'Explain: Matrix Calculation of Self-Attention — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 433
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:31-05:00'
sources: []
---

**Self‑attention in the Transformer: a matrix‑first view**

At its core, a transformer must decide *how much each token in a sequence should influence every other token* while preserving order‐agnostic computation for speed.  
We start with three learned projections of the input embedding \(X\in \mathbb{R}^{T\times d}\) (token count \(T\), hidden size \(d\)):
- Query \(Q = XW_Q\)
- Key   \(K = XW_K\)
- Value \(V = XW_V\)

These are linear maps so that the dot product \(q_i^\top k_j\) measures similarity in a learned latent space.  
To capture *all pairwise interactions* we form the **attention score matrix**:
\[
S = \frac{QK^\top}{\sqrt{d_k}}
\]
The division by \(\sqrt{d_k}\) (the key dimension) is not arbitrary—it rescales dot products so that gradients neither explode nor vanish as \(d_k\) grows, a consequence of the Central Limit Theorem applied to random‑initialized weights.

Next we apply a softmax row‑wise:
\[
A = \operatorname{softmax}(S)
\]
Each row \(a_i\) is a probability distribution over tokens that token \(i\) attends to.  
The weighted sum of values yields the output matrix:
\[
O = AV
\]
Because all operations are matrix multiplications, we can compute attention for an entire batch in one GPU‑friendly pass.

**Non‑obvious insight:** The softmax is *not* a mere normalizer; it turns raw similarities into a *distribution that implicitly enforces sparsity.* Tokens with low similarity get exponentially suppressed, so the model learns to focus on a handful of relevant positions even though the computation remains dense. This emergent sparsity explains why transformers generalize well without explicit attention masks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
