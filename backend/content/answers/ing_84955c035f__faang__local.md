---
qid: ing_84955c035f__faang__local
question: 'Explain: Service Discovery — What is an API Gateway? - by Ashish Pratap
  Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 428
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:57-05:00'
sources: []
---

**Clarify**  
The interview asks for a concise explanation of *Service Discovery* and the role of an **API Gateway** in a micro‑services architecture. I’ll assume the audience knows basic networking but not necessarily distributed systems patterns.

**Approach**  
1. Define Service Discovery.  
2. Explain what an API Gateway is and how it leverages discovery.  
3. Highlight key responsibilities (routing, protocol translation, security).  
4. Touch on trade‑offs and common implementations.

**Depth**  

| Concept | Explanation |
|---------|-------------|
| **Service Discovery** | A registry where services register their endpoints at runtime. Clients query the registry to locate a healthy instance (e.g., Eureka, Consul, etcd). Enables dynamic scaling, failover, and decouples service location from code. |
| **API Gateway** | A single entry point for external clients that routes requests to appropriate micro‑services. It typically performs: <br>• *Request routing* using the discovery registry.<br>• *Protocol translation* (REST ↔ gRPC).<br>• *Authentication & rate limiting.*<br>• *Aggregating responses* and returning a unified contract to clients. |
| **Interaction** | The gateway queries the service registry for instance addresses, then forwards traffic. If an instance fails, the registry updates and the gateway automatically reroutes. |

**Edge Cases**  
- Registry downtime → fallback or cached endpoints.  
- Circular dependencies between services.  
- High request volume causing gateway bottleneck; need clustering.

**Optimize & Communicate**  
Mention that a well‑designed gateway reduces client complexity, centralizes cross‑cutting concerns, and improves observability. Trade‑off: introduces one more network hop; mitigate with efficient caching or edge‑side routing (e.g., Envoy). Conclude by noting that many FAANGs use *Gateway + Service Discovery* to scale millions of requests per day while keeping services loosely coupled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
