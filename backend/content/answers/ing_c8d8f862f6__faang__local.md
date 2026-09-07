---
qid: ing_c8d8f862f6__faang__local
question: 'Explain: How it works — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 511
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:07-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *load balancer* that distributes incoming requests across multiple backend servers while ensuring high availability and low latency.  
Key assumptions:  
- Requests are stateless (or session‑aware via sticky sessions).  
- Backend capacity is known but can change over time.  
- The system must tolerate server failures and provide health checks.

**Approach**  
1. **Ingress layer** – a DNS or edge router forwards traffic to the load balancer pool.  
2. **Health monitoring** – each backend runs a heartbeat endpoint; the LB polls every T seconds, marking nodes *healthy* or *unhealthy*.  
3. **Scheduling policy** – choose round‑robin for simplicity; extendable to weighted least‑connections or consistent hashing if needed.  
4. **Session stickiness** – optional cookie‑based mapping when stateful sessions are required.  
5. **Failover & redundancy** – run two LBs behind a global load balancer (e.g., AWS ELB) so that one can fail without service interruption.

**Depth**  
- *Time complexity*: O(1) per request for round‑robin; weighted least‑connections requires O(log n) with a priority queue.  
- *Space*: O(n) to store backend status and weights.  
- *Health check interval* balances responsiveness against network chatter (typically 5–10 s).  
- *Scalability*: horizontal scaling of LBs is trivial; each LB maintains its own health list, or a shared state store (Redis/Kubernetes Service Mesh) can be used for consistency.

**Edge Cases**  
- Sudden spike in traffic → LB may overload healthy nodes; mitigated by auto‑scaling policies.  
- Backend flapping (rapid up/down) → exponential backoff on retries.  
- Persistent network partitions → ensure graceful degradation, serve cached responses if possible.

**Optimize & Communicate**  
Future improvements: integrate *service discovery* via a registry (Consul/etcd), implement *request throttling* per client IP, and add *TLS termination* for end‑to‑end encryption. When explaining to interviewers, emphasize the trade‑off between simplicity (round‑robin) and sophistication (least‑connections or consistent hashing) and how each choice aligns with operational goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
