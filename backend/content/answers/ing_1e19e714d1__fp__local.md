---
qid: ing_1e19e714d1__fp__local
question: 'Explain: After a routine deploy, P99 TTFT went from ~600 ms to ~4 s. Throughput,
  error rate, GPU utilization and the model version are all unchanged. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 656
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:35-05:00'
sources: []
---

### What’s really happening?

The **p99 TTFT** (time‑to‑first‑token) is the latency of the *initial* token that a user receives. It depends almost exclusively on how long it takes to build and serialize the first response, not on the rest of the decoding loop.

In a typical Transformer‑based inference pipeline the steps are:

| Step | Cost | Why it matters for TTFT |
|------|------|-------------------------|
| **Model warm‑up** (GPU memory allocation, JIT compilation) | O(1 s) | Only the first request triggers this. Subsequent requests reuse the compiled kernels. |
| **Input tokenization + embedding lookup** | ~10–20 ms | Same for every call; negligible compared to other costs. |
| **First forward pass** (encoder → decoder start token) | O(1 s) | The *first* token must be generated before any user‑visible output can appear. |
| **Token serialization & network send** | ~5–10 ms | Tiny, but it’s the final step in TTFT. |

If all throughput, error rate, GPU utilisation and model version stay constant, the only thing that can change *p99* dramatically is a variation in the **first forward pass**.

### Likely culprit: **CPU‑to‑GPU data transfer or CUDA stream latency**

- After a deployment update, the **runtime** (e.g., PyTorch/TensorFlow) may have re‑chosen a different CUDA stream or altered its *stream priority*.  
- The first request now waits for the GPU to finish a **large memory copy** that was previously cached.  
- Alternatively, the model’s **embedding table** might be larger than before (e.g., due to added tokens), so the first forward pass has to load more data into the device.

Both scenarios add ~3–4 s of wall‑clock time to the *first* request, pushing p99 from 600 ms to ~4 s while leaving average latency and throughput unchanged because subsequent requests hit the cache.

### Non‑obvious insight

**TTFT is a *warm‑up indicator*, not an average performance metric.**  
If the first forward pass has to perform a large data transfer or recompilation, p99 explodes even though the steady‑state system behaves normally. Therefore, monitoring only p99 can be misleading; you should pair it with **cold‑start latency** and inspect CUDA stream usage.

### Debug checklist

1. **Profile the very first request**: `nvprof`, `torch.profiler`, or TensorBoard to see where time is spent.
2. **Check CUDA stream priorities**: ensure no high‑priority kernel blocks the inference stream.
3. **Inspect model memory footprint**: has it grown? Are embeddings larger?
4. **Validate caching behaviour**: confirm that subsequent requests reuse compiled kernels and GPU memory.

Fixing the issue usually involves ensuring that the first request uses the same cached resources (e.g., by pre‑warming the model or pinning memory) or adjusting stream priorities to avoid blocking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
