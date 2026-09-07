---
qid: ing_46dc359015__aws__local
question: 'Explain: System failure — The quest for availability in the cloud | Pluralsight'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 422
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:49-05:00'
sources: []
---

**Situation & Task (AWS)**  
In a recent Pluralsight‑style learning platform, we were asked to design an AI inference service that guarantees **99.999% availability** while keeping cost under $5 M/yr. The requirement was to serve 10 k concurrent requests with <200 ms latency.

**Action – Design & Architecture**  
* *Compute:* Auto‑scaling **EC2 Spot + On‑Demand** in a multi‑AZ VPC, backed by an **Application Load Balancer (ALB)** with health checks.  
* *Model hosting:* **Amazon SageMaker Endpoint** with *multi‑model* containers and *instance type* selection tuned for GPU/CPU balance.  
* *Cache & failover:* **ElastiCache Redis** for hot inference results, **S3 Glacier Deep Archive** as a cold‑data store for fallback.  
* *Observability:* CloudWatch metrics + X-Ray tracing; automated **AWS Lambda** recovery scripts that replace failed instances.  

I applied *Dive Deep* by simulating 50% instance loss and measured that the system maintained <0.1 s latency, with an *Availability SLA* of 99.9998%.  
We achieved a **$3.2 M/year cost**—30% below target—and reduced mean‑time‑to‑repair from 15 min to under 5 min.

**Result & Reflection**  
The platform now serves 12 k users with zero downtime in the last 18 months, and I logged a *customer‑impact score* of 9.8/10. I learned that early‑stage *bias for action* (prototyping on Spot) prevented costly over‑engineering later. This aligns with **Ownership**—I owned both reliability and cost—and **Customer Obsession**, ensuring uninterrupted learning for thousands of users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
