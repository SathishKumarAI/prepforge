---
qid: ing_8108a34950__faang__local
question: 'Explain: How CDC Works — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 500
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:02-05:00'
sources: []
---

**Clarify**  
*Problem*: Describe how a **Change Data Capture (CDC)** system captures and propagates data changes from a source database to downstream consumers (e.g., analytics, caches).  
*Assumptions to confirm*:  
1. Source DB is relational with WAL/redo logs or triggers.  
2. Latency tolerance is low‑millisecond.  
3. We need durability, fault tolerance, and eventual consistency.

**Approach**  
1. **Capture**: read changes from the source (log‑based vs trigger‑based).  
2. **Normalize & serialize**: convert raw log entries into a unified event format (JSON/Avro).  
3. **Transport**: publish to a distributed log (Kafka, Pulsar) or message queue.  
4. **Consume & apply**: downstream services subscribe, deserialize, and write to target systems.

**Depth**  
- *Log‑based CDC* reads the database’s transaction log (e.g., PostgreSQL WAL). It streams changes as they commit, preserving order and atomicity.  
- *Trigger‑based CDC* writes change rows into a “change table” via triggers; less efficient but works when logs aren’t exposed.  
- Use **offsets** to checkpoint progress; store them in a compact, durable store (Kafka offsets or Zookeeper).  
- Ensure idempotence: encode transaction IDs so consumers can replay safely after failures.  
- Handle schema evolution with versioned schemas and backward‑compatible serialization.

**Edge Cases**  
- Schema changes mid‑stream → need schema registry and migration logic.  
- Large bulk loads or rollbacks → capture BEGIN/COMMIT markers to maintain consistency.  
- Network partitions → consumer retries, idempotent writes, eventual replay from stored offsets.

**Optimize & Communicate**  
- Batch log reads for throughput; use compression (Snappy/Zstd) on the wire.  
- Parallelize consumers across partitions for horizontal scaling.  
- Monitor lag metrics and set alerts to detect bottlenecks early.  
- Explain trade‑offs: log‑based offers lower latency but requires DB support; trigger‑based is simpler but can cause write amplification.

By structuring CDC this way, we satisfy low‑latency, durability, and scalability—key for a FAANG‑grade data pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
