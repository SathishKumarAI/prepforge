---
qid: ing_d2b7cbf1fa__think__local
question: 'Explain: Use resiliency patterns — 9 Best Practices for Building Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 394
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:52:16-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

* Confirm that “resiliency patterns” refers to design techniques that keep a microservice system healthy under failure (timeouts, retries, circuit breakers, bulkheads, etc.).  
* Assume the audience knows basic micro‑service concepts but not deep resiliency tooling.  

**2️⃣ Adopt a mental model**

Use the **“Failure Spectrum”** framework:  
- *Transient failures* → retry & timeout patterns.  
- *Systemic failures* → circuit breaker & bulkhead.  
- *State‑dependent issues* → idempotency, eventual consistency.  
Map each best practice to one of these categories.

**3️⃣ Step‑by‑step reasoning**

1. Identify failure points (network, DB, external APIs).  
2. Choose a pattern that isolates the fault (bulkhead) or prevents cascading damage (circuit breaker).  
3. Implement with observable metrics (latency, error rates).  
4. Iterate: tune timeouts, retry counts, and fallback logic based on real traffic.

**4️⃣ Common traps to avoid**

* Over‑retrying → amplifies load during outages.  
* Hard‑coded limits → brittle under scaling.  
* Ignoring side‑effects → idempotency violations.  
* Missing observability → patterns become black boxes.

**5️⃣ Sanity‑check & communicate**

- Run a quick failure simulation (e.g., pause DB) and watch metrics/alerts.  
- Summarize: “By combining bulkheads, circuit breakers, retries, timeouts, idempotency, rate limiting, graceful degradation, observability, state management, and automated rollback, we build microservices that survive faults without human intervention.”  

This structure helps the candidate explain each best practice in context, justify choices, and avoid common pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
