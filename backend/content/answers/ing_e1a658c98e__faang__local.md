---
qid: ing_e1a658c98e__faang__local
question: 'Explain: Microservices Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:24:00-05:00'
sources: []
---

**Clarify**  
You want a concise, interview‑ready explanation of the *six* most common microservices architectural patterns—those that every FAANG candidate should name and understand. I’ll assume you’re speaking to a technical recruiter who expects concrete examples and trade‑offs.

---

### 1. **API Gateway**  
A single entry point that routes requests, aggregates responses, handles auth, rate‑limiting, and protocol translation. *Pros:* simplifies client code; *Cons:* can become a bottleneck if not scaled.

### 2. **Service Registry & Discovery**  
Dynamic lookup of service instances (e.g., Eureka, Consul). Enables elastic scaling without hard‑coded endpoints. *Trade‑off:* adds network hops and requires health checks.

### 3. **Saga Pattern (Transactional)**  
A sequence of local transactions with compensating actions to maintain consistency across services. *Pros:* avoids distributed locks; *Cons:* complex compensation logic, eventual consistency only.

### 4. **CQRS + Event Sourcing**  
Separate read/write models and persist state changes as immutable events. Powers high‑throughput analytics while keeping write path simple. *Complexity:* requires event store, replay logic, and careful schema evolution.

### 5. **Strangler Fig (Incremental Migration)**  
Gradually replace legacy monolith modules with microservices by intercepting calls via the API gateway. *Benefit:* mitigates risk; *Drawback:* dual codebases coexist longer than ideal.

### 6. **Bulkhead & Circuit Breaker**  
Isolation of fault domains and graceful degradation when a service is overloaded or failing (Hystrix, Resilience4j). *Result:* improves overall system resilience but adds latency overhead for health checks.

---

**Depth** – Each pattern addresses a core microservice challenge: request routing, dynamic scaling, consistency, data modeling, migration, and fault tolerance.  
**Edge Cases** – Network partitions, eventual‑consistency lag, or stale service registry entries can break these patterns; monitoring & retries are essential.  
**Optimize & Communicate** – Highlight trade‑offs early, use metrics (latency, error rates) to justify pattern adoption, and keep the explanation tight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
