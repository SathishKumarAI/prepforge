---
qid: ing_1fb8470e9a__fp__local
question: 'Explain: Behavior of domain objects: — Key Terms in Domain-Driven Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 455
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:13:29-05:00'
sources: []
---

**Behavior of Domain Objects – Core DDD Vocabulary**

1. **Entity**  
   An *identity* that persists across time and changes in state. Think of a customer: its GUID is the invariant; the name or address may vary. The identity drives equivalence (`e1 == e2` iff `id(e1) = id(e2)`).

2. **Value Object**  
   An immutable, *attribute* bundle without identity. A money amount “$10 USD” is a value object; two instances with the same currency and amount are interchangeable. They support structural equality (`==`) and can be safely copied.

3. **Aggregate**  
   The *root* of an entity cluster that enforces consistency boundaries. All external operations go through the aggregate root, ensuring transactional integrity (e.g., a `Order` aggregates its line items).

4. **Domain Service**  
   A stateless operation that does not naturally belong to any single aggregate. It encapsulates domain logic that spans multiple aggregates (e.g., calculating shipping cost from order and customer data).

5. **Repository**  
   An abstraction over persistence, exposing `add`, `remove`, and query methods for aggregates. It hides the storage details while preserving the aggregate’s invariants.

6. **Domain Event**  
   A record of a *fact* that has occurred within the domain (`OrderPlaced`). Events are immutable, timestamped, and can trigger side‑effects (e.g., sending an email).

---

### Non‑obvious Insight
The *behaviour* of domain objects is not merely about methods; it’s about **invariant preservation**. An entity’s identity guarantees that all its state changes respect the rules encoded in its behaviour. Value objects, being immutable, automatically satisfy invariants by construction. Aggregates enforce *transactional boundaries*: they either commit or roll back as a whole. Recognizing these patterns lets you design systems where consistency is guaranteed without relying on database constraints alone—an insight often overlooked when developers treat DDD terms as mere labels rather than enforcement mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
