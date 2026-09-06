---
qid: ing_6537c0dbca__think__local
question: Estimate the KV-cache memory to serve a 70B-class model at 128k context.
  What do you do when it doesn't fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 544
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:43:40-05:00'
sources: []
---

**1. Clarify the problem and state assumptions**  
- Identify what “KV‑cache” means: key/value tensors stored per token during inference.  
- Decide on a precision (e.g., 16‑bit float or 8‑bit quantized).  
- Assume a transformer architecture with *L* layers, each having *H* hidden units and *A* attention heads.  
- Take the context length *C* = 128 k tokens, model size ≈ 70 B parameters.

**2. Build a mental model / formula**  
For each layer:  
`KV_cache_per_layer ≈ C × (heads × head_dim) × 2 × bytes_per_value`.  
Sum over layers: `Total_KV = L × KV_cache_per_layer`.  
Use typical values for 70 B models (e.g., *L*≈ 48, *head_dim*≈ 1280).  

**3. Reason step‑by‑step toward an estimate**  
- Compute head count: `heads = H / head_dim` → ~32 heads per layer.  
- Bytes per value: 2 bytes for FP16, 1 byte if quantized.  
- Plug numbers: `KV_cache_per_layer ≈ 128k × 32 × 1280 × 2 bytes`.  
- Multiply by *L* and convert to GB.  
- If the result exceeds GPU RAM (e.g., > 80 GB), note that it won’t fit.

**4. Common traps to avoid**  
- Forgetting the factor of 2 for key & value tensors.  
- Mixing token length with sequence length per batch incorrectly.  
- Assuming all layers use identical dimensions; some models have varying head sizes.  
- Ignoring overhead from other buffers (model weights, activations).

**5. Sanity‑check and verbalize**  
- Compare the estimate to known benchmarks: a 7 B GPT‑3 model needs ~1 GB for 128k context; scaling linearly by parameters suggests tens of GBs.  
- If the memory exceeds capacity, explain fallback strategies:  
  - Reduce precision (e.g., 8‑bit KV).  
  - Use “chunked” or “paged” KV cache that spills to disk/CPU RAM.  
  - Limit context length dynamically.  
  - Employ model parallelism to spread KV across devices.

By following these steps you’ll arrive at a realistic memory estimate and know how to handle the situation when it doesn’t fit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
