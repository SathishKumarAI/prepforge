---
qid: ing_15521f6ccf__faang__local
question: 'Explain: There''s going to be some hardware limit — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 470
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:35-05:00'
sources: []
---

**Clarify**  
We’re asked how a ML system can grow under a fixed‑hardware budget, focusing on *horizontal* (scale‑out) versus *vertical* (scale‑up) strategies. I’ll assume we need to support larger data volumes and higher inference latency while staying within the same total compute budget.

**Approach**  
1. **Identify bottlenecks**: CPU/GPU cores, memory bandwidth, disk/SSD I/O.  
2. **Decide scaling axis**:  
   *Horizontal*: add more nodes (more GPUs, CPUs).  
   *Vertical*: upgrade existing node (more RAM, faster SSDs, higher‑core CPUs).  
3. **Model cost vs. performance**: use Amdahl’s law for parallelism gains and memory‑bandwidth limits.

**Depth**  
- *Horizontal scaling* is embarrassingly parallel for data‑parallel training (e.g., distributed TensorFlow with parameter servers or all‑reduce). Inference can be load‑balanced across a GPU cluster. Gains ≈ linear until network becomes the bottleneck; cost scales linearly with node count.  
- *Vertical scaling* reduces inter‑node communication, improves cache locality, and simplifies debugging. However, diminishing returns hit when single‑node memory or GPU cores saturate; per‑core performance rarely doubles by simply adding more cores.

**Edge Cases**  
- *Data shuffling*: horizontal nodes may require expensive data replication.  
- *Model size*: very large models (hundreds of GB) cannot fit on a single node, forcing horizontal scaling.  
- *Latency constraints*: vertical scaling is preferable for strict end‑to‑end latency budgets.

**Optimize & Communicate**  
Recommend starting with vertical upgrades to squeeze out baseline performance, then gradually add nodes when the model size or data volume exceeds a single machine’s capacity. Use monitoring (GPU utilization, network throughput) to trigger autoscaling. Explain trade‑offs: horizontal costs more in ops and networking; vertical may hit hardware limits faster but offers lower latency. This structured plan showcases clear reasoning, complexity awareness, and practical decision points—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
