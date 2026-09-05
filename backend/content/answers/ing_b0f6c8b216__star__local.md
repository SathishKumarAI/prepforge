---
qid: ing_b0f6c8b216__star__local
question: 'Explain: Components of Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 361
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:25:49-05:00'
sources: []
---

**Situation:**  
At my previous company I was tasked with launching a real‑time recommendation engine for an e‑commerce platform that served millions of users per day. The existing batch model delivered high accuracy but had a 5‑second inference latency, which was unacceptable for the click‑through rate we needed.

**Task:**  
I had to redesign the inference pipeline so that it could process each request in under 200 ms while still handling 10,000 requests per second (RPS) without dropping throughput or exceeding our bandwidth budget of 5 Gbps.

**Action:**  
First, I profiled the model and identified a 30 % bottleneck in GPU memory usage. I switched to TensorRT with FP16 precision, reducing inference time by 40 %. Next, I introduced a sharded request router that balanced load across four edge servers, each equipped with an NVMe SSD for low‑latency data access. To keep bandwidth in check, I implemented gzip compression on the serialized feature vectors, cutting payload size from 1.2 MB to 300 KB per request. Finally, I set up a Kafka buffer that queued bursts and allowed the system to sustain peak RPS without queueing delays.

**Result:**  
The new pipeline achieved an average latency of 140 ms and sustained 12,500 RPS, exceeding our throughput goal by 25 %. Bandwidth usage stayed below 4.2 Gbps. The project increased conversion rates by 3.8% over three months, proving that balancing latency, throughput, and bandwidth is critical in ML system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
