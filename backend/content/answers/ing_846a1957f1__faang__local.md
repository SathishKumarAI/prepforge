---
qid: ing_846a1957f1__faang__local
question: 'Explain: Event-Driven Architecture and Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 483
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:44-05:00'
sources: []
---

**Clarify**  
You’re asking how *Event‑Driven Architecture (EDA)* works with *Microservices*—i.e., using asynchronous events (messages, streams) to decouple services that each own a bounded domain. I’ll assume we’re building a cloud‑native app on AWS/GCP and want loose coupling, scalability, and fault tolerance.

**Approach**  
1. **Define domain boundaries** → each microservice owns its data and exposes APIs.  
2. **Choose an event bus** (Kafka, Pulsar, SQS/SNS, Cloud Pub/Sub).  
3. **Publish/Subscribe pattern**: services emit events on state changes; others subscribe to relevant topics.  
4. **Event schema versioning** → Avro/Protobuf for backward compatibility.  
5. **Saga or compensating actions** to handle cross‑service transactions.

**Depth**  
- *Decoupling*: a service writes an event instead of calling another’s API, so the caller doesn’t block.  
- *Scalability*: partitions allow parallel consumers; back‑pressure is handled by the broker.  
- *Resilience*: if one consumer fails, events remain in the queue until processed.  
- *Consistency*: eventual consistency via idempotent event handlers; use correlation IDs for tracing.  
- *Complexity*: requires monitoring (Kafka lag), schema registry, and careful handling of duplicate events.

**Edge Cases**  
- **Out‑of‑order events**: include timestamps or sequence numbers.  
- **Schema drift**: enforce strict migration policies.  
- **Large payloads**: use object storage references instead of embedding data in the event.  
- **Failure loops**: implement dead‑letter queues.

**Optimize & Communicate**  
Start small—publish a “UserCreated” event from Auth, let Billing subscribe. Measure latency and lag; then add compaction or exactly‑once semantics if needed. Explain trade‑offs: synchronous APIs give immediate consistency but tighter coupling; EDA offers scalability at the cost of eventual consistency. Keep stakeholders informed with dashboards that show event flow health. This structured narrative demonstrates problem framing, solution design, depth, edge awareness, and continuous improvement—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
