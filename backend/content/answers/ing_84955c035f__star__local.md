---
qid: ing_84955c035f__star__local
question: 'Explain: Service Discovery — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 326
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:58:24-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we had 12 microservices that each exposed their own REST endpoints. By the end of Q2 our clients complained about latency spikes and error rates above 5 % during peak hours.

**Task**  
I was tasked with reducing service-to-service call failures and exposing a single point for external consumers while keeping internal scaling flexible.

**Action**  
First, I introduced a lightweight service‑discovery mechanism using Consul. Each microservice registered its health endpoint and version tag; the gateway queried Consul to build an up‑to‑date routing table. I then deployed Kong as our API Gateway: it handled TLS termination, rate limiting (100 req/s per client), JWT authentication, and request/response transformations. For load balancing I used Kong’s round‑robin plugin combined with Consul’s health checks so unhealthy instances were automatically removed from rotation. Finally, I added a circuit breaker layer via Hystrix to prevent cascading failures when one service went down.

**Result**  
After deployment, external error rates dropped from 5 % to below 0.3 %, and average end‑to‑end latency improved by ~30 %. Internally we achieved zero‑downtime deployments because the gateway continued routing to healthy instances while new versions were rolled out. I learned that coupling service discovery with a feature‑rich API Gateway can dramatically improve resilience and simplify client integration in a microservice architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
