---
qid: ing_efcc2ee641__faang__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 509
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:56:59-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *Paged‑Attention* as implemented in **vLLM**, a high‑performance inference engine for large language models. The key idea is that the model’s KV cache is stored on disk (or off‑heap) and loaded page‑by‑page, so we can run models whose KV size exceeds RAM while keeping memory usage bounded.

**Approach**  
1. **KV Cache Partitioning** – Split the key/value tensors into fixed‑size pages.  
2. **Lazy Loading** – When a new query token is processed, only the pages needed for its attention window are pulled from storage into GPU memory.  
3. **Efficient Indexing** – Use an LRU or similar policy to keep hot pages resident and evict cold ones.  
4. **Batch‑aware Prefetch** – For beam search or multiple requests, prefetch all pages that will be needed for the next few tokens.

**Depth**  
- The attention computation remains unchanged: `Attention(Q,K,V) = softmax((Q·Kᵀ)/√d_k)V`.  
- Paged‑attention only affects how K and V are fetched; Q stays in GPU memory.  
- Complexity: fetching a page is O(1) amortized if using memory‑mapped files or SSD; the overall time per token is dominated by the GEMM on resident pages.  
- Trade‑offs: Disk latency can dominate if the attention window grows beyond cached pages; solution is to tune page size and prefetch depth.

**Edge Cases**  
- Very long context (> cache capacity): eviction may cause repeated disk reads → performance drop.  
- Multi‑GPU setups: need a shared page manager or per‑device caching strategy.  
- Fault tolerance: corrupted pages must be detected and reloaded.

**Optimize & Communicate**  
To improve, one can compress KV values (e.g., 8‑bit quantization) to reduce I/O bandwidth, or use NVMe SSDs with read‑ahead. When explaining this to interviewers, emphasize that *Paged‑Attention* lets vLLM scale beyond GPU RAM without changing the core transformer math, and highlight the careful balance between memory usage, latency, and throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
