---
qid: ing_30e999bf2d__faang__local
question: 'Explain: KV cache: the thing that eats your GPU — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 643
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:38:14-05:00'
sources: []
---

**Clarify**

You’re asking why a key‑value (KV) cache is so expensive on GPUs during inference/production, and what it actually does in transformer models.

Assumptions I’d confirm:
- The model uses self‑attention with cached past key/value tensors.
- “GPU” refers to memory bandwidth / compute cycles.
- We’re focusing on real‑time inference (e.g., chatbots) rather than training.

**Approach**

1. Explain the role of KV cache in transformers.
2. Break down GPU cost components: memory traffic, compute, and parallelism.
3. Summarize why these costs are non‑trivial.
4. Offer quick mitigations.

**Depth**

| Component | Why it matters on GPU |
|-----------|-----------------------|
| **Memory Footprint** | KV cache stores all past keys/values per layer. For a 512‑token sequence, each key/value is ~16 B (float32). With 12 layers → ~100 MB per inference pass. GPUs have limited high‑bandwidth memory; spilling to DRAM or PCIe hurts latency. |
| **Bandwidth** | Each forward step must read *all* cached keys/values and write the new ones. This is O(L·T) where L = layers, T = sequence length. Even with fused kernels, bandwidth saturates quickly, especially on 8‑bit quantized models that still need to gather data. |
| **Compute Overlap** | Attention requires matrix‑multiply (Q×Kᵀ). When caching, Q is small but K and V are large; the GEMM kernel can’t be fully vectorized because of irregular memory accesses, leading to lower GPU utilization. |
| **Parallelism Loss** | Cached tensors break independence across tokens; you can’t pipeline them as easily as in training, so GPU warps idle waiting for data. |

Thus, KV cache “eats” the GPU by consuming a large fraction of its memory bandwidth and reducing compute efficiency.

**Edge Cases**

- Very short sequences: cache overhead dominates.
- Mixed‑precision or 8‑bit quantization: reduced numeric size but still high traffic.
- Multi‑token generation (beam search): each beam needs its own cache, multiplying the cost.

**Optimize & Communicate**

*Optimizations:*  
1. **Chunked attention** – process tokens in blocks to keep working set small.  
2. **KV compression** – low‑rank or pruning to shrink tensors.  
3. **Cache sharing across beams** – reuse common prefixes.  
4. **Memory‑on‑chip buffers** – keep hot cache in L1/L2 on GPU.

*Communication:*  
“I’d start by quantifying the memory traffic for a typical inference scenario, then show how that translates to bandwidth saturation. Next, I’d explain the compute bottleneck due to irregular access patterns. Finally, I’d propose chunked attention and KV compression as concrete ways to reduce both memory and compute pressure, noting trade‑offs like slightly higher latency or implementation complexity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
