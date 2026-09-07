---
qid: ing_68d209a215__aws__local
question: 'Explain: Eureka Server - Service Registry & Discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 408
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:21:22-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a team that migrated our monolith to microservices on **Amazon ECS**. The new architecture required a lightweight service registry so downstream teams could discover and scale stateless APIs without hard‑coding endpoints.

**Action**  
I chose **Eureka Server** (Spring Cloud) as the discovery mechanism because it offers in‑memory registration, health‑check integration, and easy client‑side load balancing. I deployed Eureka on an **Amazon ECS Fargate** cluster behind a **Application Load Balancer (ALB)** with target groups for each microservice.  

To ensure high availability I ran two Eureka replicas across different AZs, enabled auto‑scaling based on CPU usage, and integrated **AWS CloudWatch Alarms** to trigger automatic restarts if heartbeats failed. For cost control, I reserved the Fargate task placement strategy to “least‑available” and used **Spot Instances** for non‑critical services.

I also added a simple REST endpoint (`/eureka/apps`) that returns all registered instances in JSON, which our CI pipeline queries to generate dynamic service maps.  

**Result**  
After deployment we saw a **30 % reduction in API latency** (from 350 ms to 245 ms) because clients could now balance traffic across the most responsive nodes. The system’s **uptime rose from 99.6 % to 99.98 %**, and overall AWS spend on service discovery fell by **$1,200/month** thanks to Spot usage.  

**Leadership Principles Reflected**  
- **Customer Obsession:** Delivered a more reliable API surface for internal developers.  
- **Ownership & Dive Deep:** Designed end‑to‑end availability and cost strategy, iterating on metrics until SLA targets were met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
