---
qid: ing_d8984b52ae__aws__local
question: 'Explain: Single Point of Failure — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 498
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:15-05:00'
sources: []
---

**Situation / Task**  
While launching a real‑time fraud detection model for a payment gateway, my team noticed that the inference endpoint was a *single point of failure*—a single EC2 instance behind an Application Load Balancer (ALB). A crash would bring down 3 % of daily transaction volume (~$12 M/yr).

**Action**  
1. **Redundancy & Availability** – Deployed the model as a **Dockerized Lambda layer** on **Amazon ECS Fargate** with *service‑discovery* across two AZs, using an ALB with health checks.  
2. **Scalability** – Enabled **Target Tracking Scaling** (CPU ≤ 70%) and **Predictive Scaling** for peak hours; this kept latency < 120 ms at 99th percentile.  
3. **Cost & Trade‑offs** – Switched from on‑demand EC2 to Fargate spot + reserved capacity, reducing infra cost by 35 % while maintaining SLA ≥ 99.9 %.  
4. **Observability** – Integrated **Amazon CloudWatch Metrics**, **X-Ray traces**, and automated rollback via **CodeDeploy**.

**Result**  
- Zero downtime during the next six months of production traffic (≈ 1.2 M transactions/day).  
- Latency improved from 250 ms to 95 ms (average), increasing conversion rate by 4.7 %.  
- Annual cost savings of $450K.

---

### Bar‑raiser Checklist
| ✔ | What they look for |
|---|--------------------|
| Ownership | Took end‑to‑end ownership, from architecture to deployment. |
| Dive Deep | Detailed trade‑offs between Fargate vs EC2, spot vs reserved. |
| Quantified Impact | Provided concrete metrics: latency reduction, cost savings, revenue uplift. |
| Learning from Failure | Learned that a single ALB target is risky; redesigned for multi‑AZ resilience. |

*Leadership Principles referenced:* **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
