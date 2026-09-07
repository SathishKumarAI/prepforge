---
qid: ing_3d3dbb04ce__faang__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 548
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:19-05:00'
sources: []
---

**Clarify**  
We’re asked why *decode* latency in an AI inference pipeline is usually limited by memory bandwidth instead of arithmetic throughput, and what this tells us about tuning a serving system. I’ll assume we’re talking about large‑scale transformer decoders (e.g., GPT) running on GPUs/TPUs where each step requires fetching many activations and weight slices.

**Approach**  
1. Contrast compute‑bound vs memory‑bound workloads.  
2. Explain the decoder’s dataflow: self‑attention, feed‑forward layers, large tensors.  
3. Show how memory traffic scales with sequence length and model size.  
4. Translate this into design implications for a serving stack.

**Depth**  
- **Compute vs Bandwidth**: In transformers, each token requires ∼10⁶ FLOPs but also streams ≈1 GB of activations/weights per layer. On modern GPUs the compute units can finish the arithmetic in ~0.5 ms, while PCIe or NVLink transfers take >2 ms for that data, so latency is dominated by bandwidth.  
- **Layer‑wise pattern**: Attention heads read query/key/value tensors from global memory, write attention scores, then feed‑forward layers pull weight matrices. The memory hierarchy (L1/L2 caches) can’t keep up because the tensors exceed cache size.  
- **Implication**: Optimizations that reduce memory traffic—tensor compression, fused kernels, or model parallelism that keeps data local—yield higher gains than simply adding more compute cores.

**Edge Cases**  
- Small models (≤1 B params) may become compute‑bound; profiling is essential.  
- Mixed precision can shift the balance but still leaves bandwidth a bottleneck for large vocabularies.  
- Serving multiple concurrent requests may saturate interconnects, exacerbating memory limits.

**Optimize & Communicate**  
- **Data locality**: Keep frequently used tensors in on‑device memory; use activation checkpointing sparingly to trade compute for bandwidth.  
- **Kernel fusion**: Combine attention and feed‑forward ops into a single launch to reduce kernel launch overhead and cache misses.  
- **Batching strategy**: Larger micro‑batches improve throughput but can increase latency; tune batch size per SLA.  

Narrate these points clearly, showing that understanding the memory‑bound nature of decode guides us toward architectural choices (e.g., GPU with high HBM bandwidth, careful model partitioning) that deliver lower inference latency than raw compute scaling alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
