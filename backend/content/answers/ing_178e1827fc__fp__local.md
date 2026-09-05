---
qid: ing_178e1827fc__fp__local
question: 'Explain: Feed-Forward Networks — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 483
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:57-05:00'
sources: []
---

**Feed‑forward layers inside a language model: the core of “predict‑then‑propagate”**

At its heart an LLM is a probabilistic predictor: given a prefix \(x_{1:n}\) it must output a distribution over the next token \(x_{n+1}\).  
The *feed‑forward* submodule is the only part that operates locally on each hidden state vector \(h\) produced by the self‑attention block. It implements a small, fully‑connected neural network

\[
z = \phi(W_2\,\sigma(W_1 h + b_1)+b_2),
\]

where \(\sigma\) is typically GELU and \(\phi\) is identity or a residual addition.  
Why this structure?  

* **Parameter efficiency** – the two linear maps share no parameters with other tokens, so each position can be transformed independently without blowing up memory.  
* **Non‑linearity for expressivity** – without \(\sigma\), the block would be linear and could be absorbed into a single matrix; depth alone cannot increase representational power.  
* **Residual flow of gradients** – adding \(h\) back to \(z\) preserves the signal from earlier layers, stabilising training on very deep stacks.

From an optimization viewpoint, the feed‑forward block acts as a *local feature extractor* that maps the multi‑head attention’s aggregated context into a richer representation before it is mixed again across heads. It essentially implements a learnable “basis change” in hidden space, allowing the model to capture higher‑order interactions (e.g., syntax or semantics) that pure linear self‑attention cannot.

**Non‑obvious insight:**  
Because each token’s feed‑forward transformation is independent, the same weights are reused for every position. This *parameter sharing* forces the network to learn a *position‑agnostic* nonlinear mapping of contextualized embeddings. Consequently, the model’s ability to generalise across different sentence lengths stems largely from this shared nonlinearity rather than from any explicit recurrence or positional encoding—an elegant manifestation of *inductive bias by symmetry*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
