---
qid: ing_8c39eba085__star__local
question: 'Explain: ML / Research Round — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 314
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:13:11-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new recommendation engine for an e‑commerce platform that had to process millions of user requests per second while keeping latency under 50 ms. The model was a transformer trained on click‑through data, but inference on our GPU fleet was bottlenecked by memory bandwidth and kernel launch overhead.

**Task** – I needed to redesign the inference pipeline so we could run the open‑model at scale, reduce GPU memory usage, and cut latency without sacrificing accuracy or increasing costs.

**Action** – First, I profiled the existing CUDA kernels with Nsight Systems and identified that the softmax layer was a hotspot. I rewrote it as a custom kernel using half‑precision arithmetic and fused it with the attention projection to eliminate intermediate buffers. Next, I implemented speculative decoding: for each user request we pre‑compute top‑k candidate items on the CPU while the GPU processes the core transformer, then quickly filter the results once the GPU returns. Finally, I containerized the inference service using NVIDIA Triton and set up dynamic batching so that GPU utilization stayed above 80 % during traffic spikes.

**Result** – Latency dropped from 120 ms to 38 ms, throughput increased by 2.5×, and we cut GPU usage cost by 30 %. The project taught me how to balance algorithmic tweaks with system‑level optimizations in a real‑world AI deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
