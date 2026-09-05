---
qid: ing_1a34b92264__fp__local
question: What problem does PagedAttention solve, and how does it work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 530
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:02:02-05:00'
sources: []
---

**Problem**  
Modern language models must attend to *every* token in a context window. When the sequence length \(L\) grows (e.g., 16 k or 32 k tokens), the quadratic cost \(O(L^2)\) of self‑attention quickly becomes prohibitive, both in memory and latency. Existing tricks—chunking, sparse patterns, or linear kernels—either sacrifice full connectivity or require hand‑tuned sparsity masks that break the model’s ability to learn global dependencies.

**Why it must work this way**  
Attention is a weighted sum over all token pairs: \(A_{ij}= \frac{\exp(q_i^\top k_j)}{Z}\). For an autoregressive transformer, every query needs *all* keys. If we simply drop edges, the model no longer satisfies the permutation‑invariant property of the attention matrix and can’t capture long‑range correlations. Therefore, any efficient approximation must preserve the full connectivity while reducing computation.

**PagedAttention**  
PagedAttention keeps a *paged key–value store*. During decoding, it fetches only the pages (fixed‑size blocks) that intersect the current query’s receptive field—typically all earlier tokens but in a memory‑friendly layout. Keys and values are stored on disk or remote memory; queries stream in from GPU. The algorithm performs the following:

1. **Page indexing**: Build an index mapping each token to its page.
2. **Sparse retrieval**: For query \(q_t\), load all pages that contain keys up to position \(t-1\) (i.e., the entire past).  
3. **Chunked dot‑products**: Compute \(\exp(q_t^\top k_j)\) in chunks, accumulate softmax denominators incrementally, and apply a fused kernel to reduce memory overhead.

Because each page is processed independently, the GPU can stay fully utilized while the host memory supplies data on demand. The method preserves exact attention semantics; no approximations or learned sparsity are involved.

**Non‑obvious insight**  
The key trick is *temporal locality*: in autoregressive decoding, every query only ever needs past keys, never future ones. By exploiting this monotonic access pattern, PagedAttention turns a seemingly \(O(L^2)\) operation into a series of \(O(L/P)\) page fetches (where \(P\) is page size), yielding linear scaling in practice without sacrificing model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
