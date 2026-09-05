---
qid: ing_45bd719c87__star__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 348
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:47:58-05:00'
sources: []
---

**Situation**  
In my last role I was building a recommendation engine for an e‑commerce platform that needed to serve real‑time predictions during flash sales. Our traffic spiked from 5k requests/sec to 25k in minutes, and latency started creeping above the SLA of 50 ms.

**Task**  
I had to quickly reduce response time without refactoring the entire inference pipeline or incurring a major cloud migration cost.

**Action**  
First I profiled the model on a GPU‑enabled instance; CPU usage hit 90% while memory stayed under 70%. I moved the inference service to an Intel Xeon Platinum 8268 (48 vCPU, 384 GB RAM) with NVMe SSDs and tuned the batch size from 1 to 32. I also enabled hyperthreading and set the kernel scheduler to real‑time mode for lower jitter. Parallelizing across multiple cores was a no‑op because the model’s forward pass is embarrassingly parallel, so scaling vertically gave me immediate throughput gains.

**Result**  
Latency dropped from 120 ms to 32 ms on average, and we handled 30k requests/sec during peak periods without any downtime. The cost increased by only ~15% compared to horizontal scaling options at the time. I learned that vertical scaling can be a fast, low‑friction win when the workload is CPU‑bound and the model fits comfortably in memory, but it’s important to monitor resource saturation early to avoid hitting hard limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
