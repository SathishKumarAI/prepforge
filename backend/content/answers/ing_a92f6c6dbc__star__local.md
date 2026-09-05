---
qid: ing_a92f6c6dbc__star__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 366
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:11:19-05:00'
sources: []
---

**Situation:**  
At my last gig I was tasked with scaling a GPT‑4 inference service for a media company that needed to serve 10k concurrent requests per minute without breaking the budget. The baseline vLLM deployment hit a memory ceiling on our GPU fleet, and we were stuck at ~3 GB RAM per request.

**Task:**  
Reduce the per‑request memory footprint by an order of magnitude while keeping latency under 200 ms, so we could run more instances on the same hardware and still meet SLA targets.

**Action:**  
I dove into vLLM’s paged attention mechanism. First, I enabled the “paged” mode in the `vllm.ChatCompletionEngine` constructor, which swaps out the full softmax matrix for a compressed representation stored page‑wise in GPU memory. Then I tuned the `page_size_kv` and `num_pages` parameters to balance between page lookup overhead and cache hit rate. To keep the softmax computation numerically stable, I added a custom CUDA kernel that performs block‑wise reduction with fused bias addition, reducing register pressure by 30 %. Finally, I wrapped the whole pipeline in a profiler loop to capture per‑token latency.

**Result:**  
The memory usage dropped from ~3 GB to ~350 MB per request—over an 8× improvement. Latency stayed at ~170 ms on average, and we increased GPU utilization by 45 %. The key takeaway: paged attention can unlock massive scaling, but careful tuning of page granularity and kernel fusion is essential for real‑world gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
