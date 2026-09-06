---
qid: ing_b2d467c564__fp__local
question: 'Explain: A journey up the Stack — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 355
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:24:13-05:00'
sources: []
---

**Why we *visualize* GPT‑2**

Language models learn to predict the next token by assigning probabilities \(P(t_i|t_{<i})\).  
The Transformer is a *self‑attention* network that lets every position attend to every other, so the hidden state at step \(k\) is

\[
h_k = \sum_j \alpha_{kj}\,x_j,\qquad 
\alpha_{kj}=\frac{\exp(e_{kj})}{\sum_{\ell}\exp(e_{k\ell})},
\]

where \(e_{kj}=q_k^\top k_j/\sqrt{d}\).  
The key insight is that \(\alpha_{kj}\) encodes *information flow*—which past tokens most influence the next prediction.  

Alammar’s “Stack” draws a 2‑D grid where each cell shows an attention heatmap for one layer, one head. The color intensity is \(\alpha_{kj}\). By stepping through layers we see how raw embeddings are transformed into contextualized representations: early heads focus on local syntax; deeper heads capture long‑range dependencies (e.g., pronoun resolution).

**Non‑obvious take‑away**

The *position of a head in the stack* matters more than its dimensionality. A single “bridge” head can propagate information across distant tokens, whereas many small heads that only look locally will fail to encode global structure—even if they have high capacity. This explains why fine‑tuning often benefits from inserting extra cross‑attention layers rather than merely widening existing ones.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
