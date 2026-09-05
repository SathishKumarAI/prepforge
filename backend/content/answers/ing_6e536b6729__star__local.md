---
qid: ing_6e536b6729__star__local
question: 'Explain: 4.2. Server-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 371
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:08:06-05:00'
sources: []
---

**Situation** – In a micro‑services rollout for our e‑commerce platform, the product catalog, recommendation engine, and inventory services were spun up on Kubernetes. As we scaled to 120+ pods across three availability zones, clients began hitting “connection refused” errors because hard‑coded service URLs were stale after restarts.

**Task** – I had to implement a robust, low‑latency server‑side discovery mechanism that could dynamically locate healthy instances, support load balancing, and integrate with our existing CI/CD pipeline without adding manual DNS updates.

**Action** – First, I evaluated Consul, Eureka, and Kubernetes’ native Endpoints. Choosing Consul for its rich health checks and key/value store, I deployed a sidecar agent in each pod that registered itself on startup, sending periodic heartbeats. On the client side, I wrapped our HTTP clients with a custom resolver that queried Consul’s catalog API, caching results locally and refreshing every 30 seconds. To avoid DNS bottlenecks, I used Go’s `net` package to bypass the OS resolver, directly querying Consul over HTTPS. Finally, I added a circuit‑breaker layer (Hystrix‑style) so failed lookups wouldn’t cascade to downstream services.

**Result** – Service discovery latency dropped from an average of 120 ms (hard‑coded DNS) to under 5 ms, and request failures fell by 87%. The system now auto‑scales with zero manual intervention, and we reduced ops overhead by 40 hours per month. I learned that coupling discovery tightly with health checks and caching yields both resilience and performance in large‑scale micro‑service ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
