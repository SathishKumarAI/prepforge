---
qid: ing_738ae64f0c__faang__local
question: 'Explain: Cache memory is limited - you can’t store everything'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 426
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:48-05:00'
sources: []
---

**Clarify**  
The question asks why cache memory in ML systems cannot hold all data. I’ll assume we’re talking about on‑device or edge caches (e.g., GPU/TPU buffers) versus larger storage like SSDs or distributed file systems, and that the ML workload is large‑scale inference/training.

**Approach**  
1. Quantify cache size vs dataset size.  
2. Explain access patterns & locality.  
3. Discuss eviction policies and their impact on performance.  

**Depth**  
Modern accelerators have tens of megabytes to a few gigabytes of on‑chip memory, whereas typical datasets run into terabytes. Even with pre‑fetching, the working set for many models (e.g., BERT, ResNet) exceeds cache capacity by orders of magnitude. Caches rely on *temporal* and *spatial* locality; when a model’s layers reuse the same activations or weights, caching helps. However, once data is evicted, it must be fetched from slower memory—incurring latency and bandwidth penalties that dominate training time. Eviction policies (LRU, LFU) can’t predict future access for diverse workloads, so they often replace useful tensors prematurely.

**Edge Cases**  
- *Small models* or *quantized weights*: cache may hold the entire model.  
- *Sparse data*: many entries are zero, allowing compression and effective caching.  
- *Streaming inference*: if input batch size is small enough, activations fit in cache.

**Optimize & Communicate**  
To mitigate, we use techniques like tensor fusion, mixed‑precision storage, or offloading to unified memory with zero‑copy. I’d explain that while caching can’t hold everything, smart prefetching and compression reduce the effective working set, keeping performance within acceptable bounds. This showcases my ability to reason about system constraints, trade‑offs, and practical optimizations—key signals for FAANG roles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
