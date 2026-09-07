---
qid: ing_ba24969a3c__faang__local
question: 'Explain: Solution — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 457
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:55:36-05:00'
sources: []
---

**Clarify**  
We’re asked how *server‑side service discovery* works in a machine‑learning (ML) deployment context—i.e., an ML model hosted behind multiple inference servers that need to be found and routed to at runtime. I’ll assume we have stateless inference services, a load balancer or API gateway, and a registry of healthy instances.

**Approach**  
1. **Registry** – Each inference server registers itself (e.g., via Consul, etcd, or cloud‑native service discovery).  
2. **Health checks** – The registry continuously pings each instance to verify liveness.  
3. **Lookup** – Clients query the registry for a list of healthy endpoints.  
4. **Routing** – A load balancer (or client‑side library) picks an endpoint, often with round‑robin or weighted policies.

**Depth**  
- *Registration*: servers publish metadata (model version, latency, capacity).  
- *Health checks*: use TCP/HTTP probes; exponential backoff on failures.  
- *Lookup*: cache the list locally to reduce latency, invalidate on TTL expiry or event notifications.  
- *Routing*: implement client‑side load balancing with jitter to avoid thundering herd. Complexity: O(1) per lookup after caching; overall system scales linearly with instance count.

**Edge Cases**  
- **Stale registry entries** if a server crashes before deregistering → health checks catch it.  
- **Version drift**: clients may hit older model versions; include version tags in discovery payload.  
- **Network partitions** causing split‑brain → use quorum reads/writes in the registry.

**Optimize & Communicate**  
To improve latency, move discovery logic into the gateway (API Gateway + Envoy) so client code stays simple. Add circuit‑breaker patterns to prevent cascading failures. I’d explain this flow diagrammatically, highlight trade‑offs between freshness vs. overhead, and emphasize how this design supports zero‑downtime ML model rollouts—critical for high‑availability services at FAANG scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
