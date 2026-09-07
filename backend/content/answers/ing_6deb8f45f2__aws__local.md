---
qid: ing_6deb8f45f2__aws__local
question: 'Explain: Blue-Green — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 549
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:25-05:00'
sources: []
---

**Situation (S)**  
At my previous role we were rolling out a new recommendation model that had to stay online 99.9 % of the time while we tested a 30‑day A/B deployment on our e‑commerce platform.

**Task (T)**  
Implement a blue‑green strategy in Kubernetes so that we could switch traffic between two identical service replicas with zero downtime, track performance metrics, and rollback if needed—all within cost limits.

**Action (A)**  
1. **Architecture** – Deployed each model version as a separate Deployment (`blue` & `green`) behind an AWS ALB with two target groups.  
2. **Traffic shifting** – Used Kubernetes *Service* selectors to point the ALB at one target group, then gradually adjusted the ALB’s weighted routing (0 → 100 %) via Terraform scripts triggered by a Jenkins pipeline.  
3. **Observability** – Instrumented both pods with Prometheus metrics (`latency`, `error_rate`) and pushed alerts to CloudWatch; integrated SageMaker endpoints for real‑time inference logs.  
4. **Rollback** – Automated rollback logic in the CI/CD pipeline: if error rate > 2 % or latency > 200 ms during a 15‑minute window, Terraform reverts the ALB weight back to 100 % blue.  
5. **Cost control** – Enabled GPU auto‑scaling (via HPA) and stopped idle pods after 30 min of no traffic; saved ~18 % on compute spend.

**Result (R)**  
The switch took < 2 minutes with zero user impact, and the new model achieved a 12.3 % lift in conversion rate while keeping latency within SLA. The rollback mechanism prevented a potential 5‑hour outage, saving an estimated $15k in lost revenue.

---

### Leadership Principles

- **Customer Obsession** – Zero‑downtime release protects user experience.  
- **Ownership** – Built end‑to‑end pipeline, monitored health, and acted automatically on failure.  

### What a bar‑raiser listens for

- **Depth (Dive Deep)** – Detailed explanation of ALB weighted routing, HPA logic, and cost calculations.  
- **Quantified Impact** – 12.3 % conversion lift, 18 % cost savings, $15k outage avoided.  
- **Learning from Failure** – Highlighted rollback triggers and how we tuned thresholds after a near‑miss in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
