---
qid: ing_3621838703__faang__local
question: 'Explain: Event-Sourcing — What do you mean by \u201cEvent-Driven\u201d?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 377
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:49:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise definition of “event‑driven” in the context of event‑sourcing. I’ll confirm that they’re referring to the architectural pattern where state changes are captured as immutable events, and that consumers react to those events rather than polling or querying state directly.

**Approach**  
1. Define an *event* (a timestamped, side‑effect free record).  
2. Explain how the system publishes events to a log/stream.  
3. Show how subscribers (read models, microservices) consume these events asynchronously.  

**Depth**  
- **Event model**: `OrderCreated(id=123, items=[…], ts=…)`.  
- **Write path**: Commands → domain logic → emit event → append to event store.  
- **Read path**: Subscribers replay the stream (or read from a materialized view) to build current state.  
- **Benefits**: audit trail, eventual consistency, scalability, easy rollback via replay.  
- **Trade‑offs**: Requires careful versioning of events, increased storage, potential latency in propagating changes.

**Edge Cases**  
- *Out‑of‑order* events → enforce ordering or use sequence numbers.  
- *Event loss* → idempotent consumers and durable queues (Kafka, Pulsar).  
- *Schema evolution* → evolve event types while maintaining backward compatibility.

**Optimize & Communicate**  
I’d mention using a partitioned log for horizontal scaling, snapshots to avoid replaying millions of events, and compaction strategies. I’d close by summarizing that “event‑driven” means the system’s state changes are driven solely by immutable events, enabling loose coupling and robust auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
