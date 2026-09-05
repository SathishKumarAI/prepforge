---
qid: ing_d9399b362c__star__local
question: 'Explain: 4.1. Client-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 327
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:05-05:00'
sources: []
---

**Situation:**  
At my last role I was building a micro‑service architecture for an e‑commerce platform that needed to scale from a handful of users to millions during flash sales. The product team wanted zero downtime deployments and automatic load balancing across dozens of stateless services.

**Task:**  
I had to design a client‑side discovery mechanism so each service instance could locate its peers without relying on a central registry at runtime, while still handling rapid scaling and failover.

**Action:**  
I chose Netflix Eureka for registration and implemented a lightweight Java client that cached service endpoints. The client performed periodic heartbeats to update the cache and used Consul’s health checks to prune stale entries. To reduce latency I added a small in‑memory LRU store per microservice, refreshing only when a new instance was detected. I also integrated circuit breaker logic (Hystrix) so if discovery failed, traffic would be routed to backup instances or queued. All of this ran behind a shared NGINX reverse proxy that performed request routing based on the updated service map.

**Result:**  
The system handled 10× traffic spikes with <1 ms added latency for discovery lookups and achieved 99.97% uptime during a 24‑hour sale. I learned that client‑side discovery trades off slightly higher memory usage for faster request routing, and that coupling discovery logic with health checks is essential to avoid “stale” services in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
