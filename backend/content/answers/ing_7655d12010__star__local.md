---
qid: ing_7655d12010__star__local
question: 'Explain: How services find each other — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 308
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:33-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we moved from monoliths to micro‑services on Kubernetes. By Q3 our API gateway was hitting timeouts because new services were spinning up every few minutes after auto‑scaling, and the load balancer still pointed to old IPs.

**Task** – I had to implement a robust service discovery mechanism so that the gateway could locate instances in real time without manual configuration or downtime.

**Action** – I chose Consul for its lightweight agent model. I deployed a sidecar pattern: each pod ran a Consul agent that registered itself with health checks (HTTP /health). The gateway used the Consul DNS interface to resolve service names (`orders.service.local`) and automatically refreshed TTLs. To reduce latency, I added a local caching layer in the gateway using the Consul KV store for endpoint lists, invalidated on heartbeat failures. We also set up ACL tokens so only authorized services could register or query.

**Result** – Service discovery reduced API gateway errors from 12% to <0.5%. Auto‑scaling became seamless; new instances were reachable within 2 seconds of launch. The team gained confidence in rolling deployments, and I learned how health checks, TTLs, and DNS integration together create a self‑healing service mesh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
