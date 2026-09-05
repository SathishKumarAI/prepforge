---
qid: ing_4909b48bea__star__local
question: 'Explain: Service discovery — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 288
total_tokens: 525
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:43-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we migrated our fraud‑detection pipeline from monolith to a set of Python microservices orchestrated by Kubernetes. The new architecture meant each model served as an independent REST endpoint, but the internal load balancer couldn't automatically locate them, leading to 30 % latency spikes during peak transaction times.

**Task** – I was tasked with implementing a robust service discovery mechanism so that the orchestration layer could dynamically find and route traffic to the right inference services without manual updates.

**Action** – I chose Consul as the service registry because of its health‑check integration and DNS interface. I wrapped each model container in a Docker image that, on startup, registered itself with Consul using the `consul-template` agent for real‑time KV updates. I added readiness probes to expose only healthy instances and used Envoy’s xDS API to fetch routing configs from Consul’s catalog. Finally, I scripted an automated rollback if health checks failed during a rollout.

**Result** – The new discovery layer reduced request latency by 42 % during load peaks and cut manual ops effort for scaling models by 80 %. I learned that coupling health checks with dynamic configuration is key to resilient ML microservices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
