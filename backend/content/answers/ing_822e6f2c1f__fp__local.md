---
qid: ing_822e6f2c1f__fp__local
question: 'Explain: Title: The Missing Memory Hierarchy: Demand Paging for LLM Context
  Windows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 398
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:42:02-05:00'
sources: []
---

### The Missing Memory Hierarchy  
**Demand paging for LLM context windows**

Large‑language models (LLMs) process a *context window*—a fixed number of tokens that the network attends to at once. In practice, a model’s weights are so huge that only a fraction can reside in GPU memory; the rest must be swapped from disk or remote storage. The naive solution is to load every required weight chunk before inference, but this incurs a linear latency penalty and consumes excessive I/O bandwidth.

The *missing memory hierarchy* is an on‑GPU demand‑paging system that treats each weight tensor as a virtual page. When the transformer layer accesses a weight slice that is not resident in GPU SRAM, a *page fault* triggers an asynchronous transfer from host memory or NVMe into a small, high‑bandwidth buffer (e.g., HBM). The scheduler predicts future accesses using simple heuristics—token position, layer depth, and weight reuse patterns—to prefetch pages ahead of time.  

Why this works:  
1. **Locality of Reference** – Attention heads and feed‑forward layers exhibit strong spatial locality; contiguous weight blocks are reused within a forward pass.  
2. **Temporal Reuse** – In sequential decoding, the same weights recur across tokens, so once paged in they can be cached for many steps.  
3. **Bandwidth–Latency Trade‑off** – By overlapping I/O with compute (CUDA streams), the system hides transfer latency while keeping GPU occupancy high.

A non‑obvious insight is that *context window size* itself dictates page granularity: larger windows increase temporal reuse but also demand finer paging to avoid thrashing. Thus, optimal page size is a function of both model depth and the decoding strategy (greedy vs beam). This dynamic paging layer bridges the gap between static memory budgets and the fluid demands of real‑time LLM inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
