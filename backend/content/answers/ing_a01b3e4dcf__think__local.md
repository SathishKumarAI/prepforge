---
qid: ing_a01b3e4dcf__think__local
question: 'Explain: Success Response (200 OK) — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 529
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:40:26-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- What is “Success Response (200 OK)” in this context? It’s a REST‑style HTTP status indicating that the load balancer successfully processed a request.  
- Assume we’re designing a stateless, horizontally scalable layer behind an application server farm.  
- The interviewer likely wants you to think about how a load balancer returns 200s while still balancing traffic and handling failures.

**2️⃣ Mental model / framework**  
Use the classic **client → LB → pool of back‑ends** diagram:  
1. Client sends request to LB IP.  
2. LB chooses a backend (round‑robin, least‑conn, hash, etc.).  
3. LB forwards request, waits for response.  
4. Backend returns 200 OK (or error).  
5. LB may modify or cache the response before sending it back.

**3️⃣ Step‑by‑step reasoning**  
- **Routing logic:** Decide algorithm; explain trade‑offs (latency vs fairness).  
- **Health checks & failover:** Keep a health probe so that only healthy instances receive traffic; return 503 if all are down.  
- **Response handling:** LB can act as a proxy, so the 200 comes from the backend; but it may also serve cached content (e.g., for static assets).  
- **Observability:** Log the status code, latency, and chosen instance; expose metrics.  
- **Security & TLS termination:** Terminate TLS at LB to offload CPU, then forward plain HTTP or re‑encrypt.

**4️⃣ Common traps to avoid**  
- *Mixing 200 with health‑check logic:* Health checks should return 200 only if the service is truly healthy; don’t expose internal status pages.  
- *Assuming all backends are identical:* If they’re not, a simple round‑robin may overload one instance.  
- *Ignoring caching policies:* Blindly cache every 200 can break dynamic content.

**5️⃣ Sanity‑check & communicate clearly**  
Rephrase the design in plain language: “The load balancer receives a client request, picks a healthy backend using X algorithm, forwards the request, and streams back whatever status code (e.g., 200 OK) the backend returns. It also logs metrics for observability.” Check that you covered routing, health‑checks, response handling, security, and monitoring—those are the pillars most interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
