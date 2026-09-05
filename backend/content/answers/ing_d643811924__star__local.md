---
qid: ing_d643811924__star__local
question: 'Explain: Capacity Estimation — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 374
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:01-05:00'
sources: []
---

**Situation** – At my last role I was tasked with launching a recommendation engine for a streaming platform that had to handle 5 M concurrent users during peak hours. The existing inference cluster was running on a single GPU‑based node, and our SLA required < 100 ms latency per request.

**Task** – I needed to estimate the compute, memory, and network capacity required to meet the SLA while staying within a $200k annual budget.

**Action** – First, I profiled the model with a representative 10K‑user workload using NVIDIA Nsight Systems, measuring GPU utilization, memory footprint, and inter‑node latency. I then built a micro‑benchmark that varied batch size, precision (FP32 vs FP16), and distributed shard count. Using these results I plotted a cost‑performance curve on AWS, comparing p4d.24xlarge, g5.12xlarge, and a custom 8‑GPU Kubernetes pool. I performed an A/B test of dynamic batching versus static queueing to validate latency predictions in production traffic. Finally, I created a capacity model that projected daily inference volume, scaling policy thresholds, and automated GPU spin‑up using Spot Instances.

**Result** – The new design deployed on a 4‑node g5.12xlarge cluster reduced average latency from 210 ms to 78 ms, achieved a 3× higher throughput, and cut infrastructure costs by 27% compared with the single‑node baseline. I learned that early, granular profiling coupled with realistic traffic simulation is critical for accurate capacity planning in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
