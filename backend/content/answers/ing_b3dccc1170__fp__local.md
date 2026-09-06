---
qid: ing_b3dccc1170__fp__local
question: Why does scaled dot-product attention divide by √d_k?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 617
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:26:34-05:00'
sources: []
---

In a transformer the **scaled‑dot‑product attention** computes  

\[
\text{Attention}(Q,K,V)=\operatorname{softmax}\!\left(\frac{QK^{\top}}{\sqrt{d_k}}\right)V ,
\]

where \(d_k\) is the dimensionality of each key/query vector.  
The division by \(\sqrt{d_k}\) is not an arbitrary hyper‑parameter; it follows from how random vectors behave in high dimensions and guarantees that the softmax receives inputs whose variance does **not** explode with model size.

### Why the scaling matters

1. **Expected dot‑product magnitude.**  
   For two independent, zero‑mean unit‑variance Gaussian vectors \(q,k\in\mathbb{R}^{d_k}\),

   \[
   q^\top k=\sum_{i=1}^{d_k}q_i k_i .
   \]

   Each term has variance 1, so the sum has variance \(d_k\).  
   Thus \(\mathbb{E}[|q^\top k|]\approx\sqrt{d_k}\).

2. **Softmax temperature.**  
   The softmax function is highly sensitive to its input scale; if the logits are too large, gradients vanish (saturation), and if they’re too small, updates become noisy.  
   By dividing by \(\sqrt{d_k}\) we set an *effective temperature* \(T=1/\sqrt{d_k}\), ensuring that the logits have unit variance regardless of dimensionality.

3. **Gradient stability.**  
   With this scaling the gradient of the loss w.r.t. each query or key is \(O(1)\).  Without it, gradients would scale as \(\sqrt{d_k}\) (or \(d_k\)), leading to exploding/vanishing gradients and making training impractical for deep transformers.

### Non‑obvious insight

The scaling factor is the **inverse of the standard deviation** of the dot product, not just a heuristic.  It turns the attention computation into a *temperature‑controlled* softmax whose temperature adapts automatically to model size.  Consequently, as we increase \(d_k\) to capture richer representations, the attention mechanism self‑normalises and keeps learning dynamics stable—an elegant marriage of high‑dimensional geometry with optimization stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
