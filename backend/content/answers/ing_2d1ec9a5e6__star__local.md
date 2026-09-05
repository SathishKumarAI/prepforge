---
qid: ing_2d1ec9a5e6__star__local
question: 'Explain: Scaling and Optimization (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 364
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:05-05:00'
sources: []
---

**Situation** – At my previous company we built a recommendation engine for a streaming service that served 15 M active users daily. Production traffic spiked during new releases, causing latency to climb from 120 ms to over 1 s and our cache hit ratio dropped below 70 %.  
**Task** – I was tasked with scaling the inference pipeline so that response time stayed under 200 ms even during peak loads, while keeping GPU usage cost‑effective.  
**Action** – First, I profiled the model using TensorRT and identified a 3× bottleneck in matrix multiplication on the CPU path. I replaced the heavy dense layer with a low‑rank approximation (CP decomposition) that cut FLOPs by 60 % without hurting top‑1 accuracy by more than 0.5 %. Next, I introduced a multi‑stage caching strategy: an LRU cache for the most frequent user embeddings and a Bloom filter to skip expensive lookups for cold users. On the infrastructure side, I moved from a single GPU pool to a Kubernetes‑managed autoscaler that spun up new pods only when queue latency exceeded 150 ms, using NVIDIA A100s for high throughput workloads.  
**Result** – Latency dropped to an average of 95 ms during peak hours, cache hit ratio improved to 88 %, and GPU utilization rose from 35 % to 70 %. The cost per inference fell by 25 %, freeing budget for model research. I learned that marrying algorithmic compression with smart caching and dynamic scaling is key to building a resilient ML service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
