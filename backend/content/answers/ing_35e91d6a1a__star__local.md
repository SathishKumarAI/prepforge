---
qid: ing_35e91d6a1a__star__local
question: 'Explain: Summary — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 309
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:16:04-05:00'
sources: []
---

**Situation:** While working on a real‑time fraud detection system for a fintech startup, our daily transaction volume hit 1.2 M per day, and the latency target was <150 ms per prediction.

**Task:** I needed to redesign the inference pipeline so it could scale horizontally without exceeding the latency budget, while keeping cost in check.

**Action:** First, I profiled the existing single‑threaded model loader; most of the time was spent waiting for GPU memory allocation and data shuffling. To address this, I introduced *concurrency* by decoupling data ingestion from inference: a thread pool pre‑fetches batches into pinned CPU buffers while separate worker threads perform GPU inference. Then, to achieve true speedups, I implemented *parallelism* across multiple GPUs using PyTorch’s `DistributedDataParallel`. Each GPU ran an identical model on disjoint shards of the batch, and I coordinated them with NCCL for all‑reduce communication. I also added a lightweight cache layer for recurring transaction patterns, reducing redundant inference calls.

**Result:** The end‑to‑end latency dropped from 420 ms to 110 ms, and throughput increased by 3×, handling the peak load without additional servers. I learned that concurrency optimizes resource utilization while parallelism delivers raw performance gains; balancing both is key in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
