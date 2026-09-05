---
qid: ing_c29d7795c1__star__local
question: 'Explain: The Contiguous Memory Problem — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:59:07-05:00'
sources: []
---

**Situation**  
At my last company we were building a transformer‑based summarizer that needed to process 10,000‑token documents on GPU memory that capped at 24 GB. The training pipeline was hitting OOM errors every few epochs because the attention matrix for each batch required a full N×N tensor.

**Task**  
I had to redesign the attention mechanism so it could run within the hardware limits while preserving accuracy, and then validate that the new model still achieved competitive ROUGE scores on our test set.

**Action**  
I implemented paged attention: instead of allocating one huge contiguous matrix, I partitioned the key/value tensors into 512‑token pages and stored them in a memory pool. During the forward pass each query page fetched only its relevant key/value pages via a lookup table, computing attention locally and then stitching the partial results together. To keep the GPU’s compute units busy, I used CUDA graph capture to batch the page fetches, and I added a small sparsity mask so that cross‑page interactions were skipped when tokens belonged to different semantic blocks. The key/value pages were pre‑prefetched asynchronously with cuBLASLt to hide latency.

**Result**  
The new paged attention cut GPU memory usage from 24 GB down to 12 GB, allowing us to double the batch size from 8 to 16 documents. Training time per epoch dropped by ~30 %, and ROUGE‑L stayed within 0.5 % of the baseline model (0.73 vs 0.72). I learned that clever memory layout tricks can yield huge engineering gains without sacrificing model quality, and that profiling early reveals hidden bottlenecks in attention computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
