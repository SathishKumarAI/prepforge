---
qid: ing_d378d93e91__faang__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 527
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:59-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a load‑balancing layer/API gateway for an Instagram‑style service (image upload, feed serving, likes/comments). Key assumptions:  
- Millions of concurrent users, high read/write throughput.  
- Latency < 100 ms for API calls.  
- Horizontal scalability and zero downtime during scaling.  
- Stateless front‑end; persistence lives in downstream services.

**2️⃣ Approach**  
1. **Ingress routing** – a global CDN edge (e.g., CloudFront) forwards traffic to regional load balancers.  
2. **Layer 4/7 LB** – use an L7 gateway (AWS ALB or NGINX Plus) for path‑based routing (`/upload`, `/feed`, `/media/*`).  
3. **Service discovery & health checks** – each microservice registers with Consul/Eureka; LB routes only healthy instances.  
4. **Session stickiness** – optional cookie‑based affinity for write paths (e.g., upload).  
5. **Rate limiting / WAF** – protect against abuse at the gateway.

**3️⃣ Depth**  
- **Horizontal scaling**: LB auto‑scales based on request rate; uses weighted round‑robin or least‑connections.  
- **Latency**: keep-alive connections, TLS termination at LB to reduce CPU overhead downstream.  
- **Reliability**: graceful draining during instance retirements; circuit breaker patterns upstream.  
- **Complexity**: O(1) request routing after hash; health checks run in background threads.

**4️⃣ Edge Cases**  
- Sudden traffic spikes (e.g., viral post): LB must provision new instances quickly; use predictive autoscaling.  
- Mixed protocol requests (HTTP/2, gRPC): ensure LB supports both or proxy to appropriate service.  
- Failover across regions: implement cross‑region DNS failback with low TTL.

**5️⃣ Optimize & Communicate**  
To improve throughput, move hot paths (feed) behind a CDN cache; expose a “cache‑bypass” header for real‑time updates. I’d present the diagram first, walk through request flow, then discuss trade‑offs: higher cost vs. lower latency, complexity of multi‑region routing vs. simplicity of single‑region LB. This structured narrative satisfies FAANG’s SIGNAL rubric—clarity, approach, depth, edge handling, and optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
