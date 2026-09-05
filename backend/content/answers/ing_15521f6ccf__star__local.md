---
qid: ing_15521f6ccf__star__local
question: 'Explain: There''s going to be some hardware limit — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 314
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:10:44-05:00'
sources: []
---

**Situation**  
At my previous company we launched a real‑time recommendation engine for an e‑commerce platform. The first month traffic spiked from 50k to 300k concurrent users, and our latency metric dropped below the SLA of 120 ms.

**Task**  
I had to keep the inference latency under SLA while handling the load surge, without blowing up costs or compromising model accuracy.

**Action**  
I started by profiling the GPU/CPU usage on a single node. The bottleneck was memory bandwidth, so I evaluated two scaling strategies: vertical (adding more GPUs per server) versus horizontal (spreading inference across a cluster). Vertical scaling would have required 4 × 8‑GPU machines to keep up, costing ~$200k/month. Instead, I designed a microservice that used NVIDIA Triton Inference Server behind an NGINX load balancer. Each node ran two GPUs and a small CPU pool; we deployed them on spot instances with autoscaling policies triggered by queue length. We also introduced model sharding—splitting the feature set across nodes—to reduce per‑node memory pressure.

**Result**  
After deployment, latency stayed at 90 ms under peak load, while operating cost dropped to $75k/month—a 62% savings. The exercise taught me that horizontal scaling with smart workload partitioning often beats brute vertical upgrades when dealing with ML inference under strict SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
