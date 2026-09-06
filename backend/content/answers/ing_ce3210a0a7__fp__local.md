---
qid: ing_ce3210a0a7__fp__local
question: 'Explain: Embedded connectors — Database Streaming with ksqlDB | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 412
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:02-05:00'
sources: []
---

**Embedded connectors in ksqlDB – the “Database‑to‑Stream” bridge**

The core problem is *continuous integration of relational data into a real‑time stream*.  
A database emits a finite set of rows; a stream, by definition, is an unbounded sequence that can be queried with SQL‑like semantics. To reconcile these two worlds we need a mechanism that:

1. **Observes** every write (INSERT/UPDATE/DELETE) in the source tables.
2. **Transforms** those changes into *events* that ksqlDB’s stream engine can ingest.
3. **Guarantees** exactly‑once delivery and preserves order across partitions.

An embedded connector solves this by running inside the same JVM as ksqlDB, eliminating network hops and thus reducing latency. It registers a *source task* that reads the database’s change‑data capture (CDC) log (e.g., Debezium on MySQL). The task materializes each CDC record into a key/value pair where the key is derived from the primary key, and the value is a JSON representation of the row state. These pairs are pushed to a Kafka topic that ksqlDB consumes as a stream.

The deeper principle here is **information flow conservation**: every change in the source must be reflected once and only once downstream. The embedded connector enforces this by using the same transaction log for both read and write, thereby avoiding double‑reading or missing records.  

A non‑obvious insight: because the connector runs inside ksqlDB, it can *reuse* the stream’s own partitioning logic to route events directly into the correct Kafka partitions, eliminating an extra shuffling step that would otherwise be necessary if the connector were external. This tight coupling yields lower latency and simplifies schema evolution, as the connector can automatically adapt to changes in the source table without redeploying a separate service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
