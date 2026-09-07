---
qid: ing_a9b67100e9__aws__local
question: 'Explain: Load Balancing Across Multiple Servers — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 496
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:08-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a migration of our recommendation engine from a single‑node monolith to a horizontally scalable microservice cluster on AWS. The challenge was to expose the service behind a public endpoint while keeping internal traffic isolated, and we had to decide between a *proxy* (client‑side) and a *reverse proxy* (server‑side).  

**Action**  
I first mapped the requirements: 1 M concurrent users, <50 ms latency SLA, 99.99% availability, and cost under $10k/month. I then compared the options:

| | Proxy | Reverse Proxy |
|---|---|---|
| **Traffic path** | Client → proxy → backend | Client → reverse proxy → backend |
| **Scalability** | Limited by client bandwidth; hard to add capacity | Elastic load balancer (ELB) + Auto Scaling handles spike |
| **Security** | Exposes internal IPs if misconfigured | Keeps backend IPs hidden, allows WAF and TLS termination |
| **Observability** | Logs per client hard to aggregate | Centralized access logs in CloudWatch; easy metrics via ALB/LB |
| **Cost** | Minimal (client‑side) | ELB ($0.025/hr + data transfer), but saves on backend compute |

I chose a **reverse proxy** using an Application Load Balancer (ALB) fronting ECS Fargate tasks, with WAF for OWASP rules and TLS termination at the ALB. I added a caching layer in CloudFront to offload 30% of requests.

**Result**  
Post‑migration we saw:  
- Latency dropped from 120 ms to 38 ms (70% improvement).  
- 99.999% uptime over 12 months, exceeding SLA.  
- Costs fell by 15% due to reduced backend CPU usage and CloudFront caching.

**Learnings & Bar‑raiser cues**  
I demonstrated **Ownership** by owning the entire redesign, **Dive Deep** through metric analysis, and **Deliver Results** with measurable performance gains. I also documented a failure case (misconfigured security group) that taught us to automate IAM role checks in CI/CD.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
