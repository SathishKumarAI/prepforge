---
qid: ing_44cab61f57__faang__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 644
total_tokens: 893
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:21-05:00'
sources: []
---

**Clarify**  
We’re comparing two GPU workloads that use a Transformer: *prefill* (full‑sequence attention) and *decode* (step‑by‑step generation). A kernel is **compute‑bound** when arithmetic cycles dominate, otherwise it’s **memory‑bound** if memory traffic stalls the GPU. We’ll assume a single NVIDIA Ampere GPU, identical batch size, and that all other factors (cache, warp scheduling) are comparable.

**Approach**  
1. Estimate *arithmetic intensity* (AI = FLOPs / bytes moved).  
2. Apply Roofline: performance ≤ min(peak compute, peak memory × AI).  
3. Compare the two workloads’ AI to decide bound type.

**Depth**  
- **Prefill**: For a sequence of length *L*, attention requires ~4 × L² matrix multiplies (QKᵀ and V) plus softmax → ≈ 8 L² FLOPs per head. Memory traffic ≈ 3 × L² × 4 bytes (Q, K, V). AIₚ = 8 L² / (12 L²) ≈ **0.67**.  
- **Decode**: Each step uses a single *L*‑by‑1 attention → ~4 L FLOPs and ~3 L × 4 bytes of traffic. AI_d = 4 L / (12 L) ≈ **0.33**.

Assume peak compute ≈ 30 TFLOP/s, peak memory bandwidth ≈ 900 GB/s → roofline slope ≈ 75 FLOPs/byte.  
- Prefill: 0.67 × 75 ≈ 50 TFLOP/s < 30 TFLOP/s → **compute‑bound** (limited by arithmetic).  
- Decode: 0.33 × 75 ≈ 25 TFLOP/s ≈ 30 TFLOP/s → **borderline**, but practical stalls and memory latency push it to **memory‑bound**.

**Edge cases**  
- Very long sequences or larger batch sizes increase AI for prefill, potentially moving it toward memory‑bound.  
- Different GPU architectures (e.g., Hopper) with higher memory bandwidth shift the balance.  
- Model sparsity or mixed precision changes FLOPs/bytes ratios.

**Optimize & communicate**  
To improve decode: fuse softmax + attention, use kernel‑level caching of K/V, and reduce memory traffic via 16‑bit tensors—boosting AI toward compute bound. For prefill: increase batch size to better utilize SIMD lanes, or employ tensor‑core fused multiply‑add to raise effective FLOPs per cycle. When explaining, I’d present the Roofline chart, annotate AI points for each workload, and walk through the arithmetic that leads to the 0.67 vs 0.33 values, highlighting how architectural parameters dictate the bound.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
