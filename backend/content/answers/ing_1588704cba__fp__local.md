---
qid: ing_1588704cba__fp__local
question: 'Explain: Linear Attention — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 545
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:51:01-05:00'
sources: []
---

**Linear Attention – From Quadratic Cost to Kernel‑ized Inner Products**

In a standard self‑attention layer we compute  
\( \displaystyle A_{ij}=q_i^\top k_j\) for every pair of tokens \(i,j\).  
With \(N\) tokens this is \(O(N^2)\) memory and time: the cost comes from
explicitly forming all pairwise dot products.

The key insight is that attention is *a weighted sum* over keys:
\( \displaystyle y_i = \sum_{j} \alpha_{ij}\,v_j,\quad 
\alpha_{ij}= \frac{\exp(q_i^\top k_j)}{\sum_\ell \exp(q_i^\top k_\ell)}.\)
If we drop the softmax denominator (or replace it with a kernel
normalisation), the operation becomes linear in \(N\):
\( y_i = \phi(q_i)^\top \Bigl(\sum_{j}\phi(k_j)v_j^\top\Bigr)\),
where \(\phi\) is an embedding that maps each vector to a higher‑dimensional
feature space such that  
\(q_i^\top k_j = \phi(q_i)^\top \phi(k_j).\)

Thus, instead of computing all \(N^2\) dot products, we:
1. Project every key once into the feature space and accumulate  
   \(C=\sum_{j}\phi(k_j)v_j^\top\) – an \(O(N)\) pass.
2. For each query compute \(\phi(q_i)^\top C\) – another \(O(N)\) pass.

The underlying principle is **kernel approximation**: we replace the
exponential kernel with a linear‑in‑\(N\) surrogate (e.g., dot‑product or
ReLU kernels). This preserves expressivity while breaking the quadratic
bottleneck.  

*Non‑obvious insight:* The apparent “loss” of the softmax normalisation is
compensated by **normalising the feature map itself** (e.g., using a
unit‑norm embedding). This restores attention’s probabilistic meaning
without reintroducing \(O(N^2)\) costs. Hence, linear attention is not
just a speed trick—it reveals that self‑attention fundamentally
operates as a *feature‑wise convolution* over the sequence, amenable to
any kernel that admits a low‑rank feature map.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
