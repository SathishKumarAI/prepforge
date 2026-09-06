---
qid: ing_609c3850b0__fp__local
question: 'Explain: The Beast With Many Heads — The Illustrated Transformer \u2013
  Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 496
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:31:01-05:00'
sources: []
---

**The Beast With Many Heads – Why Multi‑Head Self‑Attention Is Essential**

At its core a Transformer must learn *contextual dependencies* between tokens without recourse to recurrence or convolution.  
If we treat each token as a vector \(x_i \in \mathbb{R}^d\) and wish to compute an output representation that captures *how* every other token influences it, the most general linear mapping is
\[
y_j = \sum_{i=1}^{n}\alpha_{ij}W x_i ,
\]
where \(W\) projects inputs into a common space and \(\alpha_{ij}\) are learned attention weights.  
Choosing a single weight matrix \(W\) forces all tokens to be compared in one “semantic lens”.  In practice, language exhibits multiple *relational modes*—subject‑verb agreement, coreference, topical drift—all of which require distinct linear projections.

**Multi‑head attention** solves this by replacing \(W\) with a set \(\{W^h\}_{h=1}^H\), each projecting into its own subspace. Each head learns a *different view*:
\[
y_j = \sum_{h=1}^{H}\operatorname{softmax}(Q^h K^{h\top})\,V^h ,
\]
where \(Q^h, K^h, V^h\) are learned per‑head linear maps.  
Mathematically this is a *low‑rank factorization* of the full attention matrix: instead of learning one dense \(\alpha_{ij}\), we learn several sparse, orthogonal “attention subspaces”. This reduces parameters and enables parallel computation while preserving expressive power.

**Non‑obvious insight:** The heads act like *ensemble members* that are encouraged to be diverse by a simple orthogonality penalty (often implicit). This diversity is what lets the Transformer capture long‑range interactions—each head can focus on different positions, effectively creating multiple “paths” through the sequence that later layers fuse. Thus, multi‑head attention isn’t just a trick for speed; it’s a principled way to represent the combinatorial structure of language with tractable computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
