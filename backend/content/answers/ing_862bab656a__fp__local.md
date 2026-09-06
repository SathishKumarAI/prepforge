---
qid: ing_862bab656a__fp__local
question: 'Explain: Size the KV cache for a 70B-class model and explain how paged
  KV cache management works and why it exists.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 483
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:15-05:00'
sources: []
---

**Sizing the KV cache**

A transformer layer with *n* tokens produces a key‑value matrix of shape \((n, d)\) where \(d\) is the hidden dimension (≈ 8 k for 70B).  
The per‑token cost is therefore \(2d\) floating‑point numbers. For a 70B model we typically run inference on a few hundred tokens; say 512 tokens → \(512×(2×8192)=8\,388\,608\) floats ≈ 32 MiB.  

But during **training** or **long‑context generation** the cache must hold all past keys/values for every head, not just the current batch. If we want 16 k tokens of context, memory grows to \(16 000×(2×8192)=262\,144\,000\) floats ≈ 1 GiB per GPU—exceeding most accelerators.  

**Paged KV cache**

To keep the model light‑weight, we store *most* keys/values in a **paged buffer** (CPU or NVMe), leaving only the recent window in fast device memory. Each page holds a fixed number of token slots; when the active window slides forward, pages are swapped in/out lazily.

Why this works:

1. **Work‑set locality** – attention only reads the last few hundred tokens; older pages can be evicted without affecting current computation.
2. **Amortized I/O** – a page is fetched once and reused for many decoding steps, keeping bandwidth overhead low.
3. **Memory hierarchy exploitation** – we keep the *hot* part in L1/L2 of GPU DRAM while offloading the *cold* part to slower but abundant storage.

**Non‑obvious insight**

The paging strategy effectively turns the KV cache into a **time‑aware data structure**: each page’s age correlates with its likelihood of being accessed. By coupling this with a *least‑recently‑used (LRU)* eviction policy, we achieve near‑optimal cache hit rates without explicit prefetching or speculative execution—something most practitioners overlook when designing custom KV engines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
