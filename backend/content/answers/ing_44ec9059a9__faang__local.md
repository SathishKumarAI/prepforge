---
qid: ing_44ec9059a9__faang__local
question: What Limits Throughput? — Latency vs Throughput vs Bandwidth | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 591
total_tokens: 831
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:24:38-05:00'
sources: []
---

**Clarify**

We’re asked how throughput in a ML inference pipeline is limited, and how latency, bandwidth, and other factors trade off. I’ll assume we’re looking at a production system: batch‑inference service with GPU/TPU backend, networked clients, and storage for models.

**Approach**

1. Identify the layers that can throttle throughput (input pre‑processing, model execution, post‑processing, networking).  
2. For each layer quantify its bottleneck: CPU cycles, memory bandwidth, I/O latency, queue depth.  
3. Compare how reducing one dimension (latency) impacts another (throughput).

**Depth**

| Layer | Bottleneck | Effect on throughput |
|-------|------------|----------------------|
| **Input pipeline** | Disk / network read speed, serialization | If input rate > read capacity → back‑pressure, queue grows, effective throughput drops. |
| **Pre/post‑proc** | CPU/GPU compute, memory bandwidth | Heavy transforms consume cycles; if they exceed GPU idle time, GPU sits idle → lower throughput. |
| **Model execution** | GPU kernel launch overhead, batch size, parallelism | Small batches cause underutilization; large batches hit memory limits → stalls. |
| **Networking** | Bandwidth, packet loss, round‑trip time (RTT) | High RTT increases request latency; limited bandwidth caps concurrent requests, throttling throughput. |

Throughput ≈ (1 / average request latency) × (service capacity). Reducing latency per request usually means smaller batches → lower GPU utilization → lower overall throughput.

**Edge Cases**

- Sudden spike in input size → memory overflow.  
- Model update that increases FLOPs → GPU saturation.  
- Network congestion → increased RTT, queueing delays.  
- Multi‑tenant scheduler starving a job → idle compute resources.

**Optimize & Communicate**

1. **Batch scheduling**: Use dynamic batching to keep GPUs near 80–90 % utilization while keeping latency under target.  
2. **Compression / quantization**: Reduce model size → faster load, less memory bandwidth.  
3. **Edge caching**: Keep hot embeddings/models in local RAM to cut network hops.  
4. **Observability**: Instrument each stage; surface bottleneck metrics (queue depth, GPU idle time).  

Explain that throughput is ultimately limited by the slowest stage; optimizing one without considering others can backfire. Highlight trade‑offs: e.g., 5 ms latency target may cap batch size to 32, yielding ~2000 requests/sec on a V100 versus 10k req/sec if we allow 20 ms latency. This balanced view demonstrates structured problem solving and depth expected in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
