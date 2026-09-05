---
qid: ing_ba24969a3c__star__local
question: 'Explain: Solution — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 342
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:43:18-05:00'
sources: []
---

**Situation** – While leading the deployment of a recommendation engine for a retail client, our monolithic inference API kept hitting “service not found” errors during traffic spikes because new model versions were deployed to different containers without an updated registry.

**Task** – I had to create a resilient, server‑side service discovery system so that each request automatically routed to the correct container version, ensuring zero downtime and consistent latency.

**Action** – I chose Consul as the key‑value store for its health checks and DNS interface. Each model container registered itself with a TTL‑based lease and reported CPU/latency metrics via an internal Prometheus exporter. The inference gateway queried Consul’s DNS SRV records to resolve the current healthy instances, applying a weighted round‑robin based on recent latency. I also implemented a fallback circuit breaker in the gateway: if no healthy instance was found, it served a cached “last‑known‑good” model from Redis. All this was wrapped in a Go microservice that ran side‑car to each container, reducing latency by <5 ms.

**Result** – After rollout, request failures dropped from 12% during peak hours to <0.1%, and end‑to‑end latency improved by 18%. The system also cut deployment time for new models from 30 min to under 5 min. I learned that coupling health checks with dynamic DNS resolution is the most straightforward way to keep a machine‑learning inference stack robust at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
