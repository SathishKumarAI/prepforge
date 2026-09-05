---
qid: ing_ada1ba85f0__star__local
question: 'Explain: 3.1. Manual Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 331
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:20-05:00'
sources: []
---

**Situation** – While leading a team that built an online recommendation engine for a streaming platform, we noticed the latency spike during peak traffic. Our microservices—data ingestion, feature store, model inference, and user profile service—were spread across multiple Kubernetes clusters. The load balancer kept hitting stale endpoints because services were registering manually in our config files.

**Task** – I had to design an automated system discovery mechanism that would dynamically route requests to healthy instances, reduce manual overhead, and cut response times by at least 30 % during traffic surges.

**Action** – We integrated Consul for service registration and health checks. Each microservice registers itself on startup with its IP, port, and a TTL heartbeat. I wrote a lightweight Go agent that updates the Consul catalog every 10 seconds and exposes a DNS‑based API to the ingress controller. The ingress uses Consul’s DNS resolver to pick healthy backends via round‑robin load balancing. We also added circuit breaker logic with Hystrix to isolate failing services, ensuring that if one node went down, traffic automatically rerouted.

**Result** – After deployment, average inference latency dropped from 480 ms to 310 ms—a 35 % improvement—and the system maintained 99.8 % uptime during a 50 % traffic spike. I learned that coupling service discovery with health checks and circuit breaking is essential for resilient ML pipelines at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
