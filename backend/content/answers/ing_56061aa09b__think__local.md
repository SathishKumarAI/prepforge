---
qid: ing_56061aa09b__think__local
question: 'Explain: Core APIs — Design Load Balancer | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 432
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:40:23-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Identify whether “Core APIs” refers to a specific framework (e.g., AWS API Gateway) or a generic set of services in a micro‑service architecture.  
   - Assume we’re designing a stateless load balancer that routes traffic to multiple backend instances, each exposing RESTful APIs.  

**2. Adopt a layered mental model**  
   - *External interface*: client → load balancer → API gateway → service cluster.  
   - *Core responsibilities*: request routing, health checks, scaling, security (rate‑limiting, auth).  
   - *Observability*: logging, metrics, tracing.  

**3. Step‑by‑step reasoning**  
   1. Define the load‑balancing algorithm (round‑robin, least‑connections, weighted).  
   2. Map health‑check endpoints and failure thresholds.  
   3. Specify API contracts: HTTP methods, headers, payloads, status codes.  
   4. Plan for scaling: auto‑scaling groups, session stickiness if needed.  
   5. Outline security layers: TLS termination, JWT validation, IP whitelisting.  

**4. Common traps to avoid**  
   - Mixing concerns: letting the load balancer handle business logic.  
   - Ignoring idempotency in POST/PUT requests during retries.  
   - Forgetting graceful shutdowns for in‑flight requests when scaling down.  

**5. Sanity‑check & communicate**  
   - Verify that each API endpoint is reachable only through the load balancer and that failures are logged with context (client IP, request ID).  
   - Present a diagram: client → LB → API gateway → service instances, annotating health checks, routing logic, and observability hooks.  

This structured approach ensures all critical aspects of a core‑API load‑balancing design are covered without overlooking edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
