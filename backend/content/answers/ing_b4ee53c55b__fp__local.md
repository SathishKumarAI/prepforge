---
qid: ing_b4ee53c55b__fp__local
question: 'Explain: Self-Attention (without masking) — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 480
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:29:07-05:00'
sources: []
---

**Self‑attention in Transformers (no mask)**  
At its core the Transformer seeks *contextual embeddings* for every token of an input sequence.  
The naive way is a recurrent net that aggregates information left‑to‑right; but this introduces a serial bottleneck and biases the model toward past tokens only.  
Self‑attention solves this by letting each position attend to **all** positions simultaneously, treating the problem as *weighted averaging* in a learned feature space.

1. **Query/Key/Value decomposition** – every token \(x_i\) is projected into three vectors \((q_i,k_i,v_i)\).  
   The dot product \(q_i^\top k_j\) measures similarity between token \(i\)’s *query* and token \(j\)’s *key*.  
   This is a cosine‑like score in the learned space, which captures “how much should i look at j?”.

2. **Softmax weighting** – normalizing these scores with softmax yields attention weights that sum to one.  
   Thus each token’s output is an *expectation* over all value vectors: \(y_i=\sum_j \alpha_{ij} v_j\).  
   From a probabilistic viewpoint this is akin to Bayesian inference where the query selects a posterior over possible context tokens.

3. **Why no masking?** – Without masking, every token can attend to every other. The network learns symmetric relationships (e.g., “the pronoun ‘it’ refers to the noun phrase before it”) because the attention matrix is unconstrained and learned end‑to‑end.

4. **Non‑obvious insight** – Self‑attention’s *linear* complexity in hidden dimension (thanks to matrix multiplications) allows massive parallelism, but its *quadratic* cost in sequence length is mitigated by sparsity tricks or locality constraints.  
   Thus the architecture balances expressiveness with computational feasibility, a principle that extends to many modern sequence models.

In short, self‑attention reframes context aggregation as an optimized weighted sum over all tokens, grounded in similarity metrics and probability theory, and its unconstrained form (no mask) unlocks bidirectional reasoning from the outset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
