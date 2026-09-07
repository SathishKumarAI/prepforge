---
qid: ing_7655d12010__faang__local
question: 'Explain: How services find each other — System Design: What is Service
  Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 442
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:18:46-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *service discovery*—the mechanism by which distributed services locate and communicate with one another in a micro‑services architecture. Assume we have stateless or stateful services that may scale horizontally, run behind load balancers, and can be added or removed at runtime.

**Approach**  
1. **Define the problem:** Each service needs to find peers without hard‑coding IPs.  
2. **Identify components:** Registry (catalog of endpoints), client (lookup logic), optional health checks, and DNS/consul/etcd integration.  
3. **Explain types:** *Client‑side* vs *server‑side* discovery.

**Depth**  
- **Registry:** A centralized or distributed store (e.g., Consul, Eureka, etcd) where services register their address, port, and metadata upon startup.  
- **Health checks:** Periodic probes that remove unhealthy instances.  
- **Client‑side discovery:** Service X queries the registry to get a list of healthy Y instances, then load‑balances locally (e.g., round‑robin). Complexity: O(1) per lookup if cached; trade‑off is stale data.  
- **Server‑side discovery:** A proxy or API gateway looks up destinations and forwards requests. Simpler for clients but adds hop latency.  
- **DNS‑based discovery:** Use SRV records or service mesh sidecars to resolve service names via DNS, leveraging caching.

**Edge cases**  
- *Network partitions* → registry becomes unreachable; fallback to cached entries.  
- *Rapid scaling* → registration lag leads to stale data.  
- *Multi‑region deployments* → need consistent hashing or region tags to avoid cross‑zone traffic.

**Optimize & communicate**  
To improve, use short TTLs for DNS, gossip protocols for registry replication, and client caching with refresh intervals. When explaining, emphasize how discovery decouples deployment from consumption, enabling zero‑downtime scaling and resilience—key signals interviewers look for in a solid system design answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
