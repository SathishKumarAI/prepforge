---
qid: ing_7896507ba0__aws__local
question: 'Explain: How TLS Works — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 536
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:58:02-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
In 2023 I led the migration of our public‑facing API from HTTP to HTTPS for a global e‑commerce platform that served ~15 M active users/month. The goal was to secure user data and comply with PCI‑DSS.

*Task:*  
Design a TLS‑enabled architecture that guarantees end‑to‑end encryption, zero downtime during rollout, and cost‑effective scaling under peak traffic (up to 2 kRPS).

*Action:*  
1. **Requirements & Dive Deep** – identified cipher suites (TLS 1.3 only), client compatibility, and latency targets (<50 ms).  
2. **AWS Services** – deployed an Application Load Balancer (ALB) with TLS termination, integrated AWS Certificate Manager (ACM) for automated renewal, and used CloudFront as a CDN to cache static content while preserving HTTPS.  
3. **Scalability & Availability** – ALB automatically scales across AZs; we set up health checks on NLB‑backed EC2 instances behind an Auto Scaling Group with 1 min scaling policies.  
4. **Cost & Trade‑offs** – chose `m5.large` instances (≈$0.096/h) and leveraged spot fleets for non‑critical workloads, reducing spend by 35% compared to on‑demand.  
5. **Monitoring & Rollback** – CloudWatch metrics (latency, error rate) triggered Lambda alerts; a blue/green deployment via CodeDeploy ensured instant rollback.

*Result:*  
- Zero service disruption during migration; uptime remained >99.99%.  
- Average TLS handshake latency dropped from 120 ms to 45 ms.  
- PCI‑DSS audit passed on first attempt, avoiding $250k in penalties.  

**What a Bar‑raiser Listens For**

| Criterion | How I Demonstrated It |
|-----------|-----------------------|
| Ownership | Handled certificate renewal, scaling, and cost optimization end‑to‑end. |
| Dive Deep | Detailed cipher suite analysis, latency profiling, and cost model. |
| Quantified Impact | 35% cost savings; <50 ms latency; 99.99% uptime. |
| Learning from Failure | Post‑mortem on a failed TLS handshake test led to adding ALB health checks for certificate validity. |

This showcases my technical depth, customer focus, and ownership—core Amazon values.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
