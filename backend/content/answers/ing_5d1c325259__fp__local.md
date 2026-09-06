---
qid: ing_5d1c325259__fp__local
question: 'Explain: 3- Sum — The Illustrated GPT-2 (Visualizing Transformer Language
  Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a
  time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 575
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:36-05:00'
sources: []
---

**Why the “Sum” step is pivotal in GPT‑2**

At its core, a Transformer language model learns to predict the next token \(x_{t}\) from a history \((x_1,\dots ,x_{t-1})\).  
The network represents each token as an embedding vector \(e_i\in\mathbb{R}^d\), and then repeatedly applies *self‑attention* to mix information across positions.  

A single attention head computes, for every query position \(q\),
\[
\alpha_{qk}= \frac{\exp(e_q^\top W_Q\,W_K^\top e_k)}{\sum_j \exp(e_q^\top W_Q\,W_K^\top e_j)},
\]
and then forms the output as a weighted sum
\[
o_q = \sum_k \alpha_{qk}\, (e_k W_V).
\]

**From probability to vector geometry.**  
The softmax weights \(\alpha_{qk}\) are *probabilities* over past tokens; they encode how much each token should influence the current prediction. The weighted sum is therefore a *convex combination* of transformed embeddings, guaranteeing that \(o_q\) lies inside the convex hull spanned by \(\{e_k W_V\}\). This geometric constraint keeps representations bounded and interpretable: attention cannot “invent” arbitrary directions—it only interpolates between known token vectors.

**Why this matters for GPT‑2’s fluency.**  
During training, the model learns to assign high probability to tokens that are semantically or syntactically relevant (e.g., next word in a sentence). The sum operation then aggregates these contributions into a single vector that feeds into subsequent layers and finally into a softmax over vocabulary logits. If we replaced the weighted sum with, say, an unweighted concatenation, the model would lose this probabilistic smoothing and would struggle to generalize across contexts.

**Non‑obvious insight:**  
Because each attention head is a convex combination of *projected* embeddings, the model’s expressivity hinges on the diversity of projection matrices \(W_Q,W_K,W_V\). Two heads with identical projections collapse into one; thus, architectural redundancy (multiple heads) is not for parallelism alone but to explore different sub‑spaces of the embedding manifold. This explains why pruning attention heads can drastically reduce parameters while preserving performance: many heads span overlapping convex cones in representation space.

In short, the “Sum” step translates token probabilities into a geometrically bounded representation, enabling GPT‑2 to blend context information smoothly and efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
