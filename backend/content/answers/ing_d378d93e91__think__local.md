---
qid: ing_d378d93e91__think__local
question: 'Explain: Load Balancer / API Gateway — Design Instagram | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 510
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:55:06-05:00'
sources: []
---

**Metacognitive Roadmap for Explaining a Load‑Balancer/API‑Gateway in an Instagram‑style System Design**

| # | Thought Process |
|---|-----------------|
| **1. Clarify scope & assumptions** | • Identify what “load balancer” and “API gateway” mean to the interviewer (stateless routing vs. request orchestration). <br>• Assume a micro‑service stack: user service, media service, feed service, etc. <br>• Decide on traffic volume targets (e.g., 10 M RPS) and latency SLAs. |
| **2. Adopt a mental model** | • Use the *“request → gateway → balancer → backend”* pipeline.<br>• Map each component to its responsibilities: authentication, rate‑limiting, request routing, protocol translation, caching, monitoring. |
| **3. Step‑by‑step reasoning** | 1. **Routing logic** – hash‑based vs. round‑robin; sticky sessions for media uploads.<br>2. **Health checks & failover** – liveness probes, graceful draining.<br>3. **Scaling strategy** – horizontal scaling of gateway nodes, use of a CDN for static assets.<br>4. **Security** – TLS termination at the gateway, JWT validation, IP whitelisting.<br>5. **Observability** – distributed tracing (e.g., OpenTelemetry), metrics collection, alerting. |
| **4. Avoid common traps** | • Don’t conflate load balancing with API throttling; they’re orthogonal. <br>• Skip the “single‑point of failure” mistake: remember to distribute gateway instances behind an external LB. <br>• Don’t over‑optimize for latency at the expense of fault tolerance. |
| **5. Sanity‑check & verbalize** | • Verify that each requirement (throughput, latency, reliability) is addressed by some component.<br>• Explain trade‑offs: e.g., using a global CDN reduces load on the gateway but adds cache staleness concerns.<br>• Summarize in a diagram and walk through a sample request flow to demonstrate understanding. |

Follow this sequence, adapt it to the interviewer’s follow‑ups, and you’ll convey a clear, structured design for Instagram‑style load balancing and API gating.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
