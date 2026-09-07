---
qid: ing_8d7d4417e7__aws__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 490
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:45-05:00'
sources: []
---

**Situation** – In a recent interview for an ML Ops role, the interviewer asked me to design a load‑balancing layer for a real‑time recommendation engine that must serve 200 k requests per second with <10 ms latency.

**Task** – Clarify requirements: *what is “high availability” in this context?*  
I asked:  
1. SLA on uptime (99.999%)?  
2. Are we scaling horizontally or vertically?  
3. What is the failure mode (network, compute, data)?  
4. Cost constraints?  

**Action** – With answers, I sketched a solution:

| Component | AWS Service | Why |
|-----------|-------------|-----|
| Ingress L7 LB | **AWS Application Load Balancer** (ALB) | HTTP/HTTPS routing, health checks per target |
| Compute | **Amazon ECS Fargate** containers with autoscaling | Zero‑admin infra, scales to 4× traffic |
| Cache | **ElastiCache Redis** | Reduce DB hits, keep <5 ms cache latency |
| Observability | **CloudWatch + X-Ray** | Trace request path, detect bottlenecks |

*Scalability*: ALB handles millions RPS; Fargate tasks auto‑scale on CPU/Memory metrics.  
*Availability*: Multi‑AZ deployments, ALB’s built‑in failover, ECS service discovery.  
*Cost*: Spot instances for cache nodes; pay‑as‑you‑go for Fargate.

**Result** – The design achieved 99.995% uptime in a simulated load test with 250 k RPS and cost savings of ~30% versus an EC2‑based baseline.

---

### Leadership Principles Highlighted  
- **Customer Obsession**: Asked clarifying questions to ensure the solution met real user needs.  
- **Ownership & Dive Deep**: Took full responsibility for every layer, quantified trade‑offs, and iterated on the design based on metrics.

*Bar‑raiser cues*: clear ownership, depth of architecture, data‑driven impact, and a brief note on how I would learn from a failure (e.g., adding circuit breakers if cache latency spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
