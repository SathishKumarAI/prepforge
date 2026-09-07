---
qid: ing_71104da6ce__faang__local
question: 'Explain: Implement service discovery — 9 Best Practices for Building Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 501
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:49-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *service‑discovery* layer that supports micro‑service registration, lookup, and health monitoring. Assume: multiple instances per service, dynamic scaling, heterogeneous environments (Docker/K8s), and need for low latency & high availability.

**Approach**  
1. Choose a discovery mechanism (e.g., Consul/Eureka/Etcd).  
2. Design a lightweight client SDK that registers on start‑up, deregisters on shutdown, and pings health checks.  
3. Store service metadata (IP, port, tags) in the key‑value store.  
4. Implement caching + TTL to reduce lookup traffic.  
5. Add circuit‑breaker logic for unhealthy instances.

**Depth**  
- **Registration:** POST `/register` with JSON `{name, address, port, tags}`; backend stores under `services/<name>/<id>` with lease/TTL.  
- **Lookup:** GET `/discover?service=<name>&tag=prod`; returns sorted list by health score.  
- **Health‑check:** Clients expose `/health`, server pushes heartbeat to KV store; if TTL expires, entry is purged.  
- **Scalability:** Use sharded KV backends (Etcd clusters) and gossip protocols for consistency.  
- **Complexity:** O(1) register/deregister, O(n) lookup where n = instances of requested service.

**Edge Cases**  
- Network partitions → stale entries; mitigate with lease renewals & eventual consistency.  
- High churn → watch for race conditions in registration order.  
- Security: enforce mutual TLS and role‑based access to KV store.

**Optimize & Communicate**  
- Cache responses locally (e.g., 5 s TTL) to cut down on KV traffic.  
- Use client‑side load balancing with round‑robin or weighted least‑conn.  
- Expose metrics (`service_discovery_requests`, `cache_hits`) for observability.  

Narrate the trade‑offs: Consul offers richer features (ACL, service mesh) but adds operational overhead; Etcd is lighter and fits Kubernetes native setups. Highlight that the design prioritizes *availability* (auto‑failover), *performance* (caching), and *observability* (metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
