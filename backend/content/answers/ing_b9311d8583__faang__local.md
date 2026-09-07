---
qid: ing_b9311d8583__faang__local
question: 'Explain: Event Sourcing — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 491
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:39-05:00'
sources: []
---

**Clarify**  
We need to explain how *Event Sourcing* works when combined with a *Pub/Sub* pattern in a distributed system: capture state changes as immutable events, publish them to subscribers, and rebuild aggregate state from the event stream.

**Approach**  
1. Define core entities: Event Store, Publisher (Producer), Subscriber (Consumer).  
2. Show flow: write → store → publish → consume → projection.  
3. Highlight consistency guarantees and fault‑tolerance.  
4. Discuss scaling patterns (sharding, partitioning) and replay semantics.

**Depth**  
- **Event Store**: append‑only log (e.g., Kafka topic, DynamoDB Streams). Each event contains `id`, `type`, `payload`, `timestamp`.  
- **Producer** writes events atomically to the store; transactionally emits a message to the Pub/Sub system.  
- **Pub/Sub** decouples producers from consumers; each subscriber gets a copy of every event (or filtered subset).  
- **Consumer** builds *projections* (read models) by replaying events, enabling fast reads without querying the write store.  
- **Consistency**: use *exact‑once* delivery or idempotent handlers to avoid duplicates.  
- **Fault tolerance**: consumers track offsets; on restart they resume from last committed offset.  
- **Scaling**: partition events by aggregate key; each partition processed in order, allowing parallelism while preserving ordering per entity.

**Edge Cases**  
- Duplicate events → idempotency keys.  
- Event schema evolution → versioning and backward compatibility.  
- Slow consumers → back‑pressure or dead‑letter queues.  
- Out‑of‑order events across partitions – not a problem if partitioned by key.

**Optimize & Communicate**  
For high throughput, switch to *Kafka* with compacted topics for snapshots and *exact‑once* semantics via idempotent producers. Use *schema registry* to manage evolution. Communicate the trade‑off: strict ACID at write side vs eventual consistency on reads, suitable for event‑driven microservices where auditability and replayability outweigh immediate read freshness. This pattern powers systems like Stripe’s payment logs or GitHub’s activity feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
