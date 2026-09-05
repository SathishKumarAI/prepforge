---
qid: ing_01c770df7e__fp__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 407
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:08:50-05:00'
sources: []
---

**FlashAttention** tackles the quadratic cost of self‑attention by *fusing* the soft‑max and weighted sum into a single kernel that streams queries, keys and values in blocks.  
The key idea is that for each query‑row we only need to keep the top‑k (or all) scores that survive the mask; once the row’s attention map is computed it can be discarded before the next block arrives. This reduces memory traffic from \(O(n^2)\) to \(O(nb)\) where \(b\) is a small cache‑friendly block size, and lets the GPU compute the soft‑max in place with no extra temporaries.  

**PagedAttention**, on the other hand, partitions the key/value tensors into *pages* that fit into fast memory (e.g., L1 or shared). During decoding it pulls only the pages needed for a given query window, which is great when the attention pattern is sparse or local (as in causal language models). It still performs the soft‑max row‑wise but relies on explicit page look‑ups and a two‑stage gather/aggregate pipeline.  

The deeper principle is *data locality vs compute fusion*. FlashAttention trades a tiny extra arithmetic load for a massive reduction in memory bandwidth, exploiting the GPU’s SIMD units to keep every ALU busy. PagedAttention sacrifices some compute density but gains when the attention matrix has a structured sparsity that allows skipping whole blocks.  

**Non‑obvious insight:** In practice, FlashAttention’s block size can be tuned to match the *effective* cache line of the GPU’s memory controller; choosing it too small hurts latency because each kernel launch overhead dominates, while too large inflates register pressure and spills to global memory—hence a sweet spot often lies near the hardware’s “warp‑size × 32” boundary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
