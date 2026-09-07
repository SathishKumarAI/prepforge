---
qid: ing_47e3d25ee1__aws__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 378
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:08:02-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was asked to architect a global load‑balancing layer for an ML inference service that needed to serve ~30 k requests/sec with < 20 ms latency while maintaining cost efficiency.

**Action (Dive Deep + Invent & Simplify)**  
I started by mapping the traffic profile: 70 % of calls came from North America, 20 % from Europe, 10 % from Asia. I chose **Amazon Global Accelerator** for global L7 routing and **AWS Elastic Load Balancing (ALB)** per region to terminate TLS and perform health checks on containerized inference pods in ECS Fargate.  
For auto‑scaling I used **Application Auto Scaling** tied to CloudWatch metrics (CPU & request count) with a target tracking policy that kept CPU < 65 %. To reduce cost, I enabled **Spot Instances** for non‑critical regions and implemented a **warm‑start cache** in ElastiCache Redis so the first inference per model shard hits the warm cache.  

**Result (Deliver Results)**  
The rollout cut latency from 45 ms to 18 ms (60 % improvement) and lowered monthly spend by $12k compared with an on‑prem load balancer. The system survived a simulated 50 % traffic spike without any SLA violations.

**Reflection (Ownership + Bias for Action)**  
I documented the trade‑offs: Global Accelerator adds ~10 cents/GB but gives sub‑1 ms latency; Spot Instances risk eviction, mitigated by graceful draining. I shared these findings in a post‑mortem and updated our infra playbook, ensuring faster future deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
