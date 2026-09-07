---
qid: ing_160010e0aa__faang__local
question: 'Explain: CDC (Change Data Capture) — How do we incorporate Event Sourcing
  into systems?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 431
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:26-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *Change Data Capture* (CDC) can be used to implement an *Event‑Sourced* architecture. I’ll confirm that the goal is to capture every write operation on a source system and materialize it as immutable events in an event store, enabling auditability, replay, and eventual consistency.

**Approach**  
1. **Capture**: Use CDC tools (Debezium, Kafka Connect) to stream database binlogs or transaction logs into a message broker.  
2. **Normalize**: Transform raw change records into domain‑specific events (e.g., `OrderCreated`, `PaymentCaptured`).  
3. **Persist**: Append each event to an immutable store (Kafka topic, EventStoreDB).  
4. **Consume**: Build projections (read models) by subscribing to the stream and updating materialized views or downstream services.  

**Depth**  
- *Event format*: include metadata (`eventId`, `timestamp`, `aggregateId`, `type`).  
- *Ordering*: use partition keys (e.g., aggregate id) to guarantee per‑entity order while allowing parallelism.  
- *Durability*: rely on broker replication; checkpoints for consumers ensure at‑least‑once delivery.  
- *Schema evolution*: version events and provide backward‑compatible serializers (Avro/Protobuf).  

**Edge Cases**  
- **Duplicate events**: dedupe via idempotent handlers.  
- **Out‑of‑order writes**: use logical timestamps or sequence numbers.  
- **Large transactions**: batch CDC records into a single event to preserve atomicity.  

**Optimize & Communicate**  
Explain trade‑offs between latency (real‑time Kafka) and consistency (snapshot isolation). Suggest adding a “dead‑letter” queue for malformed events, and monitoring lag to detect bottlenecks. Conclude by noting that this CDC‑driven pipeline turns every database mutation into a first‑class event, fulfilling the core promises of Event Sourcing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
