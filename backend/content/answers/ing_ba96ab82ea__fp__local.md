---
qid: ing_ba96ab82ea__fp__local
question: 'Explain: Common Vertical Scaling Actions — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 440
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:40:25-05:00'
sources: []
---

### Why Vertical Scaling Matters for ML Systems  

In any ML pipeline the **fundamental bottleneck** is the *rate at which data can be processed* versus the *latency required by downstream services*.  
When a single machine’s CPU, GPU, or memory capacity is insufficient, we **scale vertically**—add more cores, faster GPUs, larger RAM, or higher‑bandwidth interconnects.  

1. **Throughput vs Latency**  
   - A deeper GPU (more CUDA cores) reduces per‑sample compute time linearly until memory bandwidth becomes the limiter.  
   - Adding RAM eliminates paging for large embedding tables, turning an I/O bound system into a CPU‑bound one.  

2. **Optimization Principle**  
   The total cost \(C\) of a model run is \(C = \alpha\,T + \beta\,P\), where \(T\) is time, \(P\) is power, and \(\alpha,\beta\) are pricing weights. Vertical scaling changes the *gradient* \(\partial C/\partial R\) (resource) in a non‑linear way: early increments yield large \(-\partial T/\partial R\), but after a threshold, \(\partial T/\partial R\) plateaus while \(\beta\,P\) keeps rising.  

3. **Non‑obvious Insight**  
   *Diminishing returns are driven by the memory hierarchy.* Even if you double GPU cores, if the model’s activation size exceeds L2 cache, each core will stall on DRAM fetches. Thus, a balanced vertical upgrade—adding both compute and bandwidth—often yields far better ROI than boosting one dimension alone.

In short, vertical scaling is a controlled trade‑off between compute power, memory capacity, and interconnect speed, guided by the law of diminishing returns inherent in hardware pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
