---
qid: ing_069cc4ef59__faang__local
question: 'Explain: 3.2. Self-Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 517
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:46-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks for an explanation of *Service Discovery* in the context of a self‑registration microservice system (e.g., users sign up and services need to find each other). Key assumptions: we’re dealing with stateless, horizontally scalable services; communication is over HTTP/REST or gRPC; latency matters.

**2️⃣ Approach**  
I’ll first define the concept, then describe how it works in practice, list common patterns (client‑side vs server‑side), and finish with trade‑offs and when to pick each. I’ll keep the explanation concise yet thorough.

**3️⃣ Depth**  
Service Discovery is a mechanism that lets services locate one another dynamically without hard‑coding addresses.  
- **Client‑side discovery**: the client queries a registry (e.g., Consul, Eureka) or uses DNS SRV records to get a list of healthy instances and then load‑balances locally. It’s lightweight but requires clients to understand the discovery protocol.  
- **Server‑side discovery**: a proxy/load‑balancer (NGINX, Envoy, API Gateway) queries the registry and forwards traffic to an instance. Clients only hit the gateway; they’re insulated from changes in the service topology.  
Both patterns rely on heartbeats or health checks so that unhealthy nodes are removed. In self‑registration flows, a new user service instance registers itself after starting, often with metadata (region, version). The registry then propagates this to consumers.

**4️⃣ Edge Cases**  
- *Split‑brain*: network partitions can cause stale entries; use quorum or strong consistency in the registry.  
- *Cold start*: if discovery isn’t ready before a service starts, it may fail; add retry/backoff logic.  
- *Scaling*: large registries need sharding or hierarchical lookup to keep query latency low.

**5️⃣ Optimize & Communicate**  
I’d suggest using a lightweight DNS‑based registry for simple setups (e.g., Kubernetes’ CoreDNS) and a dedicated service like Consul when you need richer metadata and ACLs. I’d emphasize that the choice between client‑side and server‑side discovery should be driven by deployment model, security posture, and how often services change. This structured answer demonstrates clear thinking, depth of knowledge, and awareness of real‑world trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
