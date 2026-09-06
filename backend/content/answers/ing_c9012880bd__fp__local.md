---
qid: ing_c9012880bd__fp__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 707
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:29-05:00'
sources: []
---

**Why the first token matters**

The *time‑to‑first‑token* (TTFT) is the latency that a user feels before any model output appears. In a probabilistic inference pipeline it is governed by two intertwined processes:

1. **Model pre‑warm and memory layout** – the transformer must be fully resident in RAM, tensors pre‑allocated, and cache lines primed.  
2. **First‑step decoding cost** – the first forward pass involves a full softmax over the vocabulary, which is orders of magnitude heavier than subsequent token predictions (which reuse cached key–value pairs).

These two factors are linked by *information theory*: the first token carries the bulk of the model’s uncertainty; once it is known, later tokens are conditioned on a much narrower posterior.

---

### Step‑by‑step diagnosis

| Stage | What to check | Typical sign | Fix |
|-------|---------------|--------------|-----|
| **Cold start** | Device OS scheduler, GPU/CPU power state | TTFT spikes only after app launch | Keep the inference thread alive (background wake‑up), use low‑power modes that keep DRAM active. |
| **Memory allocation** | Tensor shapes, contiguous vs. fragmented buffers | Slow malloc/free during first pass | Allocate all tensors once at startup; use static `std::vector` or arena allocator. |
| **Cache miss rate** | CPU/GPU L1/L2 hit ratios (via perf) | >80 % misses on the first pass | Align model weights to cache lines, pad for SIMD, reorder layers so that early‑stage tensors fit in L3. |
| **Softmax implementation** | Vectorized log‑exp vs scalar loop | 10× slower than baseline | Use fused kernel (logit → max → exp → sum) with auto‑vectorization or GPU kernel; offload to vendor‑optimized BLAS. |
| **Precision & quantization** | FP32 vs INT8 conversion overhead | Large latency only on first token | Pre‑quantize weights once, store them in 8‑bit format; use a fast dequant kernel that reuses the same cache line for all layers. |

---

### Fixes that pay off

1. **Pre‑warm the GPU** – issue a dummy pass during app init to keep the driver and memory clocks up.  
2. **Cache‑friendly weight layout** – store transformer blocks in contiguous “block‑major” order so that the first forward pass touches each block only once, minimizing page faults.  
3. **Batch‑size‑1 softmax fuse** – implement a single kernel that performs `max`, `exp`, and `sum` in one pass; this reduces memory traffic by ~70 %.  

---

### Non‑obvious insight

The bottleneck is *not* the raw compute of the first layer but the **entropy reduction step**: the softmax must evaluate every vocabulary entry before it can pick a token. By precomputing and caching a *partial softmax table* for the most frequent 5 % of tokens, you reduce the effective vocab size on the first pass without changing model weights—cutting TTFT by ~30 %. This leverages the Zipfian distribution of language rather than hardware tricks alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
