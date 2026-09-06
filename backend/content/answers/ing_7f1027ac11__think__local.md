---
qid: ing_7f1027ac11__think__local
question: 'Explain: Frontend Listener — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 471
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:24:20-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Identify what “Frontend Listener” means (HTTP entry point vs WebSocket/GRPC).  
- Assume a stateless API service behind the LB; traffic is read‑write and can be cached.  
- Decide on constraints: latency < 100 ms, throughput ≥ 10k RPS, 99.9 % availability.

**2️⃣ Adopt a design framework**  
Use the classic “Load Balancer → Frontend Listener → Service” pattern.  
Break it into (a) client‑side expectations, (b) network/topology, (c) scaling & resilience.

**3️⃣ Step‑by‑step reasoning**  
1. **Ingress point**: single public IP/ALB to expose the API.  
2. **Listener rules**: route based on path or header → backend target groups.  
3. **Health checks**: periodic /health endpoints, fail‑over after N failures.  
4. **Connection handling**: keep‑alive, TLS termination at LB, optional SNI.  
5. **Scaling policy**: autoscale target group based on CPU/latency metrics.  
6. **Security**: WAF, rate limiting, IP whitelisting, CORS.  
7. **Observability**: logs, metrics (latency, error rates), tracing via distributed context.

**4️⃣ Common traps to avoid**  
- Mixing request‑level vs connection‑level load balancing logic.  
- Forgetting sticky sessions when stateful data is stored client‑side.  
- Over‑simplifying health checks (e.g., only pinging the LB port).  
- Ignoring TLS handshake overhead in latency budgets.

**5️⃣ Sanity‑check & verbalize**  
- Verify that each component has a clear responsibility and minimal coupling.  
- Explain trade‑offs: e.g., terminating TLS at LB vs passing through to backend.  
- Walk through a failure scenario (LB node down) and show how traffic is rerouted without downtime.

By following this numbered path, you can systematically construct and articulate a robust “Frontend Listener – Design Load Balancer” architecture for any system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
