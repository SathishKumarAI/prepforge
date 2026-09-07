---
qid: ing_8d7d4417e7__faang__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 554
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:02-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *load balancer* that can distribute incoming requests across multiple backend servers while guaranteeing high availability, low latency, and fault tolerance.  
Key assumptions to confirm:  

1. Traffic pattern – is it mostly read‑heavy or write‑heavy?  
2. Session persistence – do clients need sticky sessions?  
3. Scale – how many concurrent connections per second?  
4. Failure model – servers can crash or become unreachable; network partitions are possible.  
5. Metrics – we care about latency, throughput, and error rates.

**Approach**  
1. **Front‑end layer**: a DNS or edge CDN that resolves to multiple IPs.  
2. **Health monitoring**: each backend reports heartbeats (or is probed).  
3. **Routing algorithm**: start with round‑robin; augment with weighted least‑conn if traffic varies.  
4. **Session stickiness**: use consistent hashing or sticky cookies when required.  
5. **Failover**: on health check failure, remove node from rotation and re‑introduce after recovery.  
6. **Observability**: expose metrics (latency histograms, error rates) to a monitoring stack.

**Depth**  
- **Health checks**: TCP/HTTP GET `/health` every 5 s; consider hysteresis to avoid flapping.  
- **Algorithm**: weighted round‑robin + least‑conn fallback gives good load spread while respecting server capacity.  
- **Consistency**: consistent hashing keeps cache locality when nodes are added/removed, minimizing churn.  
- **Scalability**: stateless balancer instances behind a global load‑balancer (e.g., AWS ELB) can scale horizontally.  
- **Complexity**: O(1) per request routing; health checks O(n).  

**Edge Cases**  
- Sudden spike → overload a node → detect via max queue length and temporarily drop to other nodes.  
- Network partition → split‑brain: use quorum or read/write separation.  
- Sticky session on a failed node → fallback to new node and invalidate old session data.  

**Optimize & Communicate**  
I’d iterate by adding rate limiting, caching of health status, and adaptive weighting based on real‑time latency metrics. I’d explain each trade‑off: e.g., sticky sessions increase cache hit rates but hurt scalability; consistent hashing reduces churn but complicates routing logic. This structured narrative demonstrates problem‑solving, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
