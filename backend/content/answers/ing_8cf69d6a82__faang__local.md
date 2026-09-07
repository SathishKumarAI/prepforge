---
qid: ing_8cf69d6a82__faang__local
question: 'Explain: How PagedAttention Works (vLLM) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 485
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:54-05:00'
sources: []
---

**Clarify**  
The question asks how *PagedAttention* in vLLM enables efficient attention for very long contexts. I’ll assume the interviewers want a technical overview (memory layout, paging, compute flow) and its benefits over naïve full‑attention.

---

**Approach**  
1. Describe memory layout: key/value tensors paged into GPU blocks.  
2. Explain the paging logic: which tokens go to which page.  
3. Show how queries are dispatched to relevant pages.  
4. Highlight batching, kernel fusion and sparsity exploitation.  

---

**Depth**  
- **Paging**: vLLM splits KV pairs into *pages* (e.g., 512‑token blocks). Each page is stored in contiguous GPU memory; only the pages needed for a query’s attention window are loaded.  
- **Attention kernel**: For each query token, the engine gathers pointers to its active pages, loads the corresponding K/V slices into shared memory, computes dot‑products, applies softmax, and accumulates results—all in one fused CUDA kernel.  
- **Page cache & eviction**: An LRU policy keeps recently used pages resident; out‑of‑core pages are fetched from CPU or disk via asynchronous streams.  
- **Complexity**: Memory usage drops from *O(N²)* to *O(N·P)* where *P* is the number of active pages, and compute stays linear in the number of queries × page size.  

---

**Edge Cases**  
- Very short contexts → paging overhead outweighs benefit; fallback to full‑attention.  
- Skewed attention patterns (e.g., causal) may cause page fragmentation; need padding or adaptive page sizes.  
- GPU memory pressure: pages must be evicted gracefully without stalling the pipeline.

---

**Optimize & Communicate**  
I’d suggest dynamic page sizing based on token density, and overlapping page fetches with kernel execution via CUDA streams to hide latency. In an interview I’d narrate: “PagedAttention turns quadratic attention into a set of small, cache‑friendly kernels by only materializing the needed KV pages.” This shows clear problem framing, technical depth, and awareness of practical trade‑offs—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
