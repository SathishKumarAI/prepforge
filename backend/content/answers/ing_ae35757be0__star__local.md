---
qid: ing_ae35757be0__star__local
question: 'Explain: Improving Throughput — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 358
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:33-05:00'
sources: []
---

**Situation**  
I was leading the deployment of a real‑time recommendation engine for a mobile app with 4 M daily active users. The existing inference pipeline had an average latency of 250 ms per request and could only process 1,500 requests per second (RPS), which caused queueing during peak hours.

**Task**  
I needed to double throughput to 3,000 RPS while keeping latency under 100 ms, without exceeding the data center’s 10 Gbps bandwidth limit or blowing up costs.

**Action**  
First, I profiled the model and found that the bottleneck was the GPU‑to‑CPU copy overhead. I switched from synchronous TensorRT inference to a batched async engine, increasing batch size from 32 to 256, which reduced per‑sample GPU utilisation from 30 % to 70 %. Next, I introduced edge‑caching of feature embeddings on local SSDs, cutting the bandwidth required for each request by 40 %. Finally, I rebalanced the load across two A100 nodes using a custom round‑robin scheduler that throttled requests when queue depth exceeded 200, preventing latency spikes.

**Result**  
Throughput rose to 3,500 RPS and average latency dropped to 85 ms. Bandwidth usage fell from 8 Gbps to 5 Gbps, keeping costs down by ~15 %. I learned that balancing batch size, caching strategy, and dynamic throttling is key when optimizing for both throughput and latency in ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
