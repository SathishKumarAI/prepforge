---
qid: ing_ae0975869e__fp__local
question: 'Explain: Context Caching (System-level) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 483
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:38-05:00'
sources: []
---

**Context Caching in System‑level Attention**

Self‑attention computes
\[
\text{Attention}(Q,K,V)=\operatorname{softmax}\!\Bigl(\frac{QK^\top}{\sqrt d}\Bigr)V,
\]
where \(K\) and \(V\) are the keys/values for every token in a sequence.  
When an autoregressive model processes tokens one by one, recomputing \(K,V\) from scratch at each step is wasteful: the earlier tokens never change, yet their embeddings are re‑encoded repeatedly.

**Derivation of caching**

1. **Fixed prefix property** – Tokens \(t_1,\dots,t_{i-1}\) form a *prefix* that remains constant while generating token \(t_i\).  
2. **Linear algebraic separability** – The dot product \(QK^\top\) decomposes into
   \[
   Q_{\text{new}}K_{\text{old}}^\top + Q_{\text{new}}K_{\text{new}}^\top,
   \]
   where the first term involves only cached keys.  
3. **Incremental update** – The softmax denominator can be maintained by caching the cumulative sum of exponentials from previous steps, avoiding recomputation over the entire prefix.

Thus a *context cache* stores \(K_{\text{old}},V_{\text{old}}\) once and appends new pairs on each step. The system-level implementation simply re‑indexes these tensors, yielding **O(1)** memory growth per token instead of O(n²) recomputation.

**Non‑obvious insight**

The cache is not just a speed trick; it *changes the geometry* of attention. By treating the prefix as a fixed subspace, the model learns to project new queries onto this subspace with a single matrix multiplication, effectively turning the softmax over an ever‑growing set into a *dynamic kernel* that adapts its bandwidth per step. This subtle shift allows models to scale to thousands of tokens while preserving true self‑attention semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
