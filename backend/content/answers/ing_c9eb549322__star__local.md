---
qid: ing_c9eb549322__star__local
question: 'Explain: Throughput — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 333
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:12:54-05:00'
sources: []
---

**Situation**  
I was leading the redesign of our image‑classification pipeline for an e‑commerce platform that had to serve 50k requests per second during flash sales. The existing batch model took ~250 ms per inference, causing a backlog and poor user experience.

**Task**  
Reduce end‑to‑end latency below 80 ms while maintaining throughput of at least 40k inferences/sec, all within the same GPU cluster budget.

**Action**  
I re‑architected the system into a micro‑service mesh using gRPC with protobuf to cut serialization overhead. I switched from a single monolithic model to a lightweight TensorRT engine, which lowered inference time by 60 %. To keep throughput high, I introduced async pipeline stages: a producer queue fed GPU workers in batches of 32, and a consumer thread streamed results back via HTTP/2 multiplexing. We monitored GPU memory usage with NVIDIA Nsight and tuned batch size to balance latency and bandwidth—finding that 32 images per batch maximized utilization without exceeding the 80 ms deadline.

**Result**  
Latency dropped from 250 ms to 72 ms, throughput rose to 45k inferences/sec, and GPU utilization hit 88 %. The project taught me how batching, serialization choice, and network protocol impact both latency and bandwidth, and that optimal throughput often requires a fine‑tuned trade‑off between the two.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
