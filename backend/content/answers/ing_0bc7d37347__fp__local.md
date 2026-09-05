---
qid: ing_0bc7d37347__fp__local
question: 'Explain: Q: Walk me through the forward pass of a transformer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 615
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:30:59-05:00'
sources: []
---

### Forward Pass of a Transformer – from Problem to Geometry

1. **The Core Problem**  
   We want a model that can *relate every token in a sequence to every other* while remaining parallelizable. Classic RNNs process tokens sequentially; self‑attention gives each position a weighted view over the whole input, satisfying the “global context” requirement.

2. **Input Representation**  
   Each word is mapped to a dense vector \(x_i \in \mathbb{R}^d\). Positional encodings \(p_i\) (sinusoidal or learned) are added:  
   \[
   h_i^{(0)} = x_i + p_i
   \]
   This injects order information, turning the sequence into a set of vectors that still respect relative positions.

3. **Self‑Attention as an Optimisation**  
   For layer \(l\), we compute three linear projections per token: query \(Q\), key \(K\), value \(V\). The attention weight matrix is:
   \[
   A = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right)
   \]
   This is exactly the solution to a constrained optimisation: maximize alignment between queries and keys while keeping weights normalised. The scaling \(1/\sqrt{d_k}\) keeps gradients stable (it bounds the dot‑product variance).

4. **Weighted Summation**  
   The output of attention is:
   \[
   z_i^{(l)} = \sum_j A_{ij} V_j
   \]
   Each token becomes a convex combination of all values, thus capturing *contextualised* meaning.

5. **Feed‑Forward and Residuals**  
   \(z_i^{(l)}\) passes through a position‑wise MLP:
   \[
   h_i^{(l)} = \text{LayerNorm}\!\big(z_i^{(l)} + \text{MLP}(z_i^{(l)})\big)
   \]
   Residual connections preserve gradient flow; LayerNorm stabilises statistics across tokens.

6. **Stacking**  
   Repeat steps 3–5 for \(L\) layers. The final hidden states \(h_i^{(L)}\) are the transformer’s output, ready for classification or generation.

---

#### Non‑obvious Insight
The softmax over scaled dot products is *not* merely a “normalisation trick”; it implements a **probabilistic kernel** that implicitly performs an information‑theoretic similarity search. The attention weights approximate the posterior probability that token \(i\) attends to token \(j\), conditioned on their embeddings, making self‑attention a principled inference step rather than a heuristic. This probabilistic view explains why transformers excel at tasks requiring subtle relational reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
