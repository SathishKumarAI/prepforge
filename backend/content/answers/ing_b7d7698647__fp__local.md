---
qid: ing_b7d7698647__fp__local
question: 'Explain: 1- Create Query, Key, and Value Vectors — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 458
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:35:05-05:00'
sources: []
---

In a Transformer, every token is represented by an embedding vector **x** ∈ ℝⁿ.  
The goal of self‑attention is to let each token “ask” the others for relevant information and then combine what it receives.  
Mathematically we need three linear projections:

* **Q = x W_Q**,  **K = x W_K**,  **V = x W_V**.

Why these?  

1. **Query (Q)** is a *query vector* that encodes the “question” a token has.  
2. **Key (K)** represents the *content* each token can offer.  
3. **Value (V)** contains the *actual payload* to be transmitted.

The attention weight between tokens i and j is computed as  

\[
α_{ij} = \frac{Q_i·K_j}{√d_k},
\]

a dot product measuring similarity in a learned d‑dimensional space, scaled to keep gradients stable.  
This operation is the *inner‑product kernel* of the **Reproducing Kernel Hilbert Space** underlying cosine similarity; it projects both vectors onto the same direction and measures how aligned they are.

The weighted sum  

\[
O_i = \sum_j α_{ij}V_j
\]

is a convex combination of values, guaranteeing that each output remains in the span of the input embeddings.  
Thus, the linear maps W_Q, W_K, W_V transform the same token into three roles—question, key, and answer—allowing the model to learn which tokens to attend to and how much information to transfer.

**Non‑obvious insight:** The scaling by √d_k is not merely a trick; it compensates for the variance of dot products in high dimensions. Without it, as d_k grows, the softmax saturates, killing gradients. This subtlety links attention to concentration‑of‑measure phenomena in random geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
