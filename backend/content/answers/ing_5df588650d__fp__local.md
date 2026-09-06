---
qid: ing_5df588650d__fp__local
question: 'Explain: Service boundaries — A pattern language for microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 455
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:24:32-05:00'
sources: []
---

**Service Boundaries – the “What” of a Microservice**

At its core, a microservice is a *self‑contained optimization problem*:  
given a set of business capabilities \(C=\{c_1,\dots ,c_n\}\) and a set of data stores \(D=\{d_1,\dots ,d_m\}\), we must partition \((C,D)\) into disjoint units that can be developed, deployed, and scaled independently.  

The **Service Boundaries** pattern language formalises the *why* behind this split:

| Pattern | Core Idea | Deeper Principle |
|---------|-----------|------------------|
| **Domain‑Driven Design (DDD)** | Group by business domain events | Information locality – reduces cross‑cutting concerns |
| **Database per Service** | One data store per boundary | Isolation of persistence state (CAP theorem) |
| **Event Sourcing / CQRS** | Read/write models separated | Query‑write separation → better scalability |
| **API Gateways & Orchestration** | Expose only public contracts | Encapsulation – hides internal implementation |

Why must these work?  
* **Optimization**: Each service becomes a convex subproblem; independent scaling yields global efficiency.  
* **Information Theory**: By aligning boundaries with high‑information‑content domains, we minimise entropy in inter‑service communication.  
* **Geometry of Dependencies**: Treating services as nodes in a directed graph, a well‑chosen boundary reduces edge density, thereby lowering coupling and improving maintainability.

**Non‑obvious insight:**  
A *weakly coupled* service is not merely “few dependencies”; it is one whose dependency graph has low *cut‑width*. Minimising cut‑width guarantees that even if services are independently versioned, the overall system’s **stability margin** (tolerance to failures) increases exponentially. Thus, when designing boundaries, explicitly compute the cut‑width of candidate partitions—this yields a quantitative measure beyond simple “few calls.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
