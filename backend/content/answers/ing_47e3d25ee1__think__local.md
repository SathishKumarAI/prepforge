---
qid: ing_47e3d25ee1__think__local
question: 'Explain: Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 464
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:07:32-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   - Is it a *stateless* load balancer or one that handles session stickiness?  
   - What traffic patterns (HTTP/HTTPS, TCP, WebSocket)?  
   - Expected scale: number of backend servers, peak requests per second, latency SLAs.  
   - Failure modes: server downtime, network partitions, DoS attacks.

**2. Adopt a layered mental model**  
   1. *Ingress layer*: DNS, reverse proxy, TLS termination.  
   2. *Distribution logic*: round‑robin, least‑conn, weighted hashing.  
   3. *Health checking & fault tolerance*.  
   4. *Observability*: metrics, logs, alerts.

**3. Step‑by‑step reasoning**  
   - Start with the high‑level flow: client → LB → backend.  
   - Decide on a health‑check strategy (HTTP ping vs TCP handshake).  
   - Choose an algorithm for request routing and justify it (e.g., consistent hashing to reduce cache misses).  
   - Add sticky sessions if needed, explain cookie or header based affinity.  
   - Plan for graceful draining of instances during scaling events.  
   - Design metrics: latency percentiles, error rates, backend health status.

**4. Avoid common traps**  
   - Don’t assume a single point of failure; design the LB itself to be redundant (active‑passive or active‑active).  
   - Forgetting about TLS overhead can push latency beyond SLAs.  
   - Over‑optimizing routing logic at the expense of maintainability.

**5. Sanity‑check & verbalize**  
   - Run through a sample request path and identify where it could fail.  
   - Verify that each requirement (scalability, resilience, observability) is covered.  
   - Explain trade‑offs clearly: e.g., “Using consistent hashing reduces cache churn but may lead to uneven load if the number of backends changes frequently.”  

This structured approach lets you systematically build a robust load balancer design while anticipating interviewer expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
