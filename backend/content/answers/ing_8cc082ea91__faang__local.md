---
qid: ing_8cc082ea91__faang__local
question: 'Explain: Best Practices — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 500
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:11:33-05:00'
sources: []
---

**Clarify**  
You’re asking for best‑practice design of a CDC pipeline that captures data changes from a source database, propagates them reliably to downstream systems (e.g., analytics, cache, search). I’ll assume we need low latency, fault tolerance, and eventual consistency, with a mix of OLTP sources and distributed consumers.

**Approach**  
1. **Source capture** – choose between *log‑based* (binlog/redo log) or *trigger‑based*; prefer log‑based for performance and atomicity.  
2. **Decouple producer & consumer** – publish events to a durable, replayable broker (Kafka, Pulsar).  
3. **Schema evolution** – use Avro/Protobuf with schema registry to avoid breaking consumers.  
4. **Idempotency & ordering** – embed transaction IDs and offsets; partition by primary key for per‑key ordering.  
5. **Back‑pressure & retries** – broker handles back‑pressure; consumer implements exponential back‑off + dead‑letter queue.

**Depth**  
- **Change extraction**: read binlog records, map to domain events (`UserCreated`, `OrderUpdated`).  
- **Event format**: `{event_id, table, key, operation, payload, ts}`.  
- **Storage**: Kafka topics per logical stream; retention policy 7‑30 days for replay.  
- **Consumption**: microservices subscribe via consumer groups; each record processed idempotently (e.g., upsert to target DB).  
- **Complexity**: O(1) read/write per event, linear scaling with partitions.

**Edge Cases**  
- *Schema drift*: handle missing fields with defaults.  
- *Out‑of‑order events*: partitioning by key keeps order; otherwise buffer & sort.  
- *Large binary blobs*: store in object store and include pointer in CDC record.

**Optimize & Communicate**  
- **Batching**: group N records per write to reduce I/O.  
- **Compression**: enable broker compression (Snappy/Avro).  
- **Monitoring**: expose lag metrics, error rates; alert on consumer downtime.  
Explain that this design balances speed, reliability, and flexibility—key for a FAANG‑style data platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
