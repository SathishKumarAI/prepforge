---
qid: ing_8469ef9b88__faang__local
question: 'Explain: Aggregation — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 522
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:38-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *Aggregation*—one of the eight core patterns in Domain‑Driven Design (DDD). I’ll assume they want a concise overview of what aggregation is, why it matters, and how it’s implemented in practice (e.g., using aggregates, roots, invariants, and transactions).

**Approach**  
1. Define aggregation in DDD terms.  
2. List the 8 key concepts that support it: Aggregate Root, Entity, Value Object, Invariant, Transaction Boundary, Repository, Domain Service, and Event.  
3. Illustrate each with a short example.  
4. Highlight trade‑offs (e.g., performance vs. consistency).

**Depth**  

| Concept | Role in Aggregation | Example |
|---------|---------------------|---------|
| **Aggregate Root** | Single entry point for an aggregate; enforces invariants. | `Order` manages its `LineItems`. |
| **Entity** | Objects with identity inside the root. | `Product` in a catalog. |
| **Value Object** | Immutable, no identity; used to describe attributes. | `Money(amount, currency)`. |
| **Invariant** | Business rules that must always hold within an aggregate. | “Total order amount ≥ $0”. |
| **Transaction Boundary** | All changes inside an aggregate are persisted atomically. | One DB commit for `Order` and its items. |
| **Repository** | Abstracts persistence; exposes only roots. | `OrderRepository.save(order)`. |
| **Domain Service** | Operations that don’t naturally belong to any entity/value object. | `PricingService.calculateTotal(order)`. |
| **Event** | Signals state changes for eventual consistency or integration. | `OrderPlaced` event after commit. |

*Complexity:* In‑memory operations are O(1); persistence depends on DB, but aggregate boundaries keep queries localized.

**Edge Cases**  
- Deep aggregates can hurt performance; consider sharding or read models.  
- Cross‑aggregate invariants need domain events + eventual consistency.  
- Long‑running processes (Saga) may span multiple aggregates.

**Optimize & Communicate**  
I’d stress that aggregation keeps the model expressive yet consistent, and that careful sizing of aggregates is key to scalability. I’d also note how modern ORMs map these concepts to entities/repositories, making the pattern practical for production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
