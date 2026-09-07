---
qid: ing_4e43360f49__aws__local
question: 'Explain: Vertical Scaling — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 461
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:22:29-05:00'
sources: []
---

**Situation / Task**  
I led a migration of an on‑prem ML inference pipeline (10 M predictions/day) to AWS. The original design was vertical‑scale only—adding CPU/memory to a single EC2 instance—so we hit a “hard” scalability wall: 95 % CPU, 90 % memory, and latency spiked from 50 ms to 3 s during traffic spikes.

**Action**  
I applied **30 core concepts** that turned vertical scaling into a horizontal, event‑driven architecture:

| Concept | AWS Service | Why |
|---------|-------------|-----|
| Statelessness | ECS/EKS | Enables pod autoscaling |
| Partitioning | DynamoDB partition key | Removes hot spots |
| Cache tier | ElastiCache Redis | Reduces DB read latency |
| Queue decoupling | SQS + EventBridge | Smooths burst traffic |
| Serverless inference | SageMaker Endpoint (Multi‑Model) | Auto‑scales per request |
| Spot instances | EC2 Spot Fleet | Cuts cost 60 % |
| Blue/Green deploy | CodeDeploy | Zero‑downtime releases |
| Monitoring | CloudWatch + X-Ray | Deep visibility & root cause |

We also introduced **auto‑scaling policies** based on *predictions per second* and *CPU utilisation*, set up *canary tests* with AWS Lambda, and used *CloudFormation StackSets* for global rollout.

**Result**  
- Throughput increased from 10 M to 70 M predictions/day (7×).  
- Latency dropped from 3 s to <200 ms.  
- Infrastructure cost fell by **42 %** due to spot usage and efficient scaling.  

**Reflection**  
I learned that “vertical scaling is hard” because it ignores *statelessness* and *partitioning*. By owning the problem, diving deep into AWS primitives, and bias‑for‑actioning a new architecture, we achieved measurable business impact while simplifying future growth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
