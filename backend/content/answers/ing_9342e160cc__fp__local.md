---
qid: ing_9342e160cc__fp__local
question: Why Scale by √d_k? — Llm Internals
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 483
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:18:20-05:00'
sources: []
---

### Why the dot‑product in scaled‑dot‑attention is divided by \(\sqrt{d_k}\)?

**The core problem**: In self‑attention we compute
\[
\operatorname{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right),
\]
where \(Q,K\in\mathbb{R}^{n\times d_k}\).  
Without the divisor, each entry of \(QK^{\top}\) is a sum of \(d_k\) terms
\(q_i k_j\). If the elements of \(q\) and \(k\) are independent with variance \(\sigma^2\), then by the central limit theorem

\[
\operatorname{Var}(q_i k_j)=d_k\,\sigma^4 .
\]

Thus as \(d_k\) grows, the logits become increasingly spread out.  
Softmax turns large magnitudes into a *very sharp* distribution: one
attention weight dominates and gradients vanish for all others (the “soft‑max saturation” problem).  

**The remedy** is to normalise the dot product so that its variance stays constant regardless of \(d_k\). Since \(\operatorname{Var}(q_i k_j)\propto d_k\), dividing by \(\sqrt{d_k}\) reduces the variance to \(\sigma^4\). This keeps the logits in a regime where softmax retains meaningful gradients and prevents attention from collapsing prematurely.

**Deeper principle**: We are enforcing that each query‑key pair contributes *unit* information regardless of embedding dimensionality—an instance of *information‑preserving scaling*.  

**Non‑obvious insight**: The same \(\sqrt{d_k}\) factor also stabilises the *gradient flow* in back‑propagation. The derivative of softmax contains a term proportional to the logits’ variance; by keeping that variance bounded, we avoid exploding or vanishing gradients even when stacking dozens of attention layers. Thus scaling is not merely a trick for numerical stability—it is essential for preserving both forward inference quality and backward optimisation dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
