---
qid: ing_e436b05b20__fp__local
question: 'Explain: Output ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 449
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:04:37-05:00'
sources: []
---

**Paged Attention – the core of vLLM’s speed‑up**

The fundamental problem is that a transformer needs every token’s hidden state to compute the next one. In a large model (billions of parameters) this means repeatedly accessing *all* past activations, which in GPU memory quickly becomes a bandwidth bottleneck.  

vLLM observes two facts:

1. **Sparse attention** – each query only attends to a limited set of keys (e.g., causal mask, local windows).  
2. **Temporal locality** – during decoding the same key‑value pairs are reused for many consecutive queries.

The solution is to *page* these key‑value tensors into smaller blocks that fit in fast GPU memory, loading only the blocks needed for the current query window. Formally, let \(K\in \mathbb{R}^{L\times d}\) and \(V\in \mathbb{R}^{L\times d}\). We partition \(L\) into pages \(P_1,\dots,P_m\), each of size \(p\ll L\). For a query at position \(t\), we load only the pages intersecting its attention window, compute
\(A_t = \text{softmax}(Q_tK_{P})V_{P}\),
and discard them. This reduces memory traffic from \(O(L)\) to \(O(p)\) per step.

The deeper principle is *online sub‑matrix multiplication*: we exploit the fact that attention is a batched dot product over a sparse index set, allowing us to treat each page as an independent mini‑kernel.  

**Non‑obvious insight:** Because the same pages are reused across many decoding steps, vLLM can cache them in L1/L2 GPU caches (or even host memory) and only evict when the attention window moves beyond the cached region. This amortizes the cost of page loading far below a naive per‑token copy, turning what appears to be an overhead into a negligible constant factor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
