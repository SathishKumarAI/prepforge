---
qid: ing_68cc4c8a24__faang__local
question: 'Explain: Why is LLM decode memory-bandwidth-bound rather than compute-bound?
  Walk me through the numbers on an H100.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 471
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:15-05:00'
sources: []
---

**Clarify**  
We’re asked why a large‑language‑model (LLM) decoding step is limited by *memory bandwidth* instead of raw compute on an NVIDIA H100 GPU, and to walk through the relevant figures.

**Approach**  
1. Identify the dominant data movement per token.  
2. Compute the memory traffic for that operation.  
3. Compare it with the GPU’s peak compute throughput (TFLOPs).  
4. Show how bandwidth saturates before compute does.

**Depth**  
During greedy/beam decoding, each new token requires a forward pass over all layers:  
- *Weights*: 12 B per layer × 24 layers ≈ 288 GB total, but only a **slice** is fetched per step (≈ 2 GB).  
- *Activations*: For one token the activations are ~1 GB (16‑bit FP).  

So per token we transfer roughly **3 GB of data**. The H100 has 1555 GB/s peak memory bandwidth; a single decoder pass (~10 ms) would need ≈ 30 GB, consuming ~20 % of the band‑width.  
Compute: each layer needs about 2×10⁹ FLOPs (for 16‑bit ops). The H100 delivers ~60 TFLOPs/s, so a single token takes ~0.03 µs compute—orders of magnitude faster than the 30 ms memory stall.

**Edge cases**  
- If batch size >1 or beam width ↑, traffic scales linearly while compute stays roughly constant per token.  
- Using FP32 or larger hidden states increases both traffic and compute; bandwidth remains the bottleneck until activations dominate compute.

**Optimize & communicate**  
We can reduce memory pressure by caching weights on-chip (Tensor Cores) or using mixed‑precision quantization, but we’ll still hit the 1555 GB/s limit before hitting the 60 TFLOPs ceiling. Thus, for LLM decoding on an H100, *memory bandwidth* is the primary constraint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
