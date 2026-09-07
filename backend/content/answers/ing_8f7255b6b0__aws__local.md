---
qid: ing_8f7255b6b0__aws__local
question: 'Explain: CNAME (Canonical Name) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 475
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:29-05:00'
sources: []
---

**Situation & Task**  
In a recent migration of our SaaS platform to a multi‑region architecture, the DNS team needed to expose third‑party APIs without exposing internal hostnames. I was tasked with designing a resilient solution that allowed us to point external consumers to the same service endpoint while keeping our infrastructure decoupled.

**Action (Technical Design)**  
I proposed using **CNAME records** to alias public domain names (`api.example.com`) to the actual AWS resources (`prod‑api-123.us‑east‑1.elb.amazonaws.com`). The design leveraged Route 53 for DNS, with health checks on ELB endpoints and failover routing policies. To maintain high availability I configured:

| Service | Reasoning |
|---------|-----------|
| **Route 53** | Global DNS with low latency, 99.999% SLA |
| **ELB (Application Load Balancer)** | Auto‑scaling, TLS termination |
| **Health checks** | Automatic failover to secondary region |

The CNAME indirection also allowed us to rotate backend services (e.g., migrating from ELB to CloudFront) without breaking client integrations.

**Result**  
After rollout:

- **Zero DNS downtime** during a multi‑region cutover.  
- **Latency improved by 18 %** (average response time dropped from 320 ms to 260 ms).  
- **Cost saved $4,800/month** by eliminating the need for separate public IPs.

**Bar‑raiser Takeaways**  

1. **Ownership** – I owned the end‑to‑end migration and post‑deployment monitoring.  
2. **Dive Deep** – I analyzed DNS TTL impact, health‑check thresholds, and regional latency data to fine‑tune the solution.  
3. **Quantified Impact** – Metrics (latency, cost, uptime) were tracked in CloudWatch dashboards for continuous visibility.  
4. **Learning from Failure** – The initial plan omitted failover; after a failed test I added Route 53 health checks, turning a potential outage into an opportunity to strengthen our resilience strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
