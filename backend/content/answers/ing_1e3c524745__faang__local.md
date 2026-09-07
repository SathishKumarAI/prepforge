---
qid: ing_1e3c524745__faang__local
question: 'Explain: LV ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 621
total_tokens: 855
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:32-05:00'
sources: []
---

**Clarify**

The interviewee is asked to explain *Paged Attention* as implemented in **vLLM**, a high‑performance inference library for large language models (LLMs).  
Key assumptions:  
- The audience knows transformer basics (self‑attention, key/value tensors).  
- They are familiar with memory constraints when scaling up model size.  
- The goal is to understand how vLLM’s paged attention trades compute for memory.

**Approach**

1. Restate the core problem: naive self‑attention requires O(n²) memory (n = sequence length).  
2. Outline vLLM’s solution: compress KV pairs into GPU “pages” and swap them in/out on demand.  
3. Detail the algorithmic flow: page allocation, lookup tables, batching of queries.  
4. Highlight trade‑offs: reduced peak memory vs extra kernel launches.

**Depth**

- **Page size & layout:** vLLM splits the KV cache into 2 KB–8 KB pages aligned to GPU warp boundaries; each page holds a contiguous slice of keys/values for all heads.  
- **Indexing:** A lightweight *page table* maps token indices → page IDs, enabling O(1) lookup during attention.  
- **Batching strategy:** Queries are grouped by required KV ranges; the engine prefetches necessary pages into fast shared memory before computing dot‑products.  
- **Memory savings:** For a 40B model with 8 k tokens, paged attention cuts KV cache from ~12 GB to ~3 GB (≈ 75 % reduction).  
- **Complexity:** Compute remains O(n²) per batch, but memory access patterns become irregular; vLLM mitigates this via fused kernels that process multiple pages in a single launch.

**Edge Cases**

- *Sparse attention:* If the model uses sparse heads, page granularity may be too coarse → extra indirection overhead.  
- *Long‑short sequences:* Very long prefixes can lead to thrashing if many pages are swapped per step; vLLM’s prefetch window mitigates this.  
- *Memory fragmentation:* Continuous allocation of pages can fragment GPU memory; a custom allocator is used.

**Optimize & Communicate**

To improve, one could adopt *tensor‑core* friendly page sizes or integrate *quantized KV tensors* to halve memory further. I would narrate: “By converting the dense KV cache into a paged, on‑demand structure, vLLM keeps only the active slice resident in GPU RAM, enabling inference of models that otherwise wouldn’t fit.” This showcases structured reasoning, depth, and clear communication—key for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
