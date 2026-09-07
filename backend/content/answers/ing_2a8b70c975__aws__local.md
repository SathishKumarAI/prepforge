---
qid: ing_2a8b70c975__aws__local
question: 'Explain: 4.2 Load Balancing and Health Checks — Single Point of Failure
  (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 464
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:31-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning the front‑end of a high‑traffic e‑commerce platform that previously relied on a single NAT gateway and a legacy round‑robin load balancer. The architecture suffered from a *single point of failure* (SPOF) during NAT failures, causing >30 % downtime per incident.

**Action**  
1. **Eliminate the NAT SPOF** – deployed two *NAT Gateways* in different AZs and attached them to a *VPC Endpoint Service* for outbound traffic.  
2. **Load Balancing & Health Checks** – replaced the old balancer with an *Application Load Balancer (ALB)*, configured *target groups* per micro‑service and enabled *per‑instance health checks* on TCP/HTTP.  
3. **Route53 Failover** – set up a weighted routing policy that directs 80 % traffic to ALB and 20 % to an *Edge‑Optimized CloudFront* distribution; Route53 health checks monitor the ALB’s `/healthz`.  
4. **Auto Scaling & Blue/Green Deploys** – integrated with CodeDeploy, so new instances are only registered after passing health checks.

**Result**  
- **99.97 % availability** achieved (down from 93 %) over a 6‑month period.  
- *Cost* reduced by 12 % due to efficient NAT usage and automated scaling.  
- *Mean Time To Recovery* dropped from 45 min to <5 min.

**Reflection**  
I owned the end‑to‑end redesign, dove deep into latency & cost trade‑offs (e.g., choosing TCP vs HTTP health checks), and learned that coupling failover with observability is key. This aligns with **Customer Obsession** (maximizing uptime) and **Ownership** (taking responsibility for architecture resilience).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
