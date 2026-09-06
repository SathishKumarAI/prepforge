---
qid: ing_8037c24825__fp__local
question: 'Explain: Continuous Batching and Prefix Caching — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 478
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:38:09-05:00'
sources: []
---

**Continuous Batching + Prefix Caching: The “Dynamic Chunking” Principle**

At its core, a transformer inference engine must evaluate the self‑attention matrix for each token it generates. For a batch of size B and sequence length L, naïvely we compute *O(B·L²)* operations per layer. Continuous batching (CB) reshapes this problem by **grouping tokens across requests into a single large virtual batch**. Each request contributes a contiguous segment of the matrix; the engine then streams these segments through the same GEMM kernels, amortising memory‑bandwidth and kernel launch overheads. The fundamental trade‑off is that CB sacrifices per‑request latency for throughput: by keeping GPU pipelines saturated, we approach the *information‑theoretic* limit where each FLOP contributes maximal entropy to output tokens.

Prefix caching (PC) addresses the **redundancy** in this matrix. As a request progresses, earlier attention contexts never change; they are recomputed in every CB pass. PC stores the already‑computed key/value tensors for these prefixes and reuses them across generations. Mathematically, we decompose the attention score *Q·Kᵀ* into a static prefix part and a dynamic suffix part:  
`score = Q_prefix · K_prefixᵀ + Q_suffix · K_suffixᵀ`.  
The first term is cached; only the second grows with each new token. This reduces the per‑token cost from *O(L²)* to *O(α·L)* where α ≪ 1, aligning inference complexity with the **geometric decay of marginal information**: early tokens contribute diminishing unique context.

**Non‑obvious insight:**  
When CB and PC are combined, the GPU’s *compute‑to‑memory* ratio becomes a function of the *prefix length*, not just batch size. Therefore, to maximize throughput you should **balance request lengths** rather than simply packing more requests: longer prefixes increase cache reuse but also inflate the static term; optimal latency is achieved when the static and dynamic costs equalize. This subtle equilibrium is often overlooked in naive implementations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
