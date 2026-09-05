---
qid: ing_3e5dbbc77c__fp__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 379
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:17:14-05:00'
sources: []
---

**Why a shared GPU can tolerate “hot” data but *not* the KV cache**

When multiple models share a single accelerator, each request is served in a short *serving window*.  
The GPU’s **weights** are static during inference; they can be loaded once and reused by every thread.  The computation graph is identical for all requests, so the same CUDA kernels can execute concurrently on distinct slices of the weight tensors—this is pure data‑parallelism and incurs negligible contention.

The **key‑value (KV) cache**, however, is a *stateful* intermediate that grows with sequence length and is accessed by every token in the current beam.  It is not merely read‑only: each new token appends to the cache, while earlier tokens are read for attention scoring.  
If two requests share the same KV memory, their writes collide; one request can overwrite another’s partial results before it has finished reading them. The result is a race condition that corrupts logits and causes model failures.

From an **optimization** perspective, the GPU kernel schedule assumes *deterministic* input sizes.  Shared weights respect this assumption; shared KV caches break it because the effective cache size varies per request, leading to unpredictable memory footprints and stalls.  

**Non‑obvious insight:** The KV cache is *not* simply “large memory”; its *access pattern* (read‑append) makes it a *critical path* in attention. Even if two requests are temporally separated by microseconds, their kernel launches interleave on the same stream, so isolation at the *memory region* level is required to preserve correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
