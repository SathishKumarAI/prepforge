---
qid: ing_de8d43d76c__faang__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 510
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:16:42-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Change Data Capture* (CDC) system that streams updates from a source database to downstream consumers (e.g., analytics pipelines). I’d confirm: what data volume? latency tolerance? durability guarantees? Supported sources (SQL, NoSQL)? Need idempotency and replayability?

**Approach**  
1. **Capture** – use logical decoding or binlog listeners to read write‑ahead logs.  
2. **Normalize & Enrich** – convert raw tuples into a unified event schema, add metadata (timestamp, txid).  
3. **Persist & Queue** – write events to an immutable log store (Kafka/Apache Pulsar) for durability and replay.  
4. **Consume** – downstream services subscribe via consumer groups; use offset checkpoints for exactly‑once semantics.  
5. **Monitor & Back‑pressure** – expose metrics, apply flow control if consumers lag.

**Depth**  
- *Capture*: For PostgreSQL, `pg_logical` plugin streams tuples with transaction boundaries; for MySQL, read binlog via Debezium.  
- *Schema Evolution*: maintain a schema registry (Confluent Schema Registry) and use Avro/Protobuf to enforce compatibility.  
- *Exactly‑once*: Kafka’s transactional API ensures atomic writes of a batch of events tied to the source transaction ID; consumers commit offsets only after processing.  
- *Scalability*: Partition by primary key hash to parallelize consumption; use compaction for deletes.  
- Complexity: Capture O(1) per row, queue throughput ~ 10k‑100k ops/s, consumer latency < 500 ms.

**Edge Cases**  
- **Schema changes mid‑stream** → back‑fill with nulls or migrate old schema.  
- **Network partitions** → source retries, log replay ensures no loss.  
- **Duplicate events** → idempotent processing using transaction IDs.  

**Optimize & Communicate**  
Improvements: switch to Debezium’s Kafka Connect for auto‑discovery; add a change‑data‑capture cache layer (Redis) for low‑latency lookups. I’d explain trade‑offs between log size vs. replay time, and how the design meets durability, scalability, and low latency goals—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
