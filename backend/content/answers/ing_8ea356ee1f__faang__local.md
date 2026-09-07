---
qid: ing_8ea356ee1f__faang__local
question: 'Explain: Estimate the KV-cache footprint for serving a Llama-3-70B-class
  model, and explain what PagedAttention fixes.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 705
total_tokens: 955
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:53-05:00'
sources: []
---

**Clarify**  
We’re asked to estimate the memory needed for the *key‑value* (KV) cache when running a Llama‑3 70B model in inference, and to explain how **PagedAttention** fixes the main scaling issue.

Assumptions I’d confirm with the interviewer:  
- The model uses 16‑bit precision for KV tensors.  
- We serve one request at a time (no batching).  
- A typical context length is 2 K tokens (the max supported by Llama‑3).  

**Approach**  
1. Compute per‑layer KV size → `seq_len × heads × head_dim × bytes`.  
2. Multiply by the number of layers and by 2 (key+value).  
3. Convert to gigabytes.  
4. Briefly describe PagedAttention’s idea: swap inactive pages out of GPU RAM, keeping only a small “working set” in‑GPU.

**Depth**  
- Llama‑3 70B: `L = 80` layers, `H = 64` heads, `D = 8192 / H = 128` per head.  
- KV tensor size per layer ≈ `seq_len × H × D × 2 bytes`.  
- For `seq_len = 2048`:  

```
per_layer_KV = 2048 * 64 * 128 * 2 B
              ≈ 33 554 432 B   (32 MiB)
```

- Total KV cache: `80 × 32 MiB ≈ 2.5 GiB`.  
- Add a small overhead for Q tensors and activations → ~3 GiB total GPU memory.

**Edge cases**  
- Longer contexts (e.g., 8 K tokens) would quadruple the cache to ~10 GiB, exceeding many GPUs.  
- Mixed‑precision or 32‑bit KV would double the footprint.  
- Batching multiplies by batch size; a single GPU with 24 GB can only serve few requests concurrently.

**Optimize & communicate**  
PagedAttention solves this by keeping *only* the “hot” KV pages in GPU RAM while paging older ones to CPU or NVMe. It trades off a small latency hit for linear memory scaling, enabling inference of any context length on fixed‑size GPUs. I’d highlight that this allows Llama‑3 70B to handle arbitrarily long documents without exceeding GPU limits, which is critical for production deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
