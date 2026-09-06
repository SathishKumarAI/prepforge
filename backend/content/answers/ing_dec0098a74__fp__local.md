---
qid: ing_dec0098a74__fp__local
question: 'Explain: The Illustrated Transformer — The Illustrated Transformer \u2013
  Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 661
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:35-05:00'
sources: []
---

**Why the Transformer exists**

At its core we want a model that can predict a word (or any token) given a *sequence* of prior tokens. Classical RNNs solve this by walking the sequence left‑to‑right, updating a hidden state \(h_t\). The hidden state must carry all useful information from past tokens to future predictions. Two problems arise:

1. **Vanishing gradients** – as the chain gets long, earlier tokens influence later ones only weakly.
2. **Serial computation** – each step depends on the previous one, so we cannot parallelise.

The Transformer tackles both by letting every position attend directly to *every* other position through a learned similarity (the dot‑product of query \(q\) and key \(k\)). This removes the chain: gradients flow freely across all pairs, and we can compute attention for all tokens in parallel.

**Why multi‑head attention works**

Each head learns a different linear projection of queries, keys, and values. Think of each head as looking at the sequence through a distinct “lens” (e.g., syntactic vs. semantic). Because the projections are learned jointly with the rest of the network, the heads specialise without explicit supervision. The key insight: *attention is a weighted sum over all positions*—a linear operator that can be expressed as a convex combination of value vectors. Thus each head implements a different convex mixture of the input tokens.

**Layer Normalisation and Residuals**

The residual connection \(x \rightarrow x + \text{Attention}(x)\) preserves the original signal while letting the attention module refine it. LayerNorm stabilises training by normalising across features, not positions, which keeps positional information intact—essential for sequence tasks.

**Position Encoding: a geometric trick**

Because self‑attention is permutation‑invariant, we must inject order. The sinusoidal encodings \(PE_{(pos,i)} = \sin(pos/10000^{i/d})\) or learned embeddings provide a continuous, differentiable way to embed positions. Their frequencies form an orthogonal basis that allows the model to infer relative distances via simple arithmetic: \(PE_{p} - PE_{q}\). This is why Transformers can generalise to longer sequences than seen during training.

**Non‑obvious insight**

Most people treat attention as a “black‑box” similarity. In fact, the dot‑product attention is equivalent to projecting queries onto keys and then weighting values by that projection’s *softmax*. Thus attention implements an *information‑theoretic* message passing: each token chooses how much of every other token’s information it needs. This perspective explains why adding more heads or increasing dimensionality doesn’t just increase capacity—it increases the *diversity of messages* the network can send, akin to multi‑channel communication in wireless systems.

In short, the Illustrated Transformer shows that a purely attention‑based architecture, equipped with residuals, normalisation, and positional cues, solves the sequence modelling problem by turning long‑range dependencies into a set of parallel, learnable weighted averages—exactly what we need for efficient, scalable language understanding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
