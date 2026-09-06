---
qid: ing_8469ef9b88__fp__local
question: 'Explain: Aggregation — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 363
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:46-05:00'
sources: []
---

**Aggregation – the heart of a bounded‑model**

When you build a model that must survive real‑world change, you cannot let every entity drift independently.  
The *aggregation* solves this by declaring a **root** (the only entry point) and a tightly coupled group of entities that share a single transactional boundary.

1. **Root** – the public API; all commands go through it.  
2. **Entities** – owned by the root, they cannot be referenced from outside the aggregate.  
3. **Value Objects** – immutable, descriptive pieces that belong to entities.  
4. **Invariants** – constraints enforced at root‑level to keep the group consistent.  
5. **Identity** – each aggregate has a unique ID; identities of internal objects are meaningless externally.  
6. **Transactional boundary** – persistence is atomic: either all changes inside succeed or none do.  
7. **Encapsulation** – external code can only interact via the root, preventing accidental mutation.  
8. **Domain events** – state changes are published from the root, allowing other aggregates to react without breaking encapsulation.

The deeper principle is *optimization of consistency vs. scalability*: by grouping tightly coupled objects you pay a small cost (single‑unit persistence) while gaining strong invariants and clear boundaries.  

**Non‑obvious insight:** Aggregates are not just about data; they encode the **causal ordering** of operations. Because only the root can mutate its children, the system implicitly guarantees that all side effects happen in the same causal chain, which is essential for eventual consistency in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
