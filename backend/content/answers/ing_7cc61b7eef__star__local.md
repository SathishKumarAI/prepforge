---
qid: ing_7cc61b7eef__star__local
question: 'Explain: Inputs ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 367
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:43:07-05:00'
sources: []
---

**Situation** – At my previous company we were launching a chatbot that had to serve 10k concurrent users while keeping latency under 150 ms. The baseline inference with vLLM on a single A100 was fine for 1k users but the attention memory grew quadratically, so we hit GPU VRAM limits and had to throttle request size.

**Task** – I needed to scale the model to handle larger context windows (up to 16k tokens) without exceeding memory constraints or sacrificing throughput.

**Action** – I introduced Paged Attention in vLLM. First, I re‑structured the attention kernels to use a page table that maps virtual token indices to GPU pages, allowing us to keep only the most recent attention keys/values resident. Then I tuned the `paged_attention` flag and set `max_batch_size=128`, `max_input_len=16384`. I also profiled memory usage with Nsight Systems; by moving unused key/value pages to host RAM via NVLink we reduced VRAM consumption from 32 GB to ~18 GB. Finally, I implemented a lightweight scheduler that batches requests by similar token lengths to maximize page reuse.

**Result** – After deployment, we achieved a 45% increase in throughput (from 1.2k QPS to 1.8k QPS) while keeping GPU memory below 20 GB and maintaining sub‑150 ms latency. I learned that paged attention is not just a memory trick; it’s a design pattern for scalable, low‑latency inference on large language models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
