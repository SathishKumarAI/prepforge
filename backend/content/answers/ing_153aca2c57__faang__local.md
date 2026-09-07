---
qid: ing_153aca2c57__faang__local
question: 'Explain: Event-Carried State Transfer — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 414
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:26-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise definition of *event‑driven* in the context of Event‑Carried State Transfer (ECST).  
Assumptions:  
1. The audience knows basic publish/subscribe patterns.  
2. “Event” refers to a discrete, timestamped occurrence that conveys state changes.  

**Approach**  
Explain ECST as an architectural style where each event carries the full state of an entity, rather than just a delta. Then describe what makes it *event‑driven*: the flow is triggered by events, not polling or synchronous calls.

**Depth**  
- **Event‑Driven**: Systems react to asynchronous messages (events) instead of request/response cycles. Each event originates from a source (producer), propagates through channels (queues/brokers), and consumes by one or more sinks (consumers).  
- In ECST, an event is the *single source of truth* for an entity’s state at that point in time. Consumers reconstruct the current state by replaying events or by taking a snapshot plus recent events. This eliminates shared mutable state and provides eventual consistency.  
- Typical tech stack: Kafka/NSQ + Akka Streams or Spring Cloud Stream, with optional CQRS layers.

**Edge Cases**  
- **Out‑of‑order delivery**: timestamps or sequence numbers must be used to re‑order.  
- **Duplicate events**: idempotency keys prevent state corruption.  
- **Event loss**: durable brokers and consumer checkpoints mitigate risk.  

**Optimize & Communicate**  
Highlight trade‑offs: higher latency vs. decoupling, complexity of event schema evolution versus simpler REST CRUD. Conclude by stressing that “event‑driven” means the system’s control flow is governed entirely by events—no polling, no tight coupling—making it scalable and fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
