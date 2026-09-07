---
qid: ing_ada1ba85f0__faang__local
question: 'Explain: 3.1. Manual Registration — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 405
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:07-05:00'
sources: []
---

**Clarify**  
You’re asking about *service discovery* in the context of a “Manual Registration” system design question. I’ll assume you mean a distributed micro‑services architecture where services must find each other at runtime without hard‑coding endpoints.

**Approach**  
1. Define what service discovery is.  
2. Explain why it’s needed (dynamic scaling, failure handling).  
3. Show the two main patterns: *client‑side* and *server‑side*.  
4. Briefly mention typical registries (Consul, Eureka, etc.) and health checks.

**Depth**  
Service discovery is a mechanism that lets services locate one another dynamically at runtime. In micro‑services, instances can spin up or down; hard‑coded URLs would break. A *service registry* holds metadata (IP/port, version, tags).  

- **Client‑side discovery**: the client queries the registry for an instance list and picks one (e.g., round‑robin).  
- **Server‑side discovery**: a load balancer or gateway performs the lookup before forwarding traffic.  

Both rely on periodic *heartbeats* or health checks to keep entries fresh. Registries may support DNS integration, enabling simple `http://myservice.local` lookups.

**Edge Cases**  
- Network partitions can cause stale registry data → fallback strategies (circuit breakers).  
- Large numbers of instances demand efficient lookup (hash‑based routing).  
- Version mismatches require semantic tagging in the registry.

**Optimize & Communicate**  
Highlight trade‑offs: client‑side discovery reduces load on the gateway but adds latency to each request; server‑side centralizes traffic but becomes a single point of failure. Mention that many production systems combine both with health‑check retries and graceful degradation, ensuring high availability while keeping the system flexible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
