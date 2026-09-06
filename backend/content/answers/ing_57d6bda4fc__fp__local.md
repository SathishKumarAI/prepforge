---
qid: ing_57d6bda4fc__fp__local
question: 'Explain: Debezium and Kafka Example — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 437
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:06-05:00'
sources: []
---

**Why we need a CDC system**

In any data‑centric service, the *source of truth* lives in a relational or document store.  
When downstream services (analytics, search indexes, caches) must stay in sync, naïve polling
creates latency and duplicate work.  
The optimal solution is to observe every state change **once** at the point of mutation,
emit it as an immutable event, and let each consumer decide what to do with it.

**From “what” to “how”:**

1. **Capture** – a *log‑based* reader walks the database’s write‑ahead log (MySQL binlog,
   PostgreSQL WAL).  
   This guarantees we see every committed transaction exactly once, no race conditions,
   and no need for triggers or application‑level instrumentation.

2. **Transform** – Debezium parses the raw log entry into a canonical JSON format
   (`op`, `ts_ms`, `before/after`), preserving schema evolution by emitting *schema*
   events whenever a table changes.

3. **Distribute** – Kafka acts as a fault‑tolerant, horizontally scalable broker.
   Each change is published to a topic that represents the source table; Kafka’s
   immutable log and consumer offsets give every downstream service a consistent replay
   view without coordination.

4. **Consume** – Any consumer (Kafka Streams, Flink, Spark, microservices) can read
   at its own pace, apply business logic, or write back to another system.
   Because the events are idempotent, failures simply mean re‑processing from a stored offset.

**Non‑obvious insight**

The *log‑based capture* is not just about reliability; it turns a relational change into a
first‑class event that already contains both “before” and “after” snapshots.
This duality lets downstream services perform *time‑travel queries* or *audit trails*
without additional joins, turning CDC into a lightweight distributed transaction log.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
