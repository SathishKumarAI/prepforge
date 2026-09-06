---
qid: ing_47fbd69a02__fp__local
question: 'Explain: Bandwidth is certainly an issue. Cost of'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 432
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:38:28-05:00'
sources: []
---

### Why bandwidth becomes a bottleneck in machine‑learning pipelines

At the core of every learning algorithm is **data flow**: input tensors must be moved from storage or sensors to compute nodes (GPUs/TPUs), and gradients must return back for parameter updates. The cost of this data movement is governed by two fundamental principles:

1. **Information theory** – a dataset of size *N* bits carries at most *N* bits of information. Any learning system that can’t deliver those bits to the processor within the required time window will under‑utilize compute resources, leading to idle cycles and sub‑optimal training throughput.
2. **Linear scaling of network bandwidth** – in a distributed setting, each additional worker multiplies the volume of data exchanged (model weights, activations, gradients). Even if the raw bandwidth of a single link is high, the aggregate traffic quickly exceeds the physical limits of switches or interconnects, causing queuing delays and packet loss.

These two facts imply that **bandwidth must scale at least linearly with model size and dataset volume**. Otherwise, compute units become starved, and training time balloons.

---

#### A non‑obvious insight

Most practitioners focus on *compression* (e.g., quantization or sparsification) to reduce traffic. However, the deeper bottleneck is often **the latency of small, frequent packets** rather than bulk throughput. Modern interconnects are optimized for high bandwidth but suffer from high per‑packet overhead; when gradients are split into many tiny tensors, the cumulative latency can dominate. Therefore, *batching gradients* or *aggregating updates on the edge* before sending them to the parameter server often yields larger speedups than aggressive compression alone.

In short, bandwidth is a problem not just because of raw data volume, but because the **timeliness and granularity** of data transfers must match the compute schedule; otherwise, even cheap, high‑speed links become ineffective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
