---
qid: ing_0b025c000e__fp__local
question: You need to serve 200 customer-specific fine-tunes of the same 8B base model.
  How do you do that on a handful of GPUs, and what breaks first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 472
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:29:13-05:00'
sources: []
---

**Fundamental problem**

You want *many* distinct fine‑tuned weights (≈200) that all share the same backbone 8 B parameters but differ only in a few task‑specific heads or adapter layers. The challenge is to keep GPU memory bounded while still serving each model at inference time.

**Why it must work this way**

1. **Parameter sharing** – The base weights can be stored once; only the *delta* (adapter) needs to live per request.  
2. **Memory locality** – If you load all deltas into a single large tensor, each GPU’s L3 cache will see repeated accesses, giving better effective bandwidth than loading/unloading per inference.  
3. **Compute reuse** – The forward pass of the backbone can be batched across customers; adapters are lightweight so their compute is negligible compared to the transformer layers.

**Concrete strategy**

1. **Quantize the base model (e.g., 8‑bit) and store it on disk or a shared NVMe pool.**  
2. **Encode each fine‑tune as an *adapter vector* (≈32 kB for a 4‑layer adapter).**  
3. **Maintain a GPU‑resident “adapter pool” of size K (say 8–16) that is swapped in/out using NVLink or PCIe SSD, keyed by request ID.**  
4. **During inference, batch the backbone forward across all requests in the pool, then apply the per‑request adapters as a small GEMM on top.**  

The first thing to break is *memory bandwidth*: once you exceed the GPU’s PCIe/NVLink throughput for swapping adapters, latency spikes. The second bottleneck is *cache thrashing* if you keep too many adapters resident; the L3 cache will evict useful weights, forcing repeated reloads.

**Non‑obvious insight**

Adapters can be **compressed on the fly** using a tiny autoencoder trained jointly with the base model. This reduces the delta size to < 1 kB per fine‑tune, allowing you to keep *all* adapters resident on a single GPU without hitting memory limits, while still preserving accuracy—an approach rarely considered in production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
