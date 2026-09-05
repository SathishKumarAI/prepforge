---
qid: ing_802a4e674a__star__local
question: 'Explain: Vertical Scaling (Scale Up) — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 383
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:50:02-05:00'
sources: []
---

**Situation** – In early 2024 I was leading the deployment of a real‑time fraud detection model for a fintech client. The initial server farm (8 x 32 core CPUs, 256 GB RAM) handled 1 M transactions/day but lagged behind peak loads, dropping latency from 200 ms to over 600 ms during holiday spikes.

**Task** – I needed to meet the SLA of <300 ms latency while keeping costs under a 15% budget increase. The team had two options: horizontally scale out or vertically scale up the existing nodes. I chose vertical scaling because our model was memory‑bound and data locality mattered for GPU inference.

**Action** – I evaluated the current workload, identified that each inference required ~1.5 GB of intermediate tensors, and found the bottleneck at 512 GB RAM per node. I procured a new generation of servers with 32 CPU cores, 2 TB DDR4, and dual NVIDIA A100 GPUs (80 GB HBM). I re‑architected the inference pipeline to batch 64 requests, used TensorRT for engine optimization, and implemented a memory pool to reuse buffers. We performed a dry run on a staging cluster, achieving 250 ms latency at 2× peak load.

**Result** – After production rollout, average latency dropped to 180 ms during peak periods, throughput increased from 1 M to 3 M transactions/day, and total infrastructure cost rose only by 12%. I learned that vertical scaling can be more efficient than horizontal when the workload is tightly coupled in memory, but careful profiling and hardware selection are critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
