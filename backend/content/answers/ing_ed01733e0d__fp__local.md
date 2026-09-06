---
qid: ing_ed01733e0d__fp__local
question: 'Explain: Implement scaled dot-product attention with a causal mask in NumPy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 613
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:23-05:00'
sources: []
---

### From the problem to code

**What we need**  
Given queries Q, keys K and values V (all \(d\times n\) matrices), scaled‑dot‑product attention computes  

\[
A = \operatorname{softmax}\!\Big(\frac{QK^{T}}{\sqrt{d}}\Big)V .
\]

The *causal* mask forbids a position from attending to future positions: the softmax matrix must have zeros on the upper triangle.

**Why the scaling?**  
If \(q_k\) and \(k_j\) are random unit vectors in \(\mathbb R^d\), their dot product has variance \(1/d\). Without division by \(\sqrt d\), the logits grow with \(d\), pushing softmax into a saturated, almost‑one‑hot regime that kills gradients. Scaling keeps the logits in a sweet spot where the gradient is neither vanishing nor exploding.

**Why a mask?**  
Causality enforces an ordering: token *i* may only attend to tokens \(\le i\). In matrix form this is achieved by setting all entries \( (i,j)\) with \(j>i\) to \(-\infty\); after softmax these become exactly zero. Because softmax is applied row‑wise, we can construct a single binary mask and add it to the logits before exponentiation.

**Implementation sketch in NumPy**

```python
import numpy as np

def causal_attention(Q, K, V):
    d = Q.shape[0]
    # 1. raw scores
    logits = (Q @ K.T) / np.sqrt(d)

    # 2. causal mask: -inf where j>i
    mask = np.tril(np.ones_like(logits), k=0)
    logits = np.where(mask, logits, -np.inf)

    # 3. softmax in a numerically stable way
    max_l = np.max(logits, axis=-1, keepdims=True)          # shape (d,1)
    exp = np.exp(logits - max_l)                            # zero where mask=0
    probs = exp / np.sum(exp, axis=-1, keepdims=True)

    # 4. weighted sum of values
    return probs @ V
```

**Non‑obvious insight**  
Because the mask is *additive* to the logits, we can apply it **before** the softmax and still obtain a valid probability distribution: rows that are entirely masked become all \(-\infty\), which turns into zeros after exponentiation. This trick lets us keep the implementation concise while preserving numerical stability—something most tutorials gloss over by hard‑coding large negative constants in loops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
