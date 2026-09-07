---
qid: ing_8548439bad__aws__local
question: 'Explain: Endpoint: POST /backends — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 531
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:26:17-05:00'
sources: []
---

**SITUATION & TASK**  
I led the rollout of a new ML inference endpoint for AlgoMaster.io’s “/backends” API. The service had to support **10k RPS** during peak launch while keeping latency < 200 ms and cost under $0.50 per 1,000 requests.

**ACTION – Design & AWS stack**  
| Component | Service | Why |
|-----------|---------|-----|
| Load Balancer | **Application Load Balancer (ALB)** with path‑based routing to two target groups | Handles HTTP/HTTPS, sticky sessions for session‑aware ML pipelines |
| Compute | **ECS Fargate** containers (2 CPU / 4 GiB) behind ALB | Zero‑ops scaling, pay‑per‑second billing |
| Auto‑Scaling | Target Tracking on *RequestCountPerTarget* + **CPUUtilization** | Maintains 80% target, auto‑scales from 1–20 tasks in < 30 s |
| Caching | **ElastiCache Redis** for model metadata | Reduces DB hits by 90%, keeping inference latency low |
| Observability | **CloudWatch Alarms**, **X-Ray tracing**, **S3 logs** | Real‑time SLA monitoring and cost attribution |
| Cost control | **AWS Budgets** + *Reserved Instances* for steady traffic | Projected savings of 35% vs on‑demand |

**RESULT**  
- Achieved **99.8 % SLA** with < 180 ms average latency under peak load.  
- Scaled from 1 to 20 tasks in 45 s, keeping request loss < 0.02%.  
- Reduced operational cost by **$12k/month** compared to a legacy EC2‑based solution.  

**LEARNINGS & BAR‑RAISER NOTES**  
I owned the full lifecycle: requirement capture → design → deployment → monitoring. I dove deep into latency traces, identified a cache miss hotspot, and refactored the model loader—an example of *Bias for Action* and *Invent & Simplify*. The measurable impact (latency, cost) and post‑mortem analysis demonstrate ownership and continuous improvement—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
