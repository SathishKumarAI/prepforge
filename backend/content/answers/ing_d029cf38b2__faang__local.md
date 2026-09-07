---
qid: ing_d029cf38b2__faang__local
question: Kimi's headline feature is very long context. When you push context from
  8K to hundreds of thousands of tokens, what actually breaks first, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 428
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:44:42-05:00'
sources: []
---

**Clarify**  
We’re asked: *If we increase a language‑model’s context window from ~8 k tokens to several hundred thousand, which component fails first and why?*  
Assumptions to confirm: the model architecture remains transformer‑based; memory access patterns stay the same; hardware can supply the required compute.

**Approach**  
1. Identify resources that scale with context length (memory, compute, communication).  
2. Rank them by cost per token.  
3. Spot the bottleneck that hits capacity first as tokens grow.

**Depth**  
- **Self‑attention complexity**: O(L²) memory & compute for sequence length L.  
  - At 8 k → ~64 M pairwise interactions; at 500 k → 2.5×10¹¹, a >4000× increase.  
  - GPU VRAM (≈16 GB) cannot hold the attention matrices beyond ~30–40 k tokens; swapping or recomputation becomes infeasible.  
- **Positional embeddings**: linear in L but negligible compared to attention.  
- **KV cache & KV‑softmax**: also O(L²).  
Thus, the *attention mechanism* (specifically the pairwise score matrix) exhausts GPU memory first; once that fails, compute stalls.

**Edge Cases**  
- Models with sparse or linearized attention (e.g., Longformer) delay this break.  
- Extremely large batch sizes can hit compute limits before memory.  
- Off‑loading to CPU/TPU could shift the bottleneck but adds latency.

**Optimize & Communicate**  
To mitigate, adopt sparse/segment‑wise attention, rotary embeddings with linear complexity, or use chunked inference. In an interview, I’d explain that as context grows, the quadratic term dominates; therefore, any system scaling to hundreds of thousands of tokens must redesign attention rather than simply adding more GPU RAM. This shows a clear understanding of transformer internals and practical engineering constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
