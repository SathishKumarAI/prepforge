---
qid: ing_fa8352e78e__fp__local
question: 'Explain: Self-Attention in Detail — The Illustrated Transformer \u2013
  Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 430
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:52:22-05:00'
sources: []
---

Self‑attention is the engine that lets a neural network decide **which parts of an input sequence should talk to each other** without relying on fixed positions or recurrent passes.  
At its core we have three learned linear maps: **Query (Q), Key (K) and Value (V)**. For every token \(i\) in a sentence we produce vectors \(\mathbf q_i,\mathbf k_i,\mathbf v_i\). The similarity between token \(i\) and any other token \(j\) is quantified by the dot product \(\mathbf q_i^\top\mathbf k_j\); this measures how much “attention” token \(i\) should pay to token \(j\).  
The dot products are scaled by \(\sqrt{d_k}\) (the dimensionality of keys) so that gradients do not explode when the embedding space is high‑dimensional—an optimization trick that keeps the softmax output in a useful range.  
Applying the softmax across all \(j\) turns these similarities into a probability distribution, which we use to weight the values \(\mathbf v_j\). The weighted sum
\[
\sum_{j}\text{softmax}(\tfrac{\mathbf q_i^\top\mathbf k_j}{\sqrt{d_k}})\,\mathbf v_j
\]
is the attended representation of token \(i\).  
Why does this work? It implements a **dynamic, content‑based routing** that is mathematically equivalent to computing a weighted average over all positions—a form of *kernel smoothing* where the kernel itself is learned. The model can therefore capture long‑range dependencies in constant time per layer, unlike RNNs whose path length grows with sequence length.  
A non‑obvious insight: because attention weights are **contextualized**, the same token can attend to different neighbors in different sentences—this contextual re‑weighting is what endows Transformers with their remarkable generalization across tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
