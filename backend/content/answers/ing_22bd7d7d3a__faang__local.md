---
qid: ing_22bd7d7d3a__faang__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 483
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:05:09-05:00'
sources: []
---

**High‑Level Design – Load Balancer**

| Step | What to Do |
|------|------------|
| **Clarify** | *Restate*: “We need a layer that distributes incoming traffic across backend servers while ensuring high availability and low latency.”<br>*Assumptions*: 1) Stateless backends, 2) Requests are HTTP/HTTPS, 3) Traffic is mostly read‑heavy, 4) We can use DNS or API‑gateway style LB. |
| **Approach** | 1️⃣ Choose a placement model (edge LB vs. regional LB). <br>2️⃣ Decide routing algorithm: round‑robin, least‑conn, IP‑hash, or weighted. <br>3️⃣ Add health checks and graceful draining. <br>4️⃣ Integrate SSL termination if needed. <br>5️⃣ Consider auto‑scaling hooks and sticky sessions for stateful flows. |
| **Depth** | *Architecture*: Edge LB (e.g., CloudFront) → Regional LB (NLB/ALB). Health checks run every 10 s; unhealthy nodes are removed from the pool. Routing: weighted round‑robin with weights derived from CPU/memory metrics. <br>*Complexity*: O(1) per request for hash‑based routing; O(n) for least‑conn if no cache. <br>*Trade‑offs*: Hash gives session persistence but can cause hot spots; least‑conn reduces imbalance but needs stateful tracking. |
| **Edge Cases** | • Sudden traffic spikes → fail‑over to another region.<br>• Backend crash → draining + immediate removal from pool.<br>• Long‑running requests that block a node → detect via timeout and retry on another node.<br>• SSL/TLS renegotiation overhead. |
| **Optimize & Communicate** | • Cache health status to avoid constant polling.<br>• Use CDN edge caching for static assets to reduce LB load.<br>• Explain the trade‑off between low latency (direct routing) and high availability (traffic spread). <br>Wrap up by summarizing how each design choice meets SLAs on latency, uptime, and cost. |

*Word count: ~190 words.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
