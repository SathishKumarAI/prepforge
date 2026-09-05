---
qid: ing_bf8c712d8c__star__local
question: 'Explain: KV Cache Sharing (Copy-on-Write) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 372
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:49-05:00'
sources: []
---

**Situation** – While working on a transformer‑based recommendation engine for a streaming platform, our inference latency was ballooning during peak hours. The model served millions of users per day and we were hitting the 30 ms SLA with a single GPU.

**Task** – I needed to cut the per‑query compute by reusing key/value (KV) caches across similar requests without sacrificing correctness or accuracy, so that we could keep the same batch size but reduce GPU memory traffic.

**Action** – I implemented KV cache sharing using copy‑on‑write and paged attention. First, I grouped incoming queries by identical prompts and model checkpoints. For each group, I kept a single “master” KV cache in fast shared memory. Subsequent requests cloned pointers to this cache; only when a query modified a token did we perform a page‑fault style copy of that specific KV slice (using PyTorch’s `clone()` with `non_blocking=True`). To keep the pages resident, I used CUDA Unified Memory and pinned buffers so the GPU could prefetch needed KV blocks. I also added a lightweight LRU eviction policy to drop stale cache pages when memory pressure rose.

**Result** – The optimization cut average inference latency from 30 ms to 18 ms (a 40% improvement) while keeping GPU memory usage down by ~25%. It also reduced CPU‑GPU data transfer by 35%, freeing bandwidth for other services. I learned that careful paging and copy‑on‑write can turn a seemingly static cache into a dynamic, low‑overhead resource without compromising model fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
