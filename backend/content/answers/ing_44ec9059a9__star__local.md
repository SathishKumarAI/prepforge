---
qid: ing_44ec9059a9__star__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 335
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:45-05:00'
sources: []
---

**Situation:**  
I was leading the redesign of our real‑time fraud detection pipeline at a fintech startup. The existing model served 15k transactions per second with an average latency of 120 ms, but a new compliance mandate required sub‑50 ms inference to keep up with live trading feeds.

**Task:**  
Reduce end‑to‑end latency while maintaining throughput above 20k TPS and without exceeding our network’s 10 Gbps bandwidth budget.

**Action:**  
I profiled the pipeline and discovered that GPU serialization, model weight loading, and inter‑service gRPC overhead were the main bottlenecks. I introduced a multi‑worker inference cluster using NVIDIA A100s with TensorRT to batch requests (batch size = 64) and leveraged RDMA over Converged Ethernet for zero‑copy data transfer. To keep bandwidth in check, I compressed feature vectors on the fly with Zstandard at 5× speed, reducing payload from 1.2 KB to 200 B per request. Finally, I implemented a rate‑limiting scheduler that throttled bursts during peak times, preventing packet loss.

**Result:**  
Latency dropped to an average of 32 ms and throughput rose to 24k TPS, all within the 10 Gbps link. The system now meets compliance requirements and scales for future transaction spikes. I learned that balancing batching, compression, and network primitives is key to pushing throughput without hitting bandwidth ceilings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
