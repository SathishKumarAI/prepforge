---
qid: ing_464bdcf2db__star__local
question: 'Explain: Latency — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:49:17-05:00'
sources: []
---

**Situation:**  
When I was building a real‑time recommendation engine for an e‑commerce platform, our click‑through metric dropped by 12% after we added a new deep‑learning model. A production run showed that latency spiked from 30 ms to over 200 ms per request.

**Task:**  
I needed to bring the inference latency back under 80 ms while keeping throughput high enough (≈10,000 requests/second) and without exhausting our GPU bandwidth budget of 25 Gbps.

**Action:**  
First, I profiled the pipeline with NVIDIA Nsight and discovered that the bottleneck was memory traffic between CPU and GPU. I re‑implemented the model using TensorRT, which fused layers and reduced precision to FP16, cutting kernel launch overhead. Next, I switched from a single large batch to micro‑batching (size = 4) per request, allowing the GPU to stay busy while keeping latency low. Finally, I tuned the CUDA stream scheduling so that data transfer overlapped with computation, effectively using our 25 Gbps bandwidth without stalling.

**Result:**  
Latency dropped to 65 ms, throughput increased to 12,500 req/s, and GPU utilization hit 85%. The recommendation click‑through rate rebounded by 9%, and I learned that balancing latency, throughput, and bandwidth requires profiling, precision trade‑offs, and careful stream management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
