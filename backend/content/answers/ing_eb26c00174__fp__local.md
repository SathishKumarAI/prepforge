---
qid: ing_eb26c00174__fp__local
question: 'Explain: Tensor Parallelism (TP) — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 393
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:19:05-05:00'
sources: []
---

**Tensor‑parallel inference: why it works and what it buys**

When a transformer processes an input, every attention head multiplies the *query* (Q) by the *key* (K).  
The weight matrices of Q, K, V are huge tensors \(W\in\mathbb{R}^{d\times d}\).  
If we split \(W\) column‑wise across *p* workers, each worker holds a sub‑tensor \(W^{(i)}\) and computes its partial product
\(Q\,W^{(i)}\).
All workers then aggregate the results to obtain the full Q·K.  

This works because matrix multiplication is linear:  
\[
Q(W^{(1)}+W^{(2)}+\dots+W^{(p)})=\sum_{i}Q\,W^{(i)} .
\]
Thus the sub‑products are *independent* and can be executed in parallel, with only a final reduction step.  

**Deep principle:** tensor parallelism exploits **additive separability** of linear operators—a form of *distributed computing* that turns a single large matrix into many smaller ones. It is essentially a “divide‑and‑conquer” strategy for the *kernel* of inference.

**Non‑obvious insight:** Unlike data or model parallelism, tensor parallelism does **not** increase communication latency per token; the reduction cost scales with the number of heads, not tokens. Hence it preserves real‑time throughput while enabling models whose parameter count exceeds a single GPU’s memory. This subtle trade‑off—parallelizing *inside* the matrix rather than across examples or layers—is why tensor parallelism is the backbone of modern serving infrastructures for gigantic language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
