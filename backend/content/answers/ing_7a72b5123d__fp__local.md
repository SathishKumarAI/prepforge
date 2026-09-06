---
qid: ing_7a72b5123d__fp__local
question: 'Explain: PagedAttention — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 623
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:25:09-05:00'
sources: []
---

**Paged Attention – why it works**

A transformer’s self‑attention multiplies a query matrix \(Q\in \mathbb{R}^{n\times d}\) by a key matrix \(K\in \mathbb{R}^{n\times d}\), producing an \(n\times n\) score tensor. The naïve algorithm needs \(\mathcal O(n^2d)\) floating‑point ops and, more importantly, \(\mathcal O(n^2)\) memory to hold the scores before softmaxing. For long sequences (\(n>10^5\)) this blows out GPU RAM.

The fundamental problem is *memory locality*. In practice, attention weights are highly sparse: a token’s relevance decays sharply with distance (positional bias or learned locality). Thus, most of the \(n\times n\) matrix entries are negligible and need not be materialized. Paged Attention formalises this by **partitioning** the sequence into *pages* (blocks) of size \(b\), typically 128–512 tokens.

For a page pair \((p,q)\), we compute only the sub‑matrix \(Q_p K_q^\top\). If the resulting scores fall below a threshold, we discard the entire block and never store it. This yields three benefits:

1. **Memory savings**: Only non‑zero blocks are kept; worst‑case memory becomes \(\mathcal O(b\,n)\) instead of \(\mathcal O(n^2)\).
2. **Computational pruning**: Skipping zero blocks eliminates needless FLOPs.
3. **Hardware alignment**: Each block fits in L1/L2 cache, allowing a single GPU kernel to process many pages without global memory traffic.

The deeper principle is *sparsity‑aware optimization*. Paged Attention turns the quadratic attention graph into a sparse adjacency matrix that can be traversed with standard sparse‑matrix techniques, yet retains full expressive power because the underlying transformer architecture remains unchanged.

**Non‑obvious insight**

Most people treat paging as an engineering trick to fit long sequences on GPUs. The real insight is that *attention locality* is not merely a property of language models but a **geometric phenomenon**: tokens are embedded in a low‑dimensional manifold where nearby points dominate interactions. By aligning the attention computation with this geometry—processing only local blocks—we implicitly perform manifold learning during inference, leading to faster and often more accurate predictions. This explains why paged attention can even improve performance on tasks that benefit from strict locality (e.g., document summarisation) while preserving the full transformer capacity for long‑range dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
