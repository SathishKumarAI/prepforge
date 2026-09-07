---
qid: ing_1a6bed493b__aws__local
question: 'Explain: Concurrent Connections — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 456
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:08-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked to redesign the load‑balancing layer for a SaaS platform that suddenly hit 10 k concurrent users during a product launch. The goal: keep <1 % error rate and <200 ms latency while keeping cost below $2k/month.

**Action – Design**  
I chose **Amazon ALB + EC2 Auto Scaling** for HTTP traffic, backed by **Elastic Load Balancing (ALB)** to get native content‑based routing. For stateful WebSocket connections I deployed a **Redis‑cluster on Amazon ElastiCache**, sharded across two AZs, and used **AWS AppConfig** to push connection limits dynamically.

*Scalability*: ALB auto‑scales by request count; EC2 instances run in multiple AZs for 99.99 % availability.  
*Availability*: Redis replicas provide failover within seconds; ALB’s health checks prevent routing to unhealthy nodes.  
*Cost*: Spot instances for stateless workers cut EC2 spend by ~35 %; ElastiCache reserved instances reduced cache cost by 20 %.  

**Result**  
Post‑launch metrics: concurrency handled 12 k users, latency dropped from 350 ms to 180 ms (46 % improvement), error rate <0.3 %. Monthly infrastructure spend was $1,750—15 % below budget.

**Reflection**  
I took full ownership, diving deep into traffic patterns and failure modes. The bar‑raiser will note my bias for action (rapid rollout of ALB + Redis) and quantified impact (latency & cost). I also logged lessons on over‑provisioning in early tests—now we use real‑time metrics to adjust scaling thresholds automatically.  

**Leadership Principles**  
- *Customer Obsession*: Delivered a smoother user experience.  
- *Ownership*: Owns design, implementation, and post‑deployment analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
