---
qid: ing_3e5dbbc77c__faang__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 445
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:05-05:00'
sources: []
---

**Clarify**  
You’re asking why a *serving‑time* GPU can be safely shared across requests while the *KV cache* (key–value store for transformer activations) cannot.  
Assumptions:  
- Multiple inference jobs run concurrently on the same GPU.  
- Each job has its own KV cache that holds intermediate tensors per sequence.  

**Approach**  
1. Identify what resources are shared vs private.  
2. Examine data dependencies and side‑effects.  
3. Reason about isolation guarantees needed for correctness.

**Depth**  
*GPU memory*: The device is a large pool of bytes. All jobs request slices; the runtime (e.g., Triton, TorchServe) allocates non‑overlapping regions. As long as kernels don’t read/write outside their allocated window, they can safely execute in parallel—this is just memory‑address isolation.

*KV cache*: Each token sequence has a unique KV tensor that subsequent layers read and update. If two jobs share the same cache buffer, one job’s writes would corrupt the other’s activations, leading to incorrect logits or crashes. The cache is not just data; it represents *stateful computation* that must remain deterministic per request.

Therefore:  
- GPU memory can be shared because it’s stateless once allocated.  
- KV cache must be isolated to preserve per‑request state and avoid race conditions.

**Edge cases**  
- Oversubscription of GPU memory → out‑of‑memory errors.  
- Faulty allocation logic that gives overlapping buffers → silent corruption.  
- Multi‑GPU setups where a job’s cache spans GPUs → need cross‑device sync.

**Optimize & communicate**  
Use a *tensor‑pool* allocator to give each request its own KV buffer, and tag allocations with request IDs for debugging. If memory pressure is high, spill older caches to CPU RAM or use quantization to shrink size. Communicate this design by emphasizing that GPU sharing is safe because of address‑space isolation, whereas KV cache requires per‑request isolation due to mutable state dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
