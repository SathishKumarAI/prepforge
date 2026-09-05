---
qid: ing_b5beca9d82__star__local
question: 'Explain: 3.5. Configuration Management Systems — System Design: What is
  Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 350
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:55-05:00'
sources: []
---

**Situation**  
When we launched a new recommendation engine for our e‑commerce platform, the model served from multiple Docker containers across three availability zones. Production traffic surged to 1.2 M requests per minute, and our existing load balancer struggled to keep up because it had static IPs for each container.

**Task**  
I needed to enable dynamic service discovery so that any new or removed inference instance could be automatically registered and routed without manual reconfiguration, ensuring zero‑downtime scaling and resilience against pod failures.

**Action**  
I introduced Consul as a lightweight key–value store and service registry. Each model container ran an Envoy sidecar that reported its health to Consul via gRPC. I rewrote the API gateway to query Consul for available endpoints, using weighted round‑robin routing in Envoy. To keep latency low, I added a short TTL cache on the gateway and implemented health checks that removed stale entries within 10 seconds of failure. I also set up automated CI pipelines to deploy new container images with embedded service registration scripts.

**Result**  
Service discovery cut request routing errors from 3.4% to <0.2% during traffic spikes, while scaling up or down became a matter of redeploying containers—no manual load‑balancer updates required. The system handled peak loads of 1.8 M RPS with sub‑50 ms added latency, and I learned that coupling lightweight registries with sidecar proxies can provide near‑real‑time resilience for ML inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
