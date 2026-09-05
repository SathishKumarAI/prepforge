---
qid: ing_f39631e600__star__local
question: 'Explain: Vertical Scaling — Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 369
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:06-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a recommendation engine for an e‑commerce platform. The traffic spike during Black Friday was projected at 3 M requests per second, but our existing inference cluster could only handle 800 k rps. The engineering team had to decide whether to add more servers (horizontal) or upgrade the existing ones (vertical).

**Task:**  
I was tasked with designing a cost‑effective scaling strategy that kept latency under 120 ms while staying within the quarterly budget of $500K.

**Action:**  
First, I benchmarked our current GPU nodes: each NVIDIA A100 had 2.5 TFLOPs and 40 GB memory, but the inference throughput capped at 1.2 k requests per second due to CPU‑GPU bottlenecks. I proposed vertical scaling by upgrading to NVIDIA H100 GPUs (3.6 TFLOPs) and increasing RAM to 80 GB, coupled with a multi‑threaded CUDA kernel that utilized TensorRT for FP16 precision. I also re‑architected the request pipeline to use async queues so CPU cores could prefetch data while GPUs processed batches. To validate, I ran A/B tests on a subset of traffic: latency dropped from 180 ms to 95 ms and throughput rose to 2.8 k rps per node.

**Result:**  
With vertical scaling we achieved the required performance using only two upgraded nodes instead of adding ten additional servers. The total spend was $260K, saving us $240K compared to a horizontal expansion plan. I learned that profiling at the hardware level and leveraging vendor‑specific optimizations can often deliver more bang for the buck than simply adding scale horizontally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
