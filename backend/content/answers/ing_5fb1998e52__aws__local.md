---
qid: ing_5fb1998e52__aws__local
question: 'Explain: Reference — Loadbalancer'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 659
total_tokens: 886
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:27-05:00'
sources: []
---

**Reference Load‑Balancer for a Real‑Time ML Inference Service**

**Situation**  
I was tasked to expose an image‑classification model (ResNet‑50) to 10 k concurrent users on the edge while keeping latency < 200 ms and cost <$0.02 per inference.

**Task**  
Design a scalable, highly available load‑balancing layer that routes requests to GPU instances, auto‑scales with traffic spikes, and exposes health checks for continuous delivery.

**Action**  
1. **Architecture** – I chose an **Application Load Balancer (ALB)** in front of a **Fargate service** running the inference container.  
2. **Routing** – Path‑based routing (`/predict`) to a target group with *deregistration delay* set to 30 s, ensuring graceful shutdown during deployments.  
3. **Health Checks** – `/healthz` endpoint returning HTTP 200 only when the model is loaded; ALB performs every 10 s.  
4. **Auto‑Scaling** – Target Tracking policy on *RequestCountPerTarget* (goal 50 req/s) linked to GPU capacity. Scale‑in disabled for at least 5 min after a spike to avoid churn.  
5. **Cost/Availability trade‑off** – Using Spot instances (average 70 % discount) with **Capacity Provider** fallback to On‑Demand; I set *Minimum* 2 Fargate tasks, *Maximum* 20.  
6. **Security** – ALB with TLS termination and IAM role for S3 model store access.  

**Result**  
- Latency dropped from 350 ms to 120 ms (mean), meeting SLA.  
- 99.97 % request success rate during a 4‑hour traffic surge.  
- Cost reduced by **32 %** compared with the previous EC2‑based design.  

---

### Leadership Principles

| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Customer Obsession** | Built low‑latency, highly available service to deliver instant predictions for end users. |
| **Ownership & Dive Deep** | Took full ownership of the ML pipeline; performed deep performance profiling and cost analysis to choose ALB + Fargate over custom Nginx on EC2. |

### Bar‑raiser Expectations

- **Ownership** – Demonstrated end‑to‑end control from model deployment to traffic routing.  
- **Dive Deep** – Quantified latency, success rate, and cost savings; explained trade‑offs between Spot vs On‑Demand.  
- **Quantified Impact** – 32 % cost reduction, 120 ms latency, 99.97 % availability.  
- **Learning from Failure** – After an initial spike causing 504 errors, I introduced a *slow start* policy and adjusted deregistration delay to prevent premature task termination.

This design shows clear alignment with AWS services, solid metrics, and the Amazon leadership mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
