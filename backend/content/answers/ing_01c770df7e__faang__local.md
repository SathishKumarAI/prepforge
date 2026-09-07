---
qid: ing_01c770df7e__faang__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 423
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:08-05:00'
sources: []
---

**FlashAttention vs. PagedAttention**

| | **FlashAttention** | **PagedAttention** |
|---|--------------------|--------------------|
| **Goal** | Reduce memory bandwidth & compute for the *softmax* step of scaled‑dot‑product attention. | Reduce memory usage by storing only the *k/v* slices needed per query block. |
| **Mechanism** | Computes `Q × Kᵀ` in blocks that fit in L1/L2, performs softmax and weighted sum on‑the‑fly, avoiding materializing the full score matrix. Uses fused kernels (CUDA/HIP) for memory‑efficient matrix multiplication + reduction. | Keeps key/value tensors paged: only the pages intersecting a query window are loaded into fast memory; other pages stay in slower DRAM or swap. |
| **Memory Pattern** | Dense, contiguous access to Q/K/V sub‑matrices; minimal striding. | Sparse, irregular accesses; requires index tables and gather/scatter ops. |
| **Speed** | ~2–3× faster on GPUs with large batch sizes due to fewer memory copies and lower register pressure. | Faster than naïve attention when `k/v` are huge but queries are sparse; overhead of paging can dominate if many pages are accessed per step. |
| **Use‑case** | Training & inference of transformers where every token attends to all others (standard self‑attention). | Long‑sequence models (e.g., GPT‑NeoX, BigBird) or retrieval‑augmented systems where only a subset of keys is relevant per query. |

### TL;DR
FlashAttention speeds up **every** attention pass by fusing softmax and weighted sum into one memory‑efficient kernel, while PagedAttention saves **memory** (not speed) by loading only the necessary key/value pages for each query block. Both target large‑scale transformers but solve different bottlenecks: FlashAttention tackles bandwidth/compute; PagedAttention tackles capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
