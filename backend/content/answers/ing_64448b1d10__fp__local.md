---
qid: ing_64448b1d10__fp__local
question: 'Explain: Title: FlashAttention-2: Faster Attention with Better Parallelism
  and Work Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 453
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:38:16-05:00'
sources: []
---

**FlashAttention‑2: Why the new layout beats naive attention**

The core problem is computing  
\[
\mathbf{Y}= \operatorname{softmax}\!\bigl(\tfrac{\mathbf{QK}^\top}{\sqrt d}\bigr)\mathbf{V}
\]
for long sequences.  Three costs dominate:

1. **Memory traffic** – the \(O(n^2d)\) matrix \(\mathbf{QK}^\top\) cannot fit in cache.
2. **Parallelism granularity** – a single warp that produces one output token is under‑utilized when \(n\) is huge.
3. **Kernel launch overhead** – launching a separate kernel per row incurs latency.

FlashAttention‑2 rewrites the computation as *block‑wise* work partitioning:

- The query and key matrices are tiled into square blocks of size \(B\times B\).
- Each warp processes an entire block, loading \(\mathbf{Q}\) and \(\mathbf{K}\) once into shared memory.
- While iterating over the value vectors for that block, it accumulates partial sums in registers, then reduces across warps.

This is a direct application of **divide‑and‑conquer + SIMD**: by grouping tokens, we reduce the number of kernel launches and exploit intra‑block data reuse. The softmax is computed per block using a two‑pass reduction (sum of exponentials) that fits entirely in registers and shared memory, eliminating global‑memory writes for intermediate results.

### Non‑obvious insight
Because attention is *self‑similar* across blocks, the block‑wise softmax can be re‑used for multiple output tokens. This “softmax sharing” means we need only one reduction per block instead of one per token, cutting both arithmetic and memory operations by roughly \(B\). In practice, choosing \(B=64\) balances occupancy with shared‑memory limits, giving a 3–4× speedup on GPUs while keeping peak accuracy unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
