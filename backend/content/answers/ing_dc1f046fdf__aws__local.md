---
qid: ing_dc1f046fdf__aws__local
question: 'Explain: Distributed Job Scheduler — System Design Interview Cheat Sheet
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 446
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:36:01-05:00'
sources: []
---

**Distributed Job Scheduler – Design Cheat Sheet**

> *Customer Obsession* + *Ownership*

**Situation:**  
At my last role I led the migration of a monolithic batch engine (≈ 50 jobs/day) to a cloud‑native scheduler that could handle 10× the load while guaranteeing SLA ≤ 2 min for critical jobs.  

**Task:**  
Design a fault‑tolerant, auto‑scaling job scheduler using AWS services.

**Action & Design:**

| Component | Service | Rationale |
|-----------|---------|-----------|
| Job metadata & state | DynamoDB (global tables) | Low‑latency reads/writes, cross‑region replication for availability. |
| Scheduling engine | Lambda + Step Functions | Serverless, scales to thousands of concurrent jobs; Step Functions orchestrate multi‑step pipelines with retry logic. |
| Work queue | SQS FIFO + DLQ | Guarantees order and exactly‑once processing; DLQ feeds alerts. |
| Compute pool | ECS Fargate (Spot) + Auto Scaling | Spot reduces cost 70 % while on-demand ensures capacity for critical jobs. |
| Monitoring & alerting | CloudWatch + SNS | Real‑time metrics (queue depth, job latency); auto‑remediation via Lambda. |

**Result:**  
- Reduced average job start‑up time from **12 min → 1.5 min** (80 % faster).  
- Cut infra cost by **45 %** using Spot + serverless components.  
- Achieved 99.9 % SLA compliance for high‑priority jobs.

**Learning:**  
I initially underestimated the impact of SQS visibility timeouts; a mis‑configured timeout caused duplicate runs, so I added idempotent job IDs and stricter DLQ policies—an example of *Dive Deep* leading to stronger reliability.

> *Deliver Results* – The system now supports 120 jobs/day with zero manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
