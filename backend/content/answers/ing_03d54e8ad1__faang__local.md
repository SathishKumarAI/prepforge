---
qid: ing_03d54e8ad1__faang__local
question: 'Explain: Business Entities — 8 Key Concepts in Domain-Driven Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 495
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:08-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of the *eight core business‑entity concepts* that underpin Domain‑Driven Design (DDD). I’ll assume they’re referring to the foundational building blocks used when modeling complex domains: **Entity, Value Object, Aggregate, Root, Repository, Factory, Service, and Domain Event**.  

**Approach**  
I’ll first restate each concept in one sentence, then show how they interrelate with a simple business example (e.g., an e‑commerce order system).  

**Depth**  

| Concept | Definition | Example |
|---------|------------|--------|
| **Entity** | Object with intrinsic identity that persists over time. | `Order` identified by `orderId`. |
| **Value Object** | Immutable data, compared by attributes, no identity. | `Money(amount, currency)`, `Address`. |
| **Aggregate** | Cluster of related entities/value objects treated as a single unit. | Order + its line items. |
| **Root** | The aggregate’s primary entity that enforces invariants and is the only external reference point. | `Order` is the root; others are accessed through it. |
| **Repository** | Persistence abstraction exposing CRUD for aggregates, hiding data store details. | `OrderRepository.save(order)`. |
| **Factory** | Encapsulates complex creation logic to maintain consistency of aggregates. | `OrderFactory.create(customerId, items)`. |
| **Service** | Stateless operation that doesn’t naturally belong to an entity/value object. | `PaymentService.process(order, paymentMethod)`. |
| **Domain Event** | Immutable notification of a significant change in the domain. | `OrderPlacedEvent` fired after order persistence. |

**Edge Cases**  
- Circular aggregate references (avoid by using IDs).  
- Large aggregates causing performance hits—split into sub‑aggregates or use event sourcing.  
- Repository overuse leading to tight coupling; keep it thin.

**Optimize & Communicate**  
I’d emphasize that these concepts enforce *invariants*, *encapsulation*, and *separation of concerns*, enabling teams to evolve domains safely while maintaining clear boundaries. This structured explanation showcases my grasp of DDD fundamentals and communication skills—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
