---
qid: ing_a92f6c6dbc__faang__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 526
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:45-05:00'
sources: []
---

**Clarify**  
You’re asking how the *soft‑max* operation is applied inside *paged attention* as implemented by **vLLM**, a high‑performance inference engine for large language models.  
Assumptions: we’re dealing with transformer self‑attention, multi‑head queries/keys/values that are stored in GPU memory pages, and we want to keep the soft‑max numerically stable while minimizing memory traffic.

**Approach**  
1. Compute scaled dot‑products `S = Q·Kᵀ / √d_k` for each head.  
2. Apply a *paged* reduction: only keys/values that fit in the current GPU page are loaded, multiplied by the soft‑max weights, and accumulated.  
3. Use a two‑pass algorithm to maintain numerical stability (log‑sum‑exp trick) while streaming through pages.

**Depth**  
- **First pass** per query token: load a key page, compute `S_local = Q·Kᵀ`, track `max_i S_local` and sum of exponentials `∑exp(S_local - max_i)`.  
- **Second pass**: re‑load the same key page, compute weights `w_i = exp(S_local - max_i)/sum_exp`, multiply by the corresponding value vectors `Vᵀ`, accumulate into the output.  
This avoids storing all `S` values simultaneously; only a scalar per token is kept in registers. Complexity remains **O(n·m)** (n queries, m keys) but memory traffic drops from O(n·m) to O(n·page_size).

**Edge Cases**  
- Very large key sets that exceed GPU memory: fall back to chunked attention.  
- Zero‑probability tokens: ensure `max_i` is not -∞.  
- Mixed precision: cast to float32 for the soft‑max step then downcast.

**Optimize & Communicate**  
Potential gains: fuse the two passes into one kernel with shared memory, or use warp‑level primitives (e.g., `__shfl_down`) for reductions. Explain that we trade a tiny extra kernel launch cost for reduced global memory traffic, which is the bottleneck in vLLM.  

This structured explanation shows problem restatement, systematic plan, technical depth, edge‑case awareness, and optimization insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
