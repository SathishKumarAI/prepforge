---
qid: ing_8b740df39a__faang__local
question: 'Explain: How to break a Monolith into Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 481
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:31-05:00'
sources: []
---

**Clarify**  
We’re asked how to decompose a monolithic application into independent microservices—i.e., identify bounded contexts, partition responsibilities, and migrate gradually while keeping the system usable. I’ll assume we have a stable monolith with well‑tested business logic, a single deployment pipeline, and no existing service boundaries.

**Approach**  
1. **Domain‑Driven Design (DDD)**: Map out bounded contexts by domain events and ownership.  
2. **Service Identification**: For each context, define a microservice that owns its data and behavior.  
3. **Data Migration**: Adopt *polyglot persistence*—each service owns its database; use event sourcing or change‑data capture to keep the monolith’s state in sync during transition.  
4. **API Gateway / Facade**: Expose a single entry point that routes requests to services, preserving backward compatibility.  
5. **Incremental Migration**: Cut out one context at a time, deploy the new service, and redirect traffic gradually (e.g., feature flags).  

**Depth**  
- *Service contracts* use REST/GRPC with versioned schemas (OpenAPI/Protobuf).  
- *Consistency*: Use eventual consistency; compensating transactions for cross‑service updates.  
- *Observability*: Centralized logging, distributed tracing, and health checks.  
- *CI/CD*: Blue‑green deployments to avoid downtime. Complexity per service is O(1) in terms of coupling; overall system complexity grows linearly with services but modularity improves maintainability.

**Edge Cases**  
- Tight data coupling (joins across modules) → requires a shared database or synchronous calls, which defeat microservice benefits.  
- Legacy code without tests can break migration; add unit/integration tests before extraction.  
- Performance regressions if inter‑service latency isn’t measured.

**Optimize & Communicate**  
After the first wave, refactor for *bounded contexts* that evolve independently. Document contract evolution in a shared registry (e.g., API gateway). Narrate progress with clear metrics: deployment frequency, MTTR, and request latency per service. This structured plan satisfies FAANG interviewers’ focus on clarity, depth, and pragmatic trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
