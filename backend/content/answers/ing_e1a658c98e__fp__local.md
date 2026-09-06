---
qid: ing_e1a658c98e__fp__local
question: 'Explain: Microservices Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 427
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:59:37-05:00'
sources: []
---

**Microservices & the Six Core Patterns**

At its heart, a microservice is an *independent optimization* of a business capability: it isolates a problem so that it can be solved in isolation, then combined with others through lightweight contracts.  
This isolation forces us to design communication, persistence, and fault‑tolerance as separate sub‑problems—hence the six patterns:

| Pattern | Why it arises | Key principle |
|---------|---------------|----------------|
| **Service Discovery** | Services must locate each other in a dynamic environment. | *Location Transparency* – clients treat service endpoints like names, not IPs. |
| **API Gateway** | Clients need a single contract; services stay agnostic of external clients. | *Interface Abstraction* – decouples consumer from implementation details. |
| **Circuit Breaker** | A failing downstream breaks the whole chain. | *Probabilistic Fault Isolation* – stops cascading failures by monitoring error rates. |
| **Event Sourcing** | State changes need auditability and eventual consistency. | *Temporal Log as Source of Truth* – reconstruct state from immutable events. |
| **CQRS (Command/Query Separation)** | Reads and writes have different scalability & latency needs. | *Functional Decomposition* – separate write‑model mutation from read‑model projection. |
| **Saga** | Distributed transactions can’t be rolled back atomically. | *Compensating Actions* – each step has a reverse operation to restore consistency. |

A subtle but powerful insight: **the pattern that governs most of them is the trade‑off between coupling and latency**. For instance, an API Gateway reduces coupling for clients but adds latency; a Circuit Breaker keeps latency low at the cost of local state (failure counts). Recognizing this tension lets architects choose the right pattern in the right place, rather than blindly applying all six everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
