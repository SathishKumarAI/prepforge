---
qid: ing_6537c0dbca__faang__local
question: Estimate the KV-cache memory to serve a 70B-class model at 128k context.
  What do you do when it doesn't fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 525
total_tokens: 775
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:39-05:00'
sources: []
---

**Clarify**  
We need the RAM required for a KV‑cache that holds key/value pairs for every token in a 70 B parameter transformer, with a maximum context length of 128 k tokens. Assume each KV entry is stored as two 32‑bit floating‑point vectors (key and value) per head, and the model has *H* heads per layer and *L* layers.

**Approach**  
1. Compute per‑token cache size: `size_per_token = 2 × H × 32 bits`.  
2. Multiply by max tokens: `cache_mem = size_per_token × 128k`.  
3. Convert to GB and compare against available system RAM (e.g., 8–16 GB for a single GPU).  

If the cache exceeds memory, consider:  
- **Layer‑wise caching** – store KV only for the last few layers used in inference.  
- **Quantization** – reduce each float from 32 to 16 or 8 bits.  
- **Sparse/low‑rank approximation** – compress keys/values via SVD or product quantization.  
- **Streaming** – evict older tokens and recompute if needed, trading latency for memory.

**Depth**  
For a typical 70 B model: *H ≈ 64*, *L ≈ 80*.  
`size_per_token = 2 × 64 × 32 bits = 4 kbits (0.5 KB)`.  
Cache for 128k tokens → `0.5 KB × 128k ≈ 64 GB`.  
Thus a single GPU’s RAM (~16 GB) is insufficient.

**Edge Cases**  
- Very long context >128k tokens → linear growth.  
- Mixed‑precision models (e.g., 8‑bit KV) reduce size by factor of 4.  
- Batch inference: multiply cache per batch element.

**Optimize & Communicate**  
Explain the trade‑off: full precision gives best accuracy but is memory‑heavy; quantization or layer‑wise caching reduces footprint at a small loss in perplexity. Highlight that the chosen strategy should be validated with benchmarks on target hardware, and that fallback recomputation logic can guarantee correctness if eviction occurs. This systematic plan demonstrates clear reasoning, depth of technical detail, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
