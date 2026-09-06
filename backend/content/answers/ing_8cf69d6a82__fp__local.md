---
qid: ing_8cf69d6a82__fp__local
question: 'Explain: How PagedAttention Works (vLLM) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 539
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:04:45-05:00'
sources: []
---

**Why we need paged attention**

In transformer‑based LLMs the self‑attention kernel scales as  
\(O(N^2)\) in sequence length \(N\). For a megabyte‑scale context this becomes memory‑bound: each token’s key, value and query vectors must stay resident on GPU. When the model size exceeds GPU capacity we are forced to swap or shard the model, which kills throughput.

**From “memory bound” to “paged”**

Let \(K,V\in\mathbb{R}^{N\times d}\) be keys/values. Observe that in a typical inference pass all queries come from the *current* token, while the keys/values are *static*. The dot‑product attention for query \(q_i\) is  
\[
\alpha_{ij} = \frac{\exp(q_iK_j^\top)}{Z_i},
\]
where only row \(i\) of \(K\) and all columns of \(V\) matter. If we store keys/values in **page‑aligned blocks** (e.g., 1 MiB), each block can be streamed into GPU memory just once per step, processed, and evicted. This reduces the working set from \(O(Nd)\) to the size of a single page plus the query vector.

**Why it works**

Paged attention is essentially *stream‑aware* matrix multiplication: we perform a batched GEMM on each page while keeping only the needed slices resident. Because the softmax denominator is computed across all pages, we accumulate partial sums and later normalise—exactly what the standard algorithm does, but with far fewer memory transfers.

**Deeper principle**

This is an instance of *memory‑hierarchy aware optimization*: by aligning computation with cache line boundaries (pages) we exploit spatial locality, turning a \(O(N^2)\) kernel into a sequence of \(O(N/p)\) page‑level GEMMs, where \(p\) is the number of pages. The overall complexity remains quadratic, but the constant factor drops dramatically.

**Non‑obvious insight**

Most people view attention as inherently “dense”. Paged attention shows that *density* can be traded for **temporal locality**: we pay a small extra cost (re‑computing softmax normalisers) to avoid holding all key/value vectors simultaneously. This subtle shift unlocks inference of trillion‑parameter models on commodity GPUs, bridging the gap between model size and hardware limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
