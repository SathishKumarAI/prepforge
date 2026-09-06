---
qid: ing_a92f6c6dbc__fp__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 474
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:05:10-05:00'
sources: []
---

**Softmax‑Paged Attention – the vLLM trick**

The transformer’s scaled dot‑product attention computes  
\(A_{ij}= \frac{\exp(q_i^\top k_j / \sqrt{d})}{\sum_{\ell}\exp(q_i^\top k_\ell /\sqrt{d})}v_j\).  
When a model processes a long sequence, the \(q,k,v\) tensors become huge; storing all pairwise dot products is memory‑bound.

*vLLM* observes that for each query position \(i\), only the *most relevant* keys matter: the softmax assigns negligible weight to distant or low‑score keys. If we can guarantee that the top‑\(K\) keys dominate, we can **page** the key–value matrix into small tiles (“pages”) and evaluate attention per page.  

The algorithm proceeds:

1. **Page partitioning** – split the key/value sequence into contiguous blocks of size \(B\).  
2. **Local softmax** – compute logits \(q_i^\top k_j\) only for keys in the current page, apply a local softmax, and accumulate weighted values.  
3. **Early‑stopping / pruning** – after processing a few pages, if the remaining unprocessed pages cannot raise any query’s probability above a threshold (by bounding their maximum possible contribution), we skip them.

Mathematically this is a *truncated* version of the full softmax that preserves the exact result up to an exponentially small error because the tail probabilities are bounded by \(\exp(-\Delta)\) where \(\Delta\) is the log‑gap between the top and omitted keys. The key insight often missed: **the softmax’s exponential decay turns a global normalization into a locally computable operation**—once you can bound the maximum possible contribution of unseen pages, you can safely ignore them without recomputing the full denominator.

Thus paged attention reduces memory from \(O(N^2)\) to \(O(BN)\) and achieves linear‑time inference for long‑context models while maintaining exactness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
