---
qid: ing_c78d153ddf__faang__local
question: 'Explain: Choose Horizontal Scaling When — Vertical vs Horizontal Scaling
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:24:17-05:00'
sources: []
---

**Clarify**  
You’re asked to explain *when* you’d opt for horizontal scaling versus vertical scaling in a machine‑learning system—i.e., adding more machines vs beefing up one. Key assumptions: the workload is stateless or can be partitioned, latency requirements are strict, and cost/operational overhead matters.

**Approach**  
1. Define vertical scaling limits (CPU, RAM, I/O).  
2. Identify ML workloads that benefit from parallelism (batch inference, distributed training).  
3. Map trade‑offs: single‑node performance vs cluster complexity.

**Depth**  
- **Vertical Scaling** works when a model is small enough to fit in one machine’s memory and the bottleneck is a single resource (e.g., GPU). It simplifies development but hits hardware ceilings (~$10k per node).  
- **Horizontal Scaling** shines for large‑scale inference or training: shard data across nodes, use parameter servers or distributed optimizers. It yields linear throughput up to the network‑I/O limit and allows autoscaling with cloud spot instances. Complexity includes consistency (synchronous vs asynchronous), fault tolerance, and inter‑node communication cost.

**Edge Cases**  
- *Highly stateful models* (e.g., RNNs needing long hidden states) may struggle with sharding.  
- *Real‑time inference* on edge devices often forces vertical scaling to meet latency constraints.  
- *Data locality* issues can negate horizontal gains if data transfer dominates compute.

**Optimize & Communicate**  
Recommend a hybrid: start vertically for prototyping, then migrate horizontally once the model size or request volume exceeds single‑node capacity. Explain this transition as “scale‑up first, scale‑out later” and quantify expected cost/latency improvements to persuade stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
