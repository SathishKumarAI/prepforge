---
qid: ing_c86d904cce__aws__local
question: 'Explain: 4.3 Requirement 3: High Availability — Design Load Balancer |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 467
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:16-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Customer Obsession & Ownership)**  
I was tasked with designing a high‑availability inference layer for AlgoMaster’s recommendation engine that must serve 50 k requests/sec with <10 ms latency while guaranteeing 99.999% uptime.

**Action (Dive Deep, Bias for Action, Deliver Results)**  

| Component | Design Choice | AWS Services | Rationale |
|-----------|---------------|--------------|-----------|
| **Traffic routing** | Global **Application Load Balancer (ALB)** + Route 53 latency‑based routing | ALB, Route 53 | Distributes traffic across 3 AZs; health checks on `/health` endpoint. |
| **Scaling** | Auto Scaling Group (ASG) with target tracking (CPU ≤ 70%) and warm‑start strategy | EC2 Spot + EBS | Keeps at least 30% of instances pre‑warmed, reducing cold start to <5 ms. |
| **Model serving** | Dockerized TensorFlow Serving on ECS Fargate | ECS Fargate, CloudWatch | Serverless scaling removes infra ops; autoscaling based on request count. |
| **Failover** | Multi‑region ALB with health‑based failover + S3 for model snapshots | S3, CloudFront | If a region goes down, traffic shifts to the standby region with negligible latency (<2 ms). |

**Result (Quantified Impact)**  
After deployment, we observed 99.999% availability over 6 months and reduced inference latency from 12 ms to 8 ms under peak load—30% faster than SLA.

**Reflection (Bar‑raiser check)**  
- Took ownership of all failure modes; logged every health‑check failure and tuned thresholds.  
- Dived deep into CloudWatch metrics to discover that CPU spikes were due to model warm‑up; fixed with pre‑warm strategy.  
- Learned that a single ALB per region suffices, but cross‑region failover adds resilience at modest cost (~$200/month).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
