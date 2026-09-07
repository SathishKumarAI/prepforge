---
qid: ing_6c92802ef8__aws__local
question: 'Explain: Example: 10.0.0.0/20 — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 663
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:10-05:00'
sources: []
---

**Situation (S)**  
I was hired by a fintech startup to build a high‑throughput, low‑latency system that would expose an ML inference API for credit‑risk scoring. The service had to accept millions of requests per day from a global user base while staying within a tight $200k/yr budget.

**Task (T)**  
Design an IP‑based routing layer that maps incoming requests to the correct inference endpoint, guarantees 99.9 % availability, and scales elastically without manual intervention.

**Action (A)**  

| Design Decision | AWS Service(s) | Why |
|-----------------|----------------|-----|
| **IP block allocation** | VPC CIDR `10.0.0.0/20` split into four `/22` subnets per AZ | Gives 4 k IPs, enough for 1 M RPS with 4‑AZ redundancy |
| **Ingress routing** | Amazon API Gateway + Lambda@Edge | Edge locations reduce latency <30 ms; Lambda@Edge routes by `X-Client-IP` header to the correct subnet |
| **Compute pool** | ECS Fargate tasks behind an Application Load Balancer (ALB) per subnet | Serverless, auto‑scales with CloudWatch metrics; ALB health checks provide 99.9 % uptime |
| **Stateful routing table** | DynamoDB Global Tables + DAX cache | Near‑real‑time lookup of IP→endpoint mapping, 0.1 ms latency |
| **Observability** | Amazon CloudWatch Logs & X-Ray | Traces each request; alerts on cold starts or latency spikes |
| **Cost control** | Reserved Fargate capacity (6‑month term) + Spot Instances for burst traffic | $12k/yr baseline, +$3k/yr spot savings |

**Result (R)**  
- Achieved 1.2 M requests/day with <10 ms average latency and 99.97 % availability.  
- Reduced operational cost by 35 % versus a traditional EC2 fleet.  
- Scaled automatically during peak trading hours without manual scaling.

---

### Leadership Principles Reflected
- **Customer Obsession** – Delivered sub‑10 ms latency to end users worldwide.  
- **Ownership & Dive Deep** – I architected the entire IP routing stack, benchmarked each component, and iterated on failure scenarios (e.g., subnet outage).  
- **Bias for Action** – Deployed a minimal viable system in 2 weeks, then automated scaling and monitoring.

### What a Bar‑raiser Looks For
1. **Ownership**: I took full responsibility from concept to deployment.  
2. **Dive Deep**: Detailed trade‑offs (Fargate vs EC2, DynamoDB Global Tables vs RDS).  
3. **Quantified Impact**: 35 % cost savings, 99.97 % availability.  
4. **Learning From Failure**: After a subnet outage we added health‑check failover and increased redundancy, turning an incident into a design improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
