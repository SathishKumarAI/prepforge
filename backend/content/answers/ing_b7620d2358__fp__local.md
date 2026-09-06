---
qid: ing_b7620d2358__fp__local
question: 'Explain: Now We’re Encoding! — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 520
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:33:45-05:00'
sources: []
---

**Why the Transformer “encodes” with attention?**

At its core, language modeling is a *sequence‑to‑sequence* problem: given a string of tokens \(x_1,\dots,x_n\), predict the next token or translate it. Traditional RNNs solve this by passing a hidden state through time, but that forces information to flow linearly and makes long‑range dependencies fragile.

The Transformer replaces the recurrence with *self‑attention*. For each position \(i\) we compute three vectors from the input embeddings:

- **Query** \(q_i = W^Q x_i\)
- **Key**   \(k_j = W^K x_j\)
- **Value** \(v_j = W^V x_j\)

The attention weight between positions \(i\) and \(j\) is

\[
a_{ij} \;=\; \frac{\exp(q_i^\top k_j / \sqrt{d_k})}{\sum_{\ell}\exp(q_i^\top k_\ell / \sqrt{d_k})},
\]

which is a *softmax* over dot‑products. This is exactly the optimal way to linearly combine context vectors \(v_j\) under a soft‑max constraint: it maximizes mutual information between \(x_i\) and its attended context while preserving differentiability.

Why does this work? The dot‑product measures similarity in a learned space, so positions that should influence each other get high weights. The soft‑max guarantees all weights sum to one, yielding an *information‑preserving* weighted average—no single token can dominate unless the model learns it to do so. Parallel computation is possible because every \(a_{ij}\) depends only on embeddings, not on hidden states of earlier tokens.

**Non‑obvious insight:** The scaling factor \(\sqrt{d_k}\) prevents dot‑products from growing large as dimensionality increases, which would push the soft‑max into a near‑binary regime and kill gradients. Thus, a simple mathematical tweak is what keeps deep Transformers trainable on billions of tokens.

In short, encoding with self‑attention solves the sequence problem by turning it into an *optimal weighted aggregation* over all positions, grounded in probability (soft‑max) and geometry (dot products), and enabling efficient, parallel training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
