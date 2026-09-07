---
qid: ing_6e536b6729__faang__local
question: 'Explain: 4.2. Server-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 405
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:00:18-05:00'
sources: []
---

**Clarify**  
Service discovery lets micro‑services locate each other without hard‑coding addresses. I’ll assume a distributed system with many stateless services that register themselves at runtime, and clients need low‑latency lookups.

**Approach**  
1. **Register/Heartbeat model** – services announce presence to a registry (e.g., Consul, Eureka).  
2. **Lookup API** – clients query the registry for an instance of a service.  
3. **Health checks & eviction** – registry removes stale entries if heartbeats stop.  
4. **Load balancing** – return multiple healthy instances; client or proxy distributes traffic.

**Depth**  
- *Data model*: key = service name, value = list of `(ip:port, metadata)`.  
- *Consistency*: eventual consistency is acceptable; strong consistency would add latency.  
- *Scalability*: use partitioned KV stores (etcd/Consul) and gossip for fault tolerance.  
- *Security*: TLS mutual auth between services and registry.  
- Complexity: O(1) lookup, O(n) heartbeats per service. Trade‑off: richer metadata vs. larger registry size.

**Edge Cases**  
- Network partitions → split‑brain; use quorum reads/writes.  
- Rapid scaling (spike in instances) → ensure registry can handle burst registrations.  
- Stale entries if a node crashes without heartbeat → implement TTL and graceful deregistration.

**Optimize & Communicate**  
We could cache lookups locally to reduce round trips, invalidating on registry events. For high‑throughput systems, embed discovery into sidecar proxies (Envoy) to offload clients. I’d explain this flow to the interviewers, emphasizing trade‑offs between consistency, latency, and fault tolerance—exactly what FAANG teams care about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
