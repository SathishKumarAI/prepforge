---
qid: ing_8910e06404__faang__local
question: 'Explain: Throughput & Bandwidth — 11 System Design Concepts Explained,
  Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 497
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:03:18-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑ready explanation of *throughput* and *bandwidth* as they relate to AI systems (e.g., model training, inference pipelines). I’ll assume the audience knows basic networking but not the nuanced differences that affect latency, scaling, and cost.

**Approach**  
1. Define each term generically.  
2. Relate them to AI workloads (data shuffling, gradient aggregation, inference serving).  
3. Contrast their units and constraints.  
4. Highlight common pitfalls in system design.  

**Depth**  
| Concept | What it is | Typical unit | Relevance to AI |
|---------|------------|--------------|-----------------|
| **Bandwidth** | Max data rate a link can carry | Gbps (network) or ops/sec (GPU interconnect) | Determines how fast batches move between nodes; bottleneck for distributed training. |
| **Throughput** | Actual useful work per unit time | samples/second, FLOPs/s | Reflects end‑to‑end pipeline efficiency; includes compute, I/O, scheduling overhead. |

- In *distributed SGD*, bandwidth limits gradient exchange; if the link is 10 Gbps but gradients are 1 GB per step, you hit a bottleneck before GPU compute finishes.
- Throughput depends on both bandwidth and compute: even with infinite bandwidth, a single‑GPU inference server may process only ~1000 requests/sec due to model size.

**Edge Cases**  
*Burst traffic*: sudden spikes can overwhelm bandwidth → throttling.  
*Skewed workloads*: uneven batch sizes reduce throughput despite high bandwidth.  
*Network jitter*: increases latency, reducing effective throughput even if bandwidth is ample.

**Optimize & Communicate**  
- Use RDMA or NVLink to raise GPU‑to‑GPU bandwidth.  
- Pipeline stages (data loading → preprocessing → inference) to keep all components saturated.  
- Monitor both metrics: a high‑bandwidth link with low throughput signals algorithmic inefficiency; vice versa indicates I/O bottlenecks.

*In practice, balancing bandwidth and throughput is key: you can’t squeeze more samples per second unless both the network and compute are matched to your model’s demands.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
