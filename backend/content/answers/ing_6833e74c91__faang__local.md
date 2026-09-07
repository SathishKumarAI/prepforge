---
qid: ing_6833e74c91__faang__local
question: 'Explain: Summary — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 476
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:46:02-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Change Data Capture* system that streams every insert/update/delete from a source DB to downstream consumers (e.g., analytics, caches).  
Assumptions:  
- Source is relational (MySQL/PostgreSQL) with ACID guarantees.  
- Latency < 1 s for most changes; eventual consistency acceptable for rare edge cases.  
- Throughput up to 10k ops/sec, scaling to 100k+ in the future.

**Approach**  
1. **Capture layer** – use a log‑based CDC driver (Debezium/Canal) that reads binlogs and publishes events to Kafka.  
2. **Topic schema** – one topic per table or logical partition; use Avro/Protobuf for schema evolution.  
3. **Consumer layer** – downstream services subscribe via Kafka Streams or Spark Structured Streaming, applying idempotent transformations.  
4. **Durability & fault‑tolerance** – commit offsets in a separate Kafka topic; store state snapshots periodically.

**Depth**  
- *Latency*: binlog → Kafka ≈ 50–200 ms; consumer processing adds ~100 ms.  
- *Throughput*: horizontal scaling of Kafka partitions + multiple consumer instances ensures linear scalability.  
- *Consistency*: use “exactly‑once” semantics in Kafka Streams to avoid duplicates.  
- *Schema evolution*: enforce schema registry checks before publishing.

**Edge Cases**  
- **Schema changes**: trigger a migration job; publish a “schema change” event.  
- **High write bursts**: backpressure via broker’s `max.in.flight.requests.per.connection`.  
- **Data loss**: enable replication factor ≥ 3 and enable `min.insync.replicas`.

**Optimize & Communicate**  
- *Compression* (snappy/avro) reduces network traffic.  
- *Monitoring*: expose Lag, throughput, error rates via Prometheus + Grafana.  
- Explain trade‑offs: log‑based CDC gives low latency vs. query‑based CDC is simpler but heavier. Emphasize the importance of idempotency and schema governance to maintain data quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
