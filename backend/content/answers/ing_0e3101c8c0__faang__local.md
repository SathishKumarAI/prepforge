---
qid: ing_0e3101c8c0__faang__local
question: 'Explain: Round robin load balancing — What is Load Balancing?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 452
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:16:50-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *round‑robin load balancing* and, more broadly, what “load balancing” means in distributed systems. I’ll assume the audience knows basic networking but not necessarily how load balancers work.

**Approach**  
1. Define load balancing in general.  
2. Explain round‑robin as one of its simplest algorithms.  
3. Highlight key properties (statelessness, fairness).  
4. Mention practical use cases and trade‑offs.  

**Depth**  
- **Load Balancing**: A technique that distributes incoming requests across multiple backend servers to maximize throughput, minimize latency, and avoid overloading any single node. It keeps the system highly available and scalable.  
- **Round‑Robin**: Requests are forwarded sequentially to each server in a fixed list. After the last server, the cycle restarts. This algorithm is stateless (no per-client state), simple to implement, and guarantees equal share of traffic if all servers have identical capacity. In practice, most HTTP load balancers (NGINX, HAProxy) use round‑robin as the default.  
- **Complexity**: O(1) per request; negligible overhead.  
- **Trade‑offs**: Does not account for server health or current load; can send traffic to a busy or down node unless combined with health checks.  

**Edge Cases**  
- Server failure → round‑robin will still try the dead node until health check marks it bad.  
- Heterogeneous servers → some nodes finish requests faster, causing queue buildup on slower ones.  
- Sticky sessions: round‑robin can break session affinity unless combined with cookie/hash based routing.

**Optimize & Communicate**  
For production systems, I’d layer round‑robin with health checks and optionally weight servers by capacity (weighted round‑robin). I’d explain that while the algorithm is simple, real deployments often use a hybrid approach to balance fairness with fault tolerance. This narrative showcases structured thinking, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
