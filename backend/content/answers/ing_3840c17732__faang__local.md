---
qid: ing_3840c17732__faang__local
question: 'Explain: Initial Snapshot — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 488
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:54:55-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that captures *initial snapshots* of data and then streams *Change Data Capture* (CDC) events so downstream consumers can stay in sync. I’ll assume we need low latency, high throughput, eventual consistency, and the ability to replay events for new subscribers.

**Approach**  
1. **Data source layer** – use database triggers or logical decoding (e.g., PostgreSQL WAL, MySQL binlog) to emit raw change records.  
2. **Snapshot service** – on start‑up or schema change, run a bulk read job that emits “snapshot” events for each row, tagging them with `seq=0`.  
3. **Event broker** – Kafka (or Pulsar) as the durable stream; topics per table or logical partition.  
4. **Sequencing & idempotence** – embed monotonically increasing LSN/offsets and unique record IDs so consumers can dedupe and replay safely.  
5. **Schema evolution** – store Avro/Protobuf schemas in Confluent Schema Registry, publish schema‑change events.  
6. **Consumer API** – a pull interface (Kafka consumer) plus a push webhook for real‑time use cases.

**Depth**  
- *Complexity*: Snapshot job is O(N) per table; CDC stream is O(1) per change.  
- *Latency*: <10 ms from DB to broker if using native logical decoding.  
- *Reliability*: Kafka’s replication ensures at-least‑once delivery; idempotent consumers guarantee correctness.

**Edge Cases**  
- Large tables: split snapshot into shards and parallelize.  
- Schema changes mid‑snapshot: pause CDC, finish snapshot with old schema, then switch.  
- Network partitions: broker replicas handle failover; consumers track offsets locally.

**Optimize & Communicate**  
We can compress snapshots (Parquet) and use incremental checkpoints to resume large snapshots. For latency, push CDC events directly into a low‑latency stream like Kinesis Data Streams if required. I’d explain trade‑offs between consistency guarantees (exactly‑once vs at‑least‑once) and performance, and how the design scales horizontally by adding more brokers and consumers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
