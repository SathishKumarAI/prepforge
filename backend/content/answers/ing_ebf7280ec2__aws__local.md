---
qid: ing_ebf7280ec2__aws__local
question: 'Explain: How it provides high availability: — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 440
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:14-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the launch of a real‑time recommendation engine that powered 3 million daily active users on an e‑commerce platform. The business required **99.99 % availability** to avoid revenue loss—each 1 minute outage could cost ~USD 50k.

**Action (Design)**  
I architected a multi‑AZ, serverless stack:

| Layer | AWS Service | Why |
|-------|-------------|-----|
| Inference | SageMaker Endpoint (multi‑region) | Low latency, built‑in auto‑scaling |
| Orchestration | Lambda + Step Functions | Event‑driven, no servers to manage |
| Data store | DynamoDB Global Tables | Multi‑AZ replication, 99.999 % durability |
| Caching | ElastiCache Redis (cluster mode) | Reduce endpoint calls by 70 % |
| Edge | CloudFront + Route 53 latency routing | Fast global delivery & health checks |

**Result**  
After deployment, we achieved **>99.995 % uptime** over six months and cut inference latency from 350 ms to 85 ms (≈ 75 % improvement). Cost dropped by 18 % thanks to serverless scaling.

**Leadership Principles Reflected**

- **Customer Obsession** – Designed for uninterrupted user experience.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility, dissected latency bottlenecks and engineered a fault‑tolerant solution.  

**Bar‑raiser takeaways**  
I quantified impact (downtime cost, latency), demonstrated deep technical choices, and learned from an initial 5 % outage that led to adding DynamoDB Global Tables—showing iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
