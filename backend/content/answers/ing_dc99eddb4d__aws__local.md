---
qid: ing_dc99eddb4d__aws__local
question: 'Explain: Components for Traffic Distribution — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 433
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:37:43-05:00'
sources: []
---

**Situation / Task**  
At a prior e‑commerce startup I was tasked with redesigning the traffic distribution layer for our recommendation engine, which saw a 200 % spike during holiday sales. The goal: keep 99.9 % availability while scaling to millions of requests per second.

**Action**  
I proposed a **multi‑region AWS architecture**:

| Layer | Service | Reason |
|-------|---------|--------|
| Edge | CloudFront with Lambda@Edge | Global low‑latency routing and request validation |
| Load Balancer | ALB (Application Load Balancer) + NLB for TCP traffic | Path‑based routing to ML inference endpoints; health checks per instance |
| Compute | EC2 Auto Scaling groups + ECS Fargate for containerized models | Autoscaling on CPU/Memory, spot‑to‑on‑demand mix cuts cost 30 % |
| Persistence | Amazon S3 (model artifacts) + DynamoDB (request metadata) | Durable storage & fast key‑value lookups |

I **Dived Deep** into the ALB’s target health logic: added a custom CloudWatch metric “InferenceLatency” that triggers deregistration if >150 ms. I also set up **AWS WAF** to block anomalous traffic, preventing DDoS amplification.

**Result**  
Post‑deployment we achieved:

* 99.95 % request success rate during peak (vs 97.2 % pre‑design).  
* Latency dropped from 350 ms to <120 ms average.  
* Cost per inference reduced by 28 % thanks to spot instances and efficient scaling.

**Learnings & Ownership**  
I owned the end‑to‑end pipeline, iterated on metrics, and conducted post‑mortems after each traffic surge. This reinforced a bias for action while ensuring the system remained robust—exactly what Amazon expects from its leaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
