---
qid: ing_822e6f2c1f__faang__local
question: 'Explain: Title: The Missing Memory Hierarchy: Demand Paging for LLM Context
  Windows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 470
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:47:30-05:00'
sources: []
---

**Clarify**  
The interview asks how *demand paging*—a memory‑management technique from operating systems—can be adapted to large language models (LLMs) that maintain a fixed context window. I’ll assume: (1) the model’s hidden states for tokens outside the window are still needed for back‑propagation or inference; (2) disk/SSD access is orders of magnitude slower than RAM; and (3) we can partition the state into “hot” (in‑window) and “cold” (out‑of‑window) segments.  

**Approach**  
1. Identify hot states via a Least‑Recently‑Used (LRU) policy over the context window.  
2. When memory pressure occurs, swap cold hidden states to SSD (or NVMe).  
3. On demand—when a token is re‑accessed for gradient computation or attention—a page fault triggers an async load back into RAM.  

**Depth**  
- **Page size**: group tokens by layers; e.g., 128 tokens per page to amortize I/O overhead.  
- **Complexity**: O(1) lookup with a hash map + LRU list; swap cost is O(page‑size × log N).  
- **Trade‑offs**: Larger pages reduce I/O but increase latency for random access; smaller pages improve locality at the expense of more syscalls.  

**Edge Cases**  
- Frequent revisits to cold tokens (e.g., long‑range dependencies) can cause thrashing—detect and prefetch such patterns.  
- Partial page faults when only a subset of a page is needed; need a finer granularity fallback.  

**Optimize & Communicate**  
Explain that this scheme mirrors GPU memory hierarchy: *on‑chip* (hot window), *off‑chip DRAM* (cold states), and *storage* (paged out). I’d prototype with PyTorch’s `torch.utils.checkpoint` for off‑loading, measure throughput vs. latency, and iterate on page size. This demonstrates deep system insight while keeping the answer concise and structured—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
