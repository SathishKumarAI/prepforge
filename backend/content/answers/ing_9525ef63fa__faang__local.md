---
qid: ing_9525ef63fa__faang__local
question: 'Explain: Model Boundaries — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 596
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:59-05:00'
sources: []
---

**Clarify**  
You’re asking for the eight core ideas that let a domain‑driven model “know” where it can and cannot go—i.e., its **model boundaries**. I’ll assume we’re talking about bounded contexts, aggregates, value objects, and the separation of concerns that keeps a ML pipeline from leaking into unrelated business logic.

---

**Approach**  
1. List the eight concepts.  
2. Briefly explain each in one sentence.  
3. Show how they enforce boundaries in an ML setting (e.g., feature engineering vs. inference).  

---

**Depth**

| # | Concept | One‑liner | Boundary Impact |
|---|---------|-----------|-----------------|
| 1 | **Bounded Context** | A self‑contained model scope with its own language and invariants. | Keeps ML training data separate from production inference logic. |
| 2 | **Context Mapping** | Explicit contracts between bounded contexts (e.g., translation, aggregation). | Prevents accidental coupling of unrelated models. |
| 3 | **Domain Events** | Asynchronous signals that a state change occurred. | Enables decoupled model retraining pipelines without tight API calls. |
| 4 | **Aggregates** | Root entities that enforce transactional consistency. | Limits where feature updates can cascade, preserving integrity across services. |
| 5 | **Value Objects** | Immutable data carriers with no identity. | Encapsulate input features so callers cannot mutate internal state. |
| 6 | **Repositories** | Abstractions over persistence (e.g., model registry). | Isolates storage details from business logic, easing migration or scaling. |
| 7 | **Anti‑Corruption Layer (ACL)** | Adapter that shields a bounded context from external models. | Prevents legacy ML outputs from corrupting new domain logic. |
| 8 | **Domain Services** | Stateless operations that don’t belong to an entity. | Keeps complex inference algorithms out of the core entities, preserving clarity. |

---

**Edge Cases**  
- Mixing feature engineering code with inference can violate ACL.  
- Repositories that expose raw DB rows break encapsulation if consumers mutate them.  
- Over‑granular aggregates may hurt performance; under‑granular ones risk data inconsistency.

---

**Optimize & Communicate**  
I’d iterate on the boundary definitions by profiling model latency and coupling metrics, then refactor any cross‑context calls into domain events or ACLs. In a FAANG interview I’d emphasize that clear boundaries reduce technical debt, enable independent scaling of training vs. serving, and make governance (e.g., data lineage) tractable. This structured explanation showcases problem‑solving clarity, deep understanding of DDD in ML, and readiness to iterate on architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
