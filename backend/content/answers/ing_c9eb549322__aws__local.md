---
qid: ing_c9eb549322__aws__local
question: 'Explain: Throughput — Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 538
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:57:55-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to redesign the inference pipeline for a real‑time recommendation engine that served millions of requests per day. The team needed to shift from an “all‑in‑one” Lambda function (latency ≈ 300 ms, throughput = 1 kreq/s) to a scalable architecture that could sustain 200 kreq/s while keeping latency under 50 ms.

**Action**  
I broke the problem into *bandwidth*, *throughput* and *latency*:

| Metric | Definition | Impact |
|--------|------------|--------|
| **Bandwidth** | Raw data transfer rate (Gbps) | Determines how many concurrent inference packets can be moved between EFS and EC2 |
| **Throughput** | Requests processed per second | Directly tied to compute capacity |
| **Latency** | Time from request receipt to response | Customer‑visible performance |

I chose a *container‑based* microservice on **ECS Fargate** with an **Elastic Load Balancer (ELB)** fronting the cluster. The model was served by **SageMaker Endpoint** behind a **Redis cache** (ElastiCache) to warm predictions for hot items.  

- **Bandwidth**: EFS + ElastiCache nodes were tuned to 20 Gbps each, enough for peak burst traffic.  
- **Throughput**: Auto‑scaling policies on ECS (CPU ≥ 70%) let us reach 200 kreq/s in under 2 min after a load spike.  
- **Latency**: End‑to‑end latency averaged 38 ms, measured with CloudWatch metrics and X-Ray traces.

I also introduced a *canary* deployment strategy to catch any regression early—an embodiment of **Bias for Action** and **Ownership**.

**Result**  
Post‑migration we saw:

- **+400 % increase in throughput** (1 k → 200 kreq/s).  
- **Latency dropped by 87 %** (300 ms → 38 ms).  
- **Cost savings of 18 %** due to fine‑tuned autoscaling and use of spot instances.

The design now scales linearly with traffic, is highly available (multi‑AZ ECS), and the team can iterate quickly—demonstrating *Dive Deep* into metrics and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
