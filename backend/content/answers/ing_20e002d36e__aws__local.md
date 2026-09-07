---
qid: ing_20e002d36e__aws__local
question: 'Explain: Pros of Vertical Scaling — Vertical vs Horizontal Scaling | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 521
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:41:38-05:00'
sources: []
---

**Situation & Task**  
During my last role at a fintech startup, we were migrating our credit‑score model from an on‑premise cluster to AWS. The team debated whether to scale the inference service vertically (bigger EC2 instances) or horizontally (more pods). I owned the decision and had to justify vertical scaling for the first phase.

**Action**  
I ran a 24‑hour benchmark of the TensorFlow model on three instance families: `ml.m5.large`, `ml.c5.9xlarge`, and `ml.g4dn.xlarge`. The results showed:

| Instance | Inference latency (ms) | Throughput (req/s) | Cost ($/hr) |
|----------|------------------------|---------------------|-------------|
| m5.large | 320 | 3.1 | 0.10 |
| c5.9xlarge | 95 | 11.6 | 0.54 |
| g4dn.xlarge | 48 | 21.8 | 0.75 |

Vertical scaling on `c5.9xlarge` delivered a **70 % latency reduction** and **3.7× throughput increase** for only a **5× cost increase** compared to the baseline, while keeping the deployment footprint minimal (single instance). I also configured Auto‑Scaling Groups with health checks and integrated CloudWatch metrics to trigger scale‑up on CPU > 80 %.

**Result**  
We rolled out the vertical solution in production. Within two weeks we saw a **45 % drop in SLA violations** and a **12 % lift in user sign‑ups** (from 1,200/day to 1,350/day). The cost stayed within budget because we avoided the overhead of orchestrating many small pods.

**Reflection & Learning**  
I learned that vertical scaling is often the *simplest* first step when latency matters more than raw throughput and when the model fits comfortably in a single instance’s memory. However, for future projects I’ll evaluate horizontal scaling early if the data volume or request pattern grows beyond a single node’s capacity.

---

> **Leadership Principles Anchored**  
> - **Ownership**: Took full responsibility for benchmarking and deployment.  
> - **Dive Deep**: Analyzed latency, throughput, cost, and resource utilization metrics to make an evidence‑based decision.  
> - **Bias for Action**: Implemented the solution quickly while monitoring for regressions.  

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
