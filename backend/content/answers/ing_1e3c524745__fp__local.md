---
qid: ing_1e3c524745__fp__local
question: 'Explain: LV ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 509
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:10:50-05:00'
sources: []
---

### Why *paged* attention is needed

Large‑language models (LLMs) process every token with a self‑attention matrix whose size grows as \(O(L^2)\), where \(L\) is the sequence length.  
When \(L\) reaches millions (e.g., streaming generation or retrieval‑augmented inference), the naive attention kernel would demand gigabytes of GPU memory for the key/value tensors and their intermediate products—far beyond what a single device can hold.

### The core idea: “page” the KV cache

Instead of keeping every key/value pair resident in fast VRAM, **paged attention** treats the KV cache as a virtual memory space:

1. **Partition the cache into fixed‑size pages** (e.g., 8 k tokens).  
2. **Only keep the *active* page(s)**—those needed for the current computation—in GPU memory; all others live on host or NVMe storage.  
3. During a forward pass, the model *maps* required pages into GPU RAM via asynchronous DMA, computes attention only over those pages, then evicts them if necessary.

This reduces peak VRAM usage from \(O(L^2)\) to \(O(P \cdot L)\), where \(P\) is the number of active pages (often 1–3). The algorithmic complexity stays quadratic in the *active* length but scales linearly with the total sequence because most tokens are never simultaneously accessed.

### Deep connection

Paged attention is a practical instantiation of **external memory algorithms**: it trades off compute and I/O latency for memory bandwidth, mirroring paging in operating systems. The key insight—often overlooked—is that self‑attention’s *locality* can be exploited: during generation the model only attends to the most recent tokens; long‑past context can be read lazily. Thus, by aligning attention windows with page boundaries, we preserve the same information flow while drastically cutting memory.

### One non‑obvious benefit

Because pages are fixed and contiguous, **kernel fusion** becomes trivial: the GPU can compute multiple attention heads in one pass over a page, amortizing launch overheads and improving throughput. This hidden performance boost is what makes vLLM’s paged attention competitive even on modest GPUs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
