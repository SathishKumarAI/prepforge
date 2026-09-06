---
qid: ing_83f733adb5__fp__local
question: 'Q: Why does PagedAttention significantly increase throughput?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 444
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:45:49-05:00'
sources: []
---

**Why Paged‑Attention boosts throughput**

At its core, attention requires a dense matrix multiplication between every query vector \(q_i\) and all key vectors \(k_j\). In vanilla transformers this is \(O(N^2)\) for sequence length \(N\), with each multiplication incurring a kernel launch and memory traffic. Paged‑Attention reorganises the computation so that only *active* tokens—those whose queries are actually needed for the current decoding step—are processed, while the rest of the key/value cache is stored in contiguous “pages” on GPU.

1. **Cache‑friendly layout**  
   Keys/values are laid out as a 2‑D tensor (page × token), allowing each thread block to load an entire page into shared memory once and reuse it across many queries. This eliminates repeated global‑memory fetches that dominate latency in naïve implementations.

2. **Kernel fusion & reduced launch overhead**  
   The softmax, weighted sum, and output projection are fused into a single kernel per page. Fewer launches mean less scheduling overhead, which becomes significant when \(N\) is large but only a handful of tokens are active per step.

3. **Parallelism at the page level**  
   Each page can be processed independently, enabling fine‑grained parallelism that scales with GPU occupancy. Even if one page is small, many others keep the device busy, unlike the monolithic \(O(N^2)\) kernel that stalls when \(N\) grows.

4. **Non‑obvious insight: memory‑bandwidth bottleneck vs compute‑bound**  
   Traditional attention is *compute‑bound* for short sequences but becomes *memory‑bound* as \(N\) rises. Paged‑Attention flips the balance: by turning the problem into a *compute‑heavy, cache‑friendly* one, it frees the GPU from being throttled by global memory traffic.

**Result:** Throughput improves because each GPU cycle does more useful work—fewer memory stalls and better utilisation of shared resources—while still preserving exact attention semantics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
