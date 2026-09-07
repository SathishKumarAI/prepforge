---
qid: ing_1415f6a927__aws__local
question: 'Explain: Advantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:22-05:00'
sources: []
---

**Situation – Task**  
I was tasked to redesign a real‑time recommendation engine that served 1 M users per day. The monolithic app made it hard to scale new models and caused 12 % downtime during deployments.

**Action – Technical Design**  
We split the system into stateless model inference services (ECS Fargate) behind an Application Load Balancer. For **service discovery**, we leveraged *AWS Cloud Map* so each service registers its DNS name (`model‑v1.example.com`) when it starts. The ALB uses target groups that automatically update from Cloud Map, eliminating hard‑coded endpoints and enabling zero‑downtime rolling updates.

Key services:  
- **ECS/Fargate** – autoscaling on CPU/Memory.  
- **Cloud Map** – dynamic DNS registration & health checks.  
- **ALB** – TLS termination, path‑based routing to the correct model version.  
- **Amazon S3 + SageMaker Endpoint** – for model storage and batch inference.

**Result**  
Deployments dropped from 12 % downtime to <1 %. Latency improved by 30 % because traffic was routed directly to healthy instances. Cost fell 18 % due to fine‑grained scaling of only the needed services.

**Leadership Principles Highlighted**  
- **Customer Obsession** – faster, more reliable recommendations increase engagement.  
- **Ownership & Dive Deep** – I audited health checks, tuned Cloud Map TTLs, and documented rollback procedures.

**Bar‑raiser Takeaway**  
Show ownership by reducing failure window, dive deep into DNS/health‑check interplay, quantify impact with clear metrics, and reflect on lessons from the initial monolith’s downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
