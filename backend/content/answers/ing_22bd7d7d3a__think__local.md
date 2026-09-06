---
qid: ing_22bd7d7d3a__think__local
question: 'Explain: High-Level Design — Design Load Balancer | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 468
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:58:12-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is the load balancer for?* (web traffic, micro‑services, API gateway?)  
   - *Expected scale:* number of requests per second, peak traffic, latency targets.  
   - *Failure model:* are we in a single data center or multi‑region?  
   - *Constraints:* cost, technology stack, existing infra.

**2️⃣ Adopt a layered mental model**  
   1. **Requirements & constraints** → functional (routing, health checks) + non‑functional (throughput, fault tolerance).  
   2. **High‑level architecture** → client → edge LB → regional LB → application tier.  
   3. **Key components** → DNS, reverse proxy, session persistence, metrics collector.  
   4. **Operational concerns** → scaling, observability, security.

**3️⃣ Step‑by‑step reasoning**  
   - *Define traffic patterns* (static vs dynamic, sticky sessions).  
   - *Choose load‑balancing algorithm* (round‑robin, least‑conn, weighted, consistent hashing).  
   - *Map health checks* to backend services.  
   - *Plan scaling*: horizontal auto‑scaling of LB instances, use of CDN or edge caches.  
   - *Security & compliance*: TLS termination, WAF integration.  
   - *Observability*: logs, metrics (latency, error rates), alerts.

**4️⃣ Avoid common traps**  
   - Forgetting to handle **stateful traffic** → loss of session continuity.  
   - Over‑optimizing for a single metric (throughput) while ignoring latency or fault tolerance.  
   - Ignoring the *cost* of scaling the LB itself; sometimes a managed service is cheaper.

**5️⃣ Sanity‑check & communicate**  
   - Run through **edge cases**: sudden traffic spike, backend outage, DNS propagation delay.  
   - Visualize the flow with a diagram (client → LB → healthy backends).  
   - Summarize trade‑offs in bullet points for quick stakeholder review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
