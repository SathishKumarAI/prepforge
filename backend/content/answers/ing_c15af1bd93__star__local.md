---
qid: ing_c15af1bd93__star__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 350
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:36-05:00'
sources: []
---

**Situation**  
At my previous company we launched an image‑classification model for our e‑commerce platform. Within the first week of production, traffic spiked from 2k to 25k requests per minute during a flash sale, and latency jumped from 120 ms to over 1 s.

**Task**  
I had to bring response time back under 200 ms while keeping cost predictable, so we could handle any future surge without rewriting the model pipeline.

**Action**  
First I profiled the inference stack: CPU‑bound preprocessing was a bottleneck. I moved those steps to GPU workers and containerized the model with TensorRT for faster FP16 execution. Then I evaluated scaling options:  
- *Vertical*: adding more powerful servers would reduce latency but only up to a point and cost exploded (~+30 % per tier).  
- *Horizontal*: spinning out additional inference nodes behind a load balancer allowed linear throughput growth; we used Kubernetes with an autoscaler that triggered on CPU >70 %. I also implemented model sharding—splitting the 1.2 B‑parameter network into two 600 M submodels, each served on separate pods—to reduce memory footprint and enable parallel inference.

**Result**  
After deploying the horizontal strategy, latency dropped to 140 ms at peak load, throughput increased by 4×, and we kept costs within 15 % of baseline. I learned that for ML workloads, horizontal scaling with model sharding often delivers better elasticity than simply beefing up single nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
