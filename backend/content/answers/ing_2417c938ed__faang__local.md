---
qid: ing_2417c938ed__faang__local
question: 'Explain: Paged Attention ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 494
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:19-05:00'
sources: []
---

**Paged Attention (vLLM)**  
---  

### Clarify  
You’re asking how *paged attention* works inside **vLLM**, a high‑performance inference engine for large language models, and why it matters for memory efficiency. I’ll assume you’re familiar with the standard transformer self‑attention mechanism and want to know how vLLM reduces VRAM usage while keeping latency low.

### Approach  
1. Explain the *problem* – full‑sequence attention requires an `O(N²)` memory footprint (query, key, value tensors).  
2. Describe *paged attention* as a strategy that partitions the sequence into “pages” and processes them in sub‑batches.  
3. Highlight how vLLM implements it with CUDA kernels that keep only the current page’s keys/values resident in GPU memory.  
4. Mention the trade‑offs (slight overhead, no extra communication).

### Depth  
- **Page size**: a tunable hyperparameter (e.g., 512 tokens).  
- **Processing flow**: for each query block, vLLM loads its corresponding key/value pages from CPU/GPU memory, performs `Q·Kᵀ` and softmax locally, then writes the output back.  
- **Memory savings**: reduces peak GPU usage from `O(N²)` to roughly `O(page_size · N)`, enabling inference of 30‑billion+ parameter models on a single GPU.  
- **Latency**: overlapped memory transfer (using CUDA streams) keeps pipeline stalls minimal; empirical results show <5 ms extra per layer compared to full attention.

### Edge Cases  
- Very short sequences may underutilize pages, causing fragmentation.  
- Dynamic batch sizes require re‑tuning page size.  
- Models with extremely long context windows (e.g., 16k tokens) still need careful profiling.

### Optimize & Communicate  
Explain that further gains come from *kernel fusion* and *mixed‑precision*. In a technical interview, I’d outline how to profile memory traffic and adjust `page_size` or use *attention cache reuse* for streaming inference. This demonstrates structured problem solving, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
