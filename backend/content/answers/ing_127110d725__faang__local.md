---
qid: ing_127110d725__faang__local
question: 'Explain: Conclusion — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 478
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:26:40-05:00'
sources: []
---

**Clarify**

You’re asking about *service discovery* in a distributed ML system—how individual model‑serving components (e.g., inference pods, feature stores) find and connect to each other at runtime.  
Assumptions:  
1. Multiple micro‑services expose REST/gRPC endpoints.  
2. Services may scale up/down or be redeployed behind load balancers.  
3. Latency and fault tolerance are critical for real‑time predictions.

**Approach**

1. Identify the registry (e.g., Consul, Eureka, Kubernetes API).  
2. Decide on discovery mode: *client‑side* vs *server‑side*.  
3. Design health checks to keep the registry accurate.  
4. Integrate with load balancers or service meshes for traffic routing.

**Depth**

- **Registry** stores metadata (IP/port, version, tags).  
- **Client‑side discovery**: each client queries the registry and performs round‑robin or least‑conns load balancing. Complexity: O(1) lookup if cached; otherwise network hop per request.  
- **Server‑side discovery**: a proxy (e.g., Envoy) routes to healthy backends based on registry data, offloading logic from clients.  
- Health checks run periodically; failed nodes are deregistered automatically.  
- For ML inference, we often use *server‑side* via Istio/Envoy to keep model serving pods stateless and scale elastically.

**Edge Cases**

- Network partitions: stale registry entries → failed requests. Mitigate with TTLs and local caching.  
- Rapid scaling (autoscaling) can cause race conditions; ensure atomic registration/deregistration.  
- Multi‑region deployments: latency spikes if discovery points to distant nodes—use region tags.

**Optimize & Communicate**

Improve by adding *watch* streams to avoid polling, caching with TTL, and integrating circuit breakers. Explain that service discovery decouples deployment from consumption, enabling zero‑downtime model rollouts—a key requirement for production ML pipelines. This structure shows clear problem restatement, methodical planning, technical depth, edge‑case awareness, and actionable optimization—all aligned with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
