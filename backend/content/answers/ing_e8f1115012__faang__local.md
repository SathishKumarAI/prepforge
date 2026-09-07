---
qid: ing_e8f1115012__faang__local
question: 'Explain: exp_sum ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 522
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:41:17-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of **paged attention** as implemented in the open‑source inference engine *vLLM*. I’ll assume the interviewer wants to hear: (1) why paging is needed, (2) how it works at a high level, and (3) what trade‑offs it introduces.  

**Approach**  
I’ll start with the core problem—memory pressure when running large transformer models—then describe vLLM’s solution: swapping KV‑cache blocks to GPU “pages” and reusing them during attention. I’ll touch on implementation details (tensor‑core aware layout, fused kernels) before summarizing complexity.

**Depth**  
vLLM keeps the key/value cache *paged*: instead of allocating a contiguous 2‑D tensor for all tokens, it stores **blocks** (e.g., 128 or 256 tokens each) in GPU memory. When a new token arrives, vLLM loads only the blocks that are needed for attention into registers, performs the dot‑product, and writes results back. This reduces peak VRAM usage from *O(T·H)* to *O(P·H)* where *P* is the number of active pages (often << T). The engine uses **tensor‑core fused kernels** that simultaneously load a page, compute attention, and write the output, amortizing memory traffic. Paging also enables *batch‑level reuse*: if two requests share the same KV blocks, they can be processed in parallel.

**Edge Cases**  
- If a request requires more pages than available GPU slots, vLLM falls back to CPU or spills to host RAM, causing latency spikes.  
- Extremely short sequences may incur overhead from paging that outweighs memory savings.  
- The block size must balance between granularity (smaller blocks → better reuse) and kernel launch cost.

**Optimize & Communicate**  
Future improvements could involve dynamic page sizing based on runtime profiling or leveraging NVLink for faster host‑GPU transfers. When explaining, I’d emphasize the clear benefit: “paged attention lets us run 70 B‑parameter models in a single GPU by trading a modest amount of latency for massive memory savings.” This shows understanding of both algorithmic design and system constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
