---
qid: ing_fecf06f6a2__faang__local
question: 'Explain: Types of Service Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 543
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:36-05:00'
sources: []
---

**Clarify**  
We’re asked to define *service discovery* in a distributed system and list its common types. I’ll assume the audience knows micro‑services but not the internals of how they locate each other.

**Approach**  
1. Give a concise definition.  
2. Enumerate the main discovery patterns (client‑side, server‑side, hybrid).  
3. Mention typical implementations and trade‑offs for each.  

**Depth**  
Service discovery is the mechanism by which services find and communicate with one another without hard‑coded endpoints. It usually involves a registry that stores service instances, their health status, and metadata.

| Type | How it works | Pros | Cons |
|------|--------------|------|------|
| **Client‑side** (e.g., Netflix Eureka, Consul) | Client queries the registry for available instances and picks one (round‑robin, weighted). | Load‑balancing at client; less load on discovery server. | Clients must handle retries/health checks; more complex client logic. |
| **Server‑side** (e.g., AWS Cloud Map, Azure Service Fabric) | Requests are sent to a front‑end proxy/load balancer that consults the registry and forwards traffic. | Simpler clients; centralized routing decisions. | Proxy becomes a bottleneck; single point of failure if not replicated. |
| **Hybrid / Service Mesh** (e.g., Istio, Linkerd) | A lightweight sidecar per pod intercepts traffic, uses local cache + central registry for discovery and policy enforcement. | Fine‑grained control, observability, resilience. | Higher overhead; more moving parts. |

All patterns rely on health checks (TCP/HTTP/GRPC heartbeats) to keep the registry accurate.

**Edge Cases**  
- Network partitions: stale entries can cause failed requests.  
- Rapid scaling events may overwhelm the discovery service if not rate‑limited.  
- Clients that don’t refresh their cache may hit downed instances.

**Optimize & Communicate**  
If I were designing a new system, I’d start with client‑side discovery for simplicity and then add a lightweight sidecar (service mesh) only if we need advanced routing or security policies. I’d explain this trade‑off to stakeholders: *“We’ll keep the system lean now; once traffic grows or policy needs arise, we can layer on a service mesh without refactoring all services.”* This shows awareness of scalability and operational complexity—key points for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
