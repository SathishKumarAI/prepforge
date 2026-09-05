---
qid: ing_18df58e76c__star__local
question: 'Explain: Service Registration Options — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 355
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:18:50-05:00'
sources: []
---

**Situation** – While leading the deployment of a real‑time fraud detection pipeline at FinTechCo, our on‑prem Kubernetes cluster grew from 5 to 30 microservices (feature extraction, model inference, logging, alerting). The existing static config in each pod caused service outages whenever we added or removed services.  

**Task** – I needed to build a dynamic service registration and discovery layer so that new ML inference nodes could be discovered by the load balancer without manual edits, while keeping latency below 10 ms for predictions.  

**Action** – I introduced Consul as our service registry: each container registers its IP/port on startup via an Envoy sidecar. I wrote a lightweight Go agent that watches Consul’s KV store for health checks and updates the Envoy config using xDS. For failover, I enabled Consul’s circuit‑breaker policy so unhealthy nodes were automatically blacklisted. I also added a small Prometheus exporter to track registration latency and used Grafana dashboards to monitor the number of registered services versus the expected count.  

**Result** – The dynamic discovery cut deployment time from 2 days to under an hour, reduced prediction latency by 15 % (from 12 ms to 10 ms), and lowered the mean‑time‑to‑recover for a node failure from 45 min to 5 min. I learned that coupling service registration with health checks and observability is key to scaling ML workloads in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
