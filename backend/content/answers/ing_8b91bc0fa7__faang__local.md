---
qid: ing_8b91bc0fa7__faang__local
question: 'Explain: Sage Pattern — Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 516
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:54-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of the *Saga* pattern—a distributed transaction strategy used in micro‑services. I’ll assume you want: (1) what it solves, (2) how it works conceptually, and (3) typical use cases.

**Approach**  
I’ll first restate the problem of ACID across services, then outline Saga’s two flavors (choreography vs orchestration), followed by a short example. I’ll finish with pros/cons to show trade‑offs.

**Depth**  

| Aspect | Detail |
|--------|--------|
| **Problem** | Traditional ACID transactions can’t span multiple stateless services without heavyweight coordination (e.g., two‑phase commit). This hurts scalability and resilience. |
| **Saga Idea** | A long‑running transaction is decomposed into a sequence of local, idempotent operations, each with an explicit compensating action if later steps fail. |
| **Choreography** | Each service emits domain events; subscribers decide next step or compensation. No central coordinator—loose coupling but harder to reason about flow. |
| **Orchestration** | A dedicated saga orchestrator sends commands and tracks state, deciding next operation or rollback. Easier to audit but introduces a single point of control. |
| **Example** | Order service creates order → payment service charges card → inventory service reserves stock. If payment fails, the orchestrator triggers `refund` compensating action; if inventory reservation fails, it triggers `releaseStock`. |
| **Complexity** | Time: O(n) steps; Space: O(1) per saga instance (state stored by orchestrator). Failure handling is linear but can be nested. |

**Edge Cases**  
- Idempotency of compensating actions (must be safe to repeat).  
- Long‑running sagas risk state loss if the orchestrator crashes—requires durable persistence or event sourcing.  
- Circular dependencies between services make choreography hard.

**Optimize & Communicate**  
For production, use a durable message bus (Kafka) and store saga metadata in a CQRS‑style projection to avoid single‑point failure. When explaining to interviewers, emphasize that sagas trade strict ACID for eventual consistency, gaining scalability while keeping rollback logic explicit and testable. This clarity shows you understand both the theory and real‑world constraints of distributed transactions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
