---
qid: ing_58b20715cc__faang__local
question: 'Explain: Success Response (201 Created) — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 471
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:48-05:00'
sources: []
---

**Success Response (201 Created) – Design a Load Balancer**

| **Step** | **What I’ll do** |
|----------|------------------|
| **1️⃣ Clarify** | We’re asked to design an HTTP load balancer that returns *201 Created* when a request is successfully routed.  Assume: <br>• Stateless clients, many concurrent requests.<br>• Backend services expose REST endpoints that return 2xx on success.<br>• We must handle high availability, low latency, and fault‑tolerance. |
| **2️⃣ Approach** | 1) **Ingress layer** – TLS termination + API gateway. <br>2) **Load distribution** – round‑robin / least‑conn with sticky sessions if needed. <br>3) **Health checks** – periodic ping, circuit‑breaker for unhealthy nodes.<br>4) **Response handling** – intercept 201 from backends; add tracing headers. |
| **3️⃣ Depth** | *Algorithm*: maintain a ring of healthy backend IPs; on each request pick next IP (O(1)). Use atomic counters or distributed lock to avoid race conditions. <br>*Complexity*: O(1) per request, memory O(N). <br>*Trade‑offs*: Round‑robin is simple but ignores instance load; least‑conn adds overhead but balances better. |
| **4️⃣ Edge Cases** | • Backend crashes mid‑request → return 503 and retry.<br>• Duplicate requests (idempotency key) – ensure no double creation.<br>• Slow health checks – use exponential backoff to avoid flapping. |
| **5️⃣ Optimize & Communicate** | • Use connection pooling and keep‑alive to reduce TCP overhead.<br>• Cache health status in a distributed store for cross‑region consistency.<br>Explain that the 201 is propagated only after backend confirms creation, ensuring eventual consistency. |

*Result*: A horizontally scalable load balancer that guarantees *201 Created* semantics, with built‑in fault tolerance and low per‑request overhead—exactly what FAANG teams expect in a production‑grade design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
