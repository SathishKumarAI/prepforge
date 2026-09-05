---
qid: ing_efcc2ee641__star__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 359
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:27:24-05:00'
sources: []
---

**Situation:**  
While working on a production inference pipeline for a 70‑Billion‑parameter LLM, the latency hit 35 ms per token and GPU memory ballooned to 48 GB, exceeding our quota.

**Task:**  
I had to reduce peak memory usage by at least 30 % without compromising throughput or accuracy, so we could deploy the model on a single RTX 4090 for edge inference.

**Action:**  
I implemented **vLLM’s QK‑PAGED attention**. First, I split the key/value tensors into *pages* that fit in GPU cache (≈8 GB each). During decoding, only the page containing the current context indices is loaded, while the rest remains on disk. I added a lightweight LRU eviction policy to keep the most recent pages resident and modified the attention kernel to read keys/values from memory‑mapped files via NVLink. This required rewriting the matrix‑multiply step in CUDA, using half‑precision and warp‑level shuffles to keep compute units busy. I also tuned the page size (32 k tokens) based on profiling to balance I/O overhead against cache hit rates.

**Result:**  
Memory usage dropped from 48 GB to 34 GB—a 29 % reduction—while latency improved from 35 ms to 27 ms per token. The model maintained the same perplexity on our validation set. I learned that careful paging of attention tensors can unlock large‑model inference on commodity GPUs, and that profiling GPU memory traffic is crucial for fine‑tuning such optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
