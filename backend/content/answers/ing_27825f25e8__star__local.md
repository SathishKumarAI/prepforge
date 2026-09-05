---
qid: ing_27825f25e8__star__local
question: 'Explain: IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 337
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:39-05:00'
sources: []
---

**Situation** – While leading the migration of our on‑prem analytics platform to a microservices architecture, we discovered that the existing service registry was using opaque instance IDs. The new deployment model required each service to expose its own IP so downstream components could route traffic directly and enable health checks.

**Task** – I had to design a lightweight, scalable mechanism for services to discover and publish their IP addresses while preserving isolation in a Kubernetes cluster, and integrate it with our existing service mesh.

**Action** – I introduced a sidecar pattern: each pod launched an Envoy proxy that exposed a local `/internal/ip` endpoint. Services queried this endpoint at startup to retrieve the pod’s assigned ClusterIP. The sidecar then pushed this IP into Consul as a key/value pair (`service/<name>/ip`). We added a TTL health check so stale entries were purged automatically. For cross‑namespace routing, we used Istio’s `ServiceEntry` objects and annotated pods with their public DNS name, mapping the internal IP to an external load balancer via Kubernetes annotations.

**Result** – The new system reduced service discovery latency by 35 % and eliminated manual IP hardcoding. We cut incident response time for connectivity issues from 45 minutes to under 5 minutes, and the Consul dashboard now shows real‑time health status for all services. I learned that coupling a sidecar with a key/value store can provide both flexibility and observability in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
