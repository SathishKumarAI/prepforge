---
qid: ing_23f528ce1c__star__local
question: 'Explain: Query ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 358
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:41:06-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were building an AI‑driven recommendation engine that had to serve real‑time queries on a GPU cluster with limited VRAM. Our model was a 13B transformer and the inference latency for each user request hovered around 600 ms because every token required full attention over the entire prompt.

**Task**  
I needed to cut inference time by at least 40% while keeping memory usage under 8 GB per GPU, so we could handle double the traffic without adding hardware.

**Action**  
I introduced vLLM’s *Paged Attention* technique. First, I split the key/value tensors into fixed‑size pages (e.g., 128 kB each) and stored them in a compressed memory pool on host RAM. During inference, only the pages needed for the current query were paged into device memory via CUDA streams, using zero‑copy buffers to avoid extra copies. I also restructured the attention kernel to process one page at a time, leveraging cuBLAS’s batched GEMM for each slice. To keep latency low, I pre‑fetched the next page asynchronously while computing the current one.

**Result**  
Latency dropped from 600 ms to 360 ms (a 40% improvement) and GPU memory consumption stayed at 6.5 GB. The system now supports twice as many concurrent users, and we reduced our inference cost by ~25%. I learned that careful page‑level scheduling can unlock significant performance gains in large transformer deployments without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
