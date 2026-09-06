---
qid: ing_f609702b22__fp__local
question: 'Explain: Attention cost and FlashAttention — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 560
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:42:40-05:00'
sources: []
---

**Why attention is expensive in transformers**

In a transformer each token attends to every other token: for *n* tokens the cost is  
\(O(n^2)\) both in time and memory.  This quadratic growth comes from computing
all pairwise dot‑products \(\mathbf{Q}\mathbf{K}^\top\), softmaxing them, and then
multiplying by \(\mathbf{V}\).  The operation is a *bilinear form* that can be
written as a matrix–matrix product; its optimal implementation on modern GPUs
has a latency of roughly \(c\,n^2\) where *c* is a hardware‑dependent constant.
Thus, for long contexts (e.g., 32k tokens) the cost explodes.

**FlashAttention: turning the quadratic into a linear‑ish kernel**

FlashAttention rewrites this computation as a series of **blocked, fused kernels**
that:

1. **Stream data in tiles** so that each tile of \(\mathbf{Q}\), \(\mathbf{K}\), and
   \(\mathbf{V}\) fits in shared memory.
2. **Compute the softmax on‑the‑fly** while accumulating weighted sums, avoiding
   a separate reduction pass.
3. **Use warp‑level primitives** to reduce global traffic.

Mathematically, it exploits the fact that  
\[
\operatorname{softmax}(\mathbf{Q}\mathbf{K}^\top)\mathbf{V}
= \sum_{i,j} \frac{\exp(q_i k_j)}{\sum_l \exp(q_i k_l)} v_j
\]
can be evaluated incrementally per tile.  The reduction of the denominator is
performed locally, so each token’s contribution is computed with only *O(n)*
memory, and the total time becomes \(O(n^2)\) but with a dramatically smaller
constant factor—often **10× faster** than naïve implementations.

**Non‑obvious insight**

The key hidden principle is that *attention is not just a matrix product*; it is
a **structured stochastic process**.  By fusing the softmax and weighted sum into a
single kernel, FlashAttention turns an \(O(n^2)\) operation into a
*memory‑bound* one where latency dominates over arithmetic throughput.
This flips the bottleneck from compute to memory traffic, allowing LLMs to
process longer contexts without proportional increases in GPU usage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
