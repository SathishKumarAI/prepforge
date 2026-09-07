---
qid: ing_18df58e76c__aws__local
question: 'Explain: Service Registration Options — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 531
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:22:05-05:00'
sources: []
---

**Answer – Service Discovery (Amazon‑style)**  

**Context (S)**  
In my last role I led the migration of a monolithic e‑commerce platform to a microservices architecture on AWS. The biggest blocker was how new services would find each other without hard‑coding IPs, especially under dynamic scaling.

**Task (T)**  
I had to design a service discovery solution that supported zero‑downtime deployments, high availability, and minimal operational overhead while keeping costs low.

**Action (A)**  

| Requirement | Design choice | AWS services |
|-------------|---------------|--------------|
| **Dynamic registration** | Each container registers its hostname/port on startup. | Amazon ECS Service Discovery (Cloud Map) |
| **Health checks** | Cloud Map integrates with ALB target groups and EC2‑based health checks. | Elastic Load Balancing, Route 53 Health Checks |
| **Latency & scalability** | Use AWS Global Accelerator + DNS CNAMEs to route to nearest region; keep TTL low (30 s). | Global Accelerator, Route 53 |
| **Observability** | Emit CloudWatch metrics for registration/deregistration events. | CloudWatch, X-Ray |
| **Cost** | Leverage free tier of Cloud Map for 1 M lookups/day; use Spot instances for non‑critical services. | EC2 Spot, Cloud Map |

I also added a fallback: if Cloud Map is unreachable, the service falls back to environment variables (static config) to maintain availability.

**Result (R)**  

* 99.999% service discovery uptime during a 6‑month rollout  
* Reduced deployment latency by **35 %** (from 12 s to 7.8 s per request)  
* Cut ops cost by **$18k/year** through Spot usage and eliminating manual DNS updates  

---

### Leadership Principles Highlighted
- **Ownership** – I drove the end‑to‑end solution, from requirements to production rollout.  
- **Dive Deep & Bias for Action** – I benchmarked Cloud Map vs custom solutions, iterated quickly, and implemented a robust fallback.  
- **Deliver Results** – Quantified impact on uptime, latency, and cost, directly improving customer experience.

Bar‑raisers look for clear ownership, deep technical reasoning, measurable outcomes, and lessons learned (e.g., we initially underestimated health‑check delays and fixed them by tuning Cloud Map TTL).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
