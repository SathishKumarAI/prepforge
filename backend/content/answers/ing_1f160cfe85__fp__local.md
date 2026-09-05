---
qid: ing_1f160cfe85__fp__local
question: What does FlashAttention actually optimize? It doesn't reduce FLOPs - so
  why is it faster?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 627
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:12:16-05:00'
sources: []
---

**What FlashAttention really optimizes**

The transformer’s self‑attention layer is a *matrix‑multiply‑softmax* operation:

\[
A = \operatorname{Softmax}\!\bigl(QK^\top / \sqrt{d}\bigr) V .
\]

Its cost in FLOPs is fixed: \(2n^2 d + 2n^2 d\).  
What *varies* is how many bytes of \(Q,K,V,A\) must be shuffled between DRAM, L3, and L1, and how often the GPU kernel is launched. FlashAttention turns this into a **data‑locality optimization**:

| Traditional implementation | FlashAttention |
|---------------------------|---------------|
| Two separate GEMMs (for \(QK^\top\) and \((QK^\top)V\)) | One fused kernel that streams tiles of \(Q,K,V\) once |
| Kernel launch per layer | Single long‑running kernel per batch |
| Many global memory reads/writes for intermediate scores | Keeps partial softmax sums in registers, updates them on the fly |

The key is *arithmetic intensity* – FLOPs per byte moved.  
By fusing the GEMMs and performing the softmax incrementally, FlashAttention keeps most of the data in L1/shared memory or even in registers, so each element of \(Q\), \(K\), or \(V\) is read only once instead of three times. The kernel also uses **warp‑level reduction** to compute the rowwise max and sum for the softmax without spilling to global memory.

### Why it’s faster despite unchanged FLOPs

1. **Reduced memory traffic** – fewer DRAM accesses mean less bandwidth pressure.
2. **Lower latency** – a single long kernel avoids launch overhead and better exploits instruction‑level parallelism.
3. **Higher cache hit rate** – tiling fits the L1/shared memory, so the GPU can keep the data hot.

### Non‑obvious insight

Most people focus on FLOPs or kernel count, but FlashAttention’s speed stems from *reusing partial results in registers* to avoid a second pass over the attention matrix. This is essentially **computational reuse**: you compute the softmax numerator and denominator simultaneously with the matrix product, so you never materialize the full \(QK^\top\) matrix in memory. That tiny change turns an otherwise bandwidth‑bound operation into one that saturates the GPU’s arithmetic units, yielding the dramatic speedups seen in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
