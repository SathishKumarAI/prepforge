---
qid: ing_4caaa8b55a__fp__local
question: 'Explain: Part #2: The Illustrated Self-Attention — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 569
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:47:59-05:00'
sources: []
---

**Why self‑attention must look like a weighted matrix of tokens**

The core problem any language model solves is *predicting the next token given all previous ones*.  
If we denote the sequence as \(x_{1},\dots ,x_{t}\), the probability for the next token \(x_{t+1}\) is
\(P(x_{t+1}\mid x_{\le t})\).  
A naïve approach would only look at a fixed window, but natural language exhibits long‑range dependencies (e.g., “the *cat* that I saw yesterday…”).  
The self‑attention mechanism provides a **dynamic, differentiable kernel** over the entire past: each token learns to query every other token and to weight its contribution.  

Mathematically, for each position \(i\) we compute queries \(q_i\), keys \(k_j\), and values \(v_j\).  
The attention score is \(\alpha_{ij}= \frac{\exp(q_i^\top k_j / \sqrt{d_k})}{\sum_{\ell}\exp(q_i^\top k_\ell / \sqrt{d_k})}\).  
This softmax ensures that the weights form a convex combination, guaranteeing **convexity of the output space** and enabling gradients to flow back through all pairwise interactions.  

**Geometric intuition**

Think of each token embedding as a point in \(d\)-dimensional space.  
The dot‑product \(q_i^\top k_j\) measures *cosine similarity*; dividing by \(\sqrt{d_k}\) normalizes for dimensionality (the “temperature” trick).  
Thus, attention learns to align queries with keys that lie in the same direction—capturing syntactic or semantic proximity.  

**Non‑obvious insight**

Because every layer recombines *all* tokens, the model can learn **positional abstraction**: a token like “king” can attend to “queen” and “man”, forming a linear relation (king – man + woman ≈ queen).  
This is why GPT‑2’s self‑attention matrices often reveal clusters corresponding to grammatical roles or topics—an emergent *latent semantic graph* that the model builds without explicit supervision.

In short, self‑attention solves the “look‑ahead” problem by turning the entire past into a weighted sum of value vectors, with weights derived from learned similarity scores. The geometry of dot products and softmax ensures both expressivity and trainability, yielding the rich contextual embeddings seen in GPT‑2.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
