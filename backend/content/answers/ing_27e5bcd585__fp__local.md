---
qid: ing_27e5bcd585__fp__local
question: 'Explain: Parallelizing across query heads for multi-query attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 526
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:30:11-05:00'
sources: []
---

**Why parallelise over query heads?**  
In a transformer the self‑attention operation for one head is

\[
A^{(h)} = \operatorname{softmax}\!\left(\frac{Q^{(h)}K^{(h)\top}}{\sqrt d}\right)V^{(h)},
\]

where \(Q^{(h)},K^{(h)},V^{(h)}\in\mathbb R^{n\times d}\).  
If we stack the heads, we obtain a block‑diagonal matrix of shape \((nh)\times(nh)\) for the attention scores. The natural linear‑algebraic way to compute all heads is

\[
A = \operatorname{softmax}\!\left(\frac{\underbrace{[Q^{(1)}\,|\,\dots |\,Q^{(h)}]}_{Q}
      \underbrace{[K^{(1)}\,|\,\dots |\,K^{(h)}]}_{K}^\top}{\sqrt d}\right)
    [V^{(1)}\,|\,\dots |\,V^{(h)}],
\]

which is a single matrix‑multiplication per stage.  
Because each head operates on an independent subspace, the softmax can be applied *head‑wise* in parallel: we compute \(QK^\top/\sqrt d\) once for all heads, then split it into \(h\) blocks and apply softmax separately. This keeps memory locality intact while avoiding an \(O(n^2h)\) time blow‑up.

**Deeper principle:** the attention matrix is a *low‑rank* approximation of a full pairwise similarity; by treating each head as an independent rank‑\(d\) projection, we are performing **block‑diagonal low‑rank factorisation**. Parallelism exploits the fact that these blocks commute: \((AB)\!C = A(BC)\) for disjoint \(A,B,C\).  

**Non‑obvious insight:** The bottleneck is not the softmax itself but the *broadcast* of the query matrix to all heads. By fusing the queries into a single tensor and using a batched softmax, we reduce kernel launches by an order of magnitude—something most practitioners overlook when profiling GPU kernels.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
