---
qid: ing_65299c45d5__faang__local
question: 'Explain: Concepts ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 624
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:39:33-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of *Paged‑Attention* as implemented in **vLLM**, an open‑source inference engine for large language models.  
Assumptions to confirm:  
1. Audience knows transformer attention but not the memory‑optimised variant.  
2. You want to understand why paging matters, how it works, and its trade‑offs.

**Approach**  
1. Define the problem (memory blow‑up with long sequences).  
2. Introduce the paging idea (split KV cache into blocks).  
3. Describe the mechanics (block indices, sparse attention masks).  
4. Highlight benefits & limits.

**Depth**  

| Aspect | Detail |
|--------|--------|
| **Motivation** | Standard self‑attention stores a full `seq_len × d_k` key/value matrix; for 8 k tokens and 16 k hidden dim that’s >1 GB per layer. |
| **Paging** | Split the KV cache into *fixed‑size blocks* (e.g., 128 tokens). Only the *active* block(s) are loaded into GPU memory during each forward pass. The rest stay on CPU or disk. |
| **Attention Masking** | vLLM builds a sparse attention matrix that links query positions to only those key/value blocks they need, using a *block‑wise* mask instead of the dense `seq_len × seq_len` one. |
| **Implementation** | During generation, each new token appends to the current block; when a block fills, it is flushed to CPU and the next block is allocated on GPU. The engine keeps an LRU cache for recently used blocks to avoid disk I/O. |
| **Complexity** | Time remains `O(L·d)` per layer (with `L` = number of active tokens). Memory reduces to roughly `block_size × d_k × num_layers`, often <10 % of the dense baseline. |

**Edge Cases**  
- *Very short sequences*: paging overhead outweighs benefit; fallback to dense mode.  
- *Highly parallel decoding* (beam search >1): each beam needs its own block cache, increasing memory use.  
- *Non‑contiguous generation*: jumping ahead may force loading multiple blocks simultaneously.

**Optimize & Communicate**  
- Use larger block sizes for GPU with more VRAM to reduce mask sparsity overhead.  
- Profile cache hit rates; if misses spike, increase CPU cache or move to SSD for KV persistence.  
- Explain that paging trades a small amount of compute (sparse mask construction) for a massive memory win, enabling inference of 10 k‑token contexts on commodity GPUs.

*Bottom line:* Paged Attention in vLLM turns the dense attention problem into a block‑wise sparse one, slashing VRAM usage while keeping latency low—essential for scaling LLM inference to real‑world document lengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
