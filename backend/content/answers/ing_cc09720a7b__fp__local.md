---
qid: ing_cc09720a7b__fp__local
question: How do images become tokens, and why does image resolution drive inference
  cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 507
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:14:15-05:00'
sources: []
---

**From pixels to tokens**

An image is a discrete grid \(x \in \mathbb{R}^{H\times W\times C}\).  
A transformer cannot ingest raw pixels because its attention mechanism scales as
\(O(N^2)\) with the number of input elements.  
Thus we compress each patch into a *token* that preserves the essential statistical
content while drastically reducing dimensionality.

1. **Patch extraction** – We partition \(x\) into non‑overlapping windows of size
\(p\times p\).  
   The number of patches is \(N=\frac{HW}{p^2}\).

2. **Linear projection** – Each patch vector (flattened to \(\mathbb{R}^{p^2C}\)) is multiplied by a learned matrix \(W_{\text{proj}}\in\mathbb{R}^{d\times p^2C}\).  
   This projects the high‑dimensional pixel space onto a low‑dimensional embedding
\(z_i = W_{\text{proj}}\,\text{vec}(x_{i}) + b\).

3. **Positional encoding** – A learned or sinusoidal vector \(p_i \in \mathbb{R}^d\) is added to each token, re‑introducing the spatial layout.

The transformer then operates on the sequence \(\{z_i+p_i\}_{i=1}^{N}\).

**Why resolution drives cost**

The inference cost of a self‑attention layer is
\(O(N^2 d)\).  
Since \(N = HW/p^2\), doubling either height or width quadruples \(N\) and thus
quadruple the quadratic term.  The embedding dimension \(d\) is usually fixed,
so resolution dominates the scaling.

**Non‑obvious insight**

The *effective* information per token is not merely its pixel count but its
entropy after projection.  If a model learns to project patches onto subspaces that capture only low‑frequency content, it can tolerate far higher resolutions with little extra cost—because the projection matrix compresses redundant detail early.  
In practice, adaptive patch sizing or learned sparse attention can exploit this fact to reduce inference burden without sacrificing fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
