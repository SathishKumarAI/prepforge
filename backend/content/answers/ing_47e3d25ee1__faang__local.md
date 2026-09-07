---
qid: ing_47e3d25ee1__faang__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 489
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:07-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a **load balancer** that distributes client requests across multiple backend servers.  
Assumptions to confirm:  
- HTTP/HTTPS traffic, stateless or session‑aware?  
- Expected request volume (tps), latency SLAs, and failure modes.  
- Do we need sticky sessions or global load balancing across regions?  

**2️⃣ Approach**  
1. **Ingress point** – a front‑end reverse proxy (e.g., HAProxy/Nginx).  
2. **Service registry** – keep an up‑to‑date list of healthy backends (via health‑checks).  
3. **Routing algorithm** – round‑robin, least‑connections, or weighted hashing.  
4. **Health‑check & failover** – periodic probes and graceful draining.  
5. **Metrics & monitoring** – latency, error rates, queue lengths.  

**3️⃣ Depth**  
- **Algorithm**: Weighted round‑robin with consistent hashing for session stickiness (O(1) lookup).  
- **Health checks**: TCP + HTTP ping every 5 s; mark unhealthy after 3 failures.  
- **Failover**: use a connection pool that retries on failure and removes dead nodes from rotation.  
- **Complexity**: O(n) to build the node list, O(1) per request routing.  
- **Trade‑offs**: Consistent hashing reduces cache misses but can cause uneven load if weights vary sharply; weighted round‑robin is simpler but may underutilize capacity.  

**4️⃣ Edge Cases**  
- Sudden spike (flash crowd): rate‑limit at ingress and use auto‑scaling to add nodes.  
- Partial failures: keep a fallback node pool or CDN edge.  
- Time‑out requests: implement circuit breakers to prevent cascading failures.  

**5️⃣ Optimize & Communicate**  
Explain that we’ll start with a simple round‑robin for quick MVP, then iterate to weighted hashing once traffic patterns emerge. Highlight monitoring dashboards and alerting (e.g., Prometheus + Grafana). Conclude by noting that this design scales horizontally, provides high availability, and is easy to extend with global LB or multi‑region support.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
