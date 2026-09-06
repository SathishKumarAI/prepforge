---
qid: ing_cdd8a1917e__fp__local
question: 'Explain: Title: Train Short, Test Long: Attention with Linear Biases Enables
  Input Length Extrapolation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 493
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:18:08-05:00'
sources: []
---

**Why “Train Short, Test Long” works**

Self‑attention computes queries Q and keys K as linear maps of the input token embeddings.  
Without positional information the dot product \(Q_i\!\cdot K_j\) is invariant to permutation, so a model trained on short sequences cannot distinguish positions it has never seen.  
The standard remedy—sinusoidal or learned absolute encodings—introduces *bounded* signals that saturate once the training window is exceeded; extrapolation then collapses to a constant bias.

In this work the authors add a **linear positional bias** \(b_{ij}=a\,i+b\,j+c\) (learned scalars \(a,b,c\)).  
This term grows unboundedly with token index, so for any new position the attention score receives a deterministic shift that preserves relative order.  
Mathematically, the bias is equivalent to augmenting Q and K with an extra dimension equal to the token’s absolute coordinate; the dot product then contains a term proportional to \(i-j\).  
Thus the model learns to use *relative distance* as a feature—exactly what is needed for extrapolation.

**Deep insight**

A linear bias turns the attention kernel into a **shift‑invariant, translation‑equivariant** function on an infinite sequence.  In the language of kernels this is analogous to using a polynomial (degree 1) kernel that can be evaluated outside its training support.  Consequently the model behaves like a low‑rank approximation of a continuous, globally defined attention map—allowing it to process arbitrarily long inputs without any architectural change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
