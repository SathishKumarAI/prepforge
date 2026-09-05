---
qid: ing_41773141a7__fp__local
question: 'Explain: Implement multi-head self-attention from scratch - no `nn.MultiheadAttention`,
  and make it causal.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 646
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:23:47-05:00'
sources: []
---

**Why multi‑head self‑attention?**  
In a sequence model we want every token to “look” at all others, but with different *perspectives* (heads). Each head learns a distinct linear projection of the input; by attending separately we capture diverse relationships and then fuse them.

### 1. Linear projections

Given an input matrix \(X \in\mathbb{R}^{L\times d}\) (length \(L\), embedding dim \(d\)):

```
Q = X W_Q      # shape L×dk
K = X W_K      # shape L×dk
V = X W_V      # shape L×dv
```

Each head uses its own \(W_Q, W_K, W_V \in\mathbb{R}^{d\times d_k}\) (or \(d_v\)).  
These are learned; the projections are linear because attention is a weighted sum—no non‑linearity is needed before weighting.

### 2. Scaled dot‑product

For head h, we compute scores:

```
S = Q @ K.T / sqrt(dk)      # shape L×L
```

The division by \(\sqrt{d_k}\) keeps gradients stable when \(d_k\) is large (the inner product grows with dimension).

### 3. Causal mask

To forbid a token from attending to future positions we zero‑out the upper‑triangular part of *S* before softmax:

```
mask = torch.triu(torch.ones(L, L), diagonal=1).bool()
S.masked_fill_(mask, float('-inf'))
```

After masking, `softmax(S)` yields a lower‑triangular probability matrix.

### 4. Weighted sum

```
A = softmax(S)               # shape L×L
Y = A @ V                    # shape L×dv
```

`Y` is the attended representation for this head.

### 5. Concatenate heads and project back

If we have \(h\) heads, stack their outputs along a new axis, reshape to \((L, h·d_v)\), then apply an output projection \(W_O\):

```
Z = torch.cat([Y_h for Y_h in heads], dim=-1)
O = Z @ W_O
```

### 6. Final remarks

- **No bias terms** are needed in the projections; biases would be absorbed by residual connections elsewhere.
- The *causal mask* is the only non‑trivial operation that enforces autoregressive behaviour; everything else follows from linear algebra and probability.

> **Non‑obvious insight:** The scaling factor \(\sqrt{d_k}\) can also be seen as a temperature for the softmax. A larger \(d_k\) would otherwise produce sharper distributions, potentially starving some heads of signal—hence the universal use of this normalisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
