---
qid: ing_8619816f06__faang__local
question: 'Explain: The pattern language is your guide — What are microservices?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 437
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:56:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise definition of *micro‑services* and why the “pattern language” (i.e., design patterns) is essential when building them. I’ll assume they’re asking about architecture, not implementation details like Docker or Kubernetes.

**Approach**  
1. Define micro‑service in plain terms.  
2. Explain the key pattern principles that guide its design: bounded context, single responsibility, contract‑first APIs, and eventual consistency.  
3. Touch on tooling (REST/GraphQL, event buses).  
4. Highlight trade‑offs.

**Depth**  
A *micro‑service* is an independently deployable unit that encapsulates a single business capability. It exposes a well‑defined API (usually HTTP/JSON or gRPC) and owns its own data store. The pattern language guides us to:

| Pattern | Why it matters |
|---------|----------------|
| **Bounded Context** | Keeps domain logic isolated, preventing “spaghetti” dependencies. |
| **Single Responsibility** | Simplifies reasoning, testing, and scaling—each service does one thing well. |
| **Contract‑First API Design** | Guarantees backward compatibility; clients can evolve without breaking changes. |
| **Event‑Driven Communication** | Decouples services, enabling eventual consistency instead of tight coupling. |

Typical stack: Docker containers, a lightweight orchestrator (Kubernetes), service mesh for observability, and an API gateway.

**Edge Cases**  
- Too many tiny services → operational overhead and network latency.  
- Poorly defined contracts lead to cascading failures.  
- Data duplication across services can cause consistency bugs.

**Optimize & Communicate**  
I’d suggest starting with a monolith, extracting bounded contexts incrementally, and adding monitoring early. I would explain that the “pattern language” is not just buzzword; it’s a toolkit that turns ad‑hoc micro‑services into a resilient, maintainable system—exactly what FAANG teams prioritize for scale and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
