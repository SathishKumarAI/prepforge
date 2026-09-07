---
qid: ing_0379d15a79__aws__local
question: 'Explain: Netflix Zuul — Spring Cloud: Routing with Zuul and Gateway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 435
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:32:08-05:00'
sources: []
---

**Situation & Task**  
I was hired by a streaming startup that had just migrated its monolith to micro‑services on AWS. The team needed an API gateway that could route traffic, enforce rate limits, and provide dynamic service discovery for dozens of new services (auth, catalog, recommendation). We chose Netflix **Zuul 2** (Spring Cloud Gateway) because it integrates natively with Spring Boot, supports dynamic routing, and can be deployed in ECS/EC2 behind an Application Load Balancer.  

**Action**  
- Defined a *gateway* service as a container image on Amazon ECS Fargate, exposing port 8080.  
- Configured Zuul routes via `application.yml`, using **Spring Cloud DiscoveryClient** to pull service instances from **Amazon ECS Service Registry** (or Consul).  
- Added circuit‑breaker logic with Resilience4j and used **AWS X-Ray** for tracing.  
- Deployed behind an ALB with two target groups, enabling *blue/green* deployments via CodeDeploy.  
- Implemented per‑service rate limits using Redis (Elasticache) as a shared token bucket.  

**Result**  
Within 6 weeks, API latency dropped from 350 ms to **120 ms** on average; error rates fell by 85%. The gateway handled >200k requests/sec with <1% failure, and cost was reduced by ~30% compared to a manual Nginx setup.  

**Leadership Principles**  
- **Customer Obsession:** Delivered a smoother user experience through lower latency.  
- **Ownership & Dive Deep:** Built and maintained the gateway end‑to‑end, tuning routing logic until SLA met.  

**Bar‑raiser cues** – clear ownership, data‑driven impact, deep understanding of AWS services (ECS, ALB, X‑Ray), and an iterative learning loop (post‑mortem on rate‑limit spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
