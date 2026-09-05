---
qid: ing_397025b9c8__fp__local
question: 'Explain: FlashAttention-2 (Work Partitioning) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 504
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:16-05:00'
sources: []
---

**FlashAttention‑2 Work Partitioning – From “Why?” to “How”**

The core problem of attention is to compute  
\[
\mathbf{O}= \operatorname{softmax}\!\left(\frac{\mathbf{Q}\mathbf{K}^{\top}}{\sqrt d}\right)\mathbf{V}
\]
for a sequence of length \(L\). Naïvely this requires \(O(L^{2})\) memory and compute, which explodes when \(L\) reaches thousands.  
FlashAttention‑2 reframes the computation as *work partitioning*: each GPU thread processes a **tile** of size \(T\times T\) that fits into shared memory. By streaming tiles in both query–key and key–value dimensions, we:

1. **Locality:** All data needed for the tile are loaded once, avoiding global‑memory traffic that dominates cost.
2. **Parallelism:** Every thread handles a distinct tile; the number of tiles \( \approx (L/T)^{2}\), providing fine‑grained parallel work that scales with device size.
3. **Numerical stability:** Softmax is computed within each tile, accumulating partial sums and correcting them later—this is an application of *log‑sum‑exp* trick at a micro‑level.

Mathematically, the partitioning turns the global matrix multiplication into a sum over blockwise products:
\[
\mathbf{O}_{ij} = \sum_{b}\operatorname{softmax}\!\left(\frac{\mathbf{Q}_{i,b}\mathbf{K}^{\top}_{b,j}}{\sqrt d}\right)\mathbf{V}_{b,j},
\]
which is exactly the same as the full matrix but with data locality exploited.  

**Non‑obvious insight:** The bottleneck isn’t the \(O(L^{2})\) operations; it’s *when* and *how often* those operations touch DRAM. By partitioning work, FlashAttention‑2 reduces memory traffic by a factor of \(\sqrt{T}\), so performance scales with tile size rather than sequence length. This subtle shift turns an \(O(L^{2})\) algorithm into an effectively linear‑time kernel on modern GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
