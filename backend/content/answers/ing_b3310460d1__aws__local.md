---
qid: ing_b3310460d1__aws__local
question: What if load balancers fail? Are they not a single point of failure (SPOF)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 496
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:44-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of a global e‑commerce platform that served ~5 M users/day. The architecture relied on an Application Load Balancer (ALB) to front our containerized microservices. After a brief outage, we discovered the ALB was a single point of failure; when it crashed traffic stalled and revenue dropped 12 % in two hours.

**Action**  
1. **Redundancy** – I re‑architected to deploy *two* ALBs (primary & secondary) behind a Route 53 latency‑based routing policy, each spread across three Availability Zones with cross‑zone load balancing enabled.  
2. **Health checks** – Configured 30‑second health checks and a 5‑minute fail‑over window so that if one ALB becomes unhealthy, traffic automatically switches to the other without manual intervention.  
3. **Cost & scaling** – Added an Auto Scaling group for the EC2 instances behind each ALB; the group scales on CPU % (target 50 %) and uses Spot Instances where possible, reducing compute cost by ~18 %.  
4. **Monitoring** – Implemented CloudWatch metrics + SNS alerts for `ALB_HealthyHostCount` and latency spikes.  
5. **Testing** – Ran chaos‑engineering tests (K6) to simulate ALB failure; the failover occurred in <2 s, with zero downtime observed.

**Result**  
- 99.999% availability SLA met post‑fix.  
- Revenue impact reduced from 12 % loss to <0.01 % during simulated outages.  
- Cost savings of $36k/month on load‑balancer usage and compute.  

**Learning & Ownership**  
I documented the failure scenario in our incident playbook, added a “no single point of failure” checkpoint for all new services, and held a knowledge‑share session that reduced future onboarding time by 30 %. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—key Amazon leadership principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
