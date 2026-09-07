---
qid: ing_27e5bcd585__faang__local
question: 'Explain: Parallelizing across query heads for multi-query attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:22-05:00'
sources: []
---

**Clarify**

We’re asked to explain how to parallelize computation over the *heads* in a multi‑query attention layer (e.g., T5’s multi‑query transformer).  
Assumptions:  
1. Each head shares the same key/value tensors but has its own query projection.  
2. We can batch queries, keys, and values across heads.  
3. Hardware supports SIMD/GPUs with large tensor ops.

**Approach**

Treat each head as an independent attention operation that only differs in its query weights. By stacking all query projections into a single matrix multiplication we can compute *all* head‑wise queries in one pass, then feed them to a batched dot‑product with the common K/V tensors.

**Depth**

1. **Query projection**: Stack `W_qh` for every head `h` into a tensor of shape `(H, d_k, d_model)`.  
   Compute `Q_all = X @ W_q` where `W_q` has shape `(d_model, H*d_k)` → results in `(N, L, H*d_k)`.  
2. **Reshape**: Split last dim into `(H, d_k)` → `(N, L, H, d_k)`.  
3. **Dot‑product with shared K/V**: Broadcast `K` and `V` of shape `(N, L, d_k)` across heads:  
   `scores_h = Q_all @ K^T / sqrt(d_k)` → batched matmul over `(H, L, L)`.  
4. **Softmax & weighted sum**: Apply softmax per head, then multiply by `V` (broadcasted).  
5. **Output projection**: Concatenate heads and project back to model dim.

Complexity remains `O(H·L²·d_k)` but all `H` queries are computed in a single matrix multiplication, reducing kernel launch overhead and improving cache locality.

**Edge Cases**

- Very small `H`: benefits negligible; fallback to per‑head loop.  
- Non‑square attention masks: need broadcasting carefully.  
- Mixed precision: ensure numerical stability when scaling by `sqrt(d_k)`.

**Optimize & Communicate**

I’d benchmark the batched implementation against a naive loop, measuring kernel launch overhead and GPU occupancy. If memory allows, fuse the softmax with the matmul to reduce intermediate tensors. In discussion, emphasize that this parallelization preserves correctness (identical per‑head results) while achieving linear speed‑up proportional to head count, a key advantage for large‑scale language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
