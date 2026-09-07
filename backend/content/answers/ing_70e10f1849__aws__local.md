---
qid: ing_70e10f1849__aws__local
question: Why is redundancy needed when using LB’s? How does this redundancy works?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 423
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:40:43-05:00'
sources: []
---

**Why do we need redundancy behind load balancers and how it actually works?**

> *Leadership Principles: Ownership & Dive Deep*

**Situation / Task:**  
When I led the migration of our e‑commerce checkout service to AWS, the initial deployment used a single **Application Load Balancer (ALB)** with one Auto Scaling group. Within 48 hrs we observed a 12 % spike in latency during flash sales, and the ALB hit its maximum healthy target limit.

**Action:**  
I added *redundancy* by launching two ALBs (one per AZ) behind a **Network Load Balancer (NLB)** that performed DNS‑based cross‑region failover. Each ALB was attached to an independent Auto Scaling group, and health checks were configured to route traffic only to healthy targets. I also enabled **ALB access logs** to trace failed requests.

**Result:**  
After the change, 99.9 % of requests hit the nearest AZ, reducing average latency from 350 ms to 210 ms (−40 %) and eliminating the 12 % spike during peak load. The NLB’s health‑check circuit allowed us to detect a failing AZ within 30 seconds and automatically shift traffic—ensuring 100 % availability for the next 6 months without manual intervention.

**How redundancy works:**  
1. **Multiple Load Balancers (ALBs)** spread across Availability Zones.  
2. A **Network Load Balancer** or Route 53 health‑check routes traffic to healthy ALBs.  
3. Each ALB fronts an independent Auto Scaling group, so a target failure in one AZ doesn’t affect the other.

This pattern gives *high availability*, *fault isolation*, and *elastic scaling* while keeping operational overhead low—exactly what we needed for mission‑critical checkout flows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
