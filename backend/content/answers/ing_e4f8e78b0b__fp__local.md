---
qid: ing_e4f8e78b0b__fp__local
question: 'Explain: Context Rot: Why Context Is a Finite Resource'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 368
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:05:28-05:00'
sources: []
---

**Why the model’s “context” is a hard limit**

A transformer learns to predict the next token by attending to every symbol it has seen so far.  
Formally, the hidden state at position *t* is a weighted sum of the embeddings of all previous tokens:

\[
h_t = \sum_{i=1}^{t-1}\alpha_{ti}e_i .
\]

Because each weight α must be computed (or approximated) for every pair *(i,t)*, the computational cost grows as *O(t²)*. In practice we cap *t* to a fixed window *L* (the context length). This cap is not arbitrary; it reflects two fundamental constraints:

1. **Memory bandwidth** – storing *e_i* and intermediate activations for millions of tokens exceeds GPU RAM.
2. **Statistical capacity** – the model’s parameters are tuned to capture dependencies up to a certain span; beyond that, the marginal gain in likelihood diminishes while the noise introduced by long‑range attention outweighs benefits.

Thus context is finite because the transformer’s architecture trades off *expressive power* for *feasibility*.  

**Non‑obvious insight:**  
The limit *L* can be viewed as a **sampling budget**: each token consumes one “attention slot”. By allocating slots adaptively—e.g., using sparse or hierarchical attention—the model effectively reallocates its finite resource to the most informative tokens, extending useful context without increasing raw memory. This perspective turns a hard cap into a *strategic allocation problem* rather than a mere hardware constraint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
