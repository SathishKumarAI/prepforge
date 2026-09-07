---
qid: ing_c697c3c06d__aws__local
question: 'Explain: Setup — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 389
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:51:44-05:00'
sources: []
---

**Situation & Task**  
I led a migration of our monolith into a micro‑service architecture for the new AI recommendation engine. The challenge was to expose dozens of services (data ingestion, model training, inference) behind a single public endpoint while keeping latency < 120 ms and ensuring high availability.

**Action – Architecture**  
* **Spring Cloud Gateway** (first‑line router) → *Zuul* (fallback gateway) for legacy endpoints.  
* Each service runs in ECS Fargate behind an Application Load Balancer; the gateway uses **RouteLocator** with predicates (`Path`, `Header`) and filters (`RewriteUrl`, `RateLimiter`).  
* For stateful inference, we attach a **Redis Cache** via ElastiCache to reduce model load time.  
* We enable **JWT auth** through Spring Security, delegating token validation to Cognito for scale.

**Result**  
After deployment:  
* Latency dropped from 350 ms to 90 ms (30% reduction).  
* Traffic handled increased by 5× without extra cost—ECS autoscaling kept $0.00065 per vCPU‑hour.  
* Zero downtime during cutover; 99.999% SLA achieved.

**Leadership Principles Reflected**  
* **Customer Obsession** – Fast, reliable inference directly improves user experience.  
* **Ownership & Dive Deep** – I architected the routing layer, tuned predicates, and monitored metrics in CloudWatch to identify bottlenecks.  

**Bar‑raiser cues**  
I quantified impact (latency, cost), demonstrated deep technical knowledge of Spring Cloud components, and iterated on failure logs (e.g., spike due to cache miss) to harden the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
