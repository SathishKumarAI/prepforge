---
qid: ing_f7f5eea918__faang__local
question: How do load balancers work? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 612
total_tokens: 849
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:16:43-05:00'
sources: []
---

**Clarify**  
You’re asking how a load balancer distributes incoming requests across multiple servers—i.e., what “load balancing” means in a distributed system. I’ll assume we’re dealing with stateless HTTP traffic, a pool of homogeneous application nodes, and the goal is to maximize throughput while avoiding over‑loading any single node.

**Approach**  
1. **Define the role** – an intermediary that receives client requests and forwards them to backend servers.  
2. **Explain key metrics** – latency, throughput, fault tolerance, and resource utilization.  
3. **Show common algorithms** – round‑robin, least‑connections, IP hash, weighted variants.  
4. **Illustrate failure handling** – health checks, graceful draining, retries.

**Depth**  
A load balancer sits in front of a cluster (often behind a DNS entry). When a request arrives, the LB selects a target using its algorithm and forwards the TCP/HTTP packet, often terminating TLS to terminate SSL/TLS off‑load. It then streams the response back to the client, preserving end‑to‑end latency.

- **Round‑robin**: simple counter; O(1) selection but ignores current load.  
- **Least‑connections**: queries each node’s active connection count; more accurate but requires state or a shared cache.  
- **IP hash**: deterministic mapping of client IP → server; good for session persistence without sticky sessions.  
- **Weighted**: assigns scores to nodes (e.g., CPU, memory) and distributes proportionally.

Health checks run at configurable intervals; failed nodes are removed from rotation until they recover. Some balancers also support *sticky sessions* via cookies or session IDs when stateful interactions exist.

Complexity is typically O(1) per request for simple algorithms; more sophisticated ones add a small overhead but keep overall throughput high (hundreds of thousands RPS on commodity hardware).

**Edge Cases**  
- **Burst traffic**: weighted least‑connections can mitigate spikes.  
- **Sticky sessions**: if stateful, naive round‑robin may split user sessions causing cache misses.  
- **Network partition**: health checks must be fast to avoid routing stale traffic.  
- **Zero downtime deploys**: graceful draining ensures in‑flight requests finish before a node is taken down.

**Optimize & Communicate**  
Explain that the choice of algorithm depends on workload characteristics (stateless vs stateful, bursty vs steady). For high‑traffic services, combine weighted least‑connections with health checks and TLS off‑load. When presenting to stakeholders, emphasize measurable SLAs: 99.9% availability, <50 ms additional latency, and linear scalability as nodes are added. This narrative showcases structured reasoning, technical depth, and awareness of real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
