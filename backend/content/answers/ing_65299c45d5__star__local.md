---
qid: ing_65299c45d5__star__local
question: 'Explain: Concepts ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 342
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:56-05:00'
sources: []
---

**Situation** – At my previous job we were deploying a 70‑Billion‑parameter GPT model for real‑time chat support. The inference latency kept spiking after the first few thousand tokens; our SLA required <500 ms per request, but we hit ~2.5 s when the context grew beyond 8K tokens.

**Task** – I had to reduce memory usage and keep the attention computation fast enough for production while still supporting long‑context conversations.

**Action** – I implemented *paged attention* using vLLM’s paging engine. First, I partitioned the key/value tensors into fixed‑size pages (4 kB each) and stored them in a GPU‑resident buffer pool. When a new token arrived, only the relevant page was fetched from virtual memory via an LRU cache; we swapped out inactive pages to host RAM on demand. I also rewrote the attention kernel to operate on these pages with batched matrix multiplies, leveraging cuBLAS’s fused GEMM for reduced kernel launches. Finally, I added a small scheduler that pre‑emptively prefetched the next page based on token position.

**Result** – Latency dropped from 2.5 s to 350 ms for 16K‑token contexts while memory usage stayed below 12 GB GPU RAM. We achieved a 4× throughput increase and satisfied our SLA. I learned that careful paging and kernel fusion can turn an otherwise infeasible model into a deployable product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
