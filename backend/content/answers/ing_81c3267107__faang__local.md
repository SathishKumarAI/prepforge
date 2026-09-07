---
qid: ing_81c3267107__faang__local
question: 'Explain: Summary — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 571
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:25-05:00'
sources: []
---

**Clarify**

We’re asked to explain the trade‑offs among **latency**, **throughput**, and **bandwidth** when designing a machine‑learning inference system (e.g., serving models).  
Assumptions:  
1. The system handles batch or streaming predictions.  
2. We can scale compute, memory, and networking resources independently.

---

**Approach**

1. Define each metric in the context of ML serving.  
2. Map how they influence one another under different workloads (low‑latency vs high‑volume).  
3. Illustrate with a simple system diagram.  

---

**Depth**

| Metric | Definition in ML Serving | Typical Bottleneck |
|--------|--------------------------|--------------------|
| **Latency** | Time from request to response for a single inference. | Compute (GPU/CPU), queueing, serialization. |
| **Throughput** | Inferences per second the system can handle. | CPU/GPU utilization, model size, batching. |
| **Bandwidth** | Data transferred per unit time (e.g., input features → model, logits → client). | Network I/O, disk‑to‑RAM, inter‑service calls. |

*Trade‑offs*:  
- **Batching** increases throughput but raises latency (waiting for a full batch).  
- **Model compression** reduces bandwidth and compute, improving both latency and throughput up to the point where accuracy degrades.  
- **Horizontal scaling** boosts throughput; adding more nodes can also lower latency if request routing balances load.

*Complexity*:  
- Latency: O(1) per inference once resources are allocated.  
- Throughput: O(n) with n parallel workers, limited by Amdahl’s law on serial components.  
- Bandwidth: Linear in input size; bottleneck when network saturates (e.g., 10 Gbps ≈ 1.25 GB/s).

---

**Edge Cases**

- Sudden traffic spikes → queue buildup → latency spikes.  
- Model updates causing larger payloads → bandwidth exhaustion.  
- Cold starts for containers → high initial latency.

Testing: simulate bursty workloads, vary batch sizes, and measure all three metrics.

---

**Optimize & Communicate**

1. **Profile first**: identify the dominant bottleneck.  
2. **Apply targeted optimizations**: e.g., use GPU batching for throughput; edge compression for bandwidth; keep‑alive connections for latency.  
3. **Iterate with A/B tests** and SLA dashboards.

Explain decisions clearly to stakeholders, showing how each tweak shifts the balance among latency, throughput, and bandwidth while meeting business goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
