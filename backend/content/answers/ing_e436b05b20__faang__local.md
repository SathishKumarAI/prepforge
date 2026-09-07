---
qid: ing_e436b05b20__faang__local
question: 'Explain: Output ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 531
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:29:29-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe *Paged Attention* as implemented in **vLLM**, a high‑performance inference library for large language models.  
- Confirm that the audience knows what “attention” and “paged KV cache” mean.  
- Ask if they want a low‑level implementation detail or just an architectural overview.

**Approach**  
1. Define the problem: storing key/value tensors of every token while keeping memory bounded.  
2. Explain the “paging” abstraction – splitting the KV cache into fixed‑size pages and reusing them across requests.  
3. Show how vLLM’s kernel maps pages to GPU memory, performs attention in chunks, and handles variable sequence lengths.

**Depth**  
- **Paged KV Cache**: Each page holds `k` key/value pairs (e.g., 128 tokens). Pages are allocated on‑demand; when a new request arrives the model pulls pages from a free list.  
- **Attention Computation**: For each query block, vLLM loads the relevant pages into shared memory, computes scaled dot‑product with all keys in those pages, and writes logits to output tensors.  
- **Efficiency Gains**:  
  - *Memory*: Reuse of fixed‑size blocks reduces fragmentation; only active pages occupy GPU RAM.  
  - *Compute*: Kernel fusion keeps data on-chip; paging allows batch‑level parallelism across requests.  
- **Complexity**:  
  - Time per token ≈ `O(k)` (linear in page size).  
  - Memory ≈ `num_pages × k × sizeof(T)`.  
- **Trade‑offs**: Larger pages improve throughput but increase peak memory; smaller pages lower latency but may incur more kernel launches.

**Edge Cases**  
- Sequences longer than the maximum page count → fallback to full KV cache.  
- Page eviction policy (LRU vs FIFO) affects cache hit rates.  
- Mixed precision: careful scaling of `softmax` to avoid underflow when pages are sparsely populated.

**Optimize & Communicate**  
Suggest profiling per‑token latency to tune page size, and using a hierarchical cache (small GPU pages + larger host RAM). Explain that vLLM’s paged attention is the key enabler for serving 10k+ concurrent requests on a single GPU. Conclude by highlighting how this design aligns with FAANG goals: high throughput, low cost, and clean abstraction for developers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
