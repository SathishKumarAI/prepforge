---
qid: ing_6bb6342cc5__faang__local
question: 'Explain: Confusing Idempotency with Exactly-Once — Idempotency | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 511
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:54:00-05:00'
sources: []
---

**Clarify**  
We’re asked why *idempotent* operations are often mistaken for *exactly‑once* semantics.  
Assumptions: the system processes requests over a network (potential retries, duplicates) and we care about side‑effects on a resource.

**Approach**  
1. Define each term.  
2. Illustrate with an example request flow.  
3. Show where idempotency falls short of exactly‑once.  
4. Summarize the distinction and implications for design.

**Depth**  

| Concept | Definition | Guarantees |
|---------|------------|------------|
| **Idempotent** | Repeating a call produces the same state as a single call (e.g., `PUT /user/123` with the same payload). | *State‑idempotence*; no duplicate side‑effects, but may still run the operation multiple times. |
| **Exactly‑Once** | The operation’s side‑effect occurs exactly one time, regardless of retries or failures. | Requires both idempotency **and** a reliable delivery/acknowledgement mechanism (e.g., transactional outbox + de‑duplication). |

*Example*:  
1. Client sends `DELETE /cart/456`.  
2. Network glitch; client resends.  
3. Server deletes the cart twice → still gone, but the delete handler ran twice (possible logging or billing side‑effects). Idempotent guarantees same final state but not a single execution.

**Edge Cases**  
- Non‑pure operations (e.g., sending an email) can’t be idempotent; duplicates matter.  
- State changes that depend on external systems (payment gateways) may need compensating actions if not exactly‑once.

**Optimize & Communicate**  
To achieve *exactly‑once*, design a *de‑duplication layer*: assign unique request IDs, store outcomes in a durable log, and return cached results. This adds write overhead but eliminates duplicated work. Convey this by highlighting the trade‑off: idempotency is cheap (stateless retry logic) while exactly‑once demands persistent tracking—critical for financial or audit‑trail systems.  

> **Key takeaway**: Idempotent = “same end state,” exactly‑once = “one execution.” They’re related but not interchangeable; pick the right one based on business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
