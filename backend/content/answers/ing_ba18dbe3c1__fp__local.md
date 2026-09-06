---
qid: ing_ba18dbe3c1__fp__local
question: 'Explain: Chunked Prefill & RAD-O — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 445
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:21-05:00'
sources: []
---

**Chunked Prefill & RAD‑O: The Geometry of Efficient Inference**

When a transformer receives an input sequence, the first *prefill* pass must compute self‑attention for every token **before** any decoding can begin.  
If we prefill the whole prompt at once, each layer’s memory scales as \(O(L^2)\) where \(L\) is the length of that prompt—quickly exhausting GPU buffers.  

The *chunked prefill* strategy divides the prompt into overlapping blocks (size ≈ block‑size + k‑past). Each block is prefetched independently; its key/value tensors are reused for subsequent decoding steps, so only \(O(b^2)\) memory per block is needed. The overlap guarantees that attention across block boundaries remains exact, preserving the model’s full context.

During decoding we still face a bottleneck: each new token requires recomputing the entire layer stack on the **same** key/value tensors. *RAD‑O* (Repeated Attention‑with Delayed Offloading) mitigates this by:

1. **Reusing** the cached keys/values from the last chunked prefill for as many tokens as possible.
2. **Offloading** only the minimal “attention head” computations to a lower‑rank subspace that is updated incrementally (the *O* in RAD‑O).
3. **Batching** multiple decoding steps together, so the self‑attention matrix grows linearly with the number of decoded tokens but remains sparse due to causal masking.

This two‑stage batching—chunked prefill for prompt geometry, RAD‑O for incremental decoding—optimizes memory (by localizing large tensors) and compute (by amortizing attention over many steps). The non‑obvious insight: **the cost of self‑attention is dominated by the *square* of the sequence length, not its linear growth**; therefore, any strategy that keeps the active window small while reusing cached information yields exponential savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
