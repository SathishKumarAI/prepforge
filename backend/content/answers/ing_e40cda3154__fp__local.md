---
qid: ing_e40cda3154__fp__local
question: 'Explain: The Illustrated Masked Self-Attention — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 354
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:21-05:00'
sources: []
---

**Masked Self‑Attention in GPT‑2 – why the “mask” is essential**

In a Transformer, every token attends to *all* tokens in its context by computing attention scores  
\(A_{ij}= \frac{Q_iK_j^\top}{\sqrt{d_k}}\).  For language generation we need an **autoregressive** model: when predicting token \(t_i\), the network must never peek at future symbols \(t_{j>i}\); otherwise it would trivially copy them.  

The mask enforces this by setting the corresponding entries of the attention matrix to \(-\infty\) before the softmax, turning those probabilities into zero.  Mathematically, for a causal mask \(M_{ij}=0\) if \(j>i\), else \(\infty\); then  
\(A' = \text{softmax}\big((QK^\top)/\sqrt{d_k} + M\big)\).  

**Why this works:**  
1. **Information flow constraint** – ensures the model’s output depends only on past context, matching the principle of *causality* in sequential data.  
2. **Optimization stability** – softmax over \(-\infty\) zeros out gradients for future tokens, preventing leakage during back‑propagation.  

A subtle point often overlooked: the mask also implicitly defines a **triangular dependency graph**. This structure guarantees that each layer’s output can be computed in parallel across positions *except* for the masking step; thus, training remains efficient while preserving causality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
