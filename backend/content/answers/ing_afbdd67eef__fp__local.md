---
qid: ing_afbdd67eef__fp__local
question: 'Explain: Q: Compare MHA, GQA, and MQA. — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 601
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:18:10-05:00'
sources: []
---

**From first principles: why an attention mechanism must “look” the way it does**

An attention layer is a learned weighting of *key–value* pairs conditioned on a *query*.  
Mathematically, for each query vector \(q\) we compute scores
\(s_i = q^\top k_i / \sqrt{d}\), then normalize with softmax to obtain weights \(\alpha_i\). The output is \(\sum_i \alpha_i v_i\).

* **Multi‑Head Attention (MHA)**  
  - *Why*: Parallel projection into \(h\) subspaces lets the model capture diverse linear relationships. Each head learns a different “view” of the data, and concatenating them restores full dimensionality.  
  - *What it does*: \(q,k,v \in \mathbb{R}^{d}\) → \(\bigl[qW_q^{(h)}\bigr]_{h=1}^H\), etc., then each head computes its own attention and the results are concatenated.

* **Global Query Attention (GQA)**  
  - *Why*: In many tasks a single, global query summarises the whole sequence (e.g., classification tokens). By fixing \(q\) to be the same for all positions, we reduce computational cost and enforce a shared “global” perspective.  
  - *What it does*: One learned vector \(q_g\) attends over all keys; the output is broadcast back to every position or pooled.

* **Matrix Query Attention (MQA)**  
  - *Why*: When multiple queries are needed simultaneously—e.g., for multi‑label prediction or decoding in seq2seq—we treat the query set as a matrix \(Q \in \mathbb{R}^{m\times d}\). This allows each of the \(m\) queries to attend independently yet efficiently, sharing the same keys/values.  
  - *What it does*: Compute scores \(S = QK^\top / \sqrt{d}\), softmax over columns for each query row, then multiply by \(V\).

**Non‑obvious insight**  
All three variants are simply different *factorisations* of the same quadratic form \(qk^\top\). The choice—scalar, vector, or matrix queries—determines which symmetries of the data we exploit: MHA exploits subspace diversity, GQA enforces a global symmetry, and MQA leverages query‑parallelism. Recognising them as factorizations clarifies why replacing one with another can dramatically change expressivity without altering the core attention computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
