---
qid: ing_9d5ba31df3__fp__local
question: 'Explain: Causal Masking — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 426
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:39:56-05:00'
sources: []
---

**Causal masking in self‑attention**

The fundamental problem is sequence modelling under *temporal order*: when predicting token \(x_t\), we must not peek at future tokens \(\{x_{t+1},\dots,x_T\}\). In a transformer, each token attends to every other token via a dot‑product attention matrix  
\(A = \text{softmax}(QK^\top / \sqrt{d_k})\). If we left \(A\) unmodified, the row for position \(t\) would contain non‑zero weights for all positions, breaking causality.

Causal masking solves this by zeroing out future entries before softmax:
\(A_{ij}=0 \;\text{if}\; j>i\).
The mask is a lower‑triangular matrix of \(-\infty\) (or a large negative constant), ensuring the softmax assigns probability 1 to past positions and 0 to the masked ones. Thus, each token’s representation depends only on its history.

This construction arises from the principle of *information flow control*: we enforce a directed acyclic graph where edges go only backward in time. Mathematically, it preserves the Markov property needed for autoregressive language models:  
\(P(x_{1:T}) = \prod_t P(x_t | x_{<t})\).

**Non‑obvious insight:**  
Because softmax is *homogeneous*, scaling all masked logits by a constant factor (e.g., -10⁹) yields the same result as using \(-\infty\). This allows efficient implementation on GPUs: we can add a large negative bias to the attention scores rather than constructing an explicit mask matrix, saving memory and computation. Moreover, this trick generalizes: any monotonic constraint (e.g., monotone alignment in speech) can be encoded by appropriately signed biases, turning a combinatorial problem into a simple additive operation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
